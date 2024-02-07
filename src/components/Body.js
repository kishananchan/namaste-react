// import resList from "../utils/mockData";
import ResurantCard from "./ResurantCard";
import Shimmer from "./Shimmer";

import { Link } from "react-router-dom";

import { useState } from "react";
import { useEffect } from "react";

const Body = () => {
	const [listOfResturants, setlistOfResturants] = useState([]);
	const [filteredResturants, setfilteredResturants] = useState([]);

	const [searchText, setsearchText] = useState("");

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

		setfilteredResturants(
			json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
	};

	return listOfResturants.length === 0 ? (
		<Shimmer />
	) : (
		<div className="body">
			<div className="filterBtn">
				<div className="search-container">
					<input
						type="text"
						value={searchText}
						onChange={(e) => {
							setsearchText(e.target.value);
						}}
					></input>
					<button
						className="search-btn"
						onClick={() => {
							const filtereRes = listOfResturants.filter((res) =>
								res.info.name.toLowerCase().includes(searchText.toLowerCase())
							);
							setfilteredResturants(filtereRes);
						}}
					>
						Search
					</button>
				</div>
				<button
					className="filter-btn"
					onClick={() => {
						const filteredList = listOfResturants.filter(
							(res) => res.info.avgRating >= 4.2
						);
						setfilteredResturants(filteredList);
					}}
				>
					List of 4.2+ Rating Resturants
				</button>
			</div>
			<div className="res-container">
				{filteredResturants.map((item) => (
					<Link to={"/resturant/" + item.info.id} key={item.info.id}>
						<ResurantCard resData={item} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default Body;
