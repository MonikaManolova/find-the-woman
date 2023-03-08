import Header from "../Header";
import image from "../../assets/final-graphic.svg";

const Screen5 = () => (
  <div style={{ width: "100%" }}>
    <Header
      style={{ fontSize: "35px", lineHeight: "40px", marginBottom: "16px" }}
    >
      Ураааа! 🥳 <br />
      Ти достигна последната дестинация!
    </Header>

    <div>
      <div className="box-text text-troika" style={{ lineHeight: "25px", marginTop: "20px"}}>
        Тя се намира на 3-тия <br /> етаж, {" "}
        <span style={{ color: "#E0FF22" }}>в ресторанта!</span>
      </div>
      <div className="box-text text-troika">
        Там ще те чака и <span style={{ color: "#E0FF22" }}>жената!</span>
      </div>
    </div>
    <div>
      <img className="graphic-final" alt="Graphic" src={image} />
    </div>
  </div>
);

export default Screen5;
