import React, { useContext, useRef } from "react";
import { ACTION_TYPES } from "./App";
import { LaptopLinks, MobileLinks } from "./Laptop-Mobile-Links";
import { Values } from "./App";
import { States } from "./App";
import { Items } from "./Items";
import { useState } from "react";



export function Navbar() {


    const NavbarValue = useContext(Values)
    const CartID = useContext(States)

    const[visibleCart, setVisibleCart] = useState({ visibility:"hidden", opacity:0 })


    const handleVisible = () => {
        if(visibleCart.visibility === 'hidden') {
            setVisibleCart({ visibility:"visible", opacity:1 })
        } else {
            setVisibleCart({ visibility:"hidden", opacity:0 })
        }
    }

    const color1 = NavbarValue[0].display === "none" ? "#EDF1FD" : "#131D3A";
    const color12 = NavbarValue[0].display === "none" ? "#EDF1FD" : "var(--Navbar-Texts)";
       
    
    return ( 
        <>
        <PurchaseItems visibleCart={visibleCart} handleVisible={handleVisible} />


        <section className="Navbar-Parent">
            <article className="Navbar-article-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="22.845" height="44.817" viewBox="0 0 22.845 44.817">
                    <path id="Path_5" data-name="Path 5" d="M1144.771,205.206l-20.33,12.029V189.31l11.057,8.163v24.059l9.273,8.518" transform="translate(-1122.941 -186.338)" fill="none" stroke={NavbarValue[0].display === 'none'?'#EDF1Fd':'#b5a3c2'} strokeWidth="3"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="33.694" height="67.202" viewBox="0 0 33.694 67.202">
                    <path id="Path_5" data-name="Path 5" d="M1154.771,213.4l-30.33,18.23V189.31l16.5,12.371v36.461l13.835,12.909" transform="translate(-1122.441 -185.31)" fill="none" stroke={NavbarValue[0].display === 'none'?'#EDF1Fd':'#b5a3c2'} strokeWidth="3"/>
                </svg>

            </article>

            <LaptopLinks />
            <MobileLinks />

            

            <article className="Navbar-article-3">  
                <ion-icon 
                    onClick={() => NavbarValue[1]({ type:ACTION_TYPES.Light_Mode })}
                    className="sun-icone" 
                    name="sunny-outline"
                    style={{ 
                    display: 'block' ? NavbarValue[0].display : 'block', 
                    }}
                >
                    </ion-icon>                
                <ion-icon 
                    onClick={() => NavbarValue[1]({ type:ACTION_TYPES.Dark_Mode })}
                    className="moon-icone" 
                    name="moon" 
                    style={{ 
                    display: NavbarValue[0].display === 'none' ? 'block' : 'none',
                    color: color1
                    }}
                >
                </ion-icon>
                <div onClick={handleVisible} className="Cart_Num_Of_Item">
                    <div className="Num_of_Item"
                    style={{ display:CartID[0].length === 0 ? 'none' : 'flex'}}
                    >
                        {CartID[0].length }
                    </div>
                    <ion-icon name="cart"></ion-icon>
                </div>
                <ion-icon 
                    onClick={NavbarValue[3]} 
                    className="menu-icone" 
                    name="menu"
                    style={{ 
                    color: color12, 
                    opacity:1
                    }}
                >
                </ion-icon>
            </article>
        </section>
        </>
    )
}

function PurchaseItems({ visibleCart, handleVisible }) {

    const CartID = useContext(States)
    
    
    return (
        <section 
        style={{
            visibility:visibleCart.visibility,
            opacity:visibleCart.opacity,
        }} 
        
        className="Purchase-Items">

            <p id="Empty"
            style={{ display:CartID[0].length === 0 ? 'block' : 'none'}}
            >
                EMPTY
            </p>

            <div className="Cart-Close-Box">
                <p className="Cart_Header">CART</p>
                <ion-icon onClick={handleVisible} name="close-outline"></ion-icon>
            </div>
            
            {
                CartID[0].map((item, i) => {
                    return (
                        <article key={i} className="Cart_Box_Parent">
                            <img src={item.Image} />
                            <div className="Items_cart">
                                <p>{item.HeaderText}</p>

                                <p className="Calculation">
                                    {item.Result}
                                </p>
                            </div>
                            <ion-icon 
                            onClick={() => CartID[1](item.id)} 
                            name="trash-outline"
                            >
                            </ion-icon>
                        </article>
                    )
                })
            }
            <div className="Total"
            style={{ display:CartID[0].length !== 0 ? 'flex' : 'none'}}
            >
                <p>TOTAL</p>
                <p>$
                    {
                        CartID[0].map((All) => All.AllResult)
                        .reduce((All, item) => All + item , 0 )
                        .toFixed(2)
                    }
                </p>
            </div>
        </section>
    )

}