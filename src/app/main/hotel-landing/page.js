"use client"
import { useEffect,useState } from 'react';
import styles from './styles/hotelLanding.module.css';
import { IoShareSocialOutline } from "react-icons/io5";
import { FaWifi,FaTv } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { BiBath } from "react-icons/bi";
import { ImSpoonKnife } from "react-icons/im";
import { RxEnter,RxExit,RxInfoCircled   } from "react-icons/rx";
import { RiUser3Line } from "react-icons/ri";
import { MdOutlinePayments,MdOutlineRoomService  } from "react-icons/md";
import MainSection from './components/mainSection';
import SideSection from './components/sideSection';


async function fetchHotelData() {
    let hotelData = {
        id: 1,
        name: 'Hilton London',
        address: 'London, UK',
        description: 'Hilton London is a 5-star hotel with 1500 rooms, 400 suites and 300 villas. The hotel is located in London, and is conveniently located near the city centre.',
        images: {
            mainImage: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            sideImages: [
                'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                'https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            ]
        },
        recommendedHotelData: [
            {
                id: 1,
                name: 'Hilton London',
                address: 'London, UK',
                img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
                price: 200,
                rating: 4.0
            },
            {
                id: 2,
                name: 'Hilton London',
                address: 'London, UK',
                img: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21',
                price: 300,
                rating: 4.5
            },
            {
                id: 3,
                name: 'Hilton London',
                address: 'London, UK',
                img: 'https://images.unsplash.com/photo-1560347876-aeef00ee58a1',
                price: 400,
                rating: 3.5
            },
            // {
            //     id: 4,
            //     name: 'Hilton London',
            //     address: 'London, UK',
            //     img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
            //     price: 500,
            //     rating: 4.0
            // },
            // {
            //     id: 5,
            //     name: 'Hilton London',
            //     address: 'London, UK',
            //     img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
            //     price: 600,
            //     rating: 4.5
            // }
        ]
    }
    return hotelData
}

const HotelLanding = () => {

    const [hotelData, setHotelData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            let response = await fetchHotelData();
            console.log("hotel data response " + response);
            setHotelData(response);
        }   
        fetchData(); 
    },[])

    // Ensure hotelData is loaded before rendering
    if (!hotelData || !hotelData.images) {
        return (
        <div className={styles.loaderContainer}>
            <div className={styles.loader}></div>
        </div>)
    }

    return (
        <div className={styles.container}>
            <MainSection hotelData={hotelData}/>
            <SideSection />
        </div>
    )
}

export default HotelLanding;