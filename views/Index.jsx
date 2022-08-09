
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
                    <div id="indexContainer">
                        <ul>
                            {manga.map((manga) => {
                                return (
                                    <div class="indexDiv" >
                                        <a href={`/manga/${manga.id}`}><h3>{manga.name}</h3>
                                        </a>
                                        <a href={`/manga/${manga.id}`}><img src={manga.img} alt="" /></a>
                                        <br />
                                    </div>
                                );
                            })}
                        </ul>
                    </div>
                    <a href="/"><button ><h3>Back to Main Directory!</h3></button></a><br />
                </body>
            </html>
        )
    };
};

module.exports = Index;