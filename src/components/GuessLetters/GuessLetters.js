import guessedWords from "../../utils/guessedWords";
import "./GuessLetters.css";

const GuessLetters = () => {
  const randomWord = () => {
    const randomNumber = Math.ceil(Math.random() * 49) + 1;
    return guessedWords[randomNumber];
  };
  const gussedSplitWord = randomWord().split("");
  console.log(gussedSplitWord);

  return (
    <ul className="guess-letters">
      <li className="guess-letter empty"></li>
      <li className="guess-letter">A</li>
      <li className="guess-letter empty"></li>
      <li className="guess-letter">A</li>
      <li className="guess-letter empty"></li>
    </ul>
  );
};

export default GuessLetters;
