// All page content lives here, so text and photos can change without touching components.

export const CONTACT = {
  phone: '088-228-8492',
  person: 'คุณออย',
  tel: 'tel:0882288492',
  email: 'paiwal8957@gmail.com',
  facebook: 'https://www.facebook.com/profile.php?id=100048064998225',
  messenger: 'https://m.me/100048064998225',
  address: '98/57 หมู่ 9 โครงการปริณดาสันใต้ ถ.แม่ออน ต.สันกำแพง อ.สันกำแพง จ.เชียงใหม่',
  // map pins as posted on the PAIWAL Facebook page
  branches: [
    { name: 'สำนักงานใหญ่ เชียงใหม่', map: 'https://maps.app.goo.gl/XnDESVX4Un7vg2bY6' },
    { name: 'สาขาแพร่', map: 'https://maps.app.goo.gl/ydJ4dXYLshmRj4uC8' },
  ],
};

export const PROVINCES = ['เชียงใหม่', 'ลำพูน', 'ลำปาง', 'แพร่', 'น่าน'];

const U = (id, w = 900) => `https://images.unsplash.com/photo-${id}?w=${w}&q=75`;
// real photos downloaded from public posts on the PAIWAL Facebook page, named by Facebook photo id
const F = id => `images/fb/${id}.jpg`;
const POST = id => `https://www.facebook.com/photo/?fbid=${id}`;

// shortcut: style cards other than FAMILY use Unsplash stand-ins; swap when the client sends real photos of each style
export const HOME_STYLES = [
  { img: U('1613490493576-7fde63acd811'), alt: 'บ้านสไตล์โมเดิร์น', name: 'MODERN', suffix: 'HOUSE', heading: 'จุดเด่น', points: ['เส้นสายเรียบ ผนังกระจกรับแสง', 'หลังคาแบน ฟังก์ชันครบ', 'ปรับแบบได้ตามงบ'], cta: 'ขอราคา BOQ →' },
  { img: U('1580587771525-78b9dba3b914'), alt: 'บ้านสไตล์คอนเทมโพรารี', name: 'CONTEMPORARY', suffix: 'HOUSE', heading: 'จุดเด่น', points: ['ผสมวัสดุไม้ หิน และกระจก', 'ระเบียงกว้าง โปร่งสบาย', 'เหมาะกับอากาศภาคเหนือ'], cta: 'ขอราคา BOQ →' },
  { img: U('1600596542815-ffad4c1539a9'), alt: 'บ้านสไตล์ลักชัวรี', name: 'LUXURY', suffix: 'HOUSE', heading: 'จุดเด่น', points: ['บ้านหลังใหญ่ พร้อมสระว่ายน้ำ', 'งานระบบและวัสดุเกรดพรีเมียม', 'ควบคุมงานโดยวิศวกร'], cta: 'ขอราคา BOQ →' },
  { img: F('1693927102219440'), alt: 'บ้านเดี่ยวที่ PAIWAL สร้างและส่งมอบแล้ว', name: 'FAMILY', suffix: 'HOUSE', heading: 'จุดเด่น', points: ['บ้านเดี่ยวสำหรับครอบครัว', 'จัดสรรพื้นที่ใช้สอยคุ้มค่า', 'งบคุมได้ด้วย BOQ'], cta: 'ขอราคา BOQ →' },
  { img: U('1512917774080-9991f1c4c750'), alt: 'อาคารพาณิชย์และงานโครงการ', name: 'CLINIC', suffix: '& BUILDING', heading: 'รับงานเพิ่มเติม', points: ['สร้างคลินิก', 'อาคารหอพัก', 'อาคารสาธารณะ'], cta: 'ปรึกษาโครงการ →' },
];

/* Portfolio albums: all real PAIWAL photos. The grid shows every photo in the album.
   To add an album: add one { name, photos } entry.
   Photo: { src, alt }  or a zoomed crop of a Facebook post: { src, alt, p: 'x% y%', s: '220%' } */
const set = (alt, ids) => ids.map(id => ({ src: F(id), alt }));
export const ALBUMS = [
  { name: 'บ้านส่งมอบแล้ว', photos: [
    { src: F('1693927102219440'), alt: 'หน้าบ้านและโรงจอดรถ' },
    { src: F('1693926652219485'), alt: 'ประตูกระจกบานใหญ่หน้าบ้าน' },
    { src: F('1693926642219486'), alt: 'มุมหน้าบ้าน' },
    { src: F('1693919062220244'), alt: 'ส่งมอบบ้านให้เจ้าของบ้าน' },
    { src: F('1693919055553578'), alt: 'ทีม PAIWAL วันส่งมอบบ้าน' },
    { src: F('1693914475554036'), alt: 'ระเบียงหน้าบ้าน' },
    { src: F('1693914468887370'), alt: 'โถงหน้าบ้าน' },
    { src: F('1693914438887373'), alt: 'งานฝ้าชายคา' },
  ] },
  { name: 'งานภายใน', photos: [
    ...set('ห้องภายในบ้าน', ['1693915338887283', '1693915332220617', '1693915178887299', '1693915172220633', '1693915075553976', '1693914848887332']),
    ...set('ห้องภายในบ้าน', ['1693914808887336', '1693914788887338', '1693914725554011', '1693914712220679', '1693914698887347']),
    { src: F('1693914448887372'), alt: 'หน้าต่างวงกลม' },
  ] },
  { name: 'ห้องน้ำ', photos: [
    ...set('ห้องน้ำ', ['1693915752220575', '1693915745553909', '1693915728887244', '1693915592220591', '1693915535553930', '1693915528887264', '1693915508887266']),
    ...set('ห้องน้ำ', ['1681860936759390', '1681860923426058', '1681860850092732', '1681860836759400', '1681860823426068']),
  ] },
  { name: 'ระหว่างก่อสร้าง', photos: [
    ...set('งานเหล็กเสริมและโครงสร้าง', ['1712326347046182', '1712326287046188', '1712326280379522', '1712326273712856']),
    { src: F('1712326023712881'), alt: 'แบบโครงสร้าง 3D' },
  ] },
  { name: 'PAIWAL Office', photos: [
    { src: 'images/fb-5.jpg', alt: 'อาคารสำนักงาน PAIWAL', p: '45% 55%', s: '250%' },
    { src: 'images/fb-2.jpg', alt: 'ผนังโลโก้ในสำนักงาน', p: '100% 45%', s: '200%' },
    { src: 'images/fb-7.jpg', alt: 'ให้คำปรึกษาลูกค้า', p: '90% 70%', s: '200%' },
    { src: 'images/fb-1.jpg', alt: 'ทีมออกแบบและวิศวกร', p: '100% 65%', s: '200%' },
    { src: 'images/fb-6.jpg', alt: 'ออกแบบบ้านด้วยภาพ 3D', p: '75% 55%', s: '200%' },
  ] },
];
console.assert(ALBUMS.every(a => a.name && a.photos.length), 'every album needs a name and at least one photo');

// Cards that link to PAIWAL's own Facebook posts. Titles come from each post's caption or artwork.
// Older cards use a zoomed crop (p, s) to hide the ad text; newer posts show the whole artwork.
export const STORIES = [
  { href: POST('1702874857991331'), src: F('1702874857991331'), title: '“ประทับใจตั้งแต่สร้างคาเฟ่ ครั้งนี้ก็เลือกไพวัลย์อีกครั้ง” – คุณฝน จ.แพร่' },
  { href: POST('1704170041195146'), src: F('1704170041195146'), title: 'ฉลองเปิดสาขาแพร่อย่างเป็นทางการ' },
  { href: POST('1711126980499452'), src: F('1711126980499452'), title: 'ดูหน้างานจริง 7 พิกัดทั่ว จ.แพร่' },
  { href: POST('1712326007046216'), src: F('1712326007046216'), title: 'งานก่อสร้าง อ.ปัว จ.น่าน คืบหน้า 25%' },
  { href: POST('1693913768887440'), src: F('1693913768887440'), title: 'ส่งมอบบ้านให้ลูกค้า' },
  { href: POST('1693913785554105'), src: F('1693913785554105'), title: 'พร้อมสร้างบ้านคุณภาพ ส่งมอบความมั่นใจ' },
  { href: POST('1682997356645748'), src: F('1682997356645748'), title: 'ผลงานส่งมอบบ้านจาก PAIWAL' },
  { href: POST('1682997326645751'), src: F('1682997326645751'), title: 'พร้อมส่งมอบบ้าน' },
  { href: POST('1729116815367135'), src: 'images/fb-1.jpg', p: '100% 60%', s: '200%', title: 'รู้จักทีมที่จะดูแลบ้านของคุณ ก่อนตัดสินใจสร้าง' },
  { href: POST('1729116828700467'), src: 'images/fb-2.jpg', p: '100% 42%', s: '200%', title: 'วางแผนให้ชัดเจน งบไม่บาน' },
  { href: POST('1729116662033817'), src: 'images/fb-6.jpg', p: '75% 55%', s: '200%', title: 'ออกแบบบ้านให้ตอบโจทย์คุณที่สุด' },
  { href: POST('1729116648700485'), src: 'images/fb-7.jpg', p: '90% 70%', s: '200%', title: 'ไม่ต้องมีแบบบ้านพร้อม ก็เข้ามาคุยกันได้' },
  { href: POST('1729116675367149'), src: 'images/fb-5.jpg', p: '45% 55%', s: '250%', title: 'อยากสร้างบ้าน ต้องวางแผนกับมืออาชีพ' },
];

export const PORTFOLIO_BG = F('1693926642219486');
