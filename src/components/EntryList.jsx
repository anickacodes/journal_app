import { useLocation } from 'react-router-dom';
import '../styles/EntryList.css'
import { useEffect, useState } from 'react';

const EntryList = () => {
    const location = useLocation();
    const { newEntry } = location.state || {};

  const [entries, setEntries] = useState([])
    useEffect(() => {
        fetchEntries();
      }, []);
    
      const fetchEntries = () => {
        const storedEntries = JSON.parse(localStorage.getItem("entries")) || [];
        setEntries(storedEntries);
      };

    return (
      <div className='entriesContainer'>
        <h1>Journal Entry List 📜</h1>
        <ul>
        {entries.map((entry, index) => (
             <div key={index} className='entryCard'>
          <li key={index}>
            <p>Date: {entry.date}</p>
            <p>Time: {entry.currentTime}</p>
            <p>Author: {entry.author || "Anonymous"}</p>
            <p>Content: {entry.content}</p>
          </li>
          </div>
        ))}
      </ul>
      </div>
    )
}

export default EntryList