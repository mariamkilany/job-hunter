"use client";
import { CardElement, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CheckoutForm = ({ selectedPlan }) => {
	const stripe = useStripe();
	const elements = useElements();
	const [errorMessage, setErrorMessage] = useState(null);
	const router = useRouter();

	const handleSubmitPayment = async event => {
		event.preventDefault();
		setErrorMessage(null);

		if (!stripe || !elements) {
			setLoading(false);
			return;
		}

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card: elements.getElement(CardElement),
		});

		if (error) setErrorMessage(error.message);
		else {
			const id = paymentMethod.id;
			const amount = selectedPlan;

			const response = await fetch("http://localhost:8000/api/payment/checkout", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					id,
					amount,
					user: {
						name: "MyCompany",
						userId: "65f273705ed9351afc92a2ca",
					},
				}),
			});

			const data = await response.json();

			console.log(data);

			if (data.payment.status === "succeeded") {
				setErrorMessage("Payment successful!");
				// Redirect to the success page
				router.push("/landing");
			} else setErrorMessage("Payment failed.");
		}
	};

	return (
		<form onSubmit={handleSubmitPayment}>
			<CardElement
				className="border border-gray-300 rounded-lg p-2.5 w-full mb-5"
				id="payment-element"
				options={{
					style: {
						base: {
							lineHeight: "32px",
							fontSize: "24px",
							color: "#000",
							"::placeholder": {
								// color: "#aab7c4",
							},
						},
						invalid: {
							color: "#9e2146",
						},
					},
				}}
			/>
			<button
				type="submit"
				disabled={!stripe || !elements}
				class="text-white bg-primary hover:bg-primary/90 focus:ring-4 focus:ring-primary/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-primary/50 my-4 mb-1"
			>
				Pay with Stripe
			</button>
			{errorMessage && <div>{errorMessage}</div>}
		</form>
	);
};
export default CheckoutForm;
