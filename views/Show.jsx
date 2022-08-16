const React = require('react');
const Header = require('./Header')

class Show extends React.Component {
    render() {
        const { manga } = this.props;
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="/css/show.css" />
                    <title>{manga.name}</title>
                </head>
                <body>

                    <Header></Header>
                    <div id='container'>
                        <div id='bread-crumbs'>
                            <a href="/manga">Home</a> <span> > </span> <a href={`/manga/${manga.genre}`}>{manga.genre}</a> <span> > </span> <a href={`/manga/${manga.id}`}>{manga.name}</a>

                        </div>
                        <img id='manga-cover' src={manga.img} />

                        <div id='info-container' >

                            <h2 id='manga-title'>{manga.name} <br /> Volume {manga.volume}</h2>
                            <h3 id='genres' >Genres: {manga.genre}</h3>
                            <p id='synopsis' >{manga.synopsis}</p>
                            <h3 id='price-header'>Price: <span id='price'>{manga.price}</span> </h3>
                            <button id='buy-button'></button>

                        </div>

                        <div id='admin-elements'>

                            <form action={`/manga/${manga.id}?_method=DELETE`} method="POST">
                                <button className='admin-buttons' type="submit" ><h4 >Delete Entry</h4></button>
                            </form>
                            <a href={`/manga/${manga.id}/edit`}><button type="submit" className='admin-buttons' ><h4>Edit Entry</h4></button></a>
                        </div>
                    </div>
                </body>
            </html >
        )
    };
};

module.exports = Show;