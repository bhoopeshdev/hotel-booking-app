"use client"
import Link from 'next/link';
import styles from './styles/SearchBar.module.css';
import React, { useState } from 'react';

const SearchBar = () => {
    const [location, setLocation] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [guests, setGuests] = useState(1);

    return (
    <div className={styles.searchContainer}>
      <form className={styles.searchBar}>
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
            <input
              type="date"
              id="start-date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <div className={styles.searchField}>
            <label htmlFor="end-date">End Date</label>
            <input
              type="date"
              id="end-date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
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
            placeholder="Guests"
          />
        </div>
        <Link  className={styles.searchButton}
          href={{
            pathname: '/main/search',
            query: {
              location,
              startDate,
              endDate,
              guests
            }
          }}>
            Search
        </Link>
      </form>
    </div>
    )
}

export default SearchBar;