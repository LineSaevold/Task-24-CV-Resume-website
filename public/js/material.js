const drawer = mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(document.getElementById('app-bar'));
const mainContent = document.querySelector('.main-content');

topAppBar.setScrollTarget(mainContent);
topAppBar.listen('MDCTopAppBar:nav', () => {
    if (drawer.open == false) {
        drawer.open = true;
    } else {
        drawer.open = false;
    }
});