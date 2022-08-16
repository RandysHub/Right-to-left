const React = require('react');

class Header extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="/css/index.css" />
                </head>

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
            </html>
        )
    }
}
module.exports = Header