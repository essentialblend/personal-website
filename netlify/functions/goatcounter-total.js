// Returns a cached all-time total from GoatCounter, suitable for public display.
exports.handler = async () => {
  const token = process.env.GOATCOUNTER_TOKEN;
  const code = process.env.GOATCOUNTER_CODE || process.env.HUGO_GOATCOUNTER_CODE;
  const apiBase = process.env.GOATCOUNTER_API_BASE;

  if (!token) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ error: "Missing GOATCOUNTER_TOKEN" }),
    };
  }

  const base =
    (apiBase && apiBase.replace(/\/+$/, "")) ||
    (code ? `https://${code}.goatcounter.com/api/v0` : null);

  if (!base) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ error: "Missing GOATCOUNTER_CODE or GOATCOUNTER_API_BASE" }),
    };
  }

  const fetch = (await import("node-fetch")).default;

  const url = new URL(`${base}/stats/total`);
  url.searchParams.set("start", "1970-01-01T00:00:00Z");
  url.searchParams.set("end", new Date().toISOString());

  try {
    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const json = await response.json().catch(() => ({}));
    if (!response.ok) {
      return {
        statusCode: response.status,
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({ error: json.error || "GoatCounter API error" }),
      };
    }

    const total = Number.isFinite(json.total_utc) ? json.total_utc : json.total;
    if (!Number.isFinite(total)) {
      return {
        statusCode: 502,
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({ error: "Unexpected GoatCounter response" }),
      };
    }

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "public, max-age=900",
      },
      body: JSON.stringify({ total, updatedAt: new Date().toISOString() }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ error: error.message || "Unknown error" }),
    };
  }
};
