import image_1 from "../images/image-product-1.jpg"
import image_2 from "../images/image-product-2.jpg"
import image_3 from "../images/image-product-3.jpg"
import image_4 from "../images/image-product-4.jpg"

import { nanoid } from "nanoid"

export const Items = [
    {
        id: nanoid(),
        image: image_1,
        price: 150.70,
        product: 1,
        num_of_item:3
    },

    {
        id: nanoid(),
        image: image_2,
        price: 100.20,
        product: 2,
        num_of_item:5
    },

    {
        id: nanoid(),
        image: image_3,
        price: 75.69,
        product: 3,
        num_of_item:2
    },

    {
        id: nanoid(),
        image: image_4,
        price: 125.34,
        product: 4,
        num_of_item:7
    },

]



export const Items_Cart = [
    {
        id: nanoid(),
        image: image_1,
        price: 150.70,
        product: 1,
        num_of_item:3
    },

    {
        id: nanoid(),
        image: image_2,
        price: 100.20,
        product: 2,
        num_of_item:5
    },

    {
        id: nanoid(),
        image: image_3,
        price: 75.69,
        product: 3,
        num_of_item:2
    },

    {
        id: nanoid(),
        image: image_4,
        price: 125.34,
        product: 4,
        num_of_item:7
    },

]