# Multi Vendor Ecommerce
The purpose of this project is to learn more about Nodejs and MongoDB, dive deeper into web technologies and hit the core through **MEVN** stack web apps.

Breaking the project into three major parts will make it easier to focus on each task individually:

- ### Client
    A single-page web application built with Vue.js that allows users (sellers and buyers) to manage products through a dashboard.
- ### Website
    Using handlebars to render products on web pages for users and visitors.
- ### Server
    Express.js web server that operates both SPA and the website also will store data within a MongoDB database.
## .env
- MODE=
- JWT_SECRET=
- COOKIE_SIGNATURE=
## Technical Details
- vuejs - vue-router - vee-validate - primevue - vueuse - yup
- expressjs - handlebars - mongoose - swagger-ui-express
## Latest Update
- (client) Install pinia and create user store.
- (client) Create sign in/up forms with validation and submit them to the API /users/signup - /users/signin endpoints.
- (server) Generate jwt tokens and wrap them with access_token and refresh_token httpOnly cookies.
- (server) Create routes for signup/signin/profile/logout.
- (server) Create a user model.
- (client) Setup and style primevue-toast.
- (client) Create loading-screen component and singleton togglers.
- (client) Init createFetch using vueuse.
- (client) Setup and style primevue confirmDialog and confirmationService.
- (server - docs) Create api docs.
- (server) Handle global errors.
- (server - api) Create CTRL/createNewProduct with post/route and yup validation.
- (client) Create admin dashboard and add create-new-product form.
- (server - website) Create single product page and CTRL/renderProduct with a new route /product/:slug.
- (website) Create paginator for products page.
- (website) Create products page and render all products.
- (server) Create products Ctrl/renderAllProducts.
- (server) Connect to mongodb, create product model, install fakerjs and seed dummy products.
- (global) Setup base boilerplate project (client, website, server).