import React, { useState, useEffect, useReducer } from "react";
import { Route, Routes, Outlet } from 'react-router-dom';
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { UserPage } from "./UsersPage";
import { Items } from "./Items";
import { Items1000px } from "./Items";
import { nanoid } from "nanoid";


export const ACTION_TYPES = {
  Menu:'Menu',
  Close:'Close',
  Light_Mode:"Light_Mode",
  Dark_Mode:"Dark_Mode",
  INCREASE_BTN:'INCREASE_BTN',
  DECREASE_BTN:'DECREASE_BTN'
}


let IntialNum = { count: 0 };
export const Values = React.createContext()
export const States = React.createContext()


function reducer(state, action) {
  switch(action.type) {
    case ACTION_TYPES.Light_Mode :
      return { display:"none" }
    case ACTION_TYPES.Dark_Mode :
      return { display:"block"}      

      default: return state
  }
}




export function App() {


  let[state, dispatch] = useReducer(reducer, {})
  const[menu, setMenu] = useState({ visibility: "hidden",  opacity: 0 })
  const[num, setNum] = useState(0)
  const[Num_Of_Item, setIncr] = useState(0)

  const[EachItem, setEachItem] = useState(Items1000px)


  const handleMenu = () => {setMenu({ visibility: "visible",  opacity: 1 })}
  const handleClose = () => {setMenu({ visibility: "hidden",  opacity: 0 })}
  const handleIncrease = () => (num === 11 ? setNum(0) : setNum(prev => prev + 1))
  const handleDecrease = () => (num === 0 ? setNum(11) : setNum(prev => prev - 1)) 



  const Prices = Items[num].price * Num_Of_Item;

  const[cartID, setCartID ] = useState([
    {
      id:Items[0].id,
      Image: Items[0].image,
      HeaderText: Items[0].header,
      Result:`$15 * 0 = $${Prices.toFixed(2)}`,
      AllResult:Prices,
    },
    
  ])

  const handleDelete = (id) => {
    const IDS = cartID.filter(CID => CID.id !== id)
    setCartID(IDS)
  }


  const handle_Incr_Of_Item = () => (setIncr(prev => prev + 1))
  const handle_Decr_Of_Item = () => {
      if(Num_Of_Item > 0) {
          setIncr(prev => prev - 1)
      }
  } 


  const handleAddItem = () => {
    const newItems = {
      id: nanoid(),
      Image: Items[num].image,
      HeaderText: Items[num].header,
      Result:`$${Items[num].price} * ${Num_Of_Item} = $${Prices.toFixed(2)}`,
      AllResult:Prices, 
    }

    setCartID((prev) => {
      if(Num_Of_Item === 0) {
        return [...prev]
      } else {
        return [...prev, newItems]
      }
    })
    setIncr(0)
  }


  const handle_Increase_Item = (id) => { 
      setEachItem(cart =>   
        cart.map(item => {
          return id === item.id ? 
          {...item, number:item.number + ( item.number >= 0 ? 1 : 0 )} 
          : item
        })
      )
  }
   
  const handle_Decrease_Item = (id) => { 
    setEachItem(cart =>   
      cart.map(item => {
        return id === item.id ? 
        {...item, number:item.number - ( item.number > 0 ? 1 : 0 )} 
        : item

        // return item.number === 0 ? {...item, number: item.number = 0} 
        // : id === item.id ? {...item, number:item.number - 1} 
        // : item
      })
    )
  }
 
  const handle_Add_Item = (id) => {
    EachItem.map(item => {
        const Prices2 = item.price * item.number;

        if(item.id === id && item.number !== 0) {
          const new_Items = {
            id: nanoid(),
            Image: item.image,
            HeaderText: item.header,
            Result:`$${item.price} * ${item.number} = $${Prices2.toFixed(2)}`,
            AllResult:Prices2, 
          }
          setCartID(prev => [...prev, new_Items])

        }
      item.number = 0
    })
  }



  useEffect(() => {
    let Navlinks = document.querySelectorAll('[nav="navlinks"]')
      Navlinks.forEach(x => {
      x.onclick = () => {return setMenu({ visibility: "hidden",  opacity: 0 })}
    })
  }, [menu])
  

  return (
    <>
      <Values.Provider value={[state, dispatch, menu, handleMenu, handleClose, num]}>
        <States.Provider value = {
          [ cartID, handleDelete, Num_Of_Item, handle_Incr_Of_Item, 
            handle_Decr_Of_Item, handleAddItem, EachItem, handle_Increase_Item,
            handle_Decrease_Item, handle_Add_Item,
          ]} 
          >
          <Routes>
            <Route path="/" 
              element={ <HomePage />} 
            /> 
            <Route path="/about" 
              element={ 
              <AboutPage 
                handleIncrease = {handleIncrease}  
                handleDecrease={handleDecrease}
              /> 
              } 
            />
            <Route path="/users" element={<UserPage />} 
            />
          </Routes>
        </States.Provider>
     </Values.Provider>

     </>
  )
}

