import React from "react";

const Card = ({ onSelect }) => {
	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
				<div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
					<h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
						Select the best plan for your business
					</h2>
					<p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
						No setup fees, no hidden charges. Only pay for what you need.
					</p>
				</div>
				<div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-8 lg:space-y-0">
					{/* Pricing Card */}
					<div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 transition-transform bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white hover:scale-105 hover:bg-primary-200 ">
						<h3 className="mb-4 text-2xl font-semibold">Basic</h3>
						<p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
							Best for small teams and startups to help you find sutiable applicants.
						</p>
						<div className="flex items-baseline justify-center my-8">
							<span className="mr-2 text-5xl font-extrabold">$99</span>
						</div>
						{/* List */}
						<ul role="list" className="mb-8 space-y-4 text-left">
							<li className="flex items-center space-x-3">
								{/* Icon */}
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clipRule="evenodd"
									/>
								</svg>
								<span>Individual configuration</span>
							</li>
							<li className="flex items-center space-x-3">
								{/* Icon */}
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clipRule="evenodd"
									/>
								</svg>
								<span>No setup, or hidden fees</span>
							</li>
							<li className="flex items-center space-x-3">
								{/* Icon */}
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clipRule="evenodd"
									/>
								</svg>
								<span>
									Extra Jobs: <span className="font-semibold">3 Post</span>
								</span>
							</li>
							<li className="flex items-center space-x-3">
								{/* Icon */}
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clipRule="evenodd"
									/>
								</svg>
								<span>
									Vaild to: <span className="font-semibold">24 months</span>
								</span>
							</li>
						</ul>
						<a
							href="#"
							className="text-primary bg-transparent hover:bg-primary hover:text-white focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900 border border-primary mt-6"
							onClick={() => onSelect(99)}
						>
							Get started
						</a>
					</div>
					<div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 transition-transform bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white hover:scale-105 hover:bg-primary-200 ">
						<h3 className="mb-4 text-2xl font-semibold">Enterprise</h3>
						<p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
							Best for large scale companies and organization to long term uses.
						</p>
						<div className="flex items-baseline justify-center my-8">
							<span className="mr-2 text-5xl font-extrabold">$499</span>
						</div>
						<ul role="list" className="mb-8 space-y-4 text-left">
							<li className="flex items-center space-x-3">
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clipRule="evenodd"
									/>
								</svg>
								<span>Individual configuration</span>
							</li>
							<li className="flex items-center space-x-3">
								{/* Icon */}
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clipRule="evenodd"
									/>
								</svg>
								<span>No setup, or hidden fees</span>
							</li>
							<li className="flex items-center space-x-3">
								{/* Icon */}
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clipRule="evenodd"
									/>
								</svg>
								<span>
									Extra Jobs: <span className="font-semibold">20 Post</span>
								</span>
							</li>
							<li className="flex items-center space-x-3">
								{/* Icon */}
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clipRule="evenodd"
									/>
								</svg>
								<span>
									Vaild to: <span className="font-semibold">36 months</span>
								</span>
							</li>
						</ul>
						<a
							href="#"
							className="text-primary bg-transparent hover:bg-primary hover:text-white focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900 border border-primary mt-6"
							onClick={() => onSelect(499)}
						>
							Get started
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Card;
