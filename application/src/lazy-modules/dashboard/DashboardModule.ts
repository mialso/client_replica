import {DashboardRequiredServices} from './DashboardInjector';

type Dashboard = {
    getComponent(): HTMLDivElement,
    getSmth(): string,
}

export function getDashboard<T extends DashboardRequiredServices>(_: T): Promise<Dashboard> {
    return import(
        /* webpackChunkName: "dashboard" */
        './DashboardImpl').then((dashboard) => {
			dashboard.init()
			return dashboard
		})
}

export default getDashboard;
