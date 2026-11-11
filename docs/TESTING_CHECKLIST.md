# Testing Checklist

| Test | Action | Expected result |
|---|---|---|
| 01 | Open `/` | Home loads with shared navigation and footer. |
| 02 | Open each navigation link | Correct page appears. |
| 03 | Open `/marketplace` | Product catalogue appears. |
| 04 | Search for a product or brand | Matching results appear. |
| 05 | Select a category | Only matching products appear. |
| 06 | Change maximum price | Products above the limit are hidden. |
| 07 | Change sort order | Products reorder correctly. |
| 08 | Open a product | Correct detail information appears. |
| 09 | Add product to cart | Cart count and subtotal update. |
| 10 | Refresh after adding to cart | Cart remains in browser storage. |
| 11 | Change quantity | Subtotal recalculates. |
| 12 | Save wishlist item and refresh | Wishlist remains saved. |
| 13 | Select Contact Seller | Email app opens a draft to sample seller. |
| 14 | Resize to mobile width | Navigation and content remain usable. |
| 15 | Run `npm run build` | Vite production build completes. |

## Before presentation
- Replace placeholder seller emails if real seller contact is required.
- Check external product image URLs while connected to the internet.
- Explain that checkout and messaging are demo-only.
- Run the production build before deployment.

- [ ] Shared navigation remains visible on Home, Marketplace, Product Details, Cart, Wishlist, About and Contact.
- [ ] Mobile navigation opens, closes after a link is selected, and exposes its expanded state.
- [ ] Contact Seller on a product detail page opens `/contact?product=<product-id>` and pre-fills the selected seller, product, subject and message.
- [ ] Submitting a seller enquiry opens an email draft addressed to that product listing's configured seller email.
