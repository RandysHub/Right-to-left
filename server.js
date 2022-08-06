const express = require('express');
const app = express();
const port = process.env.PORT || 3003;
require('dotenv').config();

//setting up views
app.set('view engine', "jsx");
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.render('Index')
})



app.listen(port, () => {
    console.log(`I am listening on http://localhost:${port}`)
})