import Header from "../Header";
import Button from "../Button";
import { ReactComponent as Search } from "../icons/search.svg";

const Screen5 = () => (
  <div>
    <Header style={{ fontSize: "35px", lineHeight: "40px" }}>
      Бравооо! <br />
      Вие успяхте!
    </Header>

    <div className="box">
      <div className="box-text">Продължаваме играта!</div>
      <div className="box-text">
        Но за да намериш жената, ще ти трябват{" "}
        <span className="text-troika">още улики.</span>
      </div>
      <Button text="Към инструкциите" screen="/screen6">
        Следваща улика <Search />
      </Button>
    </div>
  </div>
);

export default Screen5;
