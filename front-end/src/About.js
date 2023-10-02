import { useState, useEffect } from 'react'
import axios from 'axios'
import './About.css' // Import your CSS file if you have one

const About = () => {
  const [aboutData, setAboutData] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState('')

  const fetchAboutData = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/about`)
      .then((response) => {
        const about = response.data.about;
        setAboutData(about);
      })
      .catch((err) => {
        setError(`Error fetching data: ${err.message}`);
      })
      .finally(() => {
        setLoaded(true);
      });
  };

  useEffect(() => {
    fetchAboutData();

    const intervalHandle = setInterval(() => {
      fetchAboutData();
    }, 5000);

    return () => {
      clearInterval(intervalHandle);
    };
  }, []);

  return (
    <div>
      <h1>About Me</h1>
      {error && <p className="About-error">{error}</p>}
      <p>{aboutData.bio}</p>
      <img src={aboutData.image_url} alt="Michael Smoyer" />
    </div>
  );
};

export default About;




