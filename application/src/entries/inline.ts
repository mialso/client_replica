import DashboardModule from 'lazy-modules/dashboard/DashboardModule';
import BoardModule from 'lazy-modules/board/BoardModule';
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
