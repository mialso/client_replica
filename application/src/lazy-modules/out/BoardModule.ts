// import {resolve} from "general/resolver";

type Board = {
    init(): void
    getComponent(): HTMLDivElement,
}

/*
export function getBoard(): Promise<Board> {
    return resolve<Board>('board').then(
        (board) => {
            board.init()
            return board
        }
    )
}
 */

export function getBoard(): Promise<Board> {
    return import(
        /* webpackChunkName: "board" */
        '../board/BoardImpl'
        ).then((board) => {
            board.init()
            return board
        })
}

export default getBoard;