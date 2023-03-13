# MVP User Stories

---

## User Story 1: Basic Pages

## User Story 1.1: Landing Page

### Value Proposition

As an potential customer
I want to see a landingpage
So that I have the most important information of the restaurant

### Acceptance Criteria

- [ ] A Logo and a NavBar is shown at the top as a header component
- [ ] A cover Image is shown with a call to action Button (order page)
- [ ] I can subscribe to a Email Newsletter
- [ ] I see a summary of the benefits here
- [ ] I see Information like adress, name, opening hours, number

### Tasks

- [ ] create a logo and a color scheme
- [ ] build a navbar
- [ ] build a cover image with the button
- [ ] create database/connection for email marketing
- [ ] create api for email marketing
- [ ] show information, benefits, insp text and map
- [ ] create the footer with copyright

---

## User Story 1.2: Menu Page

### Value Proposition

as a potential customer
I want to see a menu page
so that I can decide beforehand what to order

### Acceptance Criteria

- [ ] list all items by categories
- [ ] categories should have a order

### Tasks

- [ ] create collections products
- [ ] create collections categories
- [ ] create some data for those
- [ ] api fetch call when on the menu page
- [ ] pass as props into menu component

---

## User Story 1.3: About Us Page

### Value Proposition

As a potential customer
I want to know about the restaurant/team
so I know what they value

### Acceptance Criteria

- [ ] pictures of the restaurant/team
- [ ] "why" answer

### Tasks

- [ ] create an inspirational text
- [ ] include some close team picture

---

## User Story 2: Order Page

## User Story 2.1: Category Filter

### Value Proposition

As a customer
I want filter products by categories
so I have a better overview

### Acceptance Criteria

- [ ] Category filter is displayed and clicked will filter cards
- [ ] products are displayed as filtered cards
  - [ ] product image is displayed
  - [ ] product name is displayed
  - [ ] product description is displayed
  - [ ] product price is displayed
  - [ ] add button is displayed

### Tasks

- [ ] get categories with GET api
- [ ] display categories in order
- [ ] default category all with all items
- [ ] write functionality for filter by categories and get items by category

---

## User Story 2.2: Cart Component

### Value Proposition

As a customer
I want to see what I have ordered
so I can add extras/notes for pickup/delivery and order with checkout

### Acceptance Criteria

- [ ] cart sidebar is displayed
  - [ ] product name and price is displayed
  - [ ] a counter is displayed
  - [ ] a add note input is displayed
  - [ ] extra checkbox is displayed
  - [ ] 2 checkboxes pick-up/delivery is displayed
  - [ ] cost is displayed
  - checkout button is displayed

### Tasks

- [ ] write cart component and accept items as props
- [ ] save as array temporarily
- [ ] show items with name, price, counter
- [ ] under items it has checkbox to add extras
- [ ] under items it has an input field for comments
- [ ] checkbox for asap delivery
- [ ] pre-order checkbox where people can set a time and date
- [ ] payment methods
  - [ ] googlepay/applepay
  - [ ] paypal
  - [ ] giro
  - [ ] credit
- [ ] display total sum
- [ ] display Buy Button to redirect to checkout
- [ ] checkbox for privacy policy required
- [ ] checkbox for terms of conditions required

---

## User Story 2.3: Checkout Page

### Value Proposition

As a Customer I want to add my information and others
so it can be delivered to me.

### Acceptance Criteria

- [ ] A form to input customer info
- [ ] A summary of my card
- [ ] inside summary update possible
- [ ] show total sum

### Tasks

- [ ] create Form
- [ ] create api POST
- [ ] create table for order and save it inside
- [ ] create summary cart and show products extras
- [ ] checkbox delivery type
- [ ] checkbox online payment
- [ ] toc and privacy policy
- [ ] button buy redirect third party usage

## User Story 2.4: Overview Page

### Value Proposition

As a customer I want to see a validation on my order with the approx time to deliver and my order. And where my order is right now.
So I have a good user exp.

### Acceptance Criteria

- [ ] I see a map with the location of the restaurant, driver, and my home.
- [ ] I see a summary of my order
- [ ] I see a time when this its delivered

### Tasks

- [ ] receive order from db and display to page
- [ ] write the geolocation function nd pass it for customer,driver and restaurant
- [ ] write a random function for delivery time

## User Story 3: Booking Page

### Value Proposition

As a customer I want to book a table
so I don't have to call

### Acceptance Criteria

- [ ] I see a contact form

### Tasks

- [ ] create form
- [ ] create collection reservation
- [ ] show aprroval in frontend for now
