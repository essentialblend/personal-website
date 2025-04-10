function updateClock() 
{
  const siteClockElement = document.getElementById("site-clock");
  if (!siteClockElement) return;

  const now = new Date();

  // Format to user local time
  const options = 
  {
    weekday: undefined,
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short"
  };

  const serverUserTime = now.toLocaleString("en-GB", 
  {
    ...options,
    timeZone: "Europe/London"
  });

  const clientTime = now.toLocaleString("en-GB", options);

  siteClockElement.textContent = serverUserTime.replace(",", " ·");
  siteClockElement.title = `Siddharth's local time.\nYour time: ${clientTime.replace(",", " ·")}`;
}

updateClock();
setInterval(updateClock, 30000);
