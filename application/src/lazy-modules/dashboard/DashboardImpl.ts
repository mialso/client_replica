import {dashServicesArr, initDashboardServices} from 'lazy-modules/dashboard/DashboardInjector'
import Feed from 'lazy-modules/feed/FeedModule'

export function init() {
	initDashboardServices()
}

export function getSmth() {
    return 'smth';
}

export function getComponent() {
  const element = document.createElement('div');

  element.innerHTML = 'dashboard component';
  Feed(dashServicesArr).then((feedModule) => {
      const feedButton = feedModule.getFeedButton();
      element.appendChild(feedButton);
  })


  return element;
}
