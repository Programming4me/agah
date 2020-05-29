const express = require('express')
const routes = express.Router()
const ProductRoutes = require('./routes/product')
const CompanyRoutes = require('./routes/company')

//MIDDLE WARES
//cors policy
routes.use(cors());
//body parser middleware
routes.use(bodyParser.urlencoded({extended: false}));
routes.use(bodyParser.json());
///

routes.use('products', ProductRoutes)
routes.use('companies', CompanyRoutes)

module.exports = routes