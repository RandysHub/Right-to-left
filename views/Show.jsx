const React = require('react');


class Show extends React.Component {
    render() {
        const { manga } = this.props;
        return (
            <html>
                <head>
                    <title>{manga.name}</title>
                </head>
                <body>
                    <h1>Manga manga</h1>
                    <h2>{manga.name}</h2>
                    <a href="/manga"><button ><h3>View manga index</h3></button></a><br />
                    <form action={`/manga/${manga.id}?_method=DELETE`} method="POST">
                        <button type="submit" ><h4 >Delete Entry</h4></button>
                    </form>
                    <a href={`/manga/${manga.id}/edit`}><button type="submit" ><h4>Edit Entry</h4></button></a>
                </body>
            </html >
        )
    };
};

module.exports = Show;