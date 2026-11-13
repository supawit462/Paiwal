import { useState } from 'react';
import Photo from './Photo.jsx';
import { ALBUMS, CONTACT, PORTFOLIO_BG } from '../data.js';

export default function Portfolio() {
  const [album, setAlbum] = useState(0);
  return (
    <section className="portfolio" id="portfolio">
      <img loading="lazy" src={PORTFOLIO_BG} alt="" />
      <div className="wrap">
        <h2 className="big rv">PORTFOLIO</h2>
        <p className="lead rv">รวมผลงานและบรรยากาศการทำงานของ PAIWAL</p>
        <div className="pcard rv">
          <div className="albums" role="tablist" aria-label="อัลบั้มผลงาน">
            {ALBUMS.map((a, k) => (
              <button key={a.name} role="tab" aria-selected={album === k} onClick={() => setAlbum(k)}>{a.name} ({a.photos.length})</button>
            ))}
          </div>
          <div className="grid stg" aria-live="polite">
            {ALBUMS[album].photos.map(ph => (
              <figure key={ph.src}><Photo {...ph} /><figcaption>{ph.alt}</figcaption></figure>
            ))}
          </div>
          <a className="more" href={`${CONTACT.facebook}&sk=photos`} target="_blank" rel="noopener">VIEW MORE <i>→</i></a>
        </div>
      </div>
    </section>
  );
}
