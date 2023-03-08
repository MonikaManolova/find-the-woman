import Header from "../Header";
import Button from "../Button";
import { ReactComponent as BookOpen } from "../icons/book-open.svg";

const Screen9 = () => {
  return (
    <div>
      <Header>
        До тук добре! <br />
        Но не може да отидеш при жената с празни ръце, затова трябва да и вземеш
        цветя.
      </Header>
      <div className="box" style={{ marginTop: "16px" }}>
        <div className="box-text">
          В дестинацията, която откри ще намериш цветя, които трябва{" "}
          <span className="text-troika">да занесеш</span> на жената.
        </div>
        <div className="box-text">Там също те очаква и следващата улика.</div>
        <div className="box-text">Пали колата и тръгвай натам!</div>
        <Button text="Към инструкциите" screen="/screen10">
          Към инструкциите <BookOpen />
        </Button>
      </div>
    </div>
  );
};

export default Screen9;
