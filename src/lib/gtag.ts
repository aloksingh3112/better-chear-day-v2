type GTagEvent = {
    action: string;
    category: string;
    label: string;
    value?: number;
  };
  
  // https://developers.google.com/analytics/devguides/collection/gtagjs/pages
  export const pageview = (url: string) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID as string, {
        page_path: url,
      });
    }
  };
  
  // https://developers.google.com/analytics/devguides/collection/gtagjs/events
  export const event = ({ action, category, label, value }: GTagEvent) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  };