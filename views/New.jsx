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
                        <input type="submit" name="" value="Submit Entry" />
                    </form>
                </body>
            </html>
        );
    }
}

module.exports = New;