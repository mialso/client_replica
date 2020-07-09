type Board = {
    getComponent(): HTMLDivElement,
}

export function getBoard(): Promise<Board> {
    return import(
        /* webpackChunkName: "board" */
        './BoardImpl')
}

export default getBoard;

