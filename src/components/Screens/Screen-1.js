import { ReactComponent as QuestionAvatar } from "../../assets/Question-avatar.svg";
import Header from "../Header";
import Button from "../Button";
import { ReactComponent as BookOpen } from "../icons/book-open.svg";

const Screen1 = () => {

  return (
    <div>
      <QuestionAvatar />
      <Header style={{ marginTop: "24px" }}>
        Не е забавно да играеш сам, затова ще имаш съучастник.
      </Header>

      <div className="box">
        <div className="box-text">Първата ти задача е да го намериш!</div>
        <Button text="Към инструкциите" screen="/screen2">
          Към инструкциите <BookOpen />
        </Button>
      </div>
    </div>
  );
};

export default Screen1;
