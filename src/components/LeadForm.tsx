'use client';
import { useState } from 'react';
import styles from './LeadForm.module.css';

export default function LeadForm() {
  const [errorMsg, setErrorMsg] = useState('');

  const validateEmail = (email: string) => {
    const publicDomains = [
        "gmail.com", "yahoo.com", "hotmail.com", "outlook.com", 
        "live.com", "aol.com", "icloud.com", "protonmail.com", 
        "zoho.com", "yandex.com"
    ];
    if (!email) return false;
    const parts = email.split('@');
    if (parts.length !== 2) return false;
    if (publicDomains.includes(parts[1].toLowerCase())) return false;
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    
    if (!validateEmail(email)) {
      setErrorMsg('Please provide a valid business email address.');
      return;
    }
    setErrorMsg('');
    // Typically we'd submit here: e.currentTarget.submit();
    // But since it's a mockup for now, we'll alert or log
    alert("Form validated and ready for Salesforce submission.");
  };

  return (
    <section id="contact-sec" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.formWrapper}>
          <h3 className={styles.title}>Speak to our Industry Experts</h3>
          <p className={styles.subtitle}>Fill the form below to submit your enquiry.</p>
          
          <form className={styles.form} onSubmit={handleSubmit} id="landing2-custom-salesfoce-form">
            <input type="hidden" name="oid" value="00D8b000000aRik" />
            <input type="hidden" name="retURL" value="https://www.hoceaninternational.com/thank-you" />
            
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>First Name</label>
                <input type="text" name="first_name" required className="mandatory-input" />
              </div>
              <div className={styles.inputGroup}>
                <label>Last Name</label>
                <input type="text" name="last_name" required className="mandatory-input" />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Company</label>
              <input type="text" name="company" />
            </div>

            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>Email</label>
                <input type="email" name="email" required className="mandatory-input" />
              </div>
              <div className={styles.inputGroup}>
                <label>Phone</label>
                <input type="tel" name="phone" required className="mandatory-input" />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Country</label>
              <select name="country" className="county-input">
                <option value="">--None--</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Singapore">Singapore</option>
                <option value="Australia">Australia</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label>Type of Inquiry</label>
              <select name="00N8b00000FCz1o">
                <option value="">--None--</option>
                <option value="Open an account">Open an account</option>
                <option value="Request a Life Sciences quote">Request a Life Sciences quote</option>
                <option value="Request a Time Critical quote">Request a Time Critical quote</option>
              </select>
            </div>

            {errorMsg && <div className={styles.error}>{errorMsg}</div>}

            <p className={styles.disclaimer}>
              By submitting this form you agree to Hocean International’s <a href="#">privacy policy</a> & <a href="#">email policy</a>
            </p>

            <button type="submit" className={styles.submitBtn}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
