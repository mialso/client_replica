import {initDashboardServices} from 'lazy-modules/dashboard/DashboardInjector'
import Feed from 'lazy-modules/FeedModule'
import {getFeedButton} from "../feed/FeedImpl";

export function init() {
	initDashboardServices()
}

export function getSmth() {
    return 'smth';
}

export function getComponent() {
  const element = document.createElement('div');

  getFeedButton()
  element.innerHTML = 'dashboard component';
  Feed().then((feedModule) => {
      const feedButton = feedModule.getFeedButton();
      element.appendChild(feedButton);
  })


  return element;
}
