
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
                    <h1 >See All The Manga!</h1><br />
                    <a href='/manga/new'><button class='indexButton' >Add manga entry</button></a>
                    <div id="indexContainer">
                        {manga.map((manga) => {
                            return (
                                <div class="indexDiv" >
                                    <a href={`/manga/${manga.id}`}><img src={manga.img} alt="" /></a>
                                    <br />
                                    <a href={`/manga/${manga.id}`}><h3>{manga.name}</h3>
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                    <a href="/"><button ><h3>Back to Main Directory!</h3></button></a><br />
                </body>
            </html >
        )
    };
};

module.exports = Index;