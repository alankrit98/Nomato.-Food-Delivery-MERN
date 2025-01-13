# Food Delivery Site

A responsive and interactive Food Delivery Site designed to provide users with a seamless experience for browsing, ordering, and managing food deliveries.

## Features

1. **User Authentication**
   - Sign up, log in, and secure authentication using tokens.

2. **Dynamic Menu**
   - View a wide range of food items with details such as name, description, and price.

3. **Cart Management**
   - Add, remove, and modify items in the cart.
   - View total cost and item quantity.

4. **Order Verification**
   - Verify and confirm orders after successful payment.

5. **Order History**
   - Track past orders and view order details in the "My Orders" section.

6. **Admin Panel**
   - Change and review the status of orders.
   - View details of users who made orders.

7. **Payment Integration**
   - Integration with payment gateway to process orders.

## Technologies Used

### Frontend
- **React.js**: For building the user interface.
- **React Router**: For seamless navigation.
- **Axios**: For API calls.
- **CSS**: For styling the application.

### Backend
- **Node.js**: Server-side runtime environment.
- **Express.js**: Backend framework for API development.
- **MongoDB**: Database for storing user data, orders, and menu items.

### Admin Panel
- **React.js**: For creating an admin dashboard.
- **Axios**: For API communication.
- **CSS**: For styling the admin interface.

### Additional Tools
- **Vite**: Development server and build tool for React.
- **Toastify**: For notifications and alerts.

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js (v14 or above)
- MongoDB

### Steps to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/food-delivery-site.git
   ```

2. Navigate to the project directory:
   ```bash
   cd food-delivery-site
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up the environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=4000
   MONGO_URI=mongodb://localhost:27017/food-delivery
   JWT_SECRET=your_jwt_secret
   CLIENT_URL=http://localhost:5173
   ```

5. Start the backend server:
   ```bash
   npm run server
   ```

6. Start the frontend:
   ```bash
   npm run dev
   ```

7. Start the admin panel:
   Navigate to the `admin` folder and run:
   ```bash
   npm install
   npm start
   ```

8. Open the application in your browser:
   ```
   http://localhost:5173
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Log in a user.

### Menu
- `GET /api/food/list`: Fetch the list of available food items.

### Cart
- `POST /api/cart/add`: Add an item to the cart.
- `POST /api/cart/remove`: Remove an item from the cart.
- `POST /api/cart/get`: Retrieve the current cart data.

### Orders
- `POST /api/order/verify`: Verify the order after payment.
- `GET /api/order/list`: Fetch the list of past orders.
- `GET /api/admin/orders`: Fetch all orders (Admin only).
- `POST /api/admin/orders/update`: Update order status (Admin only).

## Folder Structure
```
food-delivery-site/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar/
│   │   │   ├── Cart/
│   │   │   └── Order/
│   │   ├── pages/
│   │   │   ├── Home/
│   │   │   ├── Orders/
│   │   │   └── Verify/
│   │   ├── context/
│   │   │   └── StoreContext.js
│   │   ├── App.jsx
│   │   └── index.jsx
│   ├── package.json
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
├── admin/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   ├── package.json
├── .env
└── README.md
```

## Future Enhancements
- Add live order tracking.
- Implement user reviews and ratings.
- Support multiple payment methods.
- Mobile app integration.

## License
This project is licensed under the [MIT License](LICENSE).

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

