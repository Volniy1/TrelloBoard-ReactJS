import styles from "./Card.module.scss"

function Card({id, onDragStart, onDragEnd, onDrop,onDragEnter,onDragLeave}) {
	return(
		<div 
		className={styles.card}
    draggable="true"
		onDragStart={onDragStart}
		onDragEnter={onDragEnter}
		onDragLeave={onDragLeave}
		onDragEnd={onDragEnd}
		onDrop={onDrop}
		>{id}</div>
	)
}

export default Card