import { useState } from "react";
import "./Tabs.scss";

function Lightbox({ src, alt, onClose }) {
  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <img className="lightbox-img" src={src} alt={alt || "lightbox"} />
    </div>
  );
}

function Tabs({ tabs }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(null);
  const tab = tabs[active];
  const openLightbox = (src, alt) => setLightbox({ src, alt });
  const closeLightbox = () => setLightbox(null);
  return (
    <div className="tabs-container">
      <div className="tab-header">
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            className={active === idx ? "tab-btn active" : "tab-btn"}
            onClick={() => setActive(idx)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        <div className="tab-row">
          <div className="poster">
            {tab.image && (
              <img
                src={tab.image}
                alt={tab.imageCaption || "tab image"}
                className="tab-img"
                onClick={() => openLightbox(tab.image, tab.imageCaption)}
              />
            )}
            {tab.imageCaption && <p className="caption">{tab.imageCaption}</p>}
            {tab.mobileImage && (
              <div id="mobile-images">
                <img
                  src={tab.mobileImage}
                  alt={tab.mobileCaption || "mobile image"}
                  className="tab-img"
                  onClick={() => openLightbox(tab.mobileImage, tab.mobileCaption)}
                />
                {tab.mobileCaption && <p className="caption">{tab.mobileCaption}</p>}
              </div>
            )}
          </div>
          <div className="description">
            {tab.titleNumber && <p className="title-number">{tab.titleNumber}</p>}
            {tab.descriptionTitle && <p className="description-title">{tab.descriptionTitle}</p>}
            {tab.paragraphs && tab.paragraphs.map((text, idx) => <p key={idx}>{text}</p>)}
          </div>
        </div>
        {lightbox && (
          <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={closeLightbox} />
        )}
      </div>
    </div>
  );
}

export default Tabs;
