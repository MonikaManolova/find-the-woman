import Header from "../Header";
import Button from "../Button";
import { ReactComponent as MapPin } from "../icons/map-pin.svg";

const Screen2 = () => {
  return (
    <div>
      <Header>
        Облечи се, <br /> изглеждай добре 😎 <br />
        Вземи ключовете за колата и карай към дестинацията в следващата стъпка.
      </Header>

      <div className="box">
        <div className="box-text">
          Твоят съучастник ще те чака там точно в{" "}
          <span className="text-troika">18:30 ч.</span>
        </div>
        <div className="box-text text-troika">Не закъснявай!</div>
        <Button text="Към инструкциите" screen="/screen3">
          Към дестинацията <MapPin />
        </Button>
      </div>
    </div>
  );
};

export default Screen2;
