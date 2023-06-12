import { Fragment, useEffect, useState } from "react";
import { Items } from "../Items/items";
import { Items_Cart } from "../Items/items";
import avatar_png  from "../images/image-avatar.png";



export function Navbar({ Cart_Items }) {

    const[Visible_Cart, setVisible_Cart] = useState({ visibility: "hidden", opacity:0 });

    const visibile_cart = () => {
        if(Visible_Cart.visibility === "hidden") {
            setVisible_Cart({ visibility: "visible", opacity:1 });
        } 
        
        else {
            setVisible_Cart({ visibility: "hidden", opacity:0 });
        }
    }



    return (
        <div className="Super_Nav">
            <nav className="Navbar">
                <Cart_Box 
                    Visible_Cart={Visible_Cart} 
                    Cart_Items={Cart_Items}
                />

                <article className="left_side_nav">
                    <div>
                        <h2>sneakers</h2>
                    </div>

                    <div>
                        <a href="#">Collections</a>
                        <a href="#">Men</a>
                        <a href="#">Women</a>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                    </div>
                </article>

                <article className="right_side_nav">
                    <ion-icon 
                        name="cart-outline"
                        onClick={visibile_cart}
                    ></ion-icon>
                    <img src={avatar_png} />
                </article>
            </nav>
        </div>
    )

}



function Cart_Box({ Visible_Cart, Cart_Items }) {

    const{Items_In_Cart, setItems_In_Cart} = Cart_Items;

    const delete_item = (id) => {
        try {
            setItems_In_Cart((prevItems) => {
                return prevItems.filter(item => item.id !== id);
            });

        } catch(err) {
            console.log(err);
        }

    }


    return (
        <article 
            className="Cart_Box_Parent" 
            style={Visible_Cart}
        >

            <div className="Cart_Box">
                <p id="Cart">Cart</p>
                <p 
                    id="Empty" 
                    style={{ display: Items_In_Cart.length !== 0 ? "none" : "block" }}
                >
                    Your cart is Empty
                </p>
                <hr />

                <div className="Items_Btn_In_Cart">

                    {
                        Items_In_Cart.map((item, i) => {
                            
                            return (
                                <div className="Items_Cart" key={item.id}>
                                    <img src={item.image} />

                                    <div>
                                        <p>Fall Limited Edition Sneakers</p>
                                        <p>
                                            ${item.price.toFixed(2)} x {item.num_of_item} = {(item.price.toFixed(2) * item.num_of_item).toFixed(2)}
                                        </p>
                                        <ion-icon 
                                            name="trash-outline"
                                            onClick={() => delete_item(item.id)}
                                        ></ion-icon>
                                    </div>
                                </div>
                            )
                        })
                    }

                    <button 
                        style={{ visibility: Items_In_Cart.length === 0 ? "hidden" : "visible" }}
                    >
                        Checkout
                    </button>

                </div>
            </div>

        </article>
    )

}








