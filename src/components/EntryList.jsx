import { useLocation } from 'react-router-dom';
import '../styles/EntryList.css'

const EntryList = () => {
    const location = useLocation();
    const { newEntry } = location.state || {};
  
    return (
      <div>
        <h1>Journal Entry List 📜</h1>
        {newEntry ? (
          <div>
            <p>Date: {newEntry.date}</p>
            <p>Time: {newEntry.currentTime}</p>
            <p>Author: {newEntry.author || "Anonymous"}</p>
            <p>Content: {newEntry.content}</p>
          </div>
        ) : (
          <p>No entry data available.</p>
        )}
      </div>
    )
}

export default EntryList