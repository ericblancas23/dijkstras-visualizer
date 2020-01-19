import React, { Component } from 'react'
import { dijkstra } from '../Algorithms/dijkstra';

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;

export default class PathFinding extends Component {
    constructor() {
        super(); 
        this.state = {
            mouseIsPressed: false,
        }
    }

    componentDidMount() {
         //getInitialGrid func;
        //setState
    }

    handleMouseDown(row, col) {

    }

    handleMouseEnter(row, col) {

    }

    handleMouseUp() {
        this.setState({ mouseIsPressed: false })
    }

    animateDijkstra(visitedNodeInOrder, nodesInShortestPathOrder) {
        for(let i = 0; i < visitedNodeInOrder.length; i++) {
            if(i === visitedNodeInOrder.length) {
                setTimeout(() => {
                    this.animateDijkstra(nodesInShortestPathOrder);
                }, 10 * i);
                return;
            }
            setTimeout(() => {
                const node = visitedNodeInOrder[i];
                document.getElementById(`node-${node.row}-${node.col}`).className = 
                    'node node-visited';
            }, 10 * i)
        }
    }

    animateShortestPath(nodesInShortestPathOrder) {
        for(let i = 0; i < nodesInShortestPathOrder.length; i++) {
            setTimeout(() => {
                const node = nodesInShortestPathOrder[i];
                document.getElementById(`node-${node.row}-${node.col}`).className = 
                    'node node-shortest-path';
            }, 50 * i);
        }
    }

    visualizeDijkstra() {
        const {grid} = this.state;
        const startNode = grid[START_NODE_ROW][START_NODE_COL];
        const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
        const visitedNodeInOrder = dijkstra(grid, startNode, finishNode);
        const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
        this.animateDijkstra(visitedNodeInOrder, nodesInShortestPathOrder);
    }

    render() {
        return (
            <div>
                {/*View for path finding*/}        
            </div>
        )
    }
}
