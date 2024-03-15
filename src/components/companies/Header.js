import React from "react";

const Header = () => {
	return (
		<div className="flex items-center justify-center bg-primary min-h-96">
			<div className="h-full px-6 text-center pt-14 lg:px-8 heroSection">
				<div className="py-2 sm:py-48 lg:py-2">
					<div className="text-center ">
						<h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">Find your dream companies</h1>
						<p className="mt-6 text-lg leading-8 text-gray-100">Find the dream companies you dream work for</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
