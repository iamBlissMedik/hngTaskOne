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
  currentDayOfTheWeek.textContent = `${dayOfWeek}`;

  // Current UTC Time
  const currentUTCTimeInMilliseconds = new Date().getTime();
  currentUTCTime.textContent = currentUTCTimeInMilliseconds;
};

document.addEventListener("DOMContentLoaded", loadApp);
