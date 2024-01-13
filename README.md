# **Pizza-shop App**

## **App description:**

The application is based on **_Reactjs_** with **_TypeScript_** + **_Redux Toolkit_**.
It is an online pizza shop.

### **main page**

There is a pizza catalog on the main page, where they can be sorted by category, in ascending / descending order of characteristics and searched by name and description.
All product data is stored on the resource **_mockapi.io_**.
The catalog has a numeral pagination.
For each pizza you can choose the parameters - the thickness of the dough and its diameter.
The price of the chosen product depends on the selected characteristics.

### **product card**

Each pizza has a product card with its own endpoint, where you can find a description and can select parameters and add an item to the cart.

### **cart and payment**

The selected items are added to the shopping cart, where you can also decrease / increase the number of specific pizzas, remove it from the cart, and completely empty the cart.
I used a **_stripe.com_** service for fake payments of chosen goods.
Before paying you can apply bonuses that are deducted from the order amount (bonuses are available only to authorized users).
After a successful purchase, you are redirected to a page with a random order number, and you also receive bonus points for the purchase (if the you were logged in).

### **login and auth**

Authorization and registration works using **_Firebase Auth_** service via login and password. These input fields are checked for **_validity_**.
All users, their carts and bonus points are still saved in localStorage.

### **misc**

Also in the footer of the site there is a link "about the company" with contacts and an online map of offices locations (made by using **_mapbox.com_**).

## **The following basic skills have been worked out:**

1. Using the useState, useEffect, useRef and other hooks;
2. Using onClick and onSubmit events on elements;
3. Import icons, libraries, hooks and components;
4. Using conditional rendering with the ternary operator;
5. Working with props and context;
6. Using data fetching;
7. Using Redux Toolkit for for storing site data;
8. Using a TypeScript;
9. Using Firebase auth for login and registration and Firestore database - for storing its data;
10. Using a page routing with endpoints;
11. Making adaptations for different screens;
12. Using a <Skeleton/> components as a content loader;
13. Creating and using a custom hooks;
14. Sorting and searching for items using query params of URL.
15. Storing and processing data from localStorage;
16. Creating a shopping cart and its management;
17. Using a payment system to pay for goods;
18. Using layouts of Components;
19. Making of adaptation to any screen size;