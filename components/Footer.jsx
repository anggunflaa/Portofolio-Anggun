export default function Footer() {
  return (
    <footer className="footer-premium">
      <div className="footer-inner">

        {/* BRAND */}
        <div className="footer-brand">
          <div className="footer-logo">A</div>
          <div className="footer-brand-text">
            <h4>Anggun</h4>
            <span>Front end Develover • Flutter Developer • UI/UX Designer</span>
          </div>
        </div>

        {/* SOCIAL ICONS */}
        <div className="footer-socials">

          {/* Instagram */}
          <a
            href="https://instagram.com/anggun23_18"
            target="_blank"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24">
              <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.9a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z"/>
            </svg>
            <span>@anggun23_18</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/anggunflaa"
            target="_blank"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24">
              <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.43 7.86 10.96.57.1.78-.25.78-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.74 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.56-.29-5.26-1.28-5.26-5.72 0-1.26.45-2.3 1.18-3.11-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 015.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.85 1.18 3.11 0 4.45-2.7 5.42-5.27 5.71.41.36.77 1.07.77 2.16v3.2c0 .31.2.66.79.55A11.52 11.52 0 0023.5 12C23.5 5.74 18.27.5 12 .5z"/>
            </svg>
            <span>anggunflaa</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/anggun-flaa-8b263526a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24">
              <path d="M4.98 3.5C3.33 3.5 2 4.84 2 6.48s1.33 2.98 2.98 2.98A2.98 2.98 0 004.98 3.5zM2.5 21.5h5V9.98h-5V21.5zM9.5 9.98h4.78v1.57h.07c.67-1.26 2.3-2.58 4.74-2.58 5.07 0 6 3.34 6 7.68v4.85h-5v-4.3c0-1.03-.02-2.35-1.43-2.35-1.43 0-1.65 1.12-1.65 2.27v4.38h-5V9.98z"/>
            </svg>
            <span>Anggunflaa</span>
          </a>

        </div>
<footer id="contact">
</footer>

        {/* COPYRIGHT */}
        <p className="footer-copy">
          © {new Date().getFullYear()} Anggun. All rights reserved.
        </p>

      </div>
    </footer>
  )
}
