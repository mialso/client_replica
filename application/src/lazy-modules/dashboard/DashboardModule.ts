import {DashboardRequiredServices} from './DashboardInjector'

type Dashboard = {
    getComponent(): HTMLDivElement,
    getSmth(): string,
}

export function getDashboard(services: DashboardRequiredServices): Promise<Dashboard> {
    return import(
        /* webpackChunkName: "dashboard" */
        './DashboardImpl').then((dashboard) => {
			dashboard.init(services)
			return dashboard
		})
}

export default getDashboard;
