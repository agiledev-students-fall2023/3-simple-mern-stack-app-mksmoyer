import React, { useEffect, useState } from 'react';
import axios from 'axios';

function About() {
  const [aboutData, setAboutData] = useState({});

  useEffect(() => {
    // Make a GET request to the back-end route using Axios
    axios.get('/api/about')
      .then((response) => {
        // Update the state with the retrieved data
        setAboutData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>About Me</h1>
      <p>{aboutData.bio}</p>
      <img src={aboutData.image_url} alt="Michael Smoyer" />
    </div>
  );
}

export default About;
