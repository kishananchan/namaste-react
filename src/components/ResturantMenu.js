import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const ResturantMenu = () => {
	const [resInfo, setresInfo] = useState(null);
	const [resMenuInfo, setresMenuInfo] = useState(null);

	useEffect(() => {
		fetchMenu();
	}, []);

	const { resId } = useParams();

	const fetchMenu = async () => {
		console.log("UseEffect is called");
		const data = await fetch(MENU_API + resId);
		const json = await data.json();
		setresInfo(json.data.cards[0]?.card?.card?.info);

		if (
			json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.hasOwnProperty(
				"categories"
			)
		) {
			setresMenuInfo(
				json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
					.categories[0].itemCards
			);
		} else {
			setresMenuInfo(
				json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
					.itemCards
			);
		}

		//setresMenuInfo(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)
	};

	console.log(resInfo);
	console.log(resMenuInfo);

	if (resInfo === null || resMenuInfo === null) return <Shimmer />;
	return (
		<div>
			<h1>{resInfo.name}</h1>
			<h2>{resInfo.costForTwoMessage}</h2>

			{resMenuInfo.map((item) => (
				<div key={item.card.info.id} className="menu-container">
					<h2>{item.card.info.name}</h2>
					<h3>{item.card.info.description}</h3>
					<h3>₹ {item.card.info.price / 100}</h3>
					<img
						alt="No Image"
						src={
							"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
							item.card.info.imageId
						}
					></img>
				</div>
			))}
		</div>
	);
};

export default ResturantMenu;
