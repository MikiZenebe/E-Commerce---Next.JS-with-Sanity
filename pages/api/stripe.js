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

        //Add the cart product to the checkout page
        line_items: req.body.map((item) => {
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.name,
                images: [item.image[0].asset._ref],
              },
              unit_amount: item.price * 100,
            },

            //Increase and Decrease the qty in checkout page
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },

            quantity: item.quantity,
          };
        }),

        success_url: `${req.headers.origin}/success/`,
        cancel_url: `${req.headers.origin}/canceled`,
      });
      res.status(200).json(session); //If it is ok let return the session
    } catch (error) {
      res.status(error.statusCode || 500).json(error.message);
    }
  }
}
