const express = require('express')
const mongoose = require('mongoose');
const RouterModel = require("./routes/productRoutes")
const cors = require("cors");
const app = express()
const port = 8080

app.use(cors());
app.use(express.json());
app.use('/products',RouterModel);

mongoose.connect('mongodb+srv://aslanzmazmp202:aslan2004@clusterimmigration.njfsy.mongodb.net/products?retryWrites=true&w=majority&appName=ClusterImmigration')
  .then(() => {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })
    console.log('Connected!')});
