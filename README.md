# Grocery Express

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**Grocery Express** is an online marketplace providing a platform for users to view and rate foods. 
<br>

## MVP

Server (Back End)
- _Implement working generic controllers for full CRUD_
- _Database with minimum 3 tables_
- _Ruby on Rails server exposing RESTful JSON endpoints_

Client (Front End)
- _Have a working interactive React app built using `npx create-react-app`_
- _Minimum 8 components and organized file structure_
- _Consume data from the Ruby on Rails API and render that in the components_
- _Utilize React-Router for client-side routing_
- _Demonstrate full CRUD actions (`index`, `show`, `create`, `update`, and `delete`) on the front end_
- _Be styled with CSS and use flexbox or grid_
- _Minimum 2 media queries for responsive design on three screen sizes_

<br>

### Goals

- _Render inventory listed out by category: Produce, Meat, Seafood, Grocery, Dairy, Frozen_
- _User authentication_
- _Full CRUD for user ratings_

### Challenges

- _Database seed file build_
- _Ratings CRUD_

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                                  |
| :--------------: | :----------------------------------------------------------- |
| React       | _A JavaScript library for creating user interfaces_          |
| React Router   | _Declarative routing for React_                              |
| Material Icons  | _Ready to use React icons_                                   |
| Axios       | _Promise based HTTP client for the browser and node.js_      |
| Ruby on Rails   | _Server-side MVC framework used for the back end_            |
| bcrypt       | _A simple wrapper for safely hashing and handling passwords_ |
| JWT         | _Ruby implementation of the RFC 7519 OAuth JWT_              |
| PostgreSQL      | _Open source object-relational database_              |

<br>

### Client (Front End)

#### Wireframes

- Desktop Landing

![Home](https://github.com/ktbg/grocery-express/blob/main/Images/Home3.png)

- Tablet Landing

![Tablet Home](https://github.com/ktbg/grocery-express/blob/main/Images/Home%20iPad%20Pro%2011_3.png)

- Mobile Landing

![Dummy Link](https://github.com/ktbg/grocery-express/blob/main/Images/Home%20-%20mobile2.png)

- Desktop Product Category

![Dummy Link](https://github.com/ktbg/grocery-express/blob/main/Images/Category3.png)

- Desktop Item Details

![Dummy Link](https://github.com/ktbg/grocery-express/blob/main/Images/Item%20Detail2.png)

- Desktop User Form

![Dummy Link](https://github.com/ktbg/grocery-express/blob/main/Images/Sign%20Up.png)


[Full Figma Wireframes](https://www.figma.com/file/kKXgk3BB49IpxAoZC2IqDG/grocery-express?node-id=0%3A1)

#### Component Tree

![Grocery Express Component Tree](https://github.com/ktbg/grocery-express/blob/main/Images/Grocery%20Express.png)

#### Component Architecture

``` structure

src
|__ assets/
      |__ product_images
          |__ produce
          |__ meat
          |__ seafood
          |__ frozen
          |__ grocery
          |__ dairy
|__ components/
      |__ Nav.jsx
      |__ NavLoggedIn.jsx
      |__ NavLoggedOut.jsx
      |__ Burger.jsx
      |__ Menu.jsx
      |__ Footer.jsx
      |__ Button.jsx
      |__ ProductCard.jsx
      |__ StarRating.jsx
|__ containers/
      |__ MainContainer.jsx
|__ screens/
      |__ Home.jsx
      |__ Category.jsx
      |__ ItemDetails.jsx
      |__ Register.jsx
      |__ Login.jsx
|__ layouts/
      |__ Layout.jsx
|__ services/
      |__ apiConfig.js
      |__ categories.js
      |__ products.js
|__ App.js
|__ Index.js
```

#### Time Estimates

| Task                         | Priority | Estimated Time | Time Invested |
| ---------------------------- | :------: | :------------: | :-----------: |
| Back-end authentication      |    H     |     3 hrs      |     2 hrs    |       
| Back-end database set-up     |    H     |     4 hrs      |     2 hrs    |       
| Seed Data                    |    H     |     2 hrs      |    6 hrs     |          
| React file structure         |    H     |     2 hrs      |    2 hrs     |          
| Front End user auth          |    H     |     2 hrs      |    1 hr     |         
| Front product rendering      |    H     |     1 hrs      |         |          
| Star rating CRUD logic       |    H     |     3 hrs      |         |          
| Back-end Route testing       |    H     |     .5 hrs      |         |          
| Front-end Route testing      |    H     |     .5 hrs      |         |          
| CSS products page            |    H     |     2 hrs      |         |          
| CSS details page            |    H     |     2 hrs      |         |          
| CSS user forms pages        |    H     |     4 hrs      |         |          
| CSS home page                |    H     |     4 hrs      |         |          
| Shopping cart render logic   |    L   |     3 hrs      |         |          
| Shopping cart add logic      |    L   |     1 hrs      |         |          
| Shopping cart edit logic      |    L   |     5 hrs      |         |          
| Shopping cart nav logic       |    L     |     3 hrs      |         |          
| TOTAL                        |          |     42 hrs      |    10 hrs     |         

<br>

### Server (Back End)

#### ERD Model

![ERD Sample](https://github.com/ktbg/grocery-express/blob/main/Images/P4_ERD_v.6.png)
<br>

***

## Post-MVP

- _Shopping cart_
- _Show average rating on item details_
- _Contact form for users to ask questions to the grocer_
- _Admin acces to edit and delete products_
- _Modal to ask users not logged in to login or sign up_

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
