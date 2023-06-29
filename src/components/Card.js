import React from 'react';

function Card(props) {
  return (
    <div className="card flex flex-col">
      <h2 className="title">{props.title}</h2>
      <p dangerouslySetInnerHTML={{__html: props.desc}} className="desc"></p>
      <a href={props.link} target='_blank' rel='nofollow'><button className="btn btn-alt">read more</button></a>
    </div>
  );
}

export default Card;
