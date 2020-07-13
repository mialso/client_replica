import {BoardRequiredServices} from './BoardInjector'

type Board = {
    getComponent(): HTMLDivElement,
}

export function getBoard(services: BoardRequiredServices): Promise<Board> {
    return import(
        /* webpackChunkName: "board" */
        './BoardImpl').then((board) => {
			board.init(services)
			return board
		})
}

export default getBoard;

