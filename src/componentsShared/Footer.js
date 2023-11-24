import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-first">
        <div className="footer-left">
          <img
            src="http://bigramyweb.inovaeg.com/static/media/main-logo.d37fd44b1dd3dfb263bfdd977c7cef90.svg"
            alt="logo"
            className="footer-image"
          />
        </div>
        <div className="footer-right">
          <div className="subscribe-box">
            <input
              type="text"
              placeholder="What are you looking for ?"
              className="subscribe-input"
            />
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-second">
        <div className="footer-second_text">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesett ing
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div>
          <ul className="news-list">
            <li>News 1</li>
            <li>News 2</li>
            <li>News 3</li>
            <li>News 4</li>
          </ul>
        </div>
      </div>
      <div className="footer-third">
        {new Date().getFullYear()} LOGO. All Rights Reserved.
      </div>
    </footer>
  );
};
