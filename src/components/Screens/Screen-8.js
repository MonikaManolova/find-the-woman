import { useState } from "react";
import Header from "../Header";
import Button from "../Button";
import Input from "../Input";

const Screen4 = () => {
  const [value, setValue] = useState({ text: "", error: false });

  const buttonHandler = () => {
    if (value.text.toLowerCase() !== "mall-veliko-tarnovo") {
      setValue({ ...value, error: true });
    }
  };

  return (
    <div>
      <Header>
        Ако вече си в бара, продължи към залата,
        <br /> в дъното, в дясно. <br /> (Залата с пианото)
      </Header>

      <div className="box">
        <div className="box-text">
          Там трябва да намериш{" "}
          <span className="text-troika">
            {" "}
            <br />
            купата
          </span>{" "}
          🏆 (за награждаване). <br /> В нея се крие следващата улика.
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
          <span className="error-message">Въведи правилната дума!</span>
        )}
        <Button
          onClick={buttonHandler}
          text="Към инструкциите"
          screen={
            value.text.toLowerCase() === "mall-veliko-tarnovo" ? "/screen9" : ""
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
