import Column from '../Column/Column';
import { COLUMNS } from './Collumn_data';

import styles from './CanbanTable.module.scss'

import Card from '../Card/Card';
import useDnD from '../hooks/useDnD';

function CanbanTable() {

	const [
		collumns, dragOver, onDragStart, onDragEnter,
		onDragLeave, onDragEnd, onDragOver, onSinkDrop, onColDrop,
  ] = useDnD(COLUMNS);

	return (
		<div className={styles.table}>
		 {collumns.map((col, colIndex) => (
        <Column
					key={colIndex}
					name={col.name}
					id={col.id}
          onDragOver={onDragOver}
          onDrop={onColDrop(colIndex)}
        >
          {col.cards.map((card, cardIndex) => (
            <>
              {colIndex === dragOver.colIndex &&
                cardIndex === dragOver.cardIndex && (
                  <div
										id='drag-sink'
                    key="drag-sink"
                    className={styles.dragsink}
                    onDragLeave={onDragLeave}
                    onDrop={onSinkDrop(colIndex, cardIndex)}
                  ></div>
                )}
              <Card
                key={cardIndex}
                id={card.id}
                onDragStart={onDragStart(colIndex, cardIndex, card)}
                onDragEnter={onDragEnter(colIndex, cardIndex)}
                onDrop={(evt) => {
                  evt.stopPropagation();
                  evt.preventDefault();
                }}
                onDragEnd={onDragEnd}
              />
            </>
          ))}
        </Column>
      ))}
		</div>
	);
}

export {CanbanTable};