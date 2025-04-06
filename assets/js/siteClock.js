function updateClock() 
{
  const el = document.getElementById("site-clock");
  if (!el) return;

  const now = new Date();

  // Format to Siddharth's local time
  const options = 
  {
    weekday: undefined,
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short"
  };

  const siddharthTime = now.toLocaleString("en-GB", 
  {
    ...options,
    timeZone: "Europe/London"
  });

  const userTime = now.toLocaleString("en-GB", options);

  el.textContent = siddharthTime.replace(",", " ·");
  el.title = `Siddharth's local time.\nYour time: ${userTime.replace(",", " ·")}`;
}

updateClock();
setInterval(updateClock, 30000);
