import mockData from "../common/mockData";
import { RES_IMG_URL } from "../common/constants";


const RestaurantCard = ({resId,resData}) => {
   
    return(
        <div className="resCard">
            <img className="resLogo" src={RES_IMG_URL + resData.info.cloudinaryImageId}></img>
            <div className="resNameandStars">
                <h3>{resData.info.name}</h3>
                <p>⭐{resData.info.avgRating} • {resData.info.sla.slaString} mins</p>
            </div>
            <div className="resCuisineandPrice">
                <p>{resData.info.cuisines.join(", ")}</p>
                <p>{resData.info.costForTwo}</p> 
            </div>
        </div>
    )
};

export default RestaurantCard;