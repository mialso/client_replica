import {initBoardServices} from 'lazy-modules/board/BoardInjector'
import Feed from 'lazy-modules/FeedModule'

export function init() {
	initBoardServices()
}

export function getComponent() {
  const element = document.createElement('div');

  element.innerHTML = 'board';
  Feed().then((feedModule) => {
      const feedButton = feedModule.getFeedButton();
      element.appendChild(feedButton);
  })

  return element;
}

