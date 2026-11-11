# Requirements Specification

## Functional requirements
| ID | Requirement | Expected behaviour |
|---|---|---|
| FR-01 | Shared navigation | Navigation remains visible on every route. |
| FR-02 | Browse catalogue | Visitors can view sample products. |
| FR-03 | Search | Search matches product name, brand and category. |
| FR-04 | Category filter | Visitors can select a product category. |
| FR-05 | Price filter | Visitors can set a maximum product price. |
| FR-06 | Sorting | Sort by featured, price or rating. |
| FR-07 | Product details | Show description, specifications, seller and sample stock. |
| FR-08 | Cart | Add, remove and change product quantities. |
| FR-09 | Wishlist | Save and remove favourite products. |
| FR-10 | Seller contact | Open an email draft addressed to the sample seller. |
| FR-11 | Contact page | Validate basic fields and open an email draft. |
| FR-12 | Responsive layout | Layout adapts to mobile, tablet and desktop. |

## Non-functional requirements
- Use reusable React components and organised files.
- Use semantic HTML and accessible button labels.
- Provide clear interaction feedback.
- Avoid horizontal overflow on narrow screens.
- Keep animations purposeful and respect reduced-motion preferences.
- Use client-side routing with deployment rewrite support.

## Constraints
Product and seller data are sample data. Cart and wishlist use browser local storage. Email links require an email application. There is no backend or payment processing.
