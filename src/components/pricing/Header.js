import React from "react";

const Header = () => {
	return (
		<header className="flex flex-col gap-5 p-20 bg-primary pt-44">
			<h1 className="text-5xl font-bold text-gray-100" style={{ textTransform: "capitalize" }}>
				Pricing plans for Recruiters Company
			</h1>
			<p className="text-gray-300">Choose an affordable plan that’s packed with the best features for engaging your audience,</p>
		</header>
	);
};

export default Header;
