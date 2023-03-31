import styles from './Column.module.scss'
// [`.color-${id}`]

function Column({ name, id, children, onDragOver, onDrop }) {
	return(
		<div className={styles.column }>
		<p className={styles.colTitle + ' ' + styles['colTitle_color' + id]}>{name}</p>
			<div
				className={styles.colbody} 
				onDragOver={onDragOver}
				onDrop={onDrop}
			>
				{children}
			</div>
			{/* <AddTaskButton/> */}
		</div>
	)
}

export default Column;