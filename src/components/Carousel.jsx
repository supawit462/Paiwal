import { useCallback, useEffect, useRef, useState } from 'react';

const GAP = 24; // matches .ctrack gap in styles.css

// Scroll-snap card row with arrows and page dots (used by Home Style and Stories)
export default function Carousel({ id, style, children }) {
  const track = useRef(null);
  const [pages, setPages] = useState(1);
  const [cur, setCur] = useState(0);

  const step = () => (track.current.firstElementChild?.offsetWidth || 0) + GAP;
  const measure = useCallback(() => {
    const t = track.current;
    if (!t) return;
    const s = step() || 1;
    const p = Math.max(1, Math.round((t.scrollWidth - t.clientWidth) / s) + 1);
    setPages(p);
    setCur(Math.min(p - 1, Math.round(t.scrollLeft / s)));
  }, []);

  useEffect(() => {
    measure();
    addEventListener('resize', measure);
    return () => removeEventListener('resize', measure);
  }, [measure]);

  return (
    <div className="carousel rv" id={id} style={style}>
      <button className="carr l" aria-label="ก่อนหน้า" onClick={() => track.current.scrollBy({ left: -step() })}>‹</button>
      <div className="ctrack stg" ref={track} onScroll={() => requestAnimationFrame(measure)}>{children}</div>
      <button className="carr r" aria-label="ถัดไป" onClick={() => track.current.scrollBy({ left: step() })}>›</button>
      <div className="cdots">
        {Array.from({ length: pages }, (_, k) => (
          <button key={k} aria-label={`หน้าที่ ${k + 1}`} aria-current={k === cur} onClick={() => track.current.scrollTo({ left: k * step() })} />
        ))}
      </div>
    </div>
  );
}
