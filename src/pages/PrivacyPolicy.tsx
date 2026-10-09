import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
const date = new Date().toLocaleDateString();

  return (
    <div className="privacy-policy">
      <div className="container">
        <div className="policy-header text-center">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last Updated: {date}</p>
        </div>

        <div className="policy-content">
          <section>
            <h2>1. Introduction</h2>
            <p>
              Welcome to Virtual Flight. This Privacy Policy explains how we handle your information when you play our game or visit our website.
              Virtual Flight is a casual mobile game designed for entertainment.
            </p>
          </section>

          <section>
            <h2>2. Information Collection and Use</h2>
            <p>
              We prioritize your privacy. The game is designed to collect minimal personal information. 
              <strong>[Note: Specific data collection practices must be verified against actual SDK implementation in the mobile app.]</strong>
            </p>
          </section>

          <section>
            <h2>3. Locally Stored Game Progress and Settings</h2>
            <p>
              Your game progress, virtual coin balance, high scores, and settings are typically stored locally on your device. 
              If you uninstall the game or clear its data, this local progress may be lost.
            </p>
          </section>

          <section>
            <h2>4. Google AdMob and Advertising Identifiers</h2>
            <p>
              Our website and game use Google AdMob to display advertisements. AdMob may collect and use advertising identifiers (such as the Android Advertising ID or Apple IDFA) and other information to provide personalized ads and analyze ad performance.
            </p>
            <p>
              You can learn more about how Google uses information from sites or apps that use their services by visiting Google's Privacy & Terms.
            </p>
          </section>

          <section>
            <h2>5. Third-Party Services</h2>
            <p>
              We may use third-party services (such as game engine analytics or crash reporting tools) that may collect information used to identify you. 
              <strong>[Note: Requires confirmation of specific third-party SDKs used in the app, e.g., Unity Analytics, Firebase.]</strong>
            </p>
          </section>

          <section>
            <h2>6. Diagnostics and Crash Information</h2>
            <p>
              To improve game stability and performance, diagnostic data and crash reports may be collected automatically when the app experiences an error. This data usually does not contain personally identifiable information.
            </p>
          </section>

          <section>
            <h2>7. Data Retention and Security</h2>
            <p>
              We value your trust in providing us your information, and we strive to use commercially acceptable means of protecting it. However, no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2>8. Children's Privacy</h2>
            <p>
              These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers.
            </p>
          </section>

          <section>
            <h2>9. User Choices</h2>
            <p>
              You can generally opt-out of personalized advertising through your device settings (e.g., "Opt out of Ads Personalization" on Android or "Limit Ad Tracking" on iOS).
            </p>
          </section>

          <section>
            <h2>10. Policy Updates</h2>
            <p>
              We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
          </section>

          <section>
            <h2>11. Contact Information</h2>
            <p>
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at:
            </p>
            <p>
              <a href="mailto:support@virtualflightgame.com" className="contact-email">support@virtualflightgame.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
