import React from "react";

const Form = ({ onSubmit }) => {
  const [date, setDate] = React.useState("");
  const [distance, setDistance] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(date, distance);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="date">Дата</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="distance">Дистанция км</label>
        <input
          type="number"
          step="0.01"
          id="distance"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="submit">
        ОК
      </button>
    </form>
  );
};

export default Form;
