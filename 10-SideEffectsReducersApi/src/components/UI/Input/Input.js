import React, { useRef, useImperativeHandle } from "react";

import classes from "./Input.module.css";

// In order to enable this second argument here, we need to export our Component function in a special way. We need to wrap it with something special.
// forwardRef returns a react component that is capable of being bound to a ref.
const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  // We import the useImperativeHandle hook. It's a hook that allow us to use this component or functionalilities from inside this component imperatively (i.e not through the regular state props management, not by controlling the component through state in the parent component, but by directly calling or manipulating something in the component programmatically)
  // (rarely used)
  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
