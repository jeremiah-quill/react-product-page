# Frontend Mentor - E-commerce product page solution

Deployed Link: https://jeremiah-quill.github.io/react-product-page/

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

  - [The challenge](#the-challenge)
  - [My goals](#my-goals)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

### My goals

I have never been satisfied with my ability to turn a pre-determined design into a clean web page so my initial goal for this exercise was to continue refining this skill.  After completing this mock page with HTML, CSS, and vanilla Javascript, my goal then pivoted to recreating the same page but with React.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it


### My process

I first mapped out how I wanted this product page to adapt to different screen sizes.  I knew I wanted to build this using a mobile first approach, but in doing so I still needed to figure out how I wanted the content to shift when increasing the screen size.  Once I had a clear idea of how this would work, I added all of my HTML while also including classes on elements that I would use afterwards.  I find styling a webpage much easier if I have already thought through how things will work, what I will name different elements and sections, etc.

Since I used a mobile first approach, there wasn't too much CSS required to get my page looking like the provided PDF.  As soon as the mobile version was complete I started adding functionality.  I added event listeners to the hamburger and cart icons so I could add and remove classes that would change the display of the sidebar and cart elements.  I also created a Counter class, Gallery class, and Cart class to help manage the "state" of these elements so I could increase the count of a product, cycle through an image gallery, and keep track of what and how many items are in a cart.  At this point I started to realize that creating a fully functional page like this, even though it appears relatively simple, requires a lot of DOM interaction.  

I had explored React and created a few comprehensive personal projects in the past, but this is really where the lightbulb turned on for me.  Since I had already put in the work to create the functionality on the page using vanilla JS and I had a pretty good base layer knowledge of React, I started to take some notes on how I would transfer this page over to React.  I could use almost all the same HTML and CSS, but would be able to break the pieces of the page into different components.  I would be able to use hooks to re-use logic that is seen throughout the page (toggling UI components on and off, using a counter that can increment and decrement), and access state to easily keep track of data.  Re-rendering certain parts of the page would now be much easier as I wouldn't have to explicitly call a render function, React will render a component as soon as it sees a change in state.

I am very satisfied with how this webpage transitioned from no framework to React.  Building the functionality in vanilla JS almost made me think in React terms, which made the transition that much smoother.  For future projects I will look to React earlier on when there is so much DOM manipulation required.  It just makes everything easier!

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library


### Continued development

There are a few parts of this page that I plan on tweaking:

- hover states on all buttons
- focus states on all buttons for accessibility
- full "lightbox gallery" effect when clicking on large product image
- small, clickable, thumbnail images under large product image on desktop view
- transition effects on dynamic elements like overlay, cart, sidebar, etc.