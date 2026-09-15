import { BadgeCheck, Globe, ShieldCheck, Snowflake } from 'lucide-react';
import styles from './CredentialStrip.module.css';

const credentials = [
  { title: 'Authorized Account Holder', detail: 'DHL Medical Express — Sri Lanka', icon: ShieldCheck },
  { title: 'Sole Provider, Nationwide', detail: 'Only licensed bio-courier in LK', icon: BadgeCheck },
  { title: 'Verified Cold Chain', detail: 'Dry ice, −78°C sublimation', icon: Snowflake },
  { title: '220+ Country Network', detail: 'Via DHL Express air network', icon: Globe },
];

export default function CredentialStrip() {
  return (
    <ul className={styles.strip}>
      {credentials.map(({ title, detail, icon: Icon }) => (
        <li key={title} className={styles.item}>
          <span className="icon-tile icon-tile-sm">
            <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
          </span>
          <div>
            <p className={styles.title}>{title}</p>
            <p className={styles.detail}>{detail}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
