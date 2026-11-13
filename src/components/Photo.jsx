// A normal photo, or a zoomed crop of a Facebook ad post when p (position) is given
export default function Photo({ src, alt, p, s }) {
  return p
    ? <div className="crop" role="img" aria-label={alt} style={{ '--src': `url(${src})`, '--p': p, '--s': s || '220%' }} />
    : <img loading="lazy" src={src} alt={alt} />;
}
