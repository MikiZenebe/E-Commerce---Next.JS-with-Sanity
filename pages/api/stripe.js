import Stripe from "stripe";

const stripe = new Stripe(`${process.env.NEXT_PUBLIC_SECRET_KEY}`);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      //Create Checkout Session
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        shipping_address_collection: {
          allowed_countries: ["US", "CA", "RU"],
        },
      });
    } catch (error) {}
  }
}
