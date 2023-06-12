import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { Values } from "./App";
import { States } from "./App";
import { Items } from "./Items";
import { Items1000px } from "./Items"
 
export function ProductPage({ handleIncrease, handleDecrease }) {

    const ProductValue = useContext(Values)
    const State = useContext(States)
    

    return (
        <section className="ProductPage-Parent"id="ProductPage-Parent" >
            
            <article className="Product-HeaderText-Parent">
                <p>PRODUCT</p>
            </article>
        
            <article className="Background-of-Carts">
                <div className="Cart-Box-Parent">

                    <figure className="Images-Btns-Parent">
                        <figcaption className="Image-Parent">
                        <div className="Next-Prev-Btn">
                            <button onClick={handleDecrease} >{'<'}</button>
                            <button onClick={handleIncrease} >{'>'}</button>
                        </div>
                            <img src={Items[ProductValue[5]].image} />
                        </figcaption>
                    </figure>

                    <div className="Texts-of-Carts">
                        <p id="Name-of-Items">{Items[ProductValue[5]].header}</p>

                        <p id="Text-of-Items">
                            Lorem Ipsum is simply dummy text of the printing and typesetting 
                            industry book. when an unknown printer took a galley of 
                            type and scrambled it to make a type specimen book
                        </p>
                    </div>

                            
                    <div className="Increase-Decrease-Price">
                        <div className="Price-Ethereum">
                                <div id="Ethe">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10.38" height="25" viewBox="0 0 10.38 25">
                                        <path id="Icon_awesome-ethereum" data-name="Icon awesome-ethereum" d="M10.939,12.734,5.753,17.266.563,12.734,5.753,0ZM5.753,18.721.563,14.189,5.753,25l5.19-10.811-5.19,4.531Z" transform="translate(-0.563)" fill="rgba(19,29,58,0.8)"/>
                                    </svg>
                                    <p>O.O4ETH</p>
                                </div>
                                <p id="Price">${Items[ProductValue[5]].price}</p>
                        </div>

                        <div className="Increase-Decrease-Cart-Btn">
                            <div className="Background-of-Incr-Decr">
                                <button
                                onClick={State[4]}
                                >-
                                </button>
                                <p>{State[2]}</p>
                                <button 
                                onClick={State[3]}
                                >+
                                </button>
                            </div>
                            <div onClick={State[5]} className="Add-to-Cart">
                                <ion-icon name="cart"></ion-icon>
                                <p>Add to Cart</p>
                            </div>                            
                        </div>
                    </div>       
                </div>

                {/* ------- Big Screen ------ */}

                <article className="Grid-Carts-Laptop-Parent">
                {State[6].map((I, key) => 
                    <Finishing 
                    imgs={I.image}
                    header={I.header}
                    price={I.price}
                    id={I.id}
                    key={key}
                    number={I.number}
                    />   
                )}
        </article>

            </article>

        </section>
    )
} 


function Finishing({ imgs, header, price, id, number }) {

    const Value = useContext(Values)
    const State = useContext(States)



 
    return (
        <div className="Box"> 
        <figure className="fig-1000px">
            <figcaption className="Big-Image">
                <img src={imgs} />
            </figcaption>
        </figure>

        <div className="Texts-1000px">
            <p>{header}</p>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry book. when an unknown printer took a galley of 
                type and scrambled it to make a type specimen book
            </p>
        </div>

        <div className="Pricing-1000px">
            <div id="Ethe-1000px">
                <svg xmlns="http://www.w3.org/2000/svg" width="12.38" height="30" viewBox="0 0 10.38 25">
                    <path id="Icon_awesome-ethereum" data-name="Icon awesome-ethereum" d="M10.939,12.734,5.753,17.266.563,12.734,5.753,0ZM5.753,18.721.563,14.189,5.753,25l5.19-10.811-5.19,4.531Z" transform="translate(-0.563)" fill="rgba(19,29,58,0.8)"/>
                </svg>
                <p>O.O4ETH</p>
            </div>

            <p id="pri">${price}</p>
        </div>

        <div className="Btns-1000px">
            <div className="Item-btn">
                <button 
                onClick={() => State[8](id)}
                className="decrease"
                >-
                </button>
                <p>{number}</p>
                <button 
                onClick={() => State[7](id)}
                className="increase" 
                >+
                </button>
            </div> 

            <div onClick={() => State[9](id)} className="Add-Cart-1000px">
                <ion-icon name="cart"></ion-icon>
                <p>Add to Cart</p>
            </div>
            
        </div>

    </div>
    )
}