
const initial_board = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]

export default function GameBoard(){

    return(
        <ol id="game-board">
            {initial_board.map((row,rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((col,colIndex) => <li key={colIndex}>
                        <button>o</button>
                    </li>)}
                </ol>
            </li> )}
        </ol>
    )
}