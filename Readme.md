## Socks
### Uma aplicação em VueJS para exibir um design de meias

- [x] #1 the vue instance
- Our Goal: how to use Vue to display data onto a webpage.
- Lesson Resource: main.js, index.html, style.css
- How to begin writing a Vue application with a Vue instance, and how to load basic data onto the webpage.
- The Vue instance is the root of every Vue application
- The Vue instance plugs into an element in the DOM
- The Vue instance’s data can be displayed using the mustache-like syntax {{ }} called an expression.
- Vue is reactive
- Coding Challenge: Add a description key to our existing data object with the value “A pair of warm, fuzzy socks”. Then display description using an expression in an p element, underneath the h1.

- [x] #2 attribute binding 
- Our Goal: use attribute-binding in order to display an image and attach alt text to it based on values from our instance’s data.
- Lesson Resource: v-bind: src, alt, 
- Data can be bound to HTML attributes.
- Syntax is v-bind: or : for short.
- The attribute name that comes after the : specifies the attribute - we’re binding data to.
- Inside the attribute’s quotes, we reference the data we’re binding to.
- Coding Challenge: Add a link to your data object, and use v-bind to sync it up with an anchor tag in your HTML. Hint: you’ll be binding to the href attribute.

- [x] #3 Conditional Rendering 
- Our Goal: We want to display text that says if our product is in stock or not, based on our data.
- Lesson Resource: v-if v-else v-else-if v-show
- There are Vue directives to conditionally render elements
- If whatever is inside the directive’s quotes is truthy, the element will display.
- You can use expressions inside the directive’s quotes.
- V-show only toggles visibility, it does not insert or remove the element from the DOM.
- Coding Challenge: Add an onSale property to the product’s data that is used to conditionally render a span that says “On Sale!”

- [ ] #4 List Rendering 
- Our Goal:
- Lesson Resource:
- Coding Challenge:

- [ ] #X XXX XXX 
- Our Goal:
- Lesson Resource:
- Coding Challenge:

---

.: Por @douglasabnovato
- De [Vue Mastery - Beginner - VueJS](https://www.vuemastery.com/courses-path/beginner)