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

**Grocery Express** is an online marketplace providing a platform to offer online order for in store pick-up and payment, adding convenience and connecting local markets to customers who may prefer online shopping to in store for time savings and/or health reasons.

<br>

## MVP

The **Grocery Express** will take a client's grocery inventory and render it by category for users. Users will be able to browse all items without an account, allowing the market to showcase their offerings to a customers beyond existing users. Potential users are able to then create an account and begin adding things to their shopping cart. Existing users will have the ability to log in to create and update orders not sent. Items in a cart may be edited by quantity or deleted. Once the order is complete the users submit it to the store where it will be prepared for in store pick-up and payment. 

<br>

### Goals

- _Render inventory listed out by category: Produce, Meat, Seafood, Grocery, Dairy, Frozen_
- _User authentication_
- _User shopping cart for orders_
- _Full CRUD for the shopping cart_

### Challenges

- _Shopping cart_
  - _initialization timing_ 
  - _dynamic quantity update_
  - _update persistence with page navigation and reflecting that in the UI_ 

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                                  |
| :--------------: | :----------------------------------------------------------- |
|      React       | _A JavaScript library for creating user interfaces_          |
|   React Router   | _Declarative routing for React_                              |
| React Router DOM | _DOM bindings for React Router_                              |
|      Axios       | _Promise based HTTP client for the browser and node.js_      |
|     Node.js      | _JavaScript runtime_                                         |
|  Ruby on Rails   | _Server-side MVC framework used for the back end_            |
|     bcrypt       | _A simple wrapper for safely hashing and handling passwords_ |
|      JWT         | _Ruby implementation of the RFC 7519 OAuth JWT_              |

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

#### Component Tree

[Component Tree Sample](https://gist.git.generalassemb.ly/davidtwhitlatch/414107e2560ae0bb65e233570f2fe056#file-component-tree-png)

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
|__ services/

```

#### Time Estimates

| Task                         | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------------------- | :------: | :------------: | :-----------: | :---------: |
| Back-end architecture        |    H     |     6 hrs      |         |       |
| Seed Data                    |    H     |     2 hrs      |         |          |
| React component architecture |    H     |     8 hrs      |         |          |
| Back-end Route testing       |    H     |     1 hrs      |         |          |
| Front-end Route testing      |    H     |     1 hrs      |         |          |
| Shopping cart CRUD logic     |    H     |     6 hrs      |         |          |
| CSS                          |    H     |     16 hrs      |         |          |
| TOTAL                        |          |     42 hrs      |         |         |

<br>

### Server (Back End)

#### ERD Model

![ERD Sample](https://github.com/ktbg/grocery-express/blob/main/images/P4_ERD_v.2.png)
<br>

***

## Post-MVP

- _Contact form for users to ask questions to the grocer_
- _admin acces to edit and delete products_

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
