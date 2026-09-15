'use client';
import { useState } from 'react';
import { Building2, CircleCheck, MapPin, Plane } from 'lucide-react';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import styles from './ContactSection.module.css';

const PUBLIC_EMAIL_DOMAINS = [
  'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com',
  'live.com', 'aol.com', 'icloud.com', 'protonmail.com',
  'zoho.com', 'yandex.com',
];

const contactDetails = [
  { label: 'Company', value: 'Hocean International', icon: Building2 },
  { label: 'Based In', value: 'Colombo, Sri Lanka', icon: MapPin },
  { label: 'Carrier Partner', value: 'DHL Medical Express (Authorized)', icon: Plane },
];

const isBusinessEmail = (email: string) => {
  const parts = email.split('@');
  if (parts.length !== 2) return false;
  return !PUBLIC_EMAIL_DOMAINS.includes(parts[1].toLowerCase());
};

export default function ContactSection() {
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = String(formData.get('email') ?? '');

    if (!isBusinessEmail(email)) {
      setErrorMsg('Please provide a valid business email address.');
      return;
    }
    setErrorMsg('');
    // TODO: post to the Salesforce Web-to-Lead endpoint once it is wired up.
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <div className={styles.grid}>
          <Reveal>
            <SectionHeading
              className={styles.heading}
              tag="Get In Touch"
              title="Request a shipment."
              description="Tell us what's shipping and where it's going — we'll confirm packing requirements and transit time."
            />
            <dl className={styles.details}>
              {contactDetails.map(({ label, value, icon: Icon }) => (
                <div key={label} className={styles.detail}>
                  <span className="icon-tile icon-tile-sm">
                    <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal className={styles.formWrapper} delay={0.1}>
            {submitted ? (
              <div className={styles.success} role="status">
                <CircleCheck size={56} strokeWidth={1.5} aria-hidden="true" />
                <h3>Request received</h3>
                <p>Thank you — our team will confirm packing requirements, documentation, and transit time shortly.</p>
                <button type="button" className="btn btn-outline" onClick={() => setSubmitted(false)}>
                  Send another request
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <input type="hidden" name="oid" value="00D8b000000aRik" />
                <input type="hidden" name="retURL" value="https://www.hoceaninternational.com/thank-you" />

                <div className={styles.row}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="first_name">First Name</label>
                    <input id="first_name" type="text" name="first_name" autoComplete="given-name" required />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="last_name">Last Name</label>
                    <input id="last_name" type="text" name="last_name" autoComplete="family-name" required />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="company">Organization</label>
                  <input id="company" type="text" name="company" autoComplete="organization" />
                </div>

                <div className={styles.row}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" autoComplete="email" required />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" type="tel" name="phone" autoComplete="tel" required />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="destination_country">Destination Country</label>
                  <input id="destination_country" type="text" name="destination_country" autoComplete="off" required />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="description">Shipment Details</label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    placeholder="Sample type, quantity, temperature tier, timeframe..."
                  />
                </div>

                {errorMsg && (
                  <div className={styles.error} role="alert">
                    {errorMsg}
                  </div>
                )}

                <p className={styles.disclaimer}>
                  By submitting this form you agree to Hocean International&apos;s <a href="#">privacy policy</a> &amp;{' '}
                  <a href="#">email policy</a>
                </p>

                <button type="submit" className={styles.submitBtn}>
                  Submit Request
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
