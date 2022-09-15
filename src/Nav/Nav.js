import React from 'react';
import './Nav.css';
import '../Media.css'



class Nav extends React.Component {
  
 clickLink= () => {
  const menu = document.querySelector('.menu'),
  hamburger = document.querySelector('.hamburger'); 
hamburger.classList.toggle('hamburger_active');
  menu.classList.toggle('menu_active');

 } 
  handleClick = () => {
    console.log('По кнопке кликнули');
   
      const menu = document.querySelector('.menu'),
      
      hamburger = document.querySelector('.hamburger');
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('menu_active');
  };
  render(){

    
  return (
   
    <nav className="navmenu">

    <div className="container">
            <ul className="menu menu_active">
                <li className="menu_item" onClick={this.clickLink}><a href="#" className="menu_link">Главная</a></li>
                <li className="menu_item" onClick={this.clickLink}><a href="#" className="menu_link">Технология</a></li>
                <li className="menu_item" onClick={this.clickLink}><a href="#" className="menu_link">График полетов</a></li>
                <li className="menu_item" onClick={this.clickLink}><a href="#" className="menu_link">Гарантии</a></li>
                <li className="menu_item" onClick={this.clickLink}><a href="#" className="menu_link">О компании</a></li>
                <li className="menu_item" onClick={this.clickLink}><a href="#" className="menu_link">Контакты</a></li>
            </ul>
  
    </div>
    <div className="hamburger hamburger_active" onClick={this.handleClick}>
        <span></span>
        <span></span>
        <span></span>
    </div>
    
</nav>


     
  );
}
}

export default Nav;
