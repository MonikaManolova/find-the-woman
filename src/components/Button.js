import { NavLink } from "react-router-dom";

const Button = (props) => (
  <NavLink className="button" to={props.screen} {...props}>
    {props.children}
  </NavLink>
);

export default Button;
