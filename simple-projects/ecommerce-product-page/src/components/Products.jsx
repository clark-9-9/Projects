import { useState, useEffect } from "react";
import { Items } from "../Items/items";
import { nanoid } from "nanoid";


export function Products({ Cart_Items }) {

    const[Price_Of_Product, setPrice_Of_Product] = useState(Items[0].price);
    const[Click_Product, setClick_Product] = useState(0);
    const[Num_Of_Items, setNum_Of_Items] = useState(0);
    // const{Items_In_Cart, setItems_In_Cart} = Cart_Items;

    

    return (
        <section className="Content_Grid">

            <Left_Side_Grid 
                Set_Price={{ Price_Of_Product, setPrice_Of_Product }}
                Click_On_Product={{ Click_Product, setClick_Product }}
                Items_Number={{ Num_Of_Items, setNum_Of_Items }}
                Cart_Items={ Cart_Items }
            />
            
            <Right_side_nav 
                price={Price_Of_Product}
                Click_On_Product={{ Click_Product, setClick_Product }}
                Items_Number={{ Num_Of_Items, setNum_Of_Items }}
                Cart_Items={ Cart_Items }
            />

        </section>
    );
    

};


function Left_Side_Grid({ Set_Price, Click_On_Product }) {

    const{Click_Product, setClick_Product} = Click_On_Product;
    const{ setPrice_Of_Product } = Set_Price;


    const handle_product_click = (item) => {    
        setClick_Product(item.product - 1);
        setPrice_Of_Product(item.price);

    }



    return (
        <article className="Left_Side_Grid">

            <figure className="Items">
                
                <img 
                    className="Big_Img" 
                    src={Items[Click_Product].image} 
                />

                <Mobile_Slider 
                    Click_On_Product={Click_On_Product}
                    Set_Price={Set_Price}
                />

                <ul className="Other_Image">
                    {
                     
                        Items.map(function(item, index) {
                            return (
                                <li 
                                    key={item.id}
                                    onClick={() => handle_product_click(item)}
                                >
                                    <img src={item.image} />
                                </li>
                            )
                        })
                    }

                </ul>
            </figure>

        </article>
    );
};




function Right_side_nav({ price, Items_Number, Cart_Items, Click_On_Product }) {

    const{Num_Of_Items, setNum_Of_Items} = Items_Number;
    const{Click_Product, setClick_Product} = Click_On_Product;
    const{Items_In_Cart, setItems_In_Cart} = Cart_Items;



    const handle_push_item_into_cart = () => {

        const New_Item_In_Cart = {
            id: nanoid(),
            image: Items[Click_Product].image,
            price: Items[Click_Product].price,
            product: Items[Click_Product].price,
            num_of_item: Num_Of_Items    
        };

        setItems_In_Cart([...Items_In_Cart, New_Item_In_Cart]);
    }




    return (
        <article className="Right_Side_Grid">
            <div className="Sneakers_Title_Edition_Sneakers_Texts">
                <div>
                    <p>SNEAKER COMPANY</p>
                    <p>Fall Limited Edition Sneakers</p>
                </div>

                <p id="Script">
                    These low-profile sneakers are your perfect casual wear companion. Featuring a 
                    durable rubber outer sole, they’ll withstand everything the weather can offer.
                </p>
            </div>
            

            <div className="Prices_And_Add_Items">
                <div className="Prices_Discount">
                    <div>
                        <p>{price.toFixed(2)}</p>
                        <p>50%</p>
                    </div>

                    <p id="Discount">$250.00</p>
                </div>
            
                <div className="Increase_Decrease_Number_Of_Items">
                    <div>
                        <button 
                        onClick={() => {
                            if(!(Num_Of_Items <= 0)) 
                                setNum_Of_Items((prev) => prev - 1);
                        }}
                        >
                            -
                        </button>

                        <span>{ Num_Of_Items }</span>

                        <button onClick={() => setNum_Of_Items((next) => next + 1)} >
                            +
                        </button>
                    </div>
                    
                    <div onClick={handle_push_item_into_cart} >
                        <ion-icon name="cart-outline"></ion-icon>
                        <p>Add to cart</p>
                    </div>
                </div>
            </div>
        </article>
    );
};



function Mobile_Slider({ Set_Price, Click_On_Product }) {


    const{ Click_Product, setClick_Product } = Click_On_Product;
    const{ Price_Of_Product, setPrice_Of_Product } = Set_Price;

    
    const handle_prev_btn = () => {
        if (Click_Product === 0) {
            setClick_Product(Items.length - 1);
        } else {
            setClick_Product(prev => prev - 1);
        }

        setPrice_Of_Product(Items[Click_Product].price);
    }

    const handle_next_btn = () => {
        if (Click_Product === Items.length - 1) {
            setClick_Product(0);
        } else {
            setClick_Product(prev => prev + 1);
        }

        setPrice_Of_Product(Items[Click_Product].price);
    }





    return(
        <section className="Slider">
            
            <span 
                className="Left_Button" 
                onClick={handle_prev_btn}
            >
                <ion-icon name="arrow-back-outline"></ion-icon>
            </span>

            <span 
                className="Right_Button"
                onClick={handle_next_btn}
            >
                <ion-icon name="arrow-forward-outline"></ion-icon>
            </span>

            <article className="Images_Box">
                {
                    Items.map((item, itemIndex) => {
                          
                        let position = "Prev_Slide Next_Slide Article";


                        if(itemIndex === Click_Product) {
                            position = "Active_Slide Article";
                            // hanlder(item)
                            
                            // setClick_Product(item.price)
                        }

                        if(
                            itemIndex === Click_Product - 1 ||
                            (Click_Product === 0 && itemIndex === Items.length - 1)
                        ) {
                            position = "Next_Slide Article";
                        }

                        

                        return (
                            <div 
                                key={item.id}
                                className={position}
                            >
                                <img 
                                    src={item.image}  
                                    className="Images"
                                />
                            </div>
                        )
                    })
                }

            </article>
            
        </section>

    );

};








/* 
    const handle_prev_btn = () => {
        setClick_Product(prev => prev - 1);
        setPrice_Of_Product(Items[Click_Product - 1].price);
    }

    const handle_next_btn = () => {
        setClick_Product(prev => prev + 1);
        setPrice_Of_Product(Items[Click_Product + 1].price);
    }

*/