const express = require('express')
const cors = require('cors')
const  bodyParser  =  require('body-parser')
const app = express()
const port = 3000
const ProductRoutes = require('./routes/product')
const CompanyRoutes = require('./routes/company')

//MIDDLE WARES
//cors policy
app.use(cors());
//body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
///

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log('get out asap '));

app.use('products', ProductRoutes)
app.use('companies', CompanyRoutes)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
