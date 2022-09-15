import React from 'react';
import './Header.css';
import Nav from '../Nav/Nav'
import lostImage from '../assets/icons/spacex_logo_.png_kopiya_14.png';
export { lostImage };


class Header extends React.Component {

  render(){

  
  return (
   
    <header>

    <div className="container">
<Nav />
       <div className="logo">
          <span>
                <img src={ lostImage } alt="logo spaceX" className="logo_img"></img>
            </span>
        </div>
    </div>
</header>

     
  );
}
}

export default Header;
