import React from "react";
import "./navigationbar.scss";

const NavigationBar = ({ black }) => {
	return (
		<header className={black ? "black" : ""}>
			<div className="header__Logo">
				<a href="/">
					{/* CINE.YT{" "} */}
					<span>{/* <FaTicketAlt style={{ fontSize: 50 }} /> */}</span>
				</a>
			</div>
		</header>
	);
};

export default NavigationBar;
