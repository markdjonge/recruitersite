import React, { useEffect } from 'react';
import { CALENDLY_URL, loadCalendly } from '../services/calendlyService';

/** Inline Calendly-agenda (iframe) voor op een pagina. */
interface CalendlyEmbedProps {
  url?: string;
}

const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({ url = CALENDLY_URL }) => {
  useEffect(() => {
    loadCalendly().then(() => {
      const el = document.querySelector('.calendly-inline-widget');
      if (!el) return;
      // Correcte Calendly-init met parentElement (werkt ook bij client-side navigatie)
      window.Calendly?.initInlineWidget({ url, parentElement: el });
    });
  }, [url]);

  return (
    <div
      className="calendly-inline-widget rounded-2xl overflow-hidden"
      data-url={`${url}?hide_gdpr_banner=1`}
      style={{ minWidth: '320px', height: '720px' }}
    />
  );
};

export default CalendlyEmbed;
