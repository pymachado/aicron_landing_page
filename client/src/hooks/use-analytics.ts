import { useEffect } from "react";
import { useLocation } from "wouter";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export function trackEvent(name: string, params?: Record<string, string | number | boolean>) {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}

export function usePageView() {
  const [location] = useLocation();
  useEffect(() => {
    trackEvent("page_view", { page_path: location });
  }, [location]);
}
