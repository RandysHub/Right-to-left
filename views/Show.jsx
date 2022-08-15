const React = require('react');


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
                    <div id='head'>
                        <a href="/manga" id='logo' ></a> <br />
                        <input type="text" id='search' />
                        <h2 id='searchLabel'>Search</h2>
                        <div className='buttonsDiv' >
                            <a href="/manga/action"> <button className='genreButtons'>Action</button></a>
                            <a href="/manga/comedy"> <button className='genreButtons'>Comedy</button></a>
                            <a href="/manga/sliceoflife"> <button className='genreButtons'>Slice of Life</button></a>
                            <a href="/manga/romance"> <button className='genreButtons'>Romance</button></a>
                            <a href="/manga/sports"> <button className='genreButtons'>Sports</button></a>
                        </div>
                    </div>


                    <div id='container'>
                        <div id='bread-crumbs'>
                            <a href="/manga">Home</a> <span> > </span> <a href={`/manga/${manga.genre}`}>{manga.genre}</a> <span> > </span> <a href={`/manga/${manga.id}`}>{manga.name}</a>

                        </div>
                        <img id='manga-cover' src={manga.img} />

                        <div id='info-container' >

                            <h2 id='manga-title'>{manga.name} Volume 1</h2>
                            <h3 id='genres' >Genres: {manga.genre}</h3>
                            <p id='synopsis' >{manga.synopsis}</p>
                            <h3 id='price-header'>Price: <span id='price'>{manga.price}</span> </h3>
                            <button id='buy-button'></button>

                        </div>


                        <h3>Stock: {manga.stock}</h3>
                        <form action={`/manga/${manga.id}?_method=DELETE`} method="POST">
                            <button type="submit" ><h4 >Delete Entry</h4></button>
                        </form>
                        <a href={`/manga/${manga.id}/edit`}><button type="submit" ><h4>Edit Entry</h4></button></a>
                    </div>
                </body>
            </html >
        )
    };
};

module.exports = Show;