# Multi Vendor Ecommerce
MERN stack web template implements common Ecommerce features.

Breaking the project into three parts:
- ### Client
    A single-page web application built with Vue.js that allows users (sellers/customers) to manage their products through a dashboard.
- ### Server
    Expressjs web server that operates both SPA and the website using a MongoDB database.
- ### website
    Using handlebars.js to server-render web pages (for SEO).
## .env
- MODE
- ROOT_DOMAIN
- JWT_SECRET
- COOKIE_SIGNATURE
## Technical Details
- vuejs - vue-router - vee-validate - primevue - vueuse - yup
- expressjs - handlebars - mongoose - swagger-ui-express
## Latest Update
- (server) Verify the user's email using email-verification-link.
- (server) Setup nodemailer, create and send email verification link.
- (server) Create productImage model and products/images api endpoints to get-all/upload/update/delete an image of a product.
- (client) Authed users can do full CRUD and browse their products collection through an infinite scroll list.
- (server) Full CRUD for the products owned by authed user and protect all routes by Auth middleware.
- (server) Create 1 to Many relation between User and Product models.
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