const loadApp = () => {
  const slackUserName = document.querySelector('[data-textid="slackUserName"]');
  const currentDayOfTheWeek = document.querySelector(
    '[data-textid="currentDayOfTheWeek"]'
  );
  const currentUTCTime = document.querySelector(
    '[data-textid="currentUTCTime"]'
  );

  //  Slack Name
  slackUserName.textContent = "Blizz";

  //  Current Day of the Week
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
  currentDayOfTheWeek.textContent = dayOfWeek;

  // Current UTC Time
  const options = { timeZone: "UTC" };
  currentUTCTime.textContent = currentDate.toLocaleTimeString(
    undefined,
    options
  );
};

setInterval(loadApp, 1000);
