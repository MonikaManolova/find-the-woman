import Header from "../Header";
import Button from "../Button";
import { ReactComponent as BookOpen } from "../icons/book-open.svg";

const Screen5 = () => (
  <div>
    <Header>
      Поздравления! <br /> Бележката, която откри е дестинацията, <br /> в която
      се намира следващата улика.
    </Header>

    <div className="box">
      <div className="box-text">Пали колата и тръгвай натам!</div>
      <div className="box-text">
        След като пристигнеш премини към инструкциите.
      </div>
      <Button text="Към инструкциите" screen="/screen8">
        Към инструкциите <BookOpen />
      </Button>
    </div>
  </div>
);

export default Screen5;
