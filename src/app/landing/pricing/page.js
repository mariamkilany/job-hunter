"use client";
import { useState } from "react";
import PricingStepper from "@/components/pricing/PricingStepper";
import Card from "@/components/pricing/Card";
import Header from "@/components/pricing/Header";
import StripeForm from "@/components/pricing/StripeForm";

const Price = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const [selectedPlan, setSelectedPlan] = useState(99);

	const handleSelectPlan = plan => {
		setCurrentStep(2);
		setSelectedPlan(plan);
	};

	return (
		<div>
			<div className="h-full text-center ">
				<Header />
				<div className="flex flex-col gap-10 p-24">
					<PricingStepper currentStep={currentStep} setCurrentStep={setCurrentStep} />
					{currentStep === 1 && <Card onSelect={handleSelectPlan} />}
					{currentStep === 2 && <StripeForm selectedPlan={selectedPlan} />}
				</div>
			</div>
		</div>
	);
};

export default Price;
