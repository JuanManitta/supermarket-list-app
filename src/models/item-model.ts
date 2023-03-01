import { uuid } from "uuidv4"
import { Item } from "../types/Types"






export const createItem = (name: string, price: number, quantity: number) => {
    const item: Item = {
        name: name,
        price: price,
        quantity: quantity,
        done: false,
        id: uuid(),
    }
    return item
}
