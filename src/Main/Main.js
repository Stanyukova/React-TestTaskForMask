import React from 'react';
import './Main.css';
import '../Media.css'



class Header extends React.Component {

  render(){

    
  return (
   
    <section className="promo">

<div className="container">
    <div className="main_text">
        
        <h1>Путешествие</h1>
        <h3>на красную планету</h3>
        <div className="btn">
             <button className="button">Начать путешествие</button>
        
             <div className="splitters">
                <div className="line-second"></div>
                <div className="line-middle"></div>
              </div>
              <div className="circle"></div>
            
        </div>
        
    </div>

    <div className="benefits benefits_desk">
        <div className="row">
            <div className="benefits_item benefits_item_1">
                <div className="benefits_item_title1">
                    мы
                </div>
                <div className="benefits_item_subtitle">
                    1
                </div>
                <div className="benefits_item_title2">
                    на рынке
                </div>
            </div>
        </div>
        <div className="row">
            <div className="benefits_item benefits_item_2">
                <div className="benefits_item_title1">
                    календарик за
                </div>
                <div className="benefits_item_subtitle">
                    2001
                </div>
                <div className="benefits_item_title2">
                    в подарок
                </div>
            </div>
        </div>
        <div className="row">
            <div className="benefits_item benefits_item_3">
                <div className="benefits_item_title1">
                    гарантируем
                </div>
                <div className="benefits_item_subtitle">
                    50%
                </div>
                <div className="benefits_item_title2">
                    безопасность
                </div>
            </div>
        </div>
        <div className="row">
            <div className="benefits_item benefits_item_4">
                <div className="benefits_item_title1">
                    путешествие
                </div>
                <div className="benefits_item_subtitle">
                    597
                </div>
                <div className="benefits_item_title2">
                    дней
                </div>
            </div>
        </div>

    </div>


    
</div>
</section>


   

     
  );
}
}

export default Header;