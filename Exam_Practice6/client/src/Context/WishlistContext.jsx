import React, { createContext, useState } from 'react'

export const WishlistContext = createContext(null)

const WishlistProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);
     const toggleWishlist = (product) => {
        const found = favorites.find((p) => p._id === product._id);

        if(found){
            setFavorites((prev) => prev.filter((p) => p._id !== product._id));
        }
        else{
            setFavorites((prev) => [...prev,product]);
        }
     }
  return (
        <WishlistContext.Provider value ={{favorites,toggleWishlist}}>{children}</WishlistContext.Provider>
  )
}

export default WishlistProvider