import { loadStripe } from "@stripe/stripe-js";

//Load Stripe
let stripe;

const getStripe = async () => {
  console.log(getStripe);
  if (!stripe) {
    stripe = await loadStripe(process.env.NEXT_PUBLIC_PUBLISHABLE_KEY);
  }
  return stripe;
};

export default getStripe;
