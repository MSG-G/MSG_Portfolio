// Hook personnalisé pour tracker les événements GA4

// Types pour GA4
interface GtagConfig {
  page_path?: string;
  page_title?: string;
  [key: string]: string | number | boolean | undefined;
}

interface GtagFunction {
  (command: 'config', id: string, config: GtagConfig): void;
  (command: 'event', eventName: string, params?: Record<string, string | number | boolean>): void;
}

export const useAnalytics = () => {
  // Ensure gtag is available (loaded from Google Analytics script)
  const gtag = (typeof window !== 'undefined' && (window as unknown as Record<string, unknown>).gtag) as GtagFunction | undefined;

  // Track page view
  const trackPageView = (pagePath: string) => {
    if (gtag) {
      gtag('config', 'G-YX6DB8TFBV', {
        page_path: pagePath,
        page_title: document.title,
      });
    }
  };

  // Track custom event
  const trackEvent = (eventName: string, params?: Record<string, string | number | boolean>) => {
    if (gtag) {
      gtag('event', eventName, {
        ...params,
        timestamp: new Date().toISOString(),
      });
    }
  };

  // Track external link click
  const trackExternalLink = (url: string, linkText?: string) => {
    trackEvent('click_external_link', {
      url,
      link_text: linkText || '',
      event_category: 'engagement',
      event_label: url,
    });
  };

  // Track social media click
  const trackSocialClick = (platform: string, url?: string) => {
    trackEvent('social_media_click', {
      platform,
      url: url || '',
      event_category: 'social',
      event_label: platform,
    });
  };

  // Track form submission
  const trackFormSubmission = (formName: string, status: 'success' | 'error', errorMessage?: string) => {
    trackEvent('form_submission', {
      form_name: formName,
      status,
      error_message: status === 'error' ? (errorMessage || '') : '',
      event_category: 'form',
      event_label: formName,
    });
  };

  // Track scroll depth
  const trackScrollDepth = (depth: number) => {
    trackEvent('scroll_depth', {
      depth: `${depth}%`,
      event_category: 'engagement',
      event_label: `scroll_${depth}`,
    });
  };

  // Track section view
  const trackSectionView = (sectionName: string) => {
    trackEvent('section_view', {
      section: sectionName,
      event_category: 'navigation',
      event_label: sectionName,
    });
  };

  return {
    trackPageView,
    trackEvent,
    trackExternalLink,
    trackSocialClick,
    trackFormSubmission,
    trackScrollDepth,
    trackSectionView,
  };
};
