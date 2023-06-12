import { Fragment, useState } from "react";
import { Navbar, Products } from "./components/z_index"
import { Items_Cart } from "./Items/items";



function App() {

    const[Items_In_Cart, setItems_In_Cart] = useState(Items_Cart);

    
    return (
        <Fragment>
            <Navbar 
                Cart_Items={{Items_In_Cart, setItems_In_Cart}}
            />
            <Products 
                Cart_Items={{Items_In_Cart, setItems_In_Cart}}
            />
        </Fragment>
    )
}




export default App;
