const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const port = 3000
require('dotenv/config')

//import routes
const ProductRoutes = require('./routes/product')
const CompanyRoutes = require('./routes/company')

//connect to db
mongoose.connect(process.env.DB_CONNECTION ? process.env.DB_CONNECTION : "mongodb://mongo:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log('  yeah you win !'));

//MIDDLE WARES
app.use(cors());  //cors policy
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
///

// our routes (middle wares)
app.use('/products', ProductRoutes)
app.use('/companies', CompanyRoutes)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
