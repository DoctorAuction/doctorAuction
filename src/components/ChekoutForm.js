import React, { useState, useEffect } from "react";
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.


export default function CheckoutForm() {
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();



    useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      window
        .fetch("/create-payment-intent", {
          method: "POST", 
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({items: [{ id: "xl-tshirt" }]})
        })
        .then(res => {
          return res.json();
        })
        .then(data => {
          setClientSecret(data.clientSecret);
        });
    }, []);
    const cardStyle = {
      style: {
        base: {
          color: "#32325d",
          fontFamily: 'Arial, sans-serif',
          fontSmoothing: "antialiased",
          fontSize: "16px",
          "::placeholder": {
            color: "#32325d"
          }
        },
        invalid: {
          color: "#fa755a",
          iconColor: "#fa755a"
        }
      }
    };
    const handleChange = async (event) => {
      // Listen for changes in the CardElement
      // and display any errors as the customer types their card details
      setDisabled(event.empty);
      setError(event.error ? event.error.message : "");
    };
    const handleSubmit = async ev => {
      ev.preventDefault();
      setProcessing(true);
      const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)
        }
      });
      if (payload.error) {
        setError(`Payment failed ${payload.error.message}`);
        setProcessing(false);
      } else {
        setError(null);
        setProcessing(false);
        setSucceeded(true);
      }
    };
    return (
      <form id="payment-form" onSubmit={handleSubmit}>
        <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
        <button
          disabled={processing || disabled || succeeded}
          id="submit"
        >
          <span id="button-text">
            {processing ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pay now"
            )}
          </span>
        </button>
        {/* Show any error that happens when processing the payment */}
        {error && (
          <div className="card-error" role="alert">
            {error}
          </div>
        )}
        {/* Show a success message upon completion */}
        <p className={succeeded ? "result-message" : "result-message hidden"}>
          Payment succeeded, see the result in your
          <a
            href={`https://dashboard.stripe.com/test/payments`}
          >
            {" "}
            Stripe dashboard.
          </a> Refresh the page to pay again.
        </p>
      </form>
    );
}









// function CheckoutForm(){
//     const stripe = useStripe();
//     const elements = useElements();
  
//     const handleSubmit = async (event) => {
//       // Block native form submission.
//       event.preventDefault();

//       console.log("cardsubmit", event.target)
  
//       if (!stripe || !elements) {
//         // Stripe.js has not loaded yet. Make sure to disable
//         // form submission until Stripe.js has loaded.
//         return;
//       }
  
//       // Get a reference to a mounted CardElement. Elements knows how
//       // to find your CardElement because there can only ever be one of
//       // each type of element.
//       const cardElement = elements.getElement(CardElement);
  
//       // Use your card Element with other Stripe.js APIs
//       const {error, paymentMethod} = await stripe.createPaymentMethod({
//         type: 'card',
//         card: cardElement,
//       });
  
//       if (error) {
//         console.log('[error]', error);
//       } else {
//         console.log('[PaymentMethod]', paymentMethod);
//       }
//     };
  

//     return (
//     <div>
//         <form onSubmit={handleSubmit}></form>
//             <h1>checkout form</h1>
            
//             <CardElement
//                 options={{
//                     style: {
//                     base: {
//                         fontSize: '16px',
//                         color: '#424770',
//                         '::placeholder': {
//                         color: '#aab7c4',
//                         },
//                     },
//                     invalid: {
//                         color: '#9e2146',
//                     },
//                     },
//                 }}
//             />
//         <button type="submit" disabled={!stripe}>
//             Pay
//         </button>
//     </div>
//     );
// };


// export default CheckoutForm;