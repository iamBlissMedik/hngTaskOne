const loadApp = () => {
  const slackUserName = document.querySelector('[data-testid="slackUserName"]');
  const currentDayOfTheWeek = document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  );
  const currentUTCTime = document.querySelector(
    '[data-testid="currentUTCTime"]'
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
  currentDayOfTheWeek.textContent = `${dayOfWeek}`;

  // Current UTC Time
  const currentUTCTimeInMilliseconds = currentDate.getTime();
  currentUTCTime.textContent = currentUTCTimeInMilliseconds;
};

setInterval(loadApp, 1000);
