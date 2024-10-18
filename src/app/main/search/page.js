"use client"
import { useState, useEffect } from 'react';
import styles from './styles/SearchPage.module.css';
import axios from 'axios';
import { IoIosStar } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { useSearchParams } from 'next/navigation'

const SearchPage = () => {

  const [searchResults, setSearchResults] = useState([]);
  const url = "https://6702c722bd7c8c1ccd3fd138.mockapi.io/list";
  const searchParams = useSearchParams();

  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [guests, setGuests] = useState(1);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      console.log(response.data);
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {

    const location = searchParams.get('location');
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    const guests = searchParams.get('guests');
    setLocation(location);
    setStartDate(startDate);
    setEndDate(endDate);
    setGuests(guests);

    fetchData();
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchResults([]);
    fetchData();
  };

  return (
    <div className={styles.container}>
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

          <button type="submit" className={styles.searchButton} onClick={handleSubmit}>
              Search 
          </button>
      </form>
      <div className={styles.searchHeadingContainer}>
        <h2>Search Results</h2>
        <h3>{searchResults.length} Records found</h3>
      </div>
      <div className={styles.searchResultContainer}>
          {searchResults.map((result) => (
            <div key={result.id} className={styles.searchResultCard}>
              <img
                src={result.imageUrl}
                alt={result.name}
                className={styles.searchResultImage}
              />
              <div className={styles.searchResultDetails}>
                <div className={styles.searchResultDetailsLeft}>
                  <h3>{result.name}</h3>
                  <p className={styles.searchResultText}><FaLocationDot/> {result.location}</p>
                  <p className={styles.searchResultText}>{result.address}</p>
                </div>
                <div className={styles.searchResultDetailsRight}>
                  <p className={styles.hotelRatingBar}>{result.rating}<IoIosStar/></p>
                  <p className={styles.searchResultText}>from</p>
                  <p className={styles.searchResultPrice}>${result.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}

export default SearchPage;