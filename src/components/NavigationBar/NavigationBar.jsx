import React from "react";
import { FaTicketAlt } from "react-icons/fa";
import "./navigationbar.scss";

const NavigationBar = ({ black }) => {
	return (
		<header className={black ? "black" : ""}>
			<div className="header__Logo">
				<a href="/">
					CINE.YT{" "}
					<span>
						<FaTicketAlt style={{ fontSize: 50 }} />
					</span>
					{/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png"></img> */}
				</a>
			</div>
			{/* <div className="header__User">
				<a href="/">
					<img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" />
				</a>
			</div> */}
		</header>
	);
};

export default NavigationBar;
