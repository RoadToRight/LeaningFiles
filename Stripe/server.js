import express from "express"
import Stripe from "stripe";

const stripe = new  Stripe("sk_test_51Q7KefP8TtmlvDOc7dl5Zncr0osbGhOflYSGnGkW8Ue6qdemOOO0zZgR72n1v09HYv93kdMkPQBjlEXIM5mBQ4Ns00u8MY1R8C")
const app = express();

app.use(express.json());

 app.get("/",(req,res) =>{
    res.send(`<form action="/checkout" method="POST">
  <button type="submit">Go to Checkout</button>
</form>
`)
 })

app.post("/checkout",async(req,res) => {
    const session = await stripe.checkout.sessions.create({

        line_items:[
            {
                price_data:{
                    currency:"usd",
                    product_data:{
                        name:"Soap"
                    },
                    unit_amount:50*100
                },
                quantity:1,
            }
        ],
        mode:"payment",
        shipping_address_collection:{
            allowed_countries:["US","PK"]
        },
        success_url:`http://localhost:3000/complete?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url:"http://localhost:3000/cancel"
    })
    res.redirect(session.url)
})
app.get("/complete",async(req,res) =>{
    console.log(req.query.session_id)
    const result = Promise.all([
        stripe.checkout.sessions.retrieve(req.query.session_id,{expand:['payment_intent.payment_method']}),

        stripe.checkout.sessions.listLineItems(req.query.session_id) 
    ])

    const session = await stripe.checkout.sessions.retrieve(req.query.session_id,{expand:['payment_intent.payment_method']})
    const LineItems = await stripe.checkout.sessions.listLineItems(req.query.session_id) 
    console.log(session)
    console.log(await result)
    res.redirect("/")
})
app.listen(3000,() =>{
    console.log(`Server Is Running`)
})