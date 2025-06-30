import React from 'react';
import '../styles.css';

function MoreInfo() {
  return (
    <div>
      <div id="header">
        <h1>More Info</h1>
        <p>Live Braille Translator Project</p>
      </div>

      <div className="container section">
        <div className="section">
          <h2>About the Project</h2>
          <p>
            Live Braille Translator adalah project... menggunakan solenoid untuk membentuk huruf braille tersebut.
          </p>
        </div>

        <div className="section">
          <h2>How It Works</h2>
          <p>
            - Input text di web <br />- Kirim ke Arduino <br />- Proses <br />- Output ke solenoid Braille
          </p>
        </div>

        <div className="section">
          <h2>Features</h2>
          <ul>
            <li>Translate text-to-Braille real time</li>
            <li>User-friendly interface</li>
            <li>Dapat mengubah jenis Braille</li>
          </ul>
        </div>

        <div className="section">
          <h2>Technologies Used</h2>
          <ul>
            <li>-</li>
            <li>-</li>
            <li>-</li>
          </ul>
        </div>

        <div className="section">
          <h2>FAQ</h2>
          <p><strong>Q: ?</strong><br />A: .</p>
          <p><strong>Q: ?</strong><br />A: .</p>
          <p><strong>Q: ?</strong><br />A: .</p>
        </div>
      </div>

      <footer id="footer">
        <p>&copy; 2025 Live Braille Translator Team</p>
      </footer>
    </div>
  );
}

export default MoreInfo;