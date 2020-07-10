type Board = {
    getComponent(): HTMLDivElement,
}

export function getBoard(): Promise<Board> {
    return import(
        /* webpackChunkName: "board" */
        './BoardImpl').then((board) => {
			board.init()
			return board
		})
}

export default getBoard;

