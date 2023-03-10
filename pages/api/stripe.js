import Stripe from "stripe";

const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      //Create Checkout Session
      const params = {
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",

        //Coupcon Code
        allow_promotion_codes: true,

        //Shipping
        shipping_options: [
          {
            shipping_rate: "shr_1MeFOuGehNrOZPF7MVkd3Tju",
          },
          {
            shipping_rate: "shr_1MeFQiGehNrOZPF7uZmz13MB",
          },
        ],

        //Add the cart product to the checkout page
        line_items: req.body.map((item) => {
          const img = item.image[0].asset._ref;
          const newImage = img
            .replace(
              "image-",
              "https://cdn.sanity.io/images/dv8zibw8/production/"
            )
            .replace("-webp", ".webp");

          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.name,
                images: [newImage],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity,
          };
        }),
        success_url: `${req.headers.origin}/success?&session_id={CHECKOUT_SESSION_ID}`, //Pass the session data to the success page
        cancel_url: `${req.headers.origin}/canceled`,
      };

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);

      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     try {
//       //Create Checkout Session
//       const session = await stripe.checkout.sessions.create({
//         submit_type: "pay",
//         mode: "payment",
//         payment_method_types: ["card"],
//         shipping_address_collection: {
//           allowed_countries: ["US", "CA", "RU"],
//         },

//         //Add the cart product to the checkout page
//         line_items: req.body.map((item) => {
//           const img = item.image[0].asset._ref;
//           const newImage = img
//             .replace(
//               "image-",
//               "https://cdn.sanity.io/images/dv8zibw8/production"
//             )
//             .replace("-webp", ".webp");
//           return {
//             price_data: {
//               currency: "usd",
//               product_data: {
//                 name: item.name,
//                 images: [newImage],
//               },
//               unit_amount: item.price * 100,
//             },

//             //Increase and Decrease the qty in checkout page
//             adjustable_quantity: {
//               enabled: true,
//               minimum: 1,
//             },

//             quantity: item.quantity,
//           };
//         }),

//         success_url: `${req.headers.origin}/?success=true/`,
//         cancel_url: `${req.headers.origin}/?canceled=true`,
//       });
//       res.status(200).json(session); //If it is ok let return the session
//     } catch (error) {
//       res.status(error.statusCode || 500).json(error.message);
//     }
//   } else {
//     res.setHeader("Allow", "POST");
//     res.status(405).end("Method Not Allowed");
//   }
// }
