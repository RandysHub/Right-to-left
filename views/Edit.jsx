const React = require('react');
const Header = require('./Header')

class Edit extends React.Component {
    render() {
        const manga = this.props.manga;
        return (
            <html>
                <head>
                    <title>Edit Manga!</title>
                    <link rel="stylesheet" href="/css/show.css" />
                </head>
                <body >
                    <Header></Header>

                    <div id='container'>
                        <div id='bread-crumbs'>
                            <a href="/manga">Home</a> <span> > </span> <a href={`/manga/${manga.genre}`}>{manga.genre}</a> <span> > </span> <a href={`/manga/${manga.id}`}>{manga.name}</a>

                        </div>


                        <img id='manga-cover' src={manga.img} />
                        {/* NOTE: action will be the route, method will be the HTTP verb */}
                        <div id='forms'>

                            <form action={`/manga/${manga.id}?_method=PUT`} method="POST">
                                Name: <input type="text" name="name" defaultValue={manga.name} placeholder='Name' /><br />
                                Volume: <input type="text" name="volume" defaultValue={manga.volume} placeholder='volume' /><br />
                                Image: <input type="text" name="img" defaultValue={manga.img} placeholder='Image URL' /><br />
                                Stock: <input type="text" name="stock" defaultValue={manga.stock} placeholder='Stock' /><br />
                                Synopsis: <input style={{ height: '100px', width: '300px' }} type="text" name="synopsis" defaultValue={manga.synopsis} placeholder='Synopsis' /><br />
                                Price: <input type="text" name="price" defaultValue={manga.price} placeholder='Price' /><br />
                                <label htmlFor="">Genres:</label>
                                <select name="genre" defaultValue={manga.genre} >
                                    <option value="Action">Action</option>
                                    <option value="Slice of Life">Slice of Life</option>
                                    <option value="Comedy">Comedy</option>
                                    <option value="Romance">Romance</option>
                                    <option value="Sports">Sports</option>
                                </select>
                                <input type="submit" name="" value="Edit Entry" />

                            </form>
                        </div>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Edit;