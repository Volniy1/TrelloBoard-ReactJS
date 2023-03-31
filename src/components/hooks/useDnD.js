import { useState } from "react";

function useDnD(init) {
  const [collumns, setCollumn] = useState(init);
  const [dragData, setDragData] = useState({
    colIndex: null, cardIndex: null, card: null,
  });
  const [dragOver, setOverData] = useState({ colIndex: null, cardIndex: null });



  function onDragStart(colIndex, cardIndex, card) {
    return () => {
      setDragData({ colIndex, cardIndex, card });
    };
  }

  function onDragEnter(colIndex, cardIndex) {
    return (evt) => {
      evt.stopPropagation();
      
      setOverData({ colIndex, cardIndex });
    };
  }

  function onDragLeave(evt) {
    evt.stopPropagation();
    setOverData({ colIndex: null, cardIndex: null });
  }

  function onDragOver(evt) {
    evt.preventDefault();
  }


 function onSinkDrop(dropColIndex, dropCardIndex) {
    return (evt) => {
      evt.stopPropagation();

      const { colIndex, cardIndex, card } = dragData;
      const newCollumns = [...collumns];

      newCollumns[colIndex].cards.splice(cardIndex, 1);
     
      let treshold = dropCardIndex;
      if (colIndex === dropColIndex && cardIndex < dropCardIndex) treshold--;
      
      const firstPart = newCollumns[dropColIndex].cards.slice(0, treshold);
      const lastPart = newCollumns[dropColIndex].cards.slice(treshold);
      
      newCollumns[dropColIndex].cards = [...firstPart, card, ...lastPart];
      // let sink = document.getElementById('drag-sink')
      // if (sink) {
      //   console.log('sink true')
      //   newCollumns.remove(sink)
      // }
      setCollumn(newCollumns);
      setDragData({ colIndex: null, cardIndex: null, card: null });
      setOverData({ colIndex: null, cardIndex: null });
    };
  }

  function onColDrop(dropColIndex) {
    return () => {
      const { colIndex, cardIndex, card } = dragData;
      const newCollumns = [...collumns];

      newCollumns[colIndex].cards.splice(cardIndex, 1);
      newCollumns[dropColIndex].cards.push(card);

      setCollumn(newCollumns);
    };
  }
  function onDragEnd() {
    setDragData({ colIndex: null, cardIndex: null, card: null });
    setOverData({ colIndex: null, cardIndex: null });
  }

  return [
   collumns, dragOver, onDragStart, onDragEnter,
   onDragLeave, onDragEnd, onDragOver, onSinkDrop, onColDrop,
  ];
}
export default useDnD;
