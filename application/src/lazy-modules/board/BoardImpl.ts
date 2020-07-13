import {initBoardServices, BoardRequiredServices, BoardServices} from './BoardInjector'
import Feed from 'lazy-modules/feed/FeedModule'

let boardServices: BoardServices
export function init(services: BoardRequiredServices): void {
	boardServices = initBoardServices(services)
}

export function getComponent() {
  const element = document.createElement('div');

  element.innerHTML = 'board';
  Feed(boardServices).then((feedModule) => {
      const feedButton = feedModule.getFeedButton();
      element.appendChild(feedButton);
  })

  return element;
}
