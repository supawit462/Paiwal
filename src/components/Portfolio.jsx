import { useEffect, useRef, useState } from 'react';
import Photo from './Photo.jsx';
import { ALBUMS, CONTACT, PORTFOLIO_BG } from '../data.js';

export default function Portfolio() {
  const [album, setAlbum] = useState(0);
  const [shown, setShown] = useState(null); // index of the photo open in the viewer
  const dlg = useRef(null);
  const touchX = useRef(0);
  const photos = ALBUMS[album].photos;

  // open the dialog after the photo has rendered, so it never flashes empty
  useEffect(() => { if (shown !== null && !dlg.current.open) dlg.current.showModal(); }, [shown]);
  const open = k => setShown(k);
  const close = () => dlg.current.close();
  const step = d => setShown(k => (k + d + photos.length) % photos.length);

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
            {photos.map((ph, k) => (
              <figure key={ph.src}>
                <button className="zoom" onClick={() => open(k)} aria-label={`ดูรูปขนาดใหญ่: ${ph.alt}`}><Photo {...ph} /></button>
                <figcaption>{ph.alt}</figcaption>
              </figure>
            ))}
          </div>
          <a className="more" href={`${CONTACT.facebook}&sk=photos`} target="_blank" rel="noopener">VIEW MORE <i>→</i></a>
        </div>
      </div>

      {/* native <dialog>: Esc closes and focus stays inside; a click on the dark area (the dialog itself) closes too */}
      <dialog ref={dlg} className="lightbox" aria-label="ดูรูปผลงาน" onClose={() => setShown(null)}
        onClick={e => { if (e.target === dlg.current) close(); }}
        onKeyDown={e => { if (e.key === 'ArrowRight') step(1); if (e.key === 'ArrowLeft') step(-1); }}
        onTouchStart={e => { touchX.current = e.touches[0].clientX; }}
        onTouchEnd={e => { const dx = e.changedTouches[0].clientX - touchX.current; if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1); }}>
        {shown !== null && (
          <>
            {/* full image, including the whole Facebook post for cropped office shots */}
            <img src={photos[shown].src} alt={photos[shown].alt} />
            <p>{photos[shown].alt} · {shown + 1} / {photos.length}</p>
            <button className="lb-btn lb-close" onClick={close} aria-label="ปิด">×</button>
            {photos.length > 1 && <>
              <button className="lb-btn lb-prev" onClick={() => step(-1)} aria-label="รูปก่อนหน้า">‹</button>
              <button className="lb-btn lb-next" onClick={() => step(1)} aria-label="รูปถัดไป">›</button>
            </>}
          </>
        )}
      </dialog>
    </section>
  );
}
