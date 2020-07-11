import {BoardRequiredServices} from 'lazy-modules/board/BoardInjector'

type Board = {
    getComponent(): HTMLDivElement,
}

export function getBoard<T extends BoardRequiredServices>(_: T): Promise<Board> {
    return import(
        /* webpackChunkName: "board" */
        './BoardImpl').then((board) => {
			board.init()
			return board
		})
}

export default getBoard;

