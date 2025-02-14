# Shopify Pre-Order System 🚀

A powerful and flexible pre-order management system for Shopify stores that enables customers to pre-order out-of-stock products with estimated shipping dates. The system includes features for automatic product redirection and warehouse stock separation.

## ✨ Features

- 🔄 Automatic pre-order button display for out-of-stock variants
- 📅 Customizable estimated shipping dates via metafields
- 🔀 Smart redirection between pre-order and regular products
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
| Pre-Order Status | `custom.is_preorder_product` | Boolean | Identifies pre-order products |
| Ship Date | `custom.pre_order_ship_by_date` | Date | Expected shipping date |
| Redirect URL | `custom.pre_order_product_redirect` | Single line text | Regular product URL |
| Custom Message | `custom.pre_order_message` | Single line text | Pre-order notification text |
| Warehouse Type | `custom.warehouse_inventory_type` | Single line text | Stock type (`preorder`/`normal`) |

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

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support, please:
- Check the [Installation Guide](docs/installation-guide.md)
- Open an issue in the repository
- Contact Shopify support for store-specific questions

## ✍️ Authors

- **Gaurang Zalariya** - *Initial work*

---

Made with ❤️ for Shopify stores