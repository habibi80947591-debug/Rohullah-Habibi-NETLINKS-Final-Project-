import{createContext,useContext,useEffect,useMemo,useState}from"react";import{products}from"../data/products";
const C=createContext(null);const read=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}};
export function StoreProvider({children}){const[cart,setCart]=useState(()=>read("rohtech-cart",[]));const[wishlist,setWishlist]=useState(()=>read("rohtech-wishlist",[]));const[notice,setNotice]=useState("");
useEffect(()=>localStorage.setItem("rohtech-cart",JSON.stringify(cart)),[cart]);useEffect(()=>localStorage.setItem("rohtech-wishlist",JSON.stringify(wishlist)),[wishlist]);useEffect(()=>{if(!notice)return;const t=setTimeout(()=>setNotice(""),2500);return()=>clearTimeout(t)},[notice]);
const addToCart=id=>{setCart(c=>c.some(x=>x.id===id)?c.map(x=>x.id===id?{...x,quantity:x.quantity+1}:x):[...c,{id,quantity:1}]);setNotice("Added to your cart")};
const updateQuantity=(id,q)=>setCart(c=>q<1?c.filter(x=>x.id!==id):c.map(x=>x.id===id?{...x,quantity:q}:x));
const removeFromCart=id=>setCart(c=>c.filter(x=>x.id!==id));const clearCart=()=>setCart([]);
const toggleWishlist=id=>setWishlist(c=>{const has=c.includes(id);setNotice(has?"Removed from wishlist":"Saved to wishlist");return has?c.filter(x=>x!==id):[...c,id]});
const cartItems=useMemo(()=>cart.map(x=>({...x,product:products.find(p=>p.id===x.id)})).filter(x=>x.product),[cart]);
const cartCount=cart.reduce((s,x)=>s+x.quantity,0);const subtotal=cartItems.reduce((s,x)=>s+x.product.price*x.quantity,0);
return <C.Provider value={{cartItems,cartCount,subtotal,wishlist,notice,setNotice,addToCart,updateQuantity,removeFromCart,clearCart,toggleWishlist}}>{children}</C.Provider>}
export const useStore=()=>{const c=useContext(C);if(!c)throw Error("useStore must be inside StoreProvider");return c};
