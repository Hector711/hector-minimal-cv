import { useEffect } from 'react';
declare global {
  interface Window {
    Calendly: any; // Cambia 'any' por el tipo específico si lo conoces
  }
}

export default function CalendlyButton({ children, className }: { children: any, className?: string }) {
  const eventName = "asesoria-gratuita-1-a-1";
  const backgroundColor = "292929";
  const textColor = "ffffff";
  const primaryColor = "16d378";
  const cookiesBanner = 1;

  const calendlyUrl = `https://calendly.com/hector-guerra/${eventName}?hide_gdpr_banner=${cookiesBanner}&background_color=${backgroundColor}&text_color=${textColor}&primary_color=${primaryColor}`;

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {  
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  const handleClick = () => {
    window.Calendly.initPopupWidget({
      url: calendlyUrl,
    });
    return false;
  };
  return (
    <>
      <a id='calendly-btn' href='#' onClick={handleClick} className={className}>
        {children}
      </a>
    </>
  );
}
