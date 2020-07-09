import DashboardModule from 'lazy-modules/dashboard/DashboardModule';
import BoardModule from 'lazy-modules/board/BoardModule';

DashboardModule().then((dashboardModule) => {
    const component = dashboardModule.getComponent();
    document.body.appendChild(component);
})

BoardModule().then((board) => {
    const component = board.getComponent();
    document.body.appendChild(component);
});
