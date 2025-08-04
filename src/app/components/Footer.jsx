import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-12 pt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
        {/* Logo Section */}
        <div>
          <Image
            src="/images/OOFDIblack.webp"
            alt="Oofdi Logo"
            width={144}
            height={144}
            className="mb-8 w-36 h-auto"
            priority
          />
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-4 flex items-center gap-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/download-customer" className="font-bold hover:underline flex items-center gap-2">
                Download Customer App
              </a>
            </li>
            <li>
              <a href="/download-vendor" className="font-bold hover:underline flex items-center gap-2">
                Download Vendor App
              </a>
            </li>
            <li>
              <a href="/download-rider" className="font-bold hover:underline flex items-center gap-2">
                Download Rider App
              </a>
            </li>
          </ul>
        </div>

        {/* Learn More */}
        <div className="mt-12 md:mt-0">
          <h3 className="font-bold mb-4 flex items-center gap-2">Learn More</h3>
          <ul className="space-y-2">
            <li><a href="/privacy" className="hover:underline flex items-center gap-2">Privacy</a></li>
            <li><a href="/security" className="hover:underline flex items-center gap-2">Security</a></li>
            <li><a href="/terms" className="font-bold hover:underline flex items-center gap-2">Terms of Service</a></li>
            <li><a href="/help" className="font-bold hover:underline flex items-center gap-2">Help & Support</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="mt-12 md:mt-0">
          <h3 className="font-bold mb-4 flex items-center gap-2">Social Links</h3>
          <ul className="space-y-2">
            {/* Instagram */}
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                Instagram
              </a>
            </li>
            {/* LinkedIn */}
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="2" />
                  <line x1="16" y1="8" x2="16" y2="16" />
                  <line x1="8" y1="8" x2="8" y2="16" />
                  <line x1="12" y1="12" x2="12" y2="16" />
                </svg>
                LinkedIn
              </a>
            </li>
            {/* Facebook */}
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H6v4h4v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                Facebook
              </a>
            </li>
            {/* X */}
            <li>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4z" />
                  <path d="M9 9l6 6m0-6l-6 6" />
                </svg>
                X
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Made by Devou */}
      <div className="text-center text-gray-400 mt-5">
        Made by Devou
      </div>
    </footer>
  );
}
