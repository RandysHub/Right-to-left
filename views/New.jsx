const React = require('react');


class New extends React.Component {
    render() {
        return (
            <html >
                <head>
                    <title>New Manga!</title>
                </head>
                <body >
                    <h3 >Tell me about the Manga</h3>
                    {/* NOTE: action will be the route, method will be the HTTP verb */}
                    <form action="/manga" method="POST">
                        Name: <input type="text" name="name" placeholder='Name' /><br />
                        Image: <input type="text" name="img" placeholder='Image URL' /><br />
                        Stock: <input type="text" name="stock" placeholder='Stock' /><br />
                        <label htmlFor="">Genres:</label>
                        <select name="genre" value='Genre'>
                            <option value="Action">Action</option>
                            <option value="Slice of Life">Slice of Life</option>
                            <option value="Comedy">Comedy</option>
                            <option value="Romance">Romance</option>
                            <option value="Sports">Sports</option>
                        </select> <br />
                        <input type="submit" name="" value="Submit Entry" />
                    </form>
                </body>
            </html>
        );
    }
}

module.exports = New;