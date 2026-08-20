import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { SiX } from "react-icons/si";
import { company } from "@/components/data/company";

const socialLinks = [
  {
    label: "Facebook",
    href: company.social.facebook,
    className: "social-facebook",
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: company.social.instagram,
    className: "social-instagram",
    icon: FaInstagram,
  },
  {
    label: "Twitter",
    href: company.social.twitter,
    className: "social-twitter",
    icon: SiX,
  },
  {
    label: "WhatsApp",
    href: company.social.whatsapp,
    className: "social-whatsapp",
    icon: FaWhatsapp,
  },
  {
    label: "LinkedIn",
    href: company.social.linkedin,
    className: "social-linkedin",
    icon: FaLinkedinIn,
  },
] as const;

export default function SiteFooter() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link className="brand" href="#top" aria-label="Big Rig Carriers home">
              <Image
                src="/assets/logo.png"
                alt=""
                width={48}
                height={48}
              />
              <span className="brand-wordmark">
                <span className="brand-top">BIG RIG</span>
                <small className="brand-sub">CARRIERS</small>
              </span>
            </Link>
            <p>
              Professional transportation solutions for businesses that need
              dependable freight movement.
            </p>
            <div className="social-list" aria-label="Social media links">
              {socialLinks.map((link) => (
                <a
                  className={`social-button ${link.className}`}
                  href={link.href}
                  key={link.label}
                  aria-label={link.label}
                  title={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon aria-hidden="true" focusable="false" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3>Explore</h3>
            <Link href="/#services">Services</Link>
            <br />
            <Link href="/#industries">Industries</Link>
            <br />
            <Link href="/#fleet">Fleet</Link>
          </div>
          <div>
            <h3>Company</h3>
            <Link href="/#about">About</Link>
            <br />
            <Link href="/safety">Safety</Link>
            <br />
            <Link href="/policy">Policy</Link>
            <br />
            <Link href="/careers">Careers</Link>
          </div>
          <div>
            <h3>Visit or call</h3>
            <address>
              {company.address.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
              <br />
              <a href={company.phoneHref}>{company.phone}</a>
              <br />
              {company.hours}
            </address>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2008-2026 Big Rig Carriers. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
