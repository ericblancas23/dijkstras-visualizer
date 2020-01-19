import React, { Component } from 'react'

export default class Node extends Component {
    render() {
        const {
            col, 
            isFinish,
            isStart,
            isWall,
            onMouseEnter,
            onMouseDown,
            onMouseUp,
            row,
        } = this.props;
        const extraClassName = isFinish
        ? 'node-finsh' : isStart ? 
        'node-start' : isWall ? 'node-wall' : '' ;
        return (
            <div
                id={`node-${row}=${col}`}
                className={`node ${extraClassName}`} 
                onMouseDown={() => onMouseDown(row, col)}
                onMouseEnter={()=> onMouseEnter(col, row)}
                onMouseUp={() => onMouseUp()}
            >
            </div>
        )
    }
}
