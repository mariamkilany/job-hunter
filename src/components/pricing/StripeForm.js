import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { PaymentElement, Elements, useStripe, useElements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const StripeForm = ({ selectedPlan }) => {
	const options = {
		mode: "payment",
		amount: selectedPlan,
		currency: "usd",
	};
	const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");
	return (
		<Elements stripe={stripePromise} options={options}>
			<CheckoutForm selectedPlan={selectedPlan} />
		</Elements>
	);
};

export default StripeForm;
