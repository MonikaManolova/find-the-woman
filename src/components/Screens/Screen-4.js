import { useState } from "react";
import Header from "../Header";
import Button from "../Button";
import Input from "../Input";

const Screen4 = () => {
  const [value, setValue] = useState({ text: "", error: false });

  const buttonHandler = () => {
    if (value.text !== "1703199318101997") {
      setValue({ ...value, error: true });
    }
  };

  return (
    <div>
      <Header>За да продължиш нататък, ще ти трябва Специален код!</Header>

      <div className="box">
        <div className="box-text">
          Кодът, е комбинация от{" "}
          <span className="text-troika">рождените дати</span> на двамата
          съучастници.
        </div>
        <div className="box-text">
          Ако си роден на 3ти февруари 1990г. Твоята част от кода ще бъде
          03021990
        </div>
        <div className="box-text">
          Кодът <span className="text-troika">започва</span> с датата на
          по-големия участник и <span className="text-troika">завършва</span> с
          датата на по-малкия.
        </div>
        <Input
          onFocus={() => value.error && setValue({ ...value, error: false })}
          style={{ border: value.error ? "1px solid #FF5A82" : "none" }}
          value={value.text}
          placeholder="Въведи код"
          onChange={(e) => setValue({ ...value, text: e.target.value })}
        />
        {value.error && (
          <span className="error-message">Въведи правилният код!</span>
        )}
        <Button
          onClick={buttonHandler}
          text="Към инструкциите"
          screen={value.text === "1703199318101997" ? "/screen5" : ""}
          style={{
            width: "100%",
            height: "44px",
            fontSize: "16px",
            marginTop: "10px",
          }}
        >
          Напред
        </Button>
      </div>
    </div>
  );
};

export default Screen4;
