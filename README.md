ShoppingCart
A simple React-based shopping cart application that allows users to browse products, add them to a cart, adjust quantities, and receive a free gift when their cart subtotal exceeds a threshold. This project was built using create-react-app and deployed on Vercel.
Features

Product Listing: Displays a grid of products with names, prices, and an "Add to Cart" button.
Cart Management: Add products to the cart, increase/decrease quantities, and view the subtotal.
Free Gift: Automatically adds a free gift to the cart when the subtotal exceeds ₹1000.
Progress Bar: Shows progress toward earning the free gift.
Responsive Design: Clean, modern UI with a responsive layout for different screen sizes.

Tech Stack

Frontend: React (v18.2.0)
Styling: CSS with Tailwind-inspired design patterns
Build Tool: create-react-app with react-scripts
Deployment: Vercel

Project Structure
ShoppingCart/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── CartItems.jsx
│   │   ├── CartSummary.jsx
│   │   └── ProductList.jsx
│   ├── constants/
│   │   └── constants.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md


src/components/: Contains React components for the product list, cart summary, and cart items.
src/constants/constants.js: Defines static data like products, free gift, and threshold.
src/App.jsx: Main component managing state and rendering child components.
src/App.css, src/index.css: Styles for the app.

Getting Started
Prerequisites

Node.js and npm: Ensure you have Node.js installed (v16 or higher recommended). You can download it from nodejs.org.
Git: Install Git from git-scm.com to clone the repository.

Installation

Clone the Repository:
git clone https://github.com/poojajoshi10/ShoppingCart.git
cd ShoppingCart


Install Dependencies:
npm install

This installs all required packages, including react, react-dom, and react-scripts.

Run the App Locally:
npm start

The app will start on http://localhost:3000 and open in your default browser.


Build for Production
To create a production-ready build:
npm run build

This generates a build/ folder with optimized files.
Deployment
The app is deployed on Vercel. To deploy your own version:

Push to GitHub:

Ensure your code is pushed to a GitHub repository (e.g., github.com/your-username/ShoppingCart).


Deploy to Vercel:

Sign up at vercel.com.
Import your repository in Vercel.
Set the Framework Preset to "Create React App."
Deploy the app. Vercel will provide a URL (e.g., https://shopping-cart.vercel.app).


Automatic Redeploys:

Any push to the main branch will trigger a new deployment on Vercel.



Usage

Add Products: Click "Add to Cart" on a product card to add it to your cart. Clicking again increases the quantity.
View Cart: See your cart items with their quantities and totals. Adjust quantities using the "+" and "–" buttons.
Free Gift: Spend ₹1000 or more to receive a free gift automatically.
Progress Bar: Track your progress toward the free gift threshold.

Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes and commit them (git commit -m "Add your feature").
Push to your branch (git push origin feature/your-feature).
Open a Pull Request.

License
This project is licensed under the MIT License. See the LICENSE file for details.
Acknowledgments

Built as a learning project to practice React state management and component design.
Inspired by common e-commerce UI patterns.

