'use client';

import { useEffect, useRef } from 'react';

const useTradingViewWidget = (
    scriptUrl: string,
    config: Record<string, unknown>,
    height: number | undefined,
) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        // Prevent re-loading if already loaded
        if (containerRef.current.dataset.loaded === 'true') return;

        const widgetContainerClassName = 'tradingview-widget-container__widget';

        // Find or create the widget container div
        let widgetDiv = containerRef.current.querySelector(
            `.${widgetContainerClassName}`,
        ) as HTMLDivElement;
        if (!widgetDiv) {
            widgetDiv = document.createElement('div');
            widgetDiv.className = `${widgetContainerClassName}`;
            widgetDiv.style.width = '100%';
            widgetDiv.style.height = `${height}px`;
            containerRef.current.appendChild(widgetDiv);
        } else {
            widgetDiv.style.height = `${height}px`;
        }

        // Remove any existing script to prevent duplicates
        const existingScript = containerRef.current.querySelector(
            'script[src="' + scriptUrl + '"]'
        );
        if (existingScript) {
            existingScript.remove();
        }

        const script = document.createElement('script');
        script.src = scriptUrl;
        script.type = 'text/javascript';
        script.async = true;
        script.innerHTML = JSON.stringify(config);

        widgetDiv.appendChild(script);
        containerRef.current.dataset.loaded = 'true';

        return () => {
            if (containerRef.current) {
                // Remove all scripts from the widget container
                const scripts = containerRef.current.querySelectorAll('script');
                scripts.forEach(s => s.remove());
                delete containerRef.current.dataset.loaded;
            }
        };
    }, [scriptUrl, config, height]);

    return containerRef;
};

export default useTradingViewWidget;
