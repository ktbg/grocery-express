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

[Grocery Express Live Demo](https://grocery-express.netlify.app/)
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

|     Library      | Description                                                  |
| :--------------: | :----------------------------------------------------------- |
| React       | _A JavaScript library for creating user interfaces_          |
| React Router   | _Declarative routing for React_                              |
| React Router Hash Link   | _Package allowing scrolling to hash fragments in links_ |
| Material Icons  | _Ready to use React icons_                                   |
| React Transition Group  | _CSS Transition handler for React components_ |
| Axios       | _Promise based HTTP client for the browser and node.js_      |
| Ruby on Rails   | _Server-side MVC framework used for the back end_            |
| bcrypt       | _A simple wrapper for safely hashing and handling passwords_ |
| JWT         | _Ruby implementation of the RFC 7519 OAuth JWT_              |
| PostgreSQL      | _Open source object-relational database_              |

<br>

### Client (Front End)

#### Wireframes

These wireframes include MVP and postMVP designs. Information on which items are postMVP can be found in the [ERD Model](#erd-model). 

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
          |__ Produce
          |__ Meat
          |__ Seafood
          |__ Frozen
          |__ Grocery
          |__ Dairy
|__ components/
      |__ Burger.jsx
      |__ Button.jsx
      |__ CategoryBox
      |__ Footer.jsx
      |__ Menu.jsx
      |__ Navbar
          |__ Nav.jsx
          |__ NavLoggedIn.jsx
          |__ NavLoggedOut.jsx
      |__ Product.jsx
      |__ ProductCard.jsx
      |__ ProductDetailCard.jsx
      |__ ProductDetailsButton.jsx
      |__ StarRating.jsx
|__ containers/
      |__ MainContainer.jsx
|__ screens/
      |__ Home.jsx
      |__ CategoryDetails.jsx
      |__ Login.jsx
      |__ ProductDetails.jsx
      |__ Register.jsx
|__ layouts/
      |__ Layout.jsx
|__ services/
      |__ api-config.js
      |__ auth.js
      |__ categories.js
      |__ products.js
      |__ star-ratings.js
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
| React screens                |    H     |     4 hrs      |    2 hrs     | 
| React components           |    H     |     8 hrs      |    6 hrs     |         
| Front end user auth          |    H     |     2 hrs      |    1 hr     |         
| Front end product rendering      |    H     |     1 hrs      |   4 hrs      |          
| Star rating CRUD logic       |    H     |     3 hrs      |    4 hrs     |          
| Back-end Route testing       |    H     |     .5 hrs      |    .5 hrs     |          
| Front-end Route testing      |    H     |     .5 hrs      |    2 hr s  |          
| CSS products page            |    H     |     2 hrs      |     4 hrs    |          
| CSS details page            |    H     |     2 hrs      |       8 hrs |          
| CSS user forms pages        |    H     |     4 hrs      |    2 hrs     |          
| CSS home page                |    H     |     4 hrs      |    6 hrs    |          
| Shopping cart render logic   |    L   |     3 hrs      |         |          
| Shopping cart add logic      |    L   |     1 hrs      |         |          
| Shopping cart edit logic      |    L   |     5 hrs      |         |          
| Shopping cart nav logic       |    L     |     3 hrs      |         |          
| TOTAL                        |          |     54 hrs      |    51.5 hrs     |         

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

#### Star Ratings

I chose to code this piece by hand versus installing a library to further my learning. The code idea came from [this YouTube video by Eric Murphy](https://www.youtube.com/watch?v=eDw46GYAIDQ). I chose to use an MUI star component instead of Font Awesome to better match the design aesthetic and also to get some practice with MUI icons which were new to me for this project. 

```jsx
 {[...Array(5)].map((star, index) => {
      const ratingValue = index + 1;
      return (
            <label key={index}>
            <input
            type="radio"
            name="rating"
            value={ratingValue}
            onClick={(e) => handleClick(e)}
            />
            <StarRateIcon
            sx={{
            color:
                  ratingValue <= (hover || newRating) ? "red" : "#C4C4C4",
            }}
            ratingValue={ratingValue}
            onMouseEnter={() => active && setHover(ratingValue)}
            onMouseLeave={() => active && setHover(null)}
            />
            </label>
      );
})}
```

## Code Issues & Resolutions

#### Images did not render from assets folder

- _used `<img src={require(asset pathname).default}>` to successfully render in the CategoryDetails.jsx component_

#### Star ratings did not load initial user rating if it existed, delete did not show corrected rating on screen

- _examined state through the StarRating.jsx and ProductDetailCard.jsx finding state was set in ProductDetailCard.jsx useEffect before the StarRating.jsx handleClick_
- _changed from using a formData state to creating a data object based on available state to pass to the create and update functions without waiting for a state update within the component, instead triggering a state change in the higher level component (MainContainer.jsx), re-rendering the StarRatings.jsx component to correctly show the user rating_
