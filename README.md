# Ebuy Shop

A Next.js storefront for Ebuy (homeware, glassware and more). Customers browse products, add them to a cart, and click **Buy Now on WhatsApp** to send their order to Ebuy as a pre-filled WhatsApp message.

## Run it

```bash
npm install
cp .env.example .env.local   # then edit the number inside
npm run dev                  # http://localhost:3000
```

In `.env.local`, set Ebuy's WhatsApp number with country code and digits only:

```
NEXT_PUBLIC_WHATSAPP_NUMBER=94771234567
```

## Customize

- **Products**: edit `data/products.js` (name, price, category, description). For real photos, put images in `public/products/` and add `image: "/products/your-file.jpg"` to a product.
- **Categories**: edit the `categories` list in `data/products.js`.
- **Currency/format**: `formatPrice` in `data/products.js`.
- **WhatsApp message**: `lib/whatsapp.js`.
- **Colors**: CSS variables at the top of `app/globals.css`.

## Deploy

Push to GitHub and import the repo in Vercel (free tier works). Add `NEXT_PUBLIC_WHATSAPP_NUMBER` under the project's Environment Variables.

## Project layout

```
app/            pages (home, product detail, cart) and global styles
components/     Header, ProductCard, ProductGrid, AddToCartButton, CartProvider
data/           product catalog
lib/            WhatsApp order message and link builder
```
