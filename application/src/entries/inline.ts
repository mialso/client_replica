import DashboardModule from 'lazy-modules/out/DashboardModule';
import BoardModule from 'lazy-modules/out/BoardModule';
import {initRequiredServices} from 'application/commons/AppRequiredServices';

initRequiredServices()

DashboardModule().then((dashboardModule) => {
    const component = dashboardModule.getComponent();
    document.body.appendChild(component);
})

BoardModule().then((board) => {
    const component = board.getComponent();
    document.body.appendChild(component);
});
