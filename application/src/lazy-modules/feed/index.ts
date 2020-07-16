import UserService from 'general/services/user';
import MentionService from "application/dashboard/services/MentionService";

export function getFeedButton() {
  const element = document.createElement('button');

  const userName = UserService().getUserName();
  //const userSurname = UserService().getUserSurname();
  element.innerHTML = `feed button: ${userName}`;


  // Mention service should be initailized WHERE???
  element.onclick = MentionService().mentionMe;

  return element;
}
