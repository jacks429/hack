import React from "react";
import { Link } from "gatsby";
import homeIcon from "../images/home-icon.png";
import voteIcon from "../images/vote-icon.png";
import documentsIcon from "../images/documents-icon.png";

const CityPage = () => {
  return (
    <div className="city-page">
      {/* Header */}
      <header className="city-header">
        <div className="city-header-content">
          <img src="path-to-presov-logo.png" alt="Prešov Logo" className="city-logo" />
          <div className="city-title">
            <h1>Prešov</h1>
            <p>Ľuďmi podkuté mesto</p>
          </div>
          <nav className="city-nav">
            <Link to="/">Kultúra</Link>
            <Link to="/">Doprava</Link>
            <Link to="/">Doklady</Link>
            <Link to="/">Podnety & Ankety</Link>
            <button className="login-button">Prihlásiť sa</button>
          </nav>
        </div>
      </header>

      {/* Notifications Section */}
      <section className="notifications">
        <h2>Notifikácie (ak prihlásený)</h2>
        <div className="notification-cards">
          <div className="notification-card">
            <img src="path-to-image.png" alt="Notification 1" />
            <p>Vývoz odpadu 2. 10.</p>
          </div>
          <div className="notification-card">
            <img src="path-to-image.png" alt="Notification 2" />
            <p>Futbalový turnaj 16. 10.</p>
          </div>
          <div className="notification-card">
            <img src="path-to-image.png" alt="Notification 3" />
            <p>Zablokovaná cesta</p>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="news">
        <h2>Aktuality</h2>
        <div className="news-cards">
          <div className="news-card">
            <img src="path-to-image.png" alt="News 1" />
            <p>Prešovskými cyklochodníkami</p>
          </div>
          <div className="news-card">
            <img src="path-to-image.png" alt="News 2" />
            <p>Školy po prázdninách pr...</p>
          </div>
          <div className="news-card">
            <img src="path-to-image.png" alt="News 3" />
            <p>Mesto diskutovalo o pred...</p>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="quick-links">
        <h2>Časté odkazy</h2>
        <div className="quick-link-icons">
          <div className="quick-link-icon">
            <img src={homeIcon} alt="Odmeny" />
            <p>Odmeny</p>
          </div>
          <div className="quick-link-icon">
            <img src={voteIcon} alt="Šport" />
            <p>Šport</p>
          </div>
          <div className="quick-link-icon">
            <img src={documentsIcon} alt="MHD" />
            <p>MHD</p>
          </div>
          {/* Add more icons as needed */}
        </div>
      </section>
    </div>
  );
};

export default CityPage;
