import React from 'react'
import styles from "./Menu.module.css"
import { nanoid } from 'nanoid'

const Menu = () => {
    const menuItems = ["Women Ethnic",
    "Women Western",
    "Men",
    "Kids",
    "Home & Kitchen",
    "Beauty & Health",
    "Jewellery & Accessories",
    "Bags & Footwear",
    "Electronics"]
    console.log(menuItems)
  return (
    <div>
           <div className={styles.menu} >
                 {menuItems.map((elem)=> <div key={()=>nanoid(4)}> {elem} </div>   )}
            </div>
    </div>
  )
}

export default Menu