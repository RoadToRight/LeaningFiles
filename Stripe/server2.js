import express from "express"
import Stripe from "stripe";

const stripe = new Stripe("sk_test_51Q7KefP8TtmlvDOc7dl5Zncr0osbGhOflYSGnGkW8Ue6qdemOOO0zZgR72n1v09HYv93kdMkPQBjlEXIM5mBQ4Ns00u8MY1R8C")
const app = express();

app.get("/", (req, res) => {
    res.send(`
  <a href="/subscribe?plan=starter">Go to Starter</a>
  <br><br><br><br>
 <a href="/subscribe?plan=pro">Go to Premium</a>
`)
})

app.get("/subscribe", async (req, res) => {
    const plan = req.query.plan;
    // console.log(plan)
    if (!plan) {
        return res.send("Subscription Not Selected")
    }

    let PriceID;
    switch (plan.toLowerCase()) {
        case "starter":
        
            PriceID = "price_1QYC7cP8TtmlvDOczQkjXrJb"
            break
        case "pro":
            PriceID = "price_1QYC8IP8TtmlvDOcSgbQz5e3"
            break;
        default: return res.send("No")
    }

    const session = await stripe.checkout.sessions.create({
        mode: "subscription",
        line_items: [{
            price: PriceID,
            quantity: 1
        }],
        success_url: `http://localhost:3001/complete?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: "http://localhost:3001/cancel"
    })
    res.redirect(session.url)
})
app.get("/complete", async (req, res) => {
    console.log("ma chala")
    const result =
       await stripe.checkout.sessions.retrieve(req.query.session_id, { expand: ['subscription' , "subscription.plan.product"] })

res.send("Subscribed Successfully!")

})

app.get("/cancel",(req,res) =>{

    res.redirect("/");

})

app.get("/customers/:customerID",async(req,res) => {
    const portalSession = await stripe.billingPortal.sessions.create({
        customer:req.params.customerID,
        return_url:`http://localhost:3001/`
    })

    res.redirect(portalSession.url)

})
const getSubscriptions = async () => {
    try {
      const subscriptions = await stripe.subscriptions.list({
        limit: 100, // Adjust this limit based on your needs
      });
  
      subscriptions.data.forEach(subscription => {
        console.log('Customer ID for Subscription:', subscription.customer);
      });
    } catch (error) {
      console.error('Error fetching subscriptions:', error);
    }
  };
//   getSubscriptions()
const getCheckoutSessions = async () => {
    try {
      const sessions = await stripe.checkout.sessions.list({
        limit: 100, // Adjust this limit based on your needs
      });
   
      sessions.data.forEach(session => {
        if (session.customer) {
            console.log('Customer ID for Checkout Session:', session.customer);
          } else {
            // console.log('No customer ID for Checkout Session');
          }
        //   if (session.status === 'complete') {
        //     console.log('Completed Checkout Session with Customer ID:', session.customer);
        //   } else {
        //     console.log('Session not complete:', session.status);
        //   }
      });
    } catch (error) {
      console.error('Error fetching checkout sessions:', error);
    }
  };
//   getCheckoutSessions()
const getCustomerByEmail = async (email) => {
    try {
      const customers = await stripe.customers.list({
        email: email,
        limit: 1, // Adjust the limit based on how many customers you expect
      });
//   console.log(customers)
      if (customers.data.length > 0) {
        console.log('Customer details:', customers.data[0]);
      } else {
        console.log('No customer found with that email');
      }
    } catch (error) {
      console.error('Error retrieving customer by email:', error);
    }
  };
//   getCustomerByEmail('syedsameershah2008@gmail.com');



const getCustomerById = async (customerId) => {
  try {
    const customer = await stripe.customers.retrieve(customerId);
    console.log('Customer details:', customer);
  } catch (error) {
    console.error('Error retrieving customer:', error);
  }
};

// Example usage
// getCustomerById('cus_RRPhYyzyiFlvqD');

app.listen(3001, () => {
    console.log(`Server Is Running`)
})