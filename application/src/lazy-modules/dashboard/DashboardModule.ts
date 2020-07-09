type Dashboard = {
    getComponent(): HTMLDivElement,
    getSmth(): string,
}

export function getDashboard(): Promise<Dashboard> {
    return import(
        /* webpackChunkName: "dashboard" */
        './DashboardImpl')
}

export default getDashboard;
