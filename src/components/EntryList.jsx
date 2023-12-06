import { useLocation } from "react-router-dom";
import "../styles/EntryList.css";
import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { useGesture } from "react-use-gesture";

const EntryList = () => {
  const location = useLocation();
  //   const { newEntry } = location.state || {};
  const [entries, setEntries] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = () => {
    const storedEntries = JSON.parse(localStorage.getItem("entries")) || [];
    const entriesOrdered = storedEntries.map((entry, index) => ({
      ...entry,
      submissionOrder: storedEntries.length - index,
    }))
    .sort((a, b) => b.submissionOrder - a.submissionOrder);
    setEntries(entriesOrdered)
  };

  const handleDeleteEntry = (index) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this entry?"
    );
    if (shouldDelete) {
      const updatedEntries = [...entries];
      updatedEntries.splice(index, 1);
      setEntries(updatedEntries);
      localStorage.setItem("entries", JSON.stringify(updatedEntries));
      setCurrentIndex(Math.min(currentIndex, updatedEntries.length - 1));
    }
  };
  const bind = useGesture({
    onDrag: ({ movement: [mx], down, direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2;

      if (!down && trigger) {
        xDir > 0 ? handlePrev() : handleNext();
      }
    },
  });

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, entries.length - 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const entryProps = useSpring({
    transform: `translateX(${-currentIndex * 100}%)`,
  });

  return (
    <div className="entriesContainer">
      <h1>📜Public User Entries📜</h1>

      <div className="book" {...bind()}>
        {entries.map((entry, index) => (
          <animated.div className="entryWrapper" style={entryProps} key={index}>
            <div
              className={`entryCard ${index === currentIndex ? "visible" : ""}`}
            >
              <p id="entryNum">
                # <em>{entry.submissionOrder}</em>
              </p>
              <p>Date: {entry.date}</p>
              <p>Content: {entry.content}</p>
              <p>Time: {entry.currentTime}</p>
              <p>Author: {entry.author || "Anonymous"}</p>
              <button onClick={() => handleDeleteEntry(index)}>
                Delete Entry
              </button>
            </div>
          </animated.div>
        ))}
      </div>

      <div className="navigationButtons">
        <button onClick={handlePrev} disabled={currentIndex === 0}>
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === entries.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default EntryList;
