import { useRouter } from "next/router";
const stripe = require("stripe")(
  `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import styled, { withTheme } from "styled-components";
import FormatMoney from "../lib/formatMoney";

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const session = getSession(ctx.req, ctx.res);
    const stripeId = session.user[`${process.env.BASE_URL}/stripe_customer_id`];
    const paymentIntents = await stripe.paymentIntents.list({
      customer: stripeId,
    });
    return { props: { orders: paymentIntents.data } };
  },
});

export default function Profile({ user, orders }) {
  const route = useRouter();
  return (
    user && (
      <div>
        <Name> {user.name}</Name>
        <Email> {user.email} </Email>
        <Orders>
          {orders.map((order) => (
            <Order key={order.id}>
              <h1> Order Number: {order.id} </h1>
              <h2> Amount {FormatMoney(order.amount)} </h2>
              <h2> Receipt Email: {user.email}</h2>
            </Order>
          ))}
        </Orders>
        <Logout onClick={() => route.push("/api/auth/logout")}> Logout </Logout>
      </div>
    )
  );
}

const Logout = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  background: black;
  color: white;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 100px;
`;

const Name = styled.h2`
  color: white;
  text-align: center;
`;

const Email = styled.p`
  text-align: center;
  color: white;
`;

const Order = styled.div`
  display: flex;
  background: white;
  margin: 2rem 0rem;
  padding: 3rem;
  justify-content: space-between;
  border-radius: 1.5rem;

  h1 {
    color: black;
    font-size: 1rem;
  }

  @media (max-width: 450px) {
    flex-direction: column;

    h1 {
      font-size: 0.7rem;
    }

    h2 {
      font-size: 0.8rem;
    }
  }
`;

const Orders = styled.div`
  display: flex;
  flex-direction: column;
`;

/* securing a normal page
export const withPageAuthRequired(PremiumContent() {

})
*/
