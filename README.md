# Shopify Pre-Order System - No Cap! 🔥

Yo! This is a super lit pre-order system for your Shopify store that lets customers secure the bag even when products are OOS (out of stock). It's giving main character energy with automatic redirects and warehouse management - fr fr! 

## The Tea ☕ (Features)

- Automatically shows that pre-order button when stuff's sold out - period! 🎯
- Tracks shipping dates like a boss using `pre_order_ship_by_date` 📅
- Switches between regular and pre-order versions - smooth like butter 💅
- Slides right into your Shopify cart - zero drama! 🛒
- Keeps your warehouse inventory organized and hitting different 📦
- Looks fire on every device - that's just facts! 📱
- Fast AF - we don't do lag in this house ⚡

## How to Get This Bread 🍞 (Installation)

1. **Drop These Files (They're Giving!)**
   - Yeet `preorder.js` into your theme's `assets` folder
   - Slide `preorder-button.liquid` into your `snippets` folder
   - Level up your `product.liquid` template with that pre-order magic

2. **Set Up Those Metafields (Trust the Process)**

| Vibe Check | Namespace & Key | Type | The 411 |
|------------|----------------|------|----------|
| Pre-Order Redirect | `custom.pre_order_product_redirect` | Single line text | Where to send the main character (e.g., `/products/normal-product`) |
| Linked Pre-Order Product | `custom.select_pre_order_product` | Product reference | Pick your pre-order bestie |
| Ship By Date | `custom.pre_order_ship_by_date` | Date | When this bad boy's gonna ship |

## The Blueprint 🗺️ (File Structure)

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

## Pop Off King/Queen 👑 (Configuration)

1. **Theme Settings (Let's Get This Party Started)**
   - Hit up Shopify Admin → Online Store → Themes
   - Smash that "Customize" button on your active theme
   - Make it yours in the theme editor

2. **Product Setup (No Skips)**
   - Get those metafields looking right
   - Set up your warehouse game
   - Drop those shipping dates

3. **Redirect Setup (It's Giving Professional)**
   - Copy this snippet (it's fire):
     ```liquid
     {% render 'preorder-redirect' %}
     ```
   - Set that redirect URL in your metafields like:
     - Pull up to product settings
     - Drop that `custom.pre_order_product_redirect` with your URL
     - Format it like `/products/normal-product` and you're gucci

## The Vibes ✨ (Usage)

This system's got your back and:
- Throws up pre-order buttons when stock's ghosted
- Keeps it 💯 with shipping dates
- Manages inventory like a whole CEO
- Handles those redirects on fleek

## Let's Link! 🤝

Need help or wanna collab? I gotchu fam!

It's ya boi Gaurang (Gary) Zalariya, and I'm out here:
- Slaying Shopify Development
- Creating Custom Themes That Hit Different
- Building E-commerce Solutions That Pop Off
- Going Hard with ReactJS & Next.js
- Making Figma Designs Look Extra Spicy

### Pull Up To My Socials 🌟
Hit my <a href="https://linktr.ee/gaurangzalariya" target="_blank">Linktree</a> for:
- The Portfolio (Straight Fire)
- Meeting Bookings (Let's Talk!)
- All The Socials (We Active)
- Slide in the DMs (Respectfully)

## The Creator 🎨

- **Gaurang Zalariya** - *🚀 Frontend Expert | Founder, Wonqy Media | Figma, Shopify, WP, ReactJS, Next.js*

---

Built Different, With Love 💅✨