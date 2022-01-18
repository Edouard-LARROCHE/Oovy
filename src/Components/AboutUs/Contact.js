import React from 'react';

function Contact(props) {
  return (
    <div className="card">
      <img src={props.src} className="card-img" alt="logo" />
      <div className="card-body">
        <h2 className="card-name">{props.name}</h2>
        <p className="card-text">{props.text}</p>
      </div>
      <div className="link">
        <a href={props.link_github}>
          <img src={props.logo_git} className="btn-link" alt="logo" />
        </a>
        <a href={props.link_linkedin}>
          <img src={props.logo_linkedin} className="btn-link2" alt="logo" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
