# Shopify Pre-Order System ⚡

A dynamic pre-order management system for Shopify stores that enables customers to place orders even when products are out of stock. Features automated redirects and comprehensive inventory management.

## Why Choose This System? 💡

### For Store Owners 📈
- **Capture Lost Sales**: Convert out-of-stock situations into revenue opportunities
- **Improve Cash Flow**: Secure payments upfront before product availability
- **Gauge Demand**: Measure product interest before committing to inventory
- **Reduce FOMO**: Keep customers engaged even when items are temporarily unavailable
- **Better Inventory Planning**: Use pre-order data to optimize stock levels

### For Customers 🛍️
- **Never Miss Out**: Secure desired products before they're in stock
- **Transparent Timeline**: Clear visibility on expected shipping dates
- **Guaranteed Fulfillment**: Priority access to incoming inventory
- **Seamless Experience**: Same checkout process as regular orders
- **Clear Communication**: Automated updates about order status

### For Operations 🔄
- **Streamlined Management**: Automated inventory tracking and updates
- **Reduced Manual Work**: Automatic switching between regular and pre-order modes
- **Organized Fulfillment**: Clear separation between regular and pre-order items
- **Risk Management**: Better control over inventory investments
- **Enhanced Planning**: Improved forecasting capabilities

## Key Features 🎯

- Smart pre-order button activation when inventory depletes
- Advanced shipping date tracking via `pre_order_ship_by_date`
- Seamless switching between standard and pre-order variants
- Native Shopify cart integration
- Robust warehouse inventory management
- Responsive design across all devices
- Optimized performance

## Installation Guide 📦

1. **File Implementation**
   - Add `preorder.js` to your theme's `assets` folder
   - Insert `preorder-button.liquid` into your `snippets` folder
   - Update your `product.liquid` template with pre-order functionality

2. **Metafield Configuration**

| Parameter | Namespace & Key | Type | Description |
|------------|----------------|------|-------------|
| Pre-Order Redirect | `custom.pre_order_product_redirect` | Single line text | Destination path (e.g., `/products/normal-product`) |
| Linked Pre-Order Product | `custom.select_pre_order_product` | Product reference | Associated pre-order product |
| Ship By Date | `custom.pre_order_ship_by_date` | Date | Estimated shipping date |

## Project Structure 📁

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

## Configuration Steps ⚙️

1. **Theme Configuration**
   - Navigate to Shopify Admin → Online Store → Themes
   - Select "Customize" on your active theme
   - Configure settings in the theme editor

2. **Product Configuration**
   - Configure required metafields
   - Set up inventory management
   - Establish shipping timelines

3. **Redirect Implementation**
   - Implement the following snippet:
     ```liquid
     {% render 'preorder-redirect' %}
     ```
   - Configure redirect URL in metafields:
     - Access product settings
     - Set `custom.pre_order_product_redirect` with desired URL
     - Use format: `/products/normal-product`

## System Features 💫

The system provides:
- Automated pre-order button management
- Precise shipping date tracking
- Advanced inventory management
- Seamless redirect handling

## Connect & Collaborate 🤝

Looking to discuss implementation or explore collaboration opportunities?

I'm Gaurang (Gary) Zalariya, specializing in:
- Shopify Development
- Custom Theme Creation
- E-commerce Solutions
- ReactJS & Next.js Implementation
- Figma Design Integration

### Professional Network 🌐
Visit my <a href="https://linktr.ee/gaurangzalariya" target="_blank">Linktree</a> for:
- Portfolio Showcase
- Consultation Booking
- Professional Network
- Direct Communication

## About the Developer 👨‍💻

- **Gaurang Zalariya** - *Frontend Expert | Founder, Wonqy Media | Figma, Shopify, WP, ReactJS, Next.js 🚀*

---

Crafted with precision and excellence ✨