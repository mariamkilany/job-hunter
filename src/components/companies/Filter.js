import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";
import Input from "../Input";
import Label from "../Label";

const Filter = ({ onSearchChange }) => {
	return (
		<div className="flex flex-col gap-2 p-4 border">
			<Label className="text-lg text-gray-600">Company title </Label>
			<div className="relative">
				<div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
					<MagnifyingGlassIcon className="w-5 h-5" />
				</div>
				<Input className="ps-8" onChange={onSearchChange} />
			</div>
		</div>
	);
};

export default Filter;
