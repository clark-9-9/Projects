import React, { useEffect, useContext } from "react";
import { ACTION_TYPES } from "./App";
import { Navbar } from "./Navbar";
import { Values } from "./App";
import { ProductPage } from "./ProductsPage";
import { MessagePage } from "./MessengPage";

export function AboutPage({ handleIncrease, handleDecrease }) {

    const AboutValue = useContext(Values)

    useEffect(() => {
        
        let body = document.getElementsByTagName('body')[0];
        let sun = document.querySelector('[name="sunny-outline"]');
        let menu = document.querySelector('[name="menu"]');
          body.style.backgroundColor = "#EDF1FD";
          sun.style.display = 'none';
          menu.style.color = '#93839F'
          menu.style.opacity = '1'
      })   


    return (
        <div>
            <Navbar  />

            <section className="AboutPage-Parent" id="AboutPage-Parent">
                <article className="About-HeaderText-Parent">
                    <p>ABOUT</p>
                </article>

                <article className="About-article">
                    <div className="Path-Explain-Info-Parent">
                        <div className="Info-Path">
                            <p> INFORMATION </p> ABOUT MY PATH
                        </div>
                        
                        <p className="Full-Explaination">
                            I Studied For 7 Month 8-10 Hours A Day , When I Started I Knew 
                            Nothing About Programming . I Took Courses From Freecodecamp, 
                            Codecademy And Youtube For Html, Css, Javascript Algorithms And
                            Data Structures . I Have A Good Knowlege About JS, Then I 
                            Learned React Js .
                        </p>
                    </div>
                </article>
            </section>
            <ProductPage 
            handleIncrease={handleIncrease} 
            handleDecrease={handleDecrease}
            />
            <MessagePage />
        </div>
    )
}

