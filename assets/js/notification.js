/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const body = document.querySelector("body");

const fireNotification = (text, color) => {
  const notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notification.className = "notification";
  body.appendChild(notification);
};

export const handleNewUser = ({ nickname }) => {
  fireNotification(`${nickname} Just joined!`, "rgb(0,122,255)");
};

export const handleDisconnected = ({ nickname }) => {
  fireNotification(`${nickname} Just left!`, "rgb(255,149,0)");
};
