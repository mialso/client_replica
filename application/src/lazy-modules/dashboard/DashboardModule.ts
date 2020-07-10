type Dashboard = {
    getComponent(): HTMLDivElement,
    getSmth(): string,
}

export function getDashboard(): Promise<Dashboard> {
    return import(
        /* webpackChunkName: "dashboard" */
        './DashboardImpl').then((dashboard) => {
			dashboard.init()
			return dashboard
		})
}

export default getDashboard;
