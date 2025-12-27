import { Star } from "lucide-react";

export default function Footer() {
  const footerLinks = [
    {
      title: "Discover",
      links: [
        { name: "Experiences", href: "/experiences" },
        { name: "Destinations", href: "/#destinations" },
        { name: "Our Vision", href: "/#vision" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com/syren.egypt",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
      ),
    },
    {
      name: "TikTok",
      href: "https://tiktok.com/@syren.egypt",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://facebook.com/syren.egypt",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
      ),
    },
  ];

  return (
    <footer className="bg-blackbase text-white border-t border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand & Tagline */}
          <div className="md:col-span-2 flex flex-col items-start gap-6">
            <span className="font-serif text-3xl tracking-[0.3em] uppercase text-white">SYREN</span>
            <div className="h-px w-12 bg-accent-gold/40" />
            <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/60 font-light max-w-xs leading-relaxed">
              Curated Egyptian Experiences. <br /> Private. Profound. Personal.
            </p>

            <a 
              href="https://g.page/r/REPLACE_REVIEW_LINK" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/40 hover:text-accent-gold transition-colors duration-300 font-sans text-[10px] uppercase tracking-[0.2em]" 
            > 
              <Star size={12} className="text-accent-gold/40" /> 
              Share Your Story
            </a>
          </div>

          {/* Navigation Sections */}
          {footerLinks.map((section) => (
            <div key={section.title} className="flex flex-col gap-6">
              <h4 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-primary">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="font-sans text-sm text-white/90 hover:text-gold transition"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social & Copyright */}
        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow Syren on ${social.name}`}
                className="text-white/90 hover:text-gold transition hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium">
            &copy; {new Date().getFullYear()} Syren Travel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

