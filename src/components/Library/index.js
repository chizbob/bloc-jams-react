import React from 'react';
import { Component } from 'react';
import albumData from './../../data/albums';
import { Link } from 'react-router-dom';
import './library.css';

class Library extends Component {
   constructor(props) {
     super(props);
     this.state = { albums: albumData };
   }

   render() {
    return (
        <div className="library">
           {
             this.state.albums.map( (album, index) =>
             <div className="card" style={{width: 18 + 'rem'}}>
                 <Link to={`/album/${album.slug}`} key={index}>
                   <img className = "card-img-top" src={album.albumCover} alt={album.title} />
                   <div className="card-body">
                       <div>{album.title}</div>
                       <div>{album.artist}</div>
                       <div>{album.songs.length} songs</div>
                   </div>
                 </Link>
              </div>
             )
           }
        </div>
     );
   }
 }

export default Library;
