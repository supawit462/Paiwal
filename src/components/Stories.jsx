import Carousel from './Carousel.jsx';
import Photo from './Photo.jsx';
import { STORIES } from '../data.js';

export default function Stories() {
  return (
    <section className="stories" id="stories">
      <div className="wrap">
        <h2 className="big rv"><b>STORIES</b> <em>THE</em> PAIWAL</h2>
        <p className="sub rv">อยากสร้างบ้าน แต่ไม่รู้จะเริ่มต้นยังไง? มาวางแผนกับทีมมืออาชีพที่ PAIWAL ตั้งแต่ออกแบบ ประเมินราคา BOQ จนถึงส่งมอบบ้าน</p>
        <Carousel id="storyc" style={{ marginTop: 30 }}>
          {STORIES.map(st => (
            <a className="vcard" key={st.href} href={st.href} target="_blank" rel="noopener">
              <Photo src={st.src} alt="" p={st.p} s={st.s} />
              <span><i aria-hidden="true">↗</i>{st.title}</span>
            </a>
          ))}
        </Carousel>
        <a className="more rv" href="#contact">CONTACT US <i>→</i></a>
      </div>
    </section>
  );
}
