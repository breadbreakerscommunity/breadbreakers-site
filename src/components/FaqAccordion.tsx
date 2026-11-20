import Link from "next/link";
import type { FaqInlinePart, FaqItem } from "@/lib/faq";
import { links } from "@/lib/site";

function InlinePart({ part }: { part: FaqInlinePart }) {
  switch (part.type) {
    case "text":
      return <>{part.content}</>;
    case "email":
      return (
        <a
          href={links.email}
          className="text-brand underline-offset-2 hover:underline"
        >
          {part.address}
        </a>
      );
    case "link":
      return (
        <a
          href={part.href}
          target="_blank"
          rel="noreferrer"
          className="text-brand underline-offset-2 hover:underline"
        >
          {part.label}
        </a>
      );
    case "internal-link":
      return (
        <Link
          href={part.href}
          className="text-brand underline-offset-2 hover:underline"
        >
          {part.label}
        </Link>
      );
    default:
      return null;
  }
}

function FaqAnswer({ paragraphs }: { paragraphs: FaqInlinePart[][] }) {
  return (
    <div className="space-y-4 text-sm leading-relaxed text-brown md:text-base">
      {paragraphs.map((paragraph, index) => (
        <p key={index}>
          {paragraph.map((part, partIndex) => (
            <InlinePart key={partIndex} part={part} />
          ))}
        </p>
      ))}
    </div>
  );
}

type FaqAccordionProps = {
  items: FaqItem[];
};

export default function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <ul className="divide-y divide-brown/20 border-y border-brown/20">
      {items.map((item) => (
        <li key={item.question} className="py-5">
          <h2 className="text-lg font-semibold text-brown-dark md:text-xl">
            {item.question}
          </h2>
          <div className="mt-3">
            <FaqAnswer paragraphs={item.paragraphs} />
          </div>
        </li>
      ))}
    </ul>
  );
}
