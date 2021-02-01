import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="header__text col col-md-8">
            <h1 className="title--primary">
              Taking Nigeria agriculture to the <span className="primary">next level</span>
            </h1>
            <p className="subtitle--primary">
              ORIABURE FARMS LTD is a well structured and organised company
              which approaches the domestic and international market following the principal
              standard attached to product quality and efficient service.
            </p>
            <div className="button-group">
          <button className="button button--primary">Book a consultation</button>
          <button className="button button--secondary">Contact us</button>
        </div>
          </div>
          <div className="header__image only-lg-screen col-md-4">
            <img className="responsive--image" src="/Assets/breadfruit.png" alt="" />

          </div>
          
        </div>

      </div>
    </header>
  );
}
