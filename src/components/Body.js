// import resList from "../utils/mockData";
import ResurantCard from "./ResurantCard";

import { useState } from "react";
import { useEffect } from "react";

const Body = () => {
	const [listOfResturants, setlistOfResturants] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9698196&lng=77.7499721&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		);
		const json = await data.json();

		setlistOfResturants(
			json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
	};

	return (
		<div className="body">
			<div className="filterBtn">
				<button
					className="filter-btn"
					onClick={() => {
						const filteredList = listOfResturants.filter(
							(res) => res.info.avgRating >= 4.5
						);
						setlistOfResturants(filteredList);
					}}
				>
					List of 4.5+ Rating Resturants
				</button>
			</div>
			<div className="res-container">
				{listOfResturants.map((item) => (
					<ResurantCard key={item.info.id} resData={item} />
				))}
			</div>
		</div>
	);
};

export default Body;
