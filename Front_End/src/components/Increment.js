import { useState } from "react";

function Increment() {
    const [quantity, setQuantity] = useState(0)
    
    const moins = () => {
        if (quantity > 0) {
            let qty = quantity - 1
            setQuantity(qty)
        }

    }

    const plus = () => {
        let qty = quantity + 1
        setQuantity(qty)
    }

    return (  
        <div>
            <button onClick={moins}> - </button>
            <p>{quantity}</p>
            <button onClick={plus}> + </button>
        </div>
    );
}

export default Increment;