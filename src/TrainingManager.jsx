import React from "react";
import Form from "./Form";
import TrainingList from "./TrainingList";

const TrainingManager = () => {
  const [items, setItems] = React.useState([]);

  const onSubmit = (date, distance) => {
    if (items.some((item) => item.date === date)) {
      const newItems = items.map((item) => {
        if (item.date === date) {
          return { ...item, distance: +item.distance + +distance };
        }
        return item;
      });
      setItems(newItems);
    } else {
      setItems((prev) => [...prev, { id: Date.now(), date, distance }]);
    }
  };

  const onDelete = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <Form onSubmit={onSubmit} />
      {items.length > 0 && <TrainingList items={items} onDelete={onDelete} />}
    </>
  );
};

export default TrainingManager;
