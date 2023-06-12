import React, {useContext} from "react";
import { Values } from "./App";
import { Navbar } from "./Navbar";



export function MessagePage() {


    return (
        <section className="MessagePage-Parent">
            <p id="Blogr">Blogr</p>
            <article className="Art-1-Message">

                <div className="All-Art">
                    <p id="All-Header">Product</p>

                    <div className="All-Texts">
                        <p>Overview</p>
                        <p>Pricing</p>
                        <p>Marketplace</p>
                        <p>Features</p>
                        <p>Integration</p>
                    </div>
                </div>

                <div className="All-Art">
                    <p id="All-Header">Company</p>

                    <div className="All-Texts">
                        <p>About </p>
                        <p>Team</p>
                        <p>Blog</p>
                        <p>Careers</p>
                    </div>
                </div>

                <div className="All-Art">
                    <p id="All-Header">Connect</p>

                    <div className="All-Texts">
                        <p>Contact</p>
                        <p>NewSletter</p>
                        <p>LinkedIn</p>
                    </div>
                </div>


            </article>

            
        </section>
    )
}