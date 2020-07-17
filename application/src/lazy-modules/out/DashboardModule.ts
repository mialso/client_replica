// import {resolve} from "general/resolver";

type Dashboard = {
    init(): void
    getComponent(): HTMLDivElement,
    getSmth(): string,
}

/*
export function getDashboard(): Promise<Dashboard> {
    return resolve<Dashboard>('dashboard').then(
        (dashboard) => {
            dashboard.init()
            return dashboard
        }
    )
}
*/

export function getDashboard(): Promise<Dashboard> {
    return import(
        /* webpackChunkName: "dashboard" */
        '../dashboard/DashboardImpl'
        ).then((dashboard) => {
            dashboard.init()
            return dashboard
    })
}

export default getDashboard;
