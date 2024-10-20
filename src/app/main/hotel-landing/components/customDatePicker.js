// components/CustomDatePicker.js

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from './styles/customDatePicker.module.css'; // We will add custom styles later
import { CiCalendar } from "react-icons/ci";

const CustomDatePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
      <div className={styles.dateInputContainer}>
        <div>
            <p className={styles.label}>Start Date</p>
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                placeholderText="Start Date"
                monthsShown={1} // Show two months in the dropdown
                className={styles.dateInput}
                showIcon
                icon={<CiCalendar className={styles.calendarIcon}/>}
            />
        </div>
        <div>
            <p className={styles.label}>End Date</p>
            <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                placeholderText="End Date"
                monthsShown={1} // Show two months in the dropdown
                className={styles.dateInput}
                showIcon
                icon={<CiCalendar className={styles.calendarIcon}/>}
            />
        </div>
      </div>
  );
};

export default CustomDatePicker;