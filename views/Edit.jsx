const React = require('react');
// const Manga = require('../models/Manga');


class Edit extends React.Component {
    render() {
        const manga = this.props.manga;
        return (
            <html>
                <head>
                    <title>Edit Manga!</title>
                </head>
                <body >
                    <h1 >Manga stuff</h1>
                    <img src={manga.img} alt="" />
                    {/* NOTE: action will be the route, method will be the HTTP verb */}
                    <form action={`/manga/${manga.id}?_method=PUT`} method="POST">
                        Name: <input type="text" name="name" placeholder='Name' /><br />
                        Image: <input type="text" name="img" placeholder='Image URL' /><br />
                        <select name="genre" value='Genre'>
                            <option value="Action">Action</option>
                            <option value="Slice of Life">Slice of Life</option>
                            <option value="Comedy">Comedy</option>
                            <option value="Romance">Romance</option>
                            <option value="Sports">Sports</option>
                        </select>
                        <input type="submit" name="" value="Edit Entry" />

                    </form>
                </body>
            </html>
        );
    }
}

module.exports = Edit;