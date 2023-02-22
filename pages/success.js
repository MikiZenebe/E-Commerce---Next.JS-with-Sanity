import { useRouter } from "next/router";

//Display the success checkout
const stripe = require("stripe")(
  `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);

export async function getServerSideProps(params) {
  const order = await stripe.checkout.sessions.retrieve(
    params.query.session_id,
    {
      expand: ["line_items"],
    }
  );
  return { props: { order } };
}

export default function Success({ order }) {
  const route = useRouter();
  console.log(order);
  return (
    <div>
      <h1>Congra ❤️</h1>

      <h3>The Confirmation Email sent to</h3>
      <p>{order.customer_details.email}</p>

      <h3>Products</h3>
      {order.line_items.data.map((item) => (
        <div key={item.id}>
          <p>Product: {item.description}</p>
          <p>Quantity : {item.quantity}</p>
          <p>Price : {item.price.unit_amount}</p>
        </div>
      ))}
      <button onClick={() => route.push("/")}>Continue Shopping</button>
    </div>
  );
}
