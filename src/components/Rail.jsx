import { CONTACT } from '../data.js';
import { PhoneIcon, FacebookIcon, MessengerIcon } from './Icons.jsx';

export default function Rail() {
  return (
    <div className="rail" aria-label="ติดต่อด่วน">
      <a href={CONTACT.tel} aria-label={`โทร ${CONTACT.phone}`}><PhoneIcon color="#e2483d" /></a>
      <a href={CONTACT.facebook} target="_blank" rel="noopener" aria-label="Facebook"><FacebookIcon color="#1877f2" /></a>
      <a href={CONTACT.messenger} target="_blank" rel="noopener" aria-label="Messenger"><MessengerIcon color="#1e974a" /></a>
    </div>
  );
}
