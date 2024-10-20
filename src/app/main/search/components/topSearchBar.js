"use client"
import { useState, useEffect } from 'react';
import styles from './styles/topSearchBar.module.css';
import DatePicker from 'react-datepicker';
import { CiCalendar } from "react-icons/ci";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

const url = "https://6702c722bd7c8c1ccd3fd138.mockapi.io/list";

const TopSearchBar = (data) => {

    const [location, setLocation] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [guests, setGuests] = useState(1);

    useEffect(() => {
        
        const location = data.searchParams.get('location');
        const startDate = data.searchParams.get('startDate');
        const endDate = data.searchParams.get('endDate');
        const guests = data.searchParams.get('guests');
        setLocation(location);
        setStartDate(startDate);
        setEndDate(endDate);
        setGuests(guests);

        const fetchData = async() => {
            try {
                let response = await axios.get(url);
                response = await response.data;
                data.refreshSearchResults(response);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    },[]);

    const getSearchResults = () => {
        const fetchData = async() => {
            try {
                let response = await axios.get(url);
                response = await response.data;
                data.refreshSearchResults(response);
            } catch (error) {
                console.error(error);
            }
        }
        data.refreshSearchResults([]);
        fetchData();
    }
   
    return (
        <div className={styles.searchBar}>
            <div className={styles.searchField}>
            <label htmlFor="location">Location</label>
            <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter location"
            />
            </div>
            <div className={styles.dateSection}>
            <div className={styles.searchField}>
                <label htmlFor="start-date">Start Date</label>
            
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
                    minDate={new Date()}
                />
                
            </div>

            <div className={styles.searchField}>
                <label htmlFor="end-date">End Date</label>
                <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    placeholderText="End Date"
                    monthsShown={1} // Show two months in the dropdown
                    className={styles.dateInput}
                    showIcon
                    icon={<CiCalendar className={styles.calendarIcon}/>}
                    minDate={new Date()}
                />
            </div>
            </div>

            <div className={styles.searchField}>
            <label htmlFor="guests">Guests</label>
            <input
                type="number"
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                min="1"
                max="5"
                placeholder="Guests"
            />
            </div>

            <button className={styles.searchButton} onClick={getSearchResults}>
                Search 
            </button>
        </div>
    );
};

export default TopSearchBar