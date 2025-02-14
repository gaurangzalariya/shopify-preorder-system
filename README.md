# Shopify Pre-Order System 🚀

A powerful and flexible pre-order management system for Shopify stores that enables customers to pre-order out-of-stock products with estimated shipping dates. The system includes features for automatic product redirection and warehouse stock separation.

## ✨ Features

- 🔄 Automatic pre-order button display for out-of-stock variants
- 📅 Estimated shipping dates tracking via `pre_order_ship_by_date`
- 🔀 Smart product redirection system between pre-order and regular versions
- 🛒 Seamless integration with Shopify AJAX Cart
- 🏭 Warehouse inventory separation for pre-orders
- 📱 Fully responsive design
- ⚡ Performance optimized

## 🛠️ Installation

1. **Upload Required Files**
   - Copy `preorder.js` to your theme's `assets` folder
   - Add `preorder-button.liquid` to your theme's `snippets` folder
   - Update your `product.liquid` template with the pre-order functionality

2. **Configure Metafields**

| Metafield | Namespace & Key | Type | Description |
|-----------|----------------|------|-------------|
| Pre-Order Redirect | `custom.pre_order_product_redirect` | Single line text | URL of the normal product for redirection (e.g., `/products/normal-product`) |
| Linked Pre-Order Product | `custom.select_pre_order_product` | Product reference | Select the pre-order version of this product |
| Ship By Date | `custom.pre_order_ship_by_date` | Date | Expected shipping date for pre-order items |

## 📁 File Structure

```
shopify-preorder-system/
├── assets/
│   └── preorder.js
├── snippets/
│   ├── preorder-button.liquid
│   └── preorder-redirect.liquid
├── templates/
│   └── product.liquid
├── docs/
│   └── installation-guide.md
└── README.md
```

## 🔧 Configuration

1. **Theme Settings**
   - Navigate to Shopify Admin → Online Store → Themes
   - Click "Customize" on your active theme
   - Configure pre-order settings in the theme editor

2. **Product Setup**
   - Set up required metafields for each product
   - Configure warehouse inventory settings
   - Set estimated shipping dates

3. **Redirect Setup**
   - Include the redirect snippet in your product template:
     ```liquid
     {% render 'preorder-redirect' %}
     ```
   - Add the redirect URL in product metafields:
     - Go to product settings
     - Set `custom.pre_order_product_redirect` metafield with the normal product URL
     - Format: `/products/normal-product`

## 💡 Usage

The pre-order system automatically:
- Displays pre-order buttons for out-of-stock items
- Shows estimated shipping dates
- Manages inventory separately for pre-orders
- Handles redirections between product variants

## 📞 Contact & Support

Need help with this pre-order system or looking for Shopify development services?

I'm Gaurang (Gary) Zalariya, a Frontend Expert specializing in:
- Shopify Development
- Custom Theme Development
- E-commerce Solutions
- ReactJS & Next.js
- Figma & Web Design

### 🔗 Connect With Me
Visit my [Linktree](https://linktr.ee/gaurangzalariya) for:
- Portfolio & Work Samples
- Booking Meetings
- Social Media Profiles
- Direct Messaging Options

## ✍️ Authors

- **Gaurang Zalariya** - *🚀 Frontend Expert | Founder, Wonqy Media | Figma, Shopify, WP, ReactJS, Next.js*

---

Made with ❤️ for Shopify stores