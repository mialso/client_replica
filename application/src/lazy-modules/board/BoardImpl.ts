import Feed from 'lazy-modules/feed/FeedModule'
import {boardServicesMap, boardServicesArr, initBoardServices} from './BoardInjector'

export function init() {
	initBoardServices()
}

export function getComponent() {
  const element = document.createElement('div');

  element.innerHTML = 'board';
  // Feed(boardServicesMap).then((feedModule) => {
  Feed(boardServicesArr).then((feedModule) => {
      const feedButton = feedModule.getFeedButton();
      element.appendChild(feedButton);
  })


  return element;
}

