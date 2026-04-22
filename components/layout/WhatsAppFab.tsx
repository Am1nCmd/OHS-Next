import { siteConfig } from "@/lib/site";

export function WhatsAppFab() {
  const number = siteConfig.whatsapp.replace(/\D/g, "");
  return (
    <a
      href={`https://wa.me/${number}?text=${encodeURIComponent(
        "Hi, I'd like to book a hair consultation."
      )}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed z-40 bottom-5 right-5 md:bottom-8 md:right-8 inline-flex items-center justify-center size-14 md:size-16 rounded-full bg-[#25D366] text-white shadow-lift hover:scale-105 transition-transform duration-200"
    >
      <svg
        viewBox="0 0 32 32"
        fill="currentColor"
        className="size-7 md:size-8"
        aria-hidden
      >
        <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.37.69 4.6 1.88 6.47L4 29l7.69-1.84a12 12 0 0 0 4.33.81h.01C22.65 27.97 28 22.6 28 15.99 28 8.4 22.63 3 16.02 3zm0 22a9.98 9.98 0 0 1-5.1-1.4l-.37-.22-4.56 1.09 1.12-4.44-.24-.38A9.96 9.96 0 0 1 6 15.01C6 9.5 10.51 5 16.02 5 21.53 5 26 9.5 26 15c0 5.5-4.48 10-9.98 10zm5.5-7.47c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.46a8.94 8.94 0 0 1-1.65-2.05c-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.68-1.64-.93-2.24-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.48.71.3 1.26.48 1.69.62.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.34z" />
      </svg>
    </a>
  );
}
