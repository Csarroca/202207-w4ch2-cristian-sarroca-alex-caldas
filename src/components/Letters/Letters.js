import "./Letters.css";
import arrayfavet from "../../utils/alphabet";

const Letters = () => {
  const printLetters = () => {
    return arrayfavet.map((letter) => {
      return (
        <li className="letter" key={letter}>
          <a href="a">{letter}</a>
        </li>
      );
    });
  };

  return <ul className="letters">{printLetters()}</ul>;
};

export default Letters;
