import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

function Home() {
  return (
    <div>
      <header id="header">
        <h1>Proyek Telematika</h1>
      </header>
      <section id="landing">
        <div>
          <h1>Live Braille Translator.</h1>
          <p>
            Proyek "Live Braille Translator" adalah inovasi teknologi yang bertujuan untuk membantu penyandang
            tunanetra membaca teks dalam waktu nyata. Salah satu implementasi proyek ini menggunakan perangkat
            keras seperti Arduino dan aktuator solenoid linear untuk mengubah teks menjadi huruf Braille secara
            langsung.
          </p>
          <div>
            <Link className="btn btn-alt" to="/moreinfo">More Info</Link>
            <Link className="btn" to="/start">Start</Link>
          </div>
        </div>
        <div>
          <img src="/images/fotobrailleatas.ong.png" alt="Landing" />
        </div>
      </section>

      <section id="about">
        <div>
          <img src="/images/about.png" alt="About" />
        </div>
        <div>
          <h1>Jenis - Jenis Huruf Braille</h1>
          <div id="about-stats">
            <div className="about-stats-items">
              <h1>Braille</h1>
              <div></div>
              <p>ASCII</p>
            </div>
            <div className="about-stats-items">
              <h1>Braille</h1>
              <div></div>
              <p>Jepang</p>
            </div>
            <div className="about-stats-items">
              <h1>Braille</h1>
              <div></div>
              <p>Korea</p>
            </div>
          </div>
        </div>
      </section>

      <section id="service">
        <div className="service-header">
          <div>
            <h1>Dosen Pengampu</h1>
            <p>Departemen Teknik Komputer</p>
          </div>
        </div>
        <div className="service-detail">
          <div className="service-detail-item">
            <img src="/images/Pak-ketut.png" alt="service 1" />
            <h2>Prof. Dr. I Ketut Eddy Purnama, S.T.,M.T.</h2>
          </div>
          <div className="service-detail-item">
            <img src="/images/pak-zaini.png" alt="service 2" />
            <h2>Ahmad Zaini, S.T., M.Sc.</h2>
          </div>
          <div className="service-detail-item">
            <img src="/images/Pak-arief.png" alt="service 3" />
            <h2>Dr. Arief Kurniawan, S.T., M.T.</h2>
          </div>
        </div>
      </section>

      <section id="contact">
        <h1>-</h1>
        <div className="contact-detail">
          <div>
            <h1>Our Location</h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.608787954919!2d112.79271721113645!3d-7.285273871572453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbaec5b75b21%3A0xd021ec310d46b640!2sGedung%20Tower%202%20ITS!5e0!3m2!1sen!2sid!4v1748798749143!5m2!1sen!2sid" 
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ITS Location"
            ></iframe>
          </div>
        </div>
      </section>

      <footer id="footer">
        <div>
          <h1>Live Braille Translator</h1>
          <p>
            Meningkatkan aksesibilitas untuk semua.
            <br />© 2025 Live Braille Project | Semua Hak Dilindungi.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;