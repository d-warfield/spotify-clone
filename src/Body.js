import React from 'react'
import './Body.css'
import Header from './Header'
import { useDataLayerValue } from './DataLayer';
import SongRow from './SongRow'
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Body({spotify}) {

  const [{discover_weekly}, dispatch] = useDataLayerValue();

  return (
    <div className='body'>
      <Header spotify={spotify} /> 
      <div className='body__info'>
        <img src="https://i.pinimg.com/originals/4c/97/10/4c971038f52be5ecc2d3845f303edd64.jpg" alt=""/>
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle"/>
          <FavoriteIcon  fontSize="large"/>
          <MoreHorizIcon/>
          
        </div>
        {discover_weekly?.tracks.items.map(item => (
            <SongRow track={item.track} />
          ))}
      </div>
    </div>
  );
}

export default Body 
