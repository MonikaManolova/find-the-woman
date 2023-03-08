import { useState } from "react";
import Header from "../Header";
import Button from "../Button";
import Input from "../Input";

const Screen4 = () => {
  const [value, setValue] = useState({ text: "", error: false });

  const buttonHandler = () => {
    if (value.text.toLowerCase() !== "cybar") {
      setValue({ ...value, error: true });
    }
  };

  return (
    <div>
      <Header>Някъде в парка се крие бележка, трябва да я откриеш!</Header>

      <div className="box">
        <div className="box-text">
          <span className="text-troika">Жокер</span> - потърси{" "}
          <span className="text-troika">под</span> близките пейки, по стълбите
          надолу, ще е залепена там.
        </div>
        <div className="box-text">
          Въведи думата изписана на бележеката, за да продължиш.
        </div>
        <Input
          onFocus={() => value.error && setValue({ ...value, error: false })}
          style={{ border: value.error ? "1px solid #FF5A82" : "none" }}
          value={value.text}
          placeholder="Въведи думата"
          onChange={(e) => setValue({ ...value, text: e.target.value })}
        />
        {value.error && (
          <span className="error-message">Въвведи правилната дума!</span>
        )}
        <Button
          onClick={buttonHandler}
          text="Към инструкциите"
          screen={value.text.toLowerCase() === "cybar" ? "/screen7" : ""}
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
