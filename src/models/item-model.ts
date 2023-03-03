import { Item } from "../types/Types"
import { v4 as uuid } from 'uuid';






export const createItem = (name: string, quantity: number, category: string) => {
    const item: Item = {
        name: name,
        // price: price,
        quantity: quantity,
        category: category,
        done: false,
        id: uuid(),
    }
    return item
}
