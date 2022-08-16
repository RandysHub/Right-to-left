const express = require('express');
const app = express();
const port = process.env.PORT || 3003;
require('dotenv').config();
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const Manga = require('./models/manga')
const mangaData = require('./utilities/mangaData')

app.use(express.static('public'));

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
app.use(methodOverride('_method')) //Sets up methodoverride for use
// app.get('/', (req, res) => {
//     res.render('Index')
// })

app.get('/manga/', (req, res) => {
    Manga.find({}, (error, allManga) => {
        res.render('Index', {
            manga: allManga
        })
    })
})

app.post('/manga', (req, res) => {
    //Data manipulation
    let name = req.body.name.split('')
    name[0] = name[0].toUpperCase()
    req.body.name = name.join('')

    Manga.create(req.body, (err, createdManga) => {
        res.redirect('/manga');
    });
});


//Genre routes

app.get('/manga/sports', (req, res) => {
    Manga.find({ genre: 'Sports' }, (error, sportsManga) => {
        res.render('Index2', {
            manga: sportsManga
        })
    })
})

app.get('/manga/action', (req, res) => {
    Manga.find({ genre: 'Action' }, (error, actionManga) => {
        res.render('Index2', {
            manga: actionManga
        })
    })
})

app.get('/manga/romance', (req, res) => {
    Manga.find({ genre: 'Romance' }, (error, romanceManga) => {
        res.render('Index2', {
            manga: romanceManga
        })
    })
})

app.get('/manga/sliceoflife', (req, res) => {
    Manga.find({ genre: 'Slice of Life' }, (error, solManga) => {
        res.render('Index2', {
            manga: solManga
        })
    })
})

app.get('/manga/comedy', (req, res) => {
    Manga.find({ genre: 'Comedy' }, (error, comedyManga) => {
        res.render('Index2', {
            manga: comedyManga
        })
    })
})

app.get('/manga/sale', (req, res) => {
    Manga.find({ price: '$4.99' }, (error, saleManga) => {
        res.render('Index2', {
            manga: saleManga
        })
    })
})



//new
app.get('/manga/new', (req, res) => {
    res.render('New');
});



//seed
app.get('/manga/seed', async (req, res) => {
    //Comment below line if you don't want to delete your whole entire collection
    // Not currently working
    await Manga.deleteMany({})
    await Manga.create(mangaData)
    res.redirect('/manga')
});


app.get('/manga/:id', (req, res) => {
    Manga.findById(req.params.id, (err, foundManga) => {
        res.render("Show", {
            manga: foundManga
        });
    });
});


app.delete('/manga/:id', (req, res) => {
    //First arg is ID we want to delet, 2nd arg is callback function
    Manga.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/manga')
    });
});

app.put('/manga/:id', (req, res) => {
    Manga.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, (error, manga) => {
        res.redirect(`/manga/${req.params.id}`)
    })
});

app.get('/manga/:id/edit', (req, res) => {
    Manga.findById(req.params.id, (err, foundManga) => {
        if (!err) {
            res.render('Edit', {
                manga: foundManga
            })
        } else {
            res.send({
                msg: err.message
            });
        }
    })
});

//Put new information in DB


app.listen(port, () => {
    console.log(`I am listening on http://localhost:${port}`)
})