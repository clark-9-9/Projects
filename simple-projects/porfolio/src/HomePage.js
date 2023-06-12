import React, { useEffect, useContext } from "react";
import { Navbar } from "./Navbar";
import { Outlet, Link, NavLink } from "react-router-dom";
import { Values } from "./App";
import { ACTION_TYPES } from "./App";

export function HomePage() {

    const HomeValues = useContext(Values)

    const color1 = HomeValues[0].display === "none" ? "#EDF1FD" : "#131D3A";
    const color12 = HomeValues[0].display === "none" ? "#EDF1FD" : "var(--Navbar-Texts)";
    const color2 = HomeValues[0].display === "none" ? "#131D3A" : "#EDF1FD" 


    useEffect(() => {
        let body = document.getElementsByTagName('body')[0];
        let Cart = document.querySelector('[name="cart"]');
        let CartBox = document.querySelector('.Purchase-Items') 
        let Num_of_Item = document.querySelector('.Num_of_Item')

        body.style.backgroundColor = HomeValues[0].display === 'none' ? "#131D3A" :"#EDF1FD" ;
        Cart.style.display = 'none';
        CartBox.style.display = 'none'
        Num_of_Item.style.display = 'none'

      })

      
    
    return ( 
        <>
        <Navbar />
        <section className="Home-Page-Parent">
            <article className="Home-Page-Texts-Btns">

                <div 
                className="Headline-Text"
                style={{
                    color:color1,
                    transition:'200ms ease-in-out'
                }}         
                >
                    <p
                    className="Hello-Text"
                    style={{
                        color:color12,
                        transition:'200ms ease-in-out'
                    }}         
                    >HELLO
                    </p>
                    <div className="Parent-Clark-Name">
                        I'M <p className="Clark-Name">CLARK</p> KENT
                    </div>
                </div>

                <div className="Btns-Explaination-Text">
                    <p 
                    className="Explaination-Text"
                    style={{ 
                    color: color12,
                    transition:'200ms ease-in-out'
                    }} 
                    > 
                        And I am a Self Taught Web <br id="br"/>Developer<br id="br"/> For 8 Month I know HTML, Css, 
                        JavaScript, React Js 
                    </p>
                        
                    <div className="Btns">
                        <NavLink 
                        onClick={() => HomeValues[1]({type: ACTION_TYPES.Dark_Mode})}
                        name='NavLinks-Btns' 
                        to="/about"
                        style={{
                            backgroundColor:color1,
                            color: color2,
                            transition:'200ms ease-in-out'
                        }}
                        >
                            <p>Next</p>
                            <p>&#8594;</p>
                        </NavLink>
                        <button
                        style={{
                            backgroundColor:HomeValues[0].display === "none" ? "#EDF1FD" : "#E4E8F3",
                            transition:'200ms ease-in-out'
                        }}
                        >Learn more</button>
                    </div>
                </div>
            </article>

            <article className="Home-Page-Parent-Image">
                <div className="Big-Circle">
                    <img className="Clark-Image" src={ require('./Images/Jack_Philippe_Wolf-removebg-preview.png') } />
                </div>
            </article>
        </section>
    </>
    )
}
