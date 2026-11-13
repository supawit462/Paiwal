import mapSvg from '../assets/thailand-map.svg?raw';
import { CONTACT, PROVINCES } from '../data.js';
import { PhoneIcon, FacebookIcon, MessengerIcon } from './Icons.jsx';

// Contact Us is also the page footer: map + contact details, then the copyright bar
export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="mapside rv" id="area">
        <h3>พื้นที่ให้บริการ</h3>
        {/* Service-area map: real province boundaries (apisit/thailand.json), pre-projected to a local SVG file */}
        <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: mapSvg }} />
      </div>

      <div className="info rv">
        <img loading="lazy" src="images/logo.jpg" alt="PAIWAL Construction (1991)" />
        <small>CONTACT US</small>
        <h2>ติดต่อเรา</h2>
        <p>ปรึกษาฟรี ไม่มีแบบบ้านก็เข้ามาคุยได้ ทีมงาน PAIWAL พร้อมพูดคุยแบบบ้านและงบประมาณ</p>
        <div className="ctas">
          <a className="pill pill-green" href={CONTACT.tel}>โทร {CONTACT.phone}</a>
          <a className="pill pill-line" href={CONTACT.messenger} target="_blank" rel="noopener">ทักแชท Messenger</a>
        </div>
        <dl className="stg">
          <div><dt>สำนักงานใหญ่</dt><dd>บริษัท ไพวัลย์ คอนสตรัคชั่น (1991) จำกัด<br />{CONTACT.address}</dd></div>
          <div><dt>สาขา</dt><dd>{CONTACT.branches.map(b => <a key={b.name} href={b.map} target="_blank" rel="noopener" style={{ display: 'block' }}>{b.name} – เปิดแผนที่ →</a>)}</dd></div>
          <div><dt>โทร</dt><dd><a href={CONTACT.tel}>{CONTACT.phone}</a> ({CONTACT.person})</dd></div>
          <div><dt>อีเมล</dt><dd><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></dd></div>
          <div><dt>บริการ</dt><dd>รับสร้างบ้าน · สร้างคลินิก · อาคารหอพัก · อาคารสาธารณะ · ออกแบบบ้าน</dd></div>
          <div><dt>พื้นที่บริการ</dt><dd>{PROVINCES.join(' · ')}</dd></div>
        </dl>
        <div className="social">
          <a href={CONTACT.facebook} target="_blank" rel="noopener" aria-label="Facebook"><FacebookIcon size={16} /></a>
          <a href={CONTACT.messenger} target="_blank" rel="noopener" aria-label="Messenger"><MessengerIcon size={16} /></a>
          <a href={CONTACT.tel} aria-label={`โทร ${CONTACT.phone}`}><PhoneIcon size={15} /></a>
        </div>
      </div>

      <div className="copy">© 2026 – PAIWAL CONSTRUCTION (1991) CO., LTD. ALL RIGHTS RESERVED.</div>
    </section>
  );
}
