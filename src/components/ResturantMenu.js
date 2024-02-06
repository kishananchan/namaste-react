import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const ResturantMenu = () => {
	const [resInfo, setresInfo] = useState([]);

	useEffect(() => {
		fetchMenu();
	}, []);

	const fetchMenu = async () => {
		const data = await fetch(
			"https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9698196&lng=77.7499721&restaurantId=289264"
		);
		const json = await data.json();
		setresInfo(json.data);
	};

	console.log(resInfo);

	//const { name, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

	//const { name } = resInfo.cards[0].card.card.info.name;

	//console.log(resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0]);
	//console.log(resInfo);

	// const restinfo = resInfo.cards[0].card.card.info;
	// const { name } = restinfo;

	if (resInfo == null) return <Shimmer />;

	return (
		<div>
			<h1>{name}</h1>
			<h2>Leon Gourmet ( Burgers and Sides ) (12)</h2>
			<img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/9dcc39adff467230c6981b067b432524"></img>
			<h5>
				Serves 1 | Two smashed lamb patties with house seasoning, double cheese,
				sliced gherkins, onions, lettuce, tomato and gourmet sauce nestled on a
				toasted bun This item is customizable. Swipe right to add item to cart.
				Double Lamb Cheese Burger
			</h5>
			<span>₹ 489</span>
			<div>
				------------------------------------------------------------------------------------------------------
			</div>
		</div>
	);
};

export default ResturantMenu;
