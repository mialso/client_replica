import UserService from 'general/services/user';
import MentionService from 'application/dashboard/services/MentionService';

export function getFeedButton() {
  const element = document.createElement('button');

  const userName = UserService().getUserName();
  element.innerHTML = `feed button: ${userName}`;
  element.onclick = MentionService().mentionMe;

  return element;
}
