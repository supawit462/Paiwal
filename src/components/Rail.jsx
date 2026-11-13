import { CONTACT } from '../data.js';
import { PhoneIcon, FacebookIcon, MessengerIcon } from './Icons.jsx';

export default function Rail() {
  return (
    <div className="rail" aria-label="ติดต่อด่วน">
      <a href={CONTACT.tel} aria-label={`โทร ${CONTACT.phone}`}><PhoneIcon color="#e2483d" /><span>โทร</span></a>
      <a href={CONTACT.facebook} target="_blank" rel="noopener" aria-label="Facebook"><FacebookIcon color="#1877f2" /><span>Facebook</span></a>
      <a href={CONTACT.messenger} target="_blank" rel="noopener" aria-label="Messenger"><MessengerIcon color="#16327b" /><span>แชท</span></a>
    </div>
  );
}
