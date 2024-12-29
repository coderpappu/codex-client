import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const MainCalender = () => {
  const [value, onChange] = useState(null);
  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default MainCalender;
