import RestaurantCard from "./RestaurantCard";
import mockData from "../common/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const BodyContainer = () =>{
    const [resList,setresList] = useState([]);
    const [filter,setfilter] = useState(false);
    const[filteredList,setFilteredList] = useState([]);


    const [searchText, setSearchText] = useState("");


    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () =>{
        // API call to fetch data
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7041&lng=77.1025&page_type=DESKTOP_WEB_LISTING");
        const data = await response.json();
        //setting the value of resList to the data fetched from the API
        setresList(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredList(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }


    return resList.length === 0 ? <Shimmer/> : (
    <div id="body">
        <div id="searchContainer" >
            <input type="text" id="searchBox" placeholder="Search for restaurants and food"  value={searchText} onChange={(e) => setSearchText(e.target.value)}></input><button id="searchBtn" onClick={() => {
                const filteredList = resList.filter((res)=>(res.info.name.toLowerCase().includes(searchText.toLowerCase())));
                setFilteredList(filteredList);
            }}>Search</button>
        </div>
        <div id="resandfilterContainer">
            <div id="filtercontainer">
                <button id="filterbtn"> Filters </button>
                <button id="topratedres" onClick={()=>{
                    setfilter(!(filter));
                    if(!(filter)){
                        const filteredList = resList.filter(res=>res.info.avgRating>4.2)
                        setFilteredList(filteredList);
                    }else{
                        setFilteredList(resList);
                    }
                    
                }}> Top Restaurants  X </button>
            </div>
            <div id="resContainer">
            {  
                filteredList.map(restaurant => <RestaurantCard key={restaurant.info.id}resData={restaurant}/>)  
            }
            </div>
        </div> 
    </div>)
};
export default BodyContainer;