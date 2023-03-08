import { ReactComponent as Logo } from "../assets/Logo.svg";
import { ReactComponent as BackArrow } from "../assets/back-arrow.svg";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isTrue =
    location.pathname === "/" ||
    location.pathname === "/screen-final";

  return (
    <div className="navigation">
      {!isTrue && <BackArrow onClick={() => navigate(-1)} />}

      <div className="logo-container" style={{ right: !isTrue ? "20px" : "0" }}>
        <Logo />
      </div>
    </div>
  );
};

export default Navigation;
