// "use client"
// import React, { useState, useRef, useEffect } from 'react';
import OfferCards from './offerCards';
import PopularHotelCards from './popularHotelCards';
import ExploreMoreCards from './exploreMoreCards';
import { Suspense } from 'react';


const url = "https://6702c722bd7c8c1ccd3fd138.mockapi.io/popular_hotels"

const fetchCardsData = async () => {
  try {
    let response = await fetch(url)
    response = await response.json()
    return response
  } catch (error) {
      console.error(error);
  }
}

const CardSlider = async () => {
  
  const cards = await fetchCardsData(); 

  return (
    <div>
      <OfferCards />
      <PopularHotelCards cards={cards}/>
      <ExploreMoreCards cards={cards}/>
  </div>
  );
};

export default CardSlider;