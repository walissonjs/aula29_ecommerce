import { useState } from "react";
import CartContext from "./CartContext";

export default function CarProvider({ children }) {
    const [items, setItems] = useState([]);


/* Essa funcionalidade vai verificar se os produtos estão sendo adicionados ao carrinho, verificando a quantidade de produto e evitando duplicação de cards para um mesmo item (sem alterar a quantidade). A function abaixo vai fazer essas verificações e no caso de itens duplicados, apenas a quantidade deverá ser autalizada */

    function addItem(product) {
        setItems((currentItem) => {
    /*A variável vai verificar se o produto já existe */        
            const existingItem = currentItem.find((item) => item.id === product.id)
            if (existingItem) {
                return currentItem.map ((item) => {
                    item.id === product.id
                    ? {...item, quantity: item.quantity + 1}
                    : item
                })
            }
            return [...currentItem, {...product, quantity: 1}]
        
        })
    }

    function removeItem (productId) {
        setItems((currentItems) => currentItems.filter((item) => item.id !== productId ))
    }

    function clearCart () {
        setItems([])
    }

    function updateQuantity (productId, quantity) {
        if (quantity < 1) {
            removeItem(productId)
            return
        }
        setItems ((currentItems) => currentItems.map((item) => (
            item.id === productId
            ? {...item, quantity}
            : item
        )))
    }

    const value = {
        items,
        addItems,
        removeItem,
        clearCart, 
        updateQuantity,
        itemCount: items.reduce((total, item) => total + item.quantity, 0),
        total: items.reduce((total, item) => total + item.price * item.quantity, 0),
    }

    return <CartContext.Provider value={value}>
            {children}
    </CartContext.Provider>
}