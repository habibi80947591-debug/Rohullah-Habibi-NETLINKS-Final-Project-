# System Models and User Flows

## High-level architecture
```text
Visitor
  |
  v
React application (Vite)
  +-- React Router: Home / Marketplace / Product / Cart / Wishlist / About / Contact
  +-- Sample product catalogue
  +-- Store context
        +-- Cart state -> browser local storage
        +-- Wishlist state -> browser local storage
        +-- Notification feedback
```

## Browse and seller enquiry
1. Visitor opens the marketplace.
2. Visitor searches, filters or sorts sample listings.
3. Visitor opens a product detail page.
4. Visitor reviews description and sample specifications.
5. Visitor selects Contact Seller.
6. Browser opens an email draft for the sample seller.

## Cart
1. Visitor adds a product.
2. Cart count and notification update.
3. Visitor changes quantity or removes an item.
4. Subtotal recalculates.
5. Checkout button displays a demo-only notice.

## Wishlist
1. Visitor selects a product heart icon.
2. Product ID is added to or removed from wishlist state.
3. Wishlist persists in local storage.
4. Visitor opens Wishlist to review saved items.
