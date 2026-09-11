declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
    META_PIXEL_ID?: string;
  }
}

/**
 * Initialiseert de Meta (Facebook/Instagram) Pixel.
 * Zet je Pixel ID in index.html: window.META_PIXEL_ID = '1234567890';
 */
export const initMetaPixel = (pixelId: string) => {
  if (window.fbq || !pixelId) return;

  // Standaard Meta Pixel snippet
  const n = (window.fbq = function (...args: any[]) {
    (n as any).callMethod ? (n as any).callMethod(...args) : (n as any).queue.push(args);
  }) as any;
  if (!window._fbq) window._fbq = n;
  n.push = n;
  n.loaded = true;
  n.version = '2.0';
  n.queue = [];

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';
  document.head.appendChild(script);

  window.fbq('init', pixelId);
  window.fbq('track', 'PageView');
};

/**
 * Stuurt een Lead-conversie naar Meta zodat je campagne kan optimaliseren.
 */
export const trackMetaLead = () => {
  if (window.fbq) {
    window.fbq('track', 'Lead');
  }
};

/**
 * Stuurt een afspraak-conversie (Schedule) naar Meta.
 */
export const trackMetaSchedule = () => {
  if (window.fbq) {
    window.fbq('track', 'Schedule');
  }
};
