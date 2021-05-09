// import react from "react"
import React, { DragEventHandler, useState } from 'react';
import styled from 'styled-components';

interface CardInfo {
	id: number;
	creator: string;
	board: string;
	description: string;
	assignedTo: string;
	lastWorkedOnBy: null;
}

const dummy: {
	boards: {
		boardName: string;
		items: CardInfo[];
	}[];
}[] = [
	{
		boards: [
			{
				boardName: 'queue',
				items: [
					{
						id: 6,
						creator: 'admin',
						board: 'queue',
						description: 'create button',
						assignedTo: '9312112',
						lastWorkedOnBy: null,
					},
					{
						id: 8,
						creator: 'admin',
						board: 'queue',
						description: 'create button',
						assignedTo: '2312112',
						lastWorkedOnBy: null,
					},
					{
						id: 9,
						creator: 'admin',
						board: 'queue',
						description: 'create button',
						assignedTo: '7312112',
						lastWorkedOnBy: null,
					},
				],
			},
			{
				boardName: 'finished',
				items: [
					{
						id: 1,
						creator: 'admin',
						board: 'queue',
						description: 'create button',
						assignedTo: '712112',
						lastWorkedOnBy: null,
					},
					{
						id: 2,
						creator: 'admin',
						board: 'queue',
						description: 'create button',
						assignedTo: '2112',
						lastWorkedOnBy: null,
					},
					{
						id: 3,
						creator: 'admin',
						board: 'queue',
						description: 'create button',
						assignedTo: '312112',
						lastWorkedOnBy: null,
					},
				],
			},
		],
	},
];

// const onDragLeave = (e:) => {
// 	const element = e.currentTarget;
// 	element.style.backgroundColor = 'white';
// };

// const onDrop = (e) => {
// 	const insertAfter = (newNode, referenceNode) => {
// 		referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
// 	};
// 	const dropZone = e.currentTarget;
// 	dropZone.style.backgroundColor = 'white';
// 	const id = e.dataTransfer.getData('text');
// 	const draggableElement = document.getElementById(id);
// 	insertAfter(draggableElement.parentNode, dropZone.parentNode);
// 	e.dataTransfer.clearData();
// };
// const onDropLeft = (e) => {
// 	const insertBefore = (newNode, referenceNode) => {
// 		referenceNode.parentNode.insertBefore(newNode, referenceNode);
// 	};
// 	const dropZone = e.currentTarget;
// 	dropZone.style.backgroundColor = 'white';
// 	const id = e.dataTransfer.getData('text');
// 	const draggableElement = document.getElementById(id);
// 	insertBefore(draggableElement.parentNode, dropZone.parentNode);
// 	e.dataTransfer.clearData();
// };
// const onDragStart = (e) => {
// 	const element = e.currentTarget;
// 	e.dataTransfer.setData('text', e.target.id);
// };
const dash = () => {
	const [card, setcard] = useState<CardInfo | null>();

	const onDragOver = (e: React.DragEvent) => {
		e.preventDefault();
		console.log('rege, hoverr');
		// console.log('sxa', e.dataTransfer.getData('aad'));
	};
	const ondragstart = (e: any, cardInfo: CardInfo) => {
		const element = e.currentTarget;
		// element.style.backgroundColor = 'purple';
		setcard(cardInfo);
		console.log('info', cardInfo, 'carddddddd');
		console.log(card, 'carddddddd');
		setTimeout(() => {
			e.target.style.display = 'none';
		}, 0);
		console.log("after style changed")
	};
	const onDropp = (e: React.DragEvent|any, list: any) => {
		// console.log('drop', e.currentTarget);
		list.items.push(card);
		// console.log('drop e', list, card);
		setTimeout(() => {
			e.target.style.display = 'block';
		}, 0);
		console.log("styled drop", e.target.style.display )
	};
	const dragEnter = (e: React.DragEvent) => {
		console.log(e, 'drag enter');
	};
	const outOfBoundsDrops = ()=>{

	}

	return (
		<Container>
			{dummy[0].boards.map((d) => (
				<BoardContain
					onDragEnter={(e) => dragEnter(e)}
					onDrop={(event) => onDropp(event, d)}
					onDragOver={onDragOver}
				>
					<h1>{d.boardName}</h1>
					{d.items.map((card) => (
						<MoveableBlock
							onDragStart={(e) => ondragstart(e, card)}
							BGcolor={'lightgray'}
							draggable="true"
						>
							<p>{card.assignedTo}</p>
							<p>{card.description}</p>
						</MoveableBlock>
					))}
				</BoardContain>
			))}
		</Container>
	);
};

export default dash;

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 300px);
	width: 100vw;
	min-height: 100vh;
	background-color: #ffd5c4;
	box-sizing: border-box;
	h1 {
		text-align: center;
	}
`;
interface BoardContainProps {
	onDragOver?: DragEventHandler<HTMLDivElement> | undefined;
}
const BoardContain = styled.div<BoardContainProps>`
	width: 300px;
	min-height: 100vh;
	background-color: lightblue;
	border: 1px solid white;
`;
interface MoveableBlockProps {
	BGcolor?: any;
	onDrop?: React.DragEventHandler<HTMLDivElement> | undefined;
}
const MoveableBlock = styled.div<MoveableBlockProps>`
	width: 80%;
	padding: 5px;
	margin: 15px 0px;
	margin: auto;
	height: 150px;
	background-color: ${(props) => (props.BGcolor ? props.BGcolor : 'lightblue')};
`;
