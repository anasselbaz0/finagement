export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
export const DAEMON = '@@saga-injector/daemon';
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';

export const MASTHEAD_HEIGHT = 7; // unit: vh
export const SIDEBAR_WIDTH = 15;



export const mastheadHeight = () => {
    return `${MASTHEAD_HEIGHT}vh`;
}
export const contentHeight = () => {
    return `${100 - MASTHEAD_HEIGHT}vh`;
}
export const sidebarWidth = () => {
    return `${SIDEBAR_WIDTH}rem`;
}
