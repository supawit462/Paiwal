import Carousel from './Carousel.jsx';
import { HOME_STYLES } from '../data.js';

export default function HomeStyle() {
  return (
    <section className="style" id="style">
      <div className="wrap">
        <div className="eyebrow rv">HOME STYLE</div>
        <h2 className="big rv"><em>THE</em> PAIWAL <b>1991</b></h2>
        <p className="lead rv">บริษัทรับเหมาก่อสร้าง ผู้เชี่ยวชาญงานออกแบบและสร้างบ้านคุณภาพ ภาคเหนือ ตั้งแต่ปี 1991</p>
        <div className="trust rv stg">
          <span><b>ISO</b> 9001:2015</span><span>ควบคุมงบด้วย <b>BOQ</b></span><span>รับประกันโครงสร้าง <b>10 ปี</b></span><span>บริการ <b>5</b> จังหวัด</span>
        </div>
        <Carousel id="styles">
          {HOME_STYLES.map(h => (
            <article className="hcard" key={h.name}>
              <div className="im"><img loading="lazy" src={h.img} alt={h.alt} /></div>
              <h3><b>{h.name}</b> {h.suffix}</h3>
              <h4>{h.heading}</h4>
              <ul>{h.points.map(p => <li key={p}>{p}</li>)}</ul>
              <a className="q" href="#contact">{h.cta}</a>
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
