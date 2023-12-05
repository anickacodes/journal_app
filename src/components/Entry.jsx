import { useState } from "react";
import "../styles/Entry.css";
import { useNavigate } from "react-router-dom";

const Entry = () => {
    const currentTime = new Date().toLocaleTimeString();

    const [entry, setEntry] = useState({
        content: "",
        date: new Date().toLocaleDateString(),
        currentTime: currentTime,
      });
      // const [count, setCount] = useState(1);
      const [name, setName] = useState("");
      const navigate = useNavigate();
    
  const handleInputChange = (e) => {
    setEntry({
      ...entry,
      [e.target.name]: e.target.value,
      currentTime: currentTime,
    });
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const getCount = () => {
    const entries = JSON.parse(localStorage.getItem("entries")) || [];
    return entries.length + 1;
  };


  const handleFormSubmit = (e) => {
    e.preventDefault();
    const entries = JSON.parse(localStorage.getItem("entries")) || [];
    const newEntry = {
      ...entry,
      author: name,
    };
    const updatedEntries = [...entries, newEntry];
    localStorage.setItem("entries", JSON.stringify(updatedEntries));
    console.log("Entry submitted:", newEntry);
    navigate("/list", { state: { newEntry } });
  };


  const handleTextBold = () => {
    setEntry({
      ...entry,
      content: `<b>${entry.content}</b>`,
    });
  };

  const handleTextItalic = () => {
    setEntry({
      ...entry,
      content: `<i>${entry.content}</i>`,
    });
  };


  return (
    <div className="entry_container">
      <h1>Journal Entry📓</h1>
      {/* <div>
        <button onClick={handleTextBold}>Bold</button>
        <button onClick={handleTextItalic}>Italic</button>
      </div> */}
      <form onSubmit={handleFormSubmit}>
        <h2>Entry #{getCount()} </h2>
        <label>
     
          <textarea
            name="content"
            value={entry.content}
            onChange={handleInputChange}
            rows={30}
            cols={60}
            placeholder="Express yourself... Format your text using the toolbar."
          />
        </label>
        <br />
        <br />
        <label id="yourName">
          <em>Your Name or signee: </em> &nbsp;
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <br />
        <footer>
          <p>Date: {entry.date}</p>
          <p>Time: {entry.currentTime}</p>
          <p>Author: {name || "Anonymous"}</p>
        </footer>
        <button type="submit">Submit Entry</button>
      </form>
      <div>
        <h3>Preview:</h3>
       <section>{entry.content}</section> 
      </div>
    
    </div>
  );
};

export default Entry;
