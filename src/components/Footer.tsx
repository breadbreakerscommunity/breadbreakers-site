import Image from "next/image";
import Link from "next/link";
import { images, links } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-brown/25 bg-sand px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Link
            href={links.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-16 w-16">
              <rect width="24" height="24" rx="6" fill="#1877F2" />
              <path
                fill="white"
                d="M13.4 18v-5.3h1.8l.3-2.1h-2.1V9.3c0-.6.2-1 1.1-1H15.6V6.4c-.3 0-.9-.1-1.7-.1-1.7 0-2.8 1-2.8 2.9v1.4H9.2v2.1h1.9V18h2.3Z"
              />
            </svg>
          </Link>
          <Link
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-16 w-16"
            >
              <defs>
                <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f9ce34" />
                  <stop offset="40%" stopColor="#ee2a7b" />
                  <stop offset="100%" stopColor="#6228d7" />
                </linearGradient>
              </defs>
              <rect width="24" height="24" rx="6" fill="url(#instagram-gradient)" />
              <rect
                x="5"
                y="5"
                width="14"
                height="14"
                rx="4"
                fill="none"
                stroke="white"
                strokeWidth="1.6"
              />
              <circle cx="12" cy="12" r="3.2" fill="none" stroke="white" strokeWidth="1.6" />
              <circle cx="16.4" cy="7.6" r="0.9" fill="white" />
            </svg>
          </Link>
          <Link
            href={links.x}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-16 w-16">
              <rect width="24" height="24" rx="6" fill="#111" />
              <path
                fill="white"
                d="M16.7 6.2h1.8l-4 4.6 4.7 6.9h-3.6l-2.8-3.7-3.2 3.7H7.8l4.3-4.9L7.6 6.2h3.7l2.5 3.4 2.9-3.4Zm-.6 10.8h1L8.9 7.1H7.8l8.3 9.9Z"
              />
            </svg>
          </Link>
          <Link
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-16 w-16">
              <rect width="24" height="24" rx="6" fill="#0a66c2" />
              <path
                fill="white"
                d="M7.2 9.4H9.4V17H7.2V9.4Zm1.1-3.4a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6ZM11 9.4h2.1v1h.1c.3-.6 1-1.2 2.1-1.2 2.3 0 2.7 1.5 2.7 3.4V17h-2.2v-3.6c0-.9 0-2-1.2-2s-1.4 1-1.4 2V17H11V9.4Z"
              />
            </svg>
          </Link>
          <Link
            href={links.meetup}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Meetup"
          >
            <Image
              src={images.meetupLogo}
              alt="Meetup"
              width={80}
              height={32}
              className="h-16 w-auto"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
