import image from "../../assets/intro-graphic.svg";
import Button from "../Button";
import { ReactComponent as KissIcon } from "../icons/kiss.svg";

const ScreenIntro = () => (
  <div style={{ width: "100%", position: "relative" }}>
    <div className="intro-header">
      <p className="intro-word-1">Намери</p>
      <div className="intro-word-2">Жената</div>
    </div>
    <img className="graphic-intro" alt="Graphic" src={image} />
    <Button text="Към инструкциите" screen="/screen1">
      Започни играта <KissIcon />
    </Button>
  </div>
);

export default ScreenIntro;
