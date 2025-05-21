import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiKaggle } from 'react-icons/si';
import '../App.css';

export default function Contact() {
  return (
    <section className="section">
      <h2>Contact Info</h2>
      <p>Email: janetanandmail@gmail.com</p>
      <p>Phone: +91 73970 81369</p>

      <h3>Find me on:</h3>
      <ul className="social-links">
        <li>
          <a href="https://github.com/Janet-Priya" target="_blank" rel="noreferrer">
            <FaGithub /> 
          </a>
        </li>
        <li>
          <a href="https://www.kaggle.com/janetanand" target="_blank" rel="noreferrer">
            <SiKaggle /> 
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/janet-priya-a-b6b6bb2aa/" target="_blank" rel="noreferrer">
            <FaLinkedin /> 
          </a>
        </li>
      </ul>
    </section>
  );
}
