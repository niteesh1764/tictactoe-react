
const INITIAL_BOARD = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]

export default function GameBoard(){
    let initial_board = INITIAL_BOARD;
    return(
        <ol id="game-board">
            {initial_board.map((row,rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((col,colIndex) => <li key={colIndex}>
                        <button></button>
                    </li>)}
                </ol>
            </li> )}
        </ol>
    )
}