const React = require('react');
class Index extends React.Component {
    render() {
        const manga = this.props.manga
        return (
            <html >
                <head>
                    <title>Manga</title>
                </head>
                <link rel="stylesheet" href="/css/index.css" />
                <body >
                    <div id='wrapper'>
                        <div id='head'>

                            <a href="/manga" id='logo' ></a>
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
                        <a href='/manga/new'><button class='genreButtons' id='add-button' >+</button></a>
                        <div id='promotion-container'>
                            <a href="/manga/sale"><img id='promotion' src="/img/promotion.png" /></a>
                        </div>
                        <div id="indexContainer">
                            {manga.map((manga) => {
                                return (
                                    <div class="indexDiv" >
                                        <a href={`/manga/${manga.id}`}><img class="indexImg" src={manga.img} alt="" /></a>
                                        <br />
                                        <div id='title-container'>

                                            <a href={`/manga/${manga.id}`}><h3 className='titles'>{manga.name} <br /> Volume {manga.volume}</h3></a>
                                        </div>


                                        {manga.stock ?
                                            <div>
                                                <h3>{manga.price}</h3>
                                                <button id='buy-button' ></button>

                                            </div>

                                            : <h3>OUT OF STOCK</h3>
                                        }

                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </body>
            </html >
        )
    };
};

module.exports = Index;