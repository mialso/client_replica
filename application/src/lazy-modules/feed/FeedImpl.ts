import { getUserName } from 'general/services/UserService';
import { mentionMe } from 'application/dashboard/services/MentionService';

export function getFeedButton() {
  const element = document.createElement('button');

  const userName = getUserName();
  element.innerHTML = `feed button: ${userName}`;
  element.onclick = mentionMe;

  return element;
}
