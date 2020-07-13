import {initDashboardServices, DashboardRequiredServices, DashboardServices} from 'lazy-modules/dashboard/DashboardInjector'
import Feed from 'lazy-modules/feed/FeedModule'

let dashboardServices: DashboardServices
export function init(services: DashboardRequiredServices): void {
	dashboardServices = initDashboardServices(services)
}

export function getSmth() {
    return 'smth';
}

export function getComponent() {
  const element = document.createElement('div');

  element.innerHTML = 'dashboard component';
  Feed(dashboardServices).then((feedModule) => {
      const feedButton = feedModule.getFeedButton();
      element.appendChild(feedButton);
  })


  return element;
}
