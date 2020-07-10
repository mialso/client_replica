import {dashServicesMap, dashServicesArr, initDashboardServices} from 'lazy-modules/dashboard/DasboardInjector'
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
  // Feed(dashServicesMap).then((feedModule) => {
  Feed(dashServicesArr).then((feedModule) => {
      const feedButton = feedModule.getFeedButton();
      element.appendChild(feedButton);
  })


  return element;
}
