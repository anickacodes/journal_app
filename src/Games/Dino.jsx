import { Link } from "react-router-dom";

const Dino = () => {
  return (
    <div>
        <hr/><hr/>
      <Link to="chrome://dino/">
        {" "}
        chrome://dino/ ⬅️ <br />
      </Link>{" "}
      <p>To play Dino, copy the url into your CHROME browser
      <br /> Clicking will not work. Opening in a new tab will not work</p> <hr/><hr/>
    </div>
  );
};
 export default Dino