const express = require('express');
const app = express();
const port = process.env.PORT || 3003;
require('dotenv').config();
const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
});

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