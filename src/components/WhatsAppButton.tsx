'use client';

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918056673453"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with AVP Sports"
      className="group fixed bottom-20 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_38px_rgba(37,211,102,0.35)] transition-transform duration-200 hover:scale-105 hover:shadow-[0_22px_42px_rgba(37,211,102,0.45)] sm:bottom-6 sm:right-6"
      title="Chat with AVP Sports"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.52 0 .2 5.31.2 11.85c0 2.09.54 4.13 1.57 5.93L0 24l6.42-1.68a11.85 11.85 0 0 0 5.64 1.7h.01c6.54 0 11.86-5.31 11.86-11.85 0-3.17-1.23-6.15-3.41-8.39Zm-8.46 18.24h-.01a9.78 9.78 0 0 1-4.98-1.36l-.36-.21-3.81 1 1.02-3.72-.24-.38A9.73 9.73 0 0 1 2.2 11.85 9.87 9.87 0 0 1 12.06 2c2.63 0 5.1 1.02 6.95 2.88a9.76 9.76 0 0 1 2.87 6.97c0 5.44-4.42 9.86-9.86 9.86Zm5.42-7.45c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.39-1.48-.88-.78-1.48-1.75-1.66-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.19-.3.3-.5.1-.18.05-.35 0-.5-.05-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51l-.57-.01a1.1 1.1 0 0 0-.8.37c-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.08 3.17 5.04 4.45.7.3 1.25.49 1.68.63.71.23 1.35.2 1.86.12.57-.08 1.75-.71 2-1.4.25-.7.25-1.3.17-1.42-.08-.13-.27-.2-.57-.35Z" />
      </svg>
      <span className="pointer-events-none absolute right-full mr-3 hidden rounded-full bg-[var(--avp-ink)] px-2.5 py-1 text-xs font-medium text-white shadow-lg group-hover:block">
        Chat with AVP Sports
      </span>
    </a>
  );
}
