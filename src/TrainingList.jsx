import React from "react";

const TrainingList = (props) => {
  const { items, onDelete, onChange } = props;
  window.items = items;

  const formatDate = (date) => {
    const [year, month, day] = date.split("-");
    return `${day}.${month}.${year}`;
  };

  return (
    <>
      <div className="header">
        <span>Дата</span>
        <span>Пройдено км</span>
        <span>Действия</span>
      </div>
      <ul className="list">
        {items.map((item) => (
          <li key={item.id} className="list-item">
            <p>{formatDate(item.date)}</p>
            <p>{item.distance} км</p>
            <button onClick={() => onDelete(item.id)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TrainingList;
