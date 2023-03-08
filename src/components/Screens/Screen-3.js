import Header from "../Header";
import Button from "../Button";
import { ReactComponent as Clock } from "../icons/clock.svg";
import { ReactComponent as LocationImage } from "../../assets/location.svg";

const Screen3 = () => {
  return (
    <div>
      <Header>
        <LocationImage />
      </Header>
      <div className="box" style={{ marginTop: "16px" }}>
        <div className="box-text">
          Това е твоята дестинация! <br />
          Съучастникът ти ще бъде на пейката срещу спускащата се въже-люлка{" "}
          <br />
          (от лявата страна на парка).
        </div>
        <div className="box-text text-troika">Ако не е там, изчакай го!</div>
        <Button text="Към инструкциите" screen="/screen4">
          Следваща стъпка <Clock />
        </Button>
      </div>
    </div>
  );
};

export default Screen3;
