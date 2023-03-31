
const card1 = {
	id: 1
}
const card2 = {
	id: 2
}
const card3 = {
	id: 3
}
const card4 = {
	id: 4
}
const card5 = {
	id: 5
}
const card6 = {
	id: 6
}
const card7 = {
	id: 7
}
const card8 = {
	id: 8
}
const card9 = {
	id: 9
}
const card10 = {
	id: 10
}

const Pending_Task = {
	name: "Pending Task",
	id: 1,
	cards: [card1,card10,card8,card6]
}
const Ongoing_Task = {
	name: "Ongoing Task",
	id: 2,
	cards: [card2, card3,card7]
}
const Completed = {
	name: "Completed",
	id: 3,
	cards: [card4]
}
const In_Development = {
	name: "In Development",
	id: 4,
	cards: []
}
const Live_Build = {
	name: "Live Build",
	id: 5,
	cards: [card5,card9]
}



const COLUMNS = [Pending_Task, Ongoing_Task, Completed, In_Development, Live_Build]



export {COLUMNS}