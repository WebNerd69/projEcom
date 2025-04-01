# E-Commerce Website

## Overview
This is a full-stack e-commerce website built with modern web technologies. The platform provides a seamless shopping experience for users while offering robust management tools for administrators.

## Description
This e-commerce platform is designed to provide a complete online shopping solution. It offers an intuitive user interface for customers to browse products, make purchases, and manage their accounts. The backend is built with a robust architecture that handles user authentication, product management, order processing, and secure payment integration through Razorpay.

The website features responsive design principles, ensuring a seamless experience across desktop and mobile devices. Administrators have access to a powerful dashboard with comprehensive tools for inventory management, order fulfillment, and business analytics.

With secure user authentication, cloud-based image storage, and a scalable database structure, this platform is built to accommodate growing business needs while maintaining performance and security.



## Features

### Customer Features
- User authentication and profile management
- Product browsing with search and filter capabilities
- Shopping cart functionality
- Secure checkout process with Razorpay integration
- Order tracking and history

### Admin Features
- Comprehensive dashboard for monitoring sales and user activity
- Product management (add, edit, delete)
- Order management and fulfillment
- User management

## Technology Stack

### Frontend
- React.js
- Redux for state management
- Tailwind CSS for styling and responsive design
- Responsive design for all devices

### Backend
- Node.js with Express
- MongoDB for database
- JWT for authentication
- Cloudinary for image storage

## Environment Variables
The application requires the following environment variables:
- `MONGODB_URI`: MongoDB connection string
- `CLOUDINARY_NAME`, `COUDINARY_API_KEY`, `CLOUDINARY_SECRET_KEY`: Cloudinary credentials for image storage
- `JWT_SECRET`: Secret key for JWT authentication
- `ADMIN_EMAIL`, `ADMIN_PASSWORD`: Admin login credentials
- `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`: Razorpay payment gateway API keys

## Installation and Setup

1. Clone the repository
2. Install dependencies for both frontend and backend:
   ```
   cd frontend && npm install
   cd ../backend && npm install
   ```
3. Set up environment variables in backend/.env
4. Start the development servers:
   ```
   # Backend
   cd backend && npm run dev
   
   # Frontend
   cd frontend && npm start
   ```

## Deployment
The application can be deployed using platforms like Heroku, Vercel, or AWS.

## License
MIT

## Contact
For any inquiries, please reach out to the project maintainer.
