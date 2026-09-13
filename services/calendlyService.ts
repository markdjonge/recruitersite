import { trackEvent, trackConversion } from './ga4Service';
import { trackMetaSchedule } from './metaPixelService';

/** Specifieke link (strategie-call) voor campagne- en artikel-CTA's */
export const CALENDLY_URL = 'https://calendly.com/markdejonge/strategie-call-leadgeneratie-recruitment';

/** Algemene link (vrije meeting) voor op de contactpagina */
export const CALENDLY_URL_GENERAL = 'https://calendly.com/markdejonge/meeting-met-mark-de-jonge';

let calendlyLoaded = false;

declare global {
  interface Window {
    Calendly?: any;
  }
}

/** Laadt de Calendly widget (CSS + JS) eenmalig. */
export const loadCalendly = (): Promise<void> => {
  return new Promise((resolve) => {
    if (calendlyLoaded) return resolve();

    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      calendlyLoaded = true;
      resolve();
    };
    document.body.appendChild(script);
  });
};

/** Opent de Calendly popup over de huidige pagina heen. */
export const openCalendlyPopup = async (url?: string) => {
  await loadCalendly();
  if (!window.Calendly?.initPopupWidget) {
    console.error('Calendly kon niet laden');
    return;
  }
  // Gebruik alleen een opgegeven url als het daadwerkelijk een string is
  // (React onClick geeft anders het event-object als argument mee)
  const finalUrl = typeof url === 'string' ? url : CALENDLY_URL;
  trackEvent('calendly_popup_open');
  window.Calendly.initPopupWidget({ url: `${finalUrl}?hide_gdpr_banner=1` });
};

/** Luistert naar echte boekingen en stuurt conversie-events (GA4 + Meta Pixel). */
let listenerActive = false;
export const initCalendlyTracking = () => {
  if (listenerActive) return;
  listenerActive = true;
  window.addEventListener('message', (e) => {
    if (e.data?.event === 'calendly.event_scheduled') {
      trackConversion('calendly_booking');
      trackMetaSchedule();
    }
  });
};
