import {dashRequiredServicesArr} from './DashboardInjector';

type Dashboard = {
    getComponent(): HTMLDivElement,
    getSmth(): string,
}

export function getDashboard<T extends typeof dashRequiredServicesArr>(appServices: T): Promise<Dashboard> {
	if (appServices.length === 0) {
		return Promise.reject(new Error('Dashboard: wrong dependencies'))
	}
    return import(
        /* webpackChunkName: "dashboard" */
        './DashboardImpl').then((dashboard) => {
			dashboard.init()
			return dashboard
		})
}

export default getDashboard;
