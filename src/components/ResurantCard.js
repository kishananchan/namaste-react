import { CDN_LINK } from "../utils/constants";

const ResurantCard = (props) => {
	const { resData } = props;

	const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
		resData.info;

	return (
		<div className="res-card" style={{ background: "#f0f0f0" }}>
			<img
				className="res-logo"
				src={CDN_LINK + cloudinaryImageId}
				alt="Resurant-Image"
			/>
			<h3>{name}</h3>
			<h4>{cuisines.join(" , ")}</h4>
			<h4>{avgRating}</h4>
			<h4>{costForTwo}</h4>
			<h4>{sla.deliveryTime + " minutes"}</h4>
		</div>
	);
};

export default ResurantCard;
