import React, { useEffect } from 'react'
import { useFirebase } from '../Context/Firebase'

const Order = () => {

    const firebase = useFirebase()

    useEffect(() => {
     
        const OrderShowing = async () => {

           let Data = await firebase.OrderShowing();
            console.log(Data.docs)
        }
        OrderShowing()
    }, [firebase])
    

  return (
    <div>
        <h1>Orders</h1>

    </div>
  )
}

export default Order