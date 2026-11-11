import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ShoppingBag, Heart, Zap } from "lucide-react";
import { useStore } from "../context/StoreContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { cartCount, wishlist } = useStore();
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link to="/" className="brand" onClick={close} aria-label="RohTech home">
          <span className="brand-mark"><Zap size={19} fill="currentColor" /></span>
          <span>roh<span className="brand-accent">tech</span><small>TECHNOLOGY, SIMPLIFIED</small></span>
        </Link>

        <button
          className="mobile-toggle"
          type="button"
          onClick={() => setOpen(value => !value)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="primary-navigation"
        >
          {open ? <X /> : <Menu />}
        </button>

        <nav id="primary-navigation" className={`nav-links ${open ? "is-open" : ""}`} aria-label="Main navigation">
          <NavLink to="/" end onClick={close}>Home</NavLink>
          <NavLink to="/marketplace" onClick={close}>Marketplace</NavLink>
          <NavLink to="/about" onClick={close}>About</NavLink>
          <NavLink to="/contact" onClick={close}>Contact</NavLink>
          <div className="nav-actions">
            <Link to="/wishlist" className="nav-icon" aria-label={`Wishlist, ${wishlist.length} saved items`} onClick={close}>
              <Heart size={19} /><span className="count-dot">{wishlist.length}</span>
            </Link>
            <Link to="/cart" className="nav-cart" onClick={close}>
              <ShoppingBag size={17} /> Cart <b>{cartCount}</b>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
