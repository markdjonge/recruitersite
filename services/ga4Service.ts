declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export const initGA4 = (measurementId: string) => {
  if (!window.gtag) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      if (window.dataLayer) {
        window.dataLayer.push(arguments);
      }
    }
    gtag('js', new Date());
    gtag('config', measurementId, {
      page_path: window.location.pathname,
    });
    window.gtag = gtag;
  }
};

export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

export const trackPageView = (path: string) => {
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: document.title,
    });
  }
};

export const trackConversion = (conversionName: string, value?: number) => {
  trackEvent(conversionName, {
    value: value || 1,
    currency: 'EUR',
  });
};
