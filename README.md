# Planterra
#### Live Demo: https://frontend-olara7.vercel.app/

![planterra](https://user-images.githubusercontent.com/54912970/184286507-d90eae3b-ea77-40aa-8304-1a7b9da3bfde.PNG)

![planterra checkout test](https://user-images.githubusercontent.com/54912970/184292395-54ed6586-e7cb-4982-b4c0-56067a5af089.PNG)


This is a project built mainly to get experience using a CMS and building an e-commerce site.

Features:
- Sign up and Sign in with or without google
- Browse products
- Add products to cart
- Cart items will remain after refresh
- Checkout with Stripe
- Promotion codes
- Desktop and Mobile design
- Designed in Figma
- Interactive background using particle js
- Small animations using Framer Motion

### Figma File: https://www.figma.com/file/sK5FDR08ZXW7Dz9Apdx7E9/Untitled?node-id=0%3A1

This figma file includes inspo sections, main design and possible different designs. 
They also include mobile designs with each design.

Techonology Used:
- Styled Components - css framework
- React JS
- Next JS - SSR (good for e-commerce sites because of SEO , routing)
- Framer Motion - small animations
- Strapi - Headless CMS
- Auth0 - Simple, authentication and authorization
- stripe - Handle payments
- Cloudinary - Optimize images
- GraphQL - query language for APIs
- Postgres DB - storing products

### Things I learned:
- First time using Styled Components - liked the way it organizes css.
- First time using Framer Motion - enjoyed the small animations that can make a website stand out
- First time using a headless CMS like Strapi - liked the ability to add, edit and remove items quickly
- First time using auth0 - have used database, jwt token and firebase, but liked the simplicity of auth0
- First time using cloudinary - integrates well with strapi and can increase perfomance by optimizing images
- First time using Stripe - like the customizability, use EARTHDAY at checkout for 15% discount
- Learned how to create a cart component and keeping the items after a refresh by using local storage.
- React Context
- First time using react particles - easy to implement and customize
- Learned how to to use e.stopPropagation(). Used in cart component to be able to click only the outside of the cart to toggle the cart component. Clicks inside the cart area will not toggle the cart.
- Learned how to deploy on vercel.
- Nextjs takes care of routing, otherwise, you have to install react routing.
- How to self host fonts by using google web fonts helper to download them to increase performance.

### To Do / Improvements:
- Add more animations
- Add send abandoned cart emails
- Add PayPal
- Change Hero Section button color to something with more contrast (like figma file)
- Hero Section button scrolls to products
- Might disable react particles on mobile and / or limit it to the hero section only on desktop
- Small design changes like coloring a word on the landing page and increasing line height on the header landing page.

### To Fix / Known Bugs:
- Fix cart showing as empty after reload, but clicking it will load the items again
- Fix guest checkout (possible strapi connection error)
- Make success page mobile friendly
