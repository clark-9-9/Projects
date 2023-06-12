import React, { useState, useEffect, useContext } from "react";
import { Navbar } from "./Navbar";
import { ACTION_TYPES } from "./App";
import { Values } from "./App";
import { States } from "./App";


export function UserPage() {

    const UserValue = useContext(Values)
    const[InpValue, setInpValue] = useState('')
    const[API, setAPI] = useState([])

    const handleNewInpValue = (e) => {
        setInpValue(e.target.value)
    }


    useEffect(() => {
        let body = document.getElementsByTagName('body')[0];
        let cart = document.querySelector(".Cart_Num_Of_Item")
        body.style.backgroundColor = UserValue[0].display === 'none' ? "#131D3A" :"#EDF1FD" ;
        cart.style.display = 'none'
    })


    /* ---- API ---- */

    useEffect(() => {
        const Users = new XMLHttpRequest();
        Users.open("GET", "https://jsonplaceholder.typicode.com/users", true);
        Users.send();

        Users.onload = function() {
            const json = JSON.parse(Users.responseText)
            setAPI(json)
        }
        
    }, [])


    return (
        <>
        <Navbar />
            <section className="UserPage-Parent">
                <article className="Input_Parent">
                    <p
                    style={{color:UserValue[0].display === 'none' ? "#EDF1FD" : "#131D3A" }}
                    >USERS
                    </p>
                    <input 
                    style={{
                        boxShadow: UserValue[0].display === 'none' ? "20px 20px 10px 0 #B5A3C2" : "20px 20px 10px 0 rgb(0, 0, 0, 18%)"
                    }}
                    value={InpValue}
                    onChange={handleNewInpValue}
                    id="Searching" 
                    type="text"
                    placeholder="Search for Users Name or Emails" 
                    />
                </article>

                <article className="Cards_Parent">
                {API.map((x, i) => { 
                    if(x.name.toLowerCase().includes(InpValue.toLocaleLowerCase()) || 
                       x.email.toLowerCase().includes(InpValue.toLocaleLowerCase())
                    ) {
                    return (
                    <div key={i} className="Background_Content_Of_Card">
                            <img id="User_Image" src={require('./Images/raamin-ka-AKGZCGqzRZc-unsplash.jpg')} />
                            <div className="Content_Of_Card"> 
                                <p id="Name">
                                {
                                    x.name
                                }
                                </p>
                                <p id="Email">{x.email}</p>
                            </div>
                            <div className="Card-Text-Parent">
                                <p className="Card-Text">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type 
                                    specimen book. It has survived not only five centuries, but also the leap into 
                                    electronic typesetting, remaining essentially unchanged. It was popularised 
                                    in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                                    and more recently with desktop publishing software like Aldus PageMaker including 
                                    versions of Lorem Ipsum.
                                </p>
                            </div>
                        </div>
                )}})}
                </article>
            </section>
        </>
    )

}