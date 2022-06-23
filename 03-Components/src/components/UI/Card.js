import React from "react";

import "./Card.css";

const Card = (props) => {
  // We need to add the classes on the Card component like it!
  // We add the class card and the classes coming from the props
  const classes = "card " + props.className;

  // children is a reserved name and the value of this special children prop is the
  // content between the opening and closing tag.
  return <div className={classes}>{props.children}</div>;
};

export default Card;
