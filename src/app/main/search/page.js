"use client"
import { useState, useEffect } from 'react';
import styles from './styles/SearchPage.module.css';
import { IoIosStar } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { useSearchParams } from 'next/navigation'
import TopSearchBar from './components/topSearchBar';

const SearchPage = () => {

  const searchParams = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);

  const refreshSearchResults = (results) => {
    setSearchResults(results);
  }

  const goToDetails = (id) => {
      window.location.href = `/main/hotel-landing`;
  };

  return (
    <div className={styles.container}>

      <TopSearchBar searchParams={searchParams} refreshSearchResults={refreshSearchResults}/>

      {searchResults.length === 0 ? 
        
        <div className={styles.loaderContainer}>
            <div className={styles.loader}></div>
        </div> :
        <>
           <div className={styles.searchHeadingContainer}>
              <h2>Search Results</h2>
              <h3>{searchResults.length} Records found</h3>
            </div>

            <div className={styles.searchResultContainer}>
                {searchResults.map((result) => (
                  <div key={result.id} className={styles.searchResultCard} onClick={goToDetails}>
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
                        <p className={styles.searchResultPrice}>₹{result.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
        </>}
    </div>
  );
}

export default SearchPage;