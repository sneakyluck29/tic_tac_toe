import React, {Component} from "react";
import Square from "./Square"
import '../Sources/app.scss'

class Board extends Component{
    renderSquare(i){
        return <Square value={i}/>;
    }
    render() {
        const status = 'Next player : X';
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    <label>{this.renderSquare(0)}</label>
                    <label>{this.renderSquare(1)}</label>
                    <label>{this.renderSquare(2)}</label>
                </div>
                <div className="board-row">
                    <label>{this.renderSquare(3)}</label>
                    <label>{this.renderSquare(4)}</label>
                    <label>{this.renderSquare(5)}</label>
                </div>
                <div className="board-row">
                    <label>{this.renderSquare(6)}</label>
                    <label>{this.renderSquare(7)}</label>
                    <label>{this.renderSquare(8)}</label>
                </div>
            </div>

        )
    }
}

export default Board;