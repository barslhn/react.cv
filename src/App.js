import React from "react";
import "./App.css";

function App() {
  return (
    <div className="cv-container">
      {/* Profil Fotoğrafı */}
      <div className="cv-photo">
        <img
          src="https://via.placeholder.com/150"
          alt="Profil Fotoğrafı"
        />
      </div>

      {/* Kişisel Bilgiler */}
      <header className="cv-header">
        <h1>Barış İlhan</h1>
        <p>Telefon: 0531 562 2362</p>
      </header>

      {/* Eğitim Bilgileri */}
      <section className="cv-section">
        <h2>Eğitim Bilgileri</h2>
        <ul>
        <li>
            <strong>Hobyarlı Ahmet Paşa İlköğetim Okulu</strong> - (2007-2011)
          </li>
        <li>
            <strong>Aksaray Mahmudiye Ortaokulu</strong> - (2011-2015)
          </li>
        <li>
            <strong>Kadırga Mesleki ve Teknik Anadolu Lisesi</strong> - Kimya Laboratuvarı (2015-2020)
          </li>
          <li>
            <strong>Kapadokya Üniversitesi</strong> - Bilgisayar Programcılığı (2023-Devam Ediyor)
          </li>
        </ul>
      </section>

      {/* İş Deneyimi */}
      <section className="cv-section">
        <h2>İş Deneyimi</h2>
        <ul>
        <li>
            <strong>Funda Laboratuvarı</strong> - (2017-2019)
          </li>
        <li>
            <strong>Power GYM</strong> - Personel Trainer (2019-2020)
          </li>
        <li>
            <strong>Kaçkar Turizm</strong> - Bilet, Tur vb. Organizasyon Şefi (2019-2022)
          </li>
          <li>
            <strong>Alpaçino Apart Hotel</strong> - Resepsiyonist (3 Yıl - Devam Ediyor)
          </li>
        </ul>
      </section>

      {/* Yetenekler */}
      <section className="cv-section">
        <h2>Yetenekler</h2>
        <ul>
          <li>Programlama Dilleri, Problem çözme, Organizasyon, Yaratıcılık, Ekip yönetimi, Liderlik, İletişim</li>
        </ul>
      </section>

      {/* Hobiler ve İlgi Alanları */}
      <section className="cv-section">
        <h2>Hobiler ve İlgi Alanları</h2>
        <ul>
          <li>Dizi ve film izlemek</li>
          <li>Kitap okumak</li>
          <li>Spor yapmak</li>
          <li>Bilim sohbeti</li>
          <li>Bilgisayar Oyunları ya da Klasik Oyunlar</li>
          <li>Yabancı Diller</li>
          <li>Açık Hava Etkinlikleri</li>
        </ul>
      </section>

      {/* Sosyal Medya */}
      <section className="cv-section">
        <h2>Sosyal Medya</h2>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/bar%C4%B1%C5%9F-ilhan-7366b3257/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://x.com/barslhns"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/barslhn/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
