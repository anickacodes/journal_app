import axios from "axios";
import React, { useEffect, useState } from "react";

const url = import.meta.env.VITE_PORT;

const FetchPractice = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${url}/entries`)
      .then((res) => {
        console.log(res.data);
        // setEntries(res.data.payload);
        setError(null);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function createPost() {
    axios
      .post(baseURL, {
        title: "Hello World!",
        body: "This is a new post.",
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error fetching data</h2>;
  }

  return (
    <div>
      <h2>Axios Fetch</h2>
      <ul>
        {entries.map((entry) => {
          <li key={entry.id}>
            <p>Date: {entry.Date}</p>
            <p>Time: {entry.Time}</p>
            <p>Author: {entry.Author}</p>
            <p>Content: {entry.Content}</p>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default FetchPractice;
