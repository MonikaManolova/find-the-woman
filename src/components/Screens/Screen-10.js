import { useState } from "react";
import Header from "../Header";
import Button from "../Button";
import Input from "../Input";

const Screen4 = () => {
  const [value, setValue] = useState({ text: "", error: false });

  const buttonHandler = () => {
    if (value.text.toLowerCase() !== "lets-play") {
      setValue({ ...value, error: true });
    }
  };

  return (
    <div>
      <Header>
        След като пристигнеш на дадената локация, трябва да потърсиш цветарския
        магазин.
      </Header>

      <div className="box">
        <div className="box-text">
          Ако цветарката е там, кажи си името и{" "}
          <span className="text-troika">вземи цветята.</span>
        </div>
        <div className="box-text">
          Ако е <span className="text-troika">затворено</span>, цветята ще те
          чакат на плота, вземи ги.
        </div>
        <div className="box-text">
          В цветята се крие и <span className="text-troika">кода</span> към
          последната дестинация!
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
          screen={
            value.text.toLowerCase() === "lets-play" ? "/screen-final" : ""
          }
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
