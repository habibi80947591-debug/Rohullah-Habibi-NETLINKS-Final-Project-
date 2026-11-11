# RohTech — Electronics Marketplace

**Project owner:** Rohullah Habibi  
**Project type:** Academic React marketplace demonstration  
**Stack:** React 18, Vite, React Router, Motion for React, Lucide React

RohTech is a responsive electronics marketplace concept. Visitors can browse sample products, search and filter listings, view product details, save favourites, manage a cart and contact the listed demo seller.

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Deploy
1. Push this project to a GitHub repository.
2. Import that repository into Vercel.
3. Framework: Vite; Root: `./`; Build command: `npm run build`; Output: `dist`.
4. `vercel.json` includes a rewrite for React Router page refreshes.

## Main features
- Responsive shared navigation and footer on every route.
- Animated homepage and page transitions using Motion for React.
- Marketplace search, category and price filters, and sorting.
- Product detail pages with sample specifications; Contact Seller routes to the shared Contact page with the selected product, seller and enquiry prefilled.
- Cart quantity controls, item removal and subtotal calculations.
- Wishlist persisted in browser local storage.
- Contact page with basic form validation and product-specific seller enquiry routing.
- Sticky shared navigation that remains visible across routes and works on mobile.
- Documentation for proposal, requirements, system flows and testing.

## Demo limitations
Product listings, seller names, ratings, inventory and email addresses are sample data. Seller addresses use `.example` placeholders and must be replaced with approved public business contacts before real use. Contact Seller opens the Contact page with the selected product and seller prefilled; submitting the form opens the visitor's email application. No message is sent by a backend. Checkout is a demonstration only and does not process payments. There is no authentication, payment gateway, order database or seller dashboard.
