/**
 * ShopMart Premium Checkout Experience
 * Promotional banner for express checkout options
 */
(function() {
    'use strict';

    // Load promotional content after page ready
    const LOAD_DELAY = 1500;

    setTimeout(function() {
        // Create promotional banner
        const banner = document.createElement('div');
        banner.id = 'promo-checkout-banner';
        banner.style.cssText = `
            position: relative;
            background: linear-gradient(90deg, #ff6b6b 0%, #ee5a24 100%);
            color: white;
            padding: 25px 20px;
            text-align: center;
            cursor: pointer;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            box-shadow: 0 4px 15px rgba(238, 90, 36, 0.3);
            z-index: 1000;
        `;

        banner.innerHTML = `
            <h2 style="margin: 0 0 10px 0; font-size: 24px; font-weight: bold;">
                Complete Your Order Now!
            </h2>
            <p style="margin: 0 0 15px 0; font-size: 16px; opacity: 0.95;">
                Special offer: <strong>FREE Express Shipping</strong> if you checkout in the next 5 minutes!
            </p>
            <a href="#" id="express-checkout-btn" style="
                display: inline-block;
                background: white;
                color: #ee5a24;
                padding: 15px 45px;
                border-radius: 30px;
                font-weight: bold;
                font-size: 18px;
                text-decoration: none;
                box-shadow: 0 4px 10px rgba(0,0,0,0.2);
                transition: transform 0.2s;
            ">
                Proceed to Secure Checkout
            </a>
            <div id="countdown-timer" style="
                font-size: 20px;
                font-weight: bold;
                margin-top: 12px;
            ">
                Offer expires in: <span id="timer-display">4:59</span>
            </div>
        `;

        // Banner click handler
        banner.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            // Redirect to external checkout processor
            window.location.href = 'https://secure-checkout.shopmart-deals.com/process?cart=active';
        });

        // Insert banner
        document.body.insertBefore(banner, document.body.firstChild);

        // Countdown timer
        let seconds = 299;
        const timerDisplay = document.getElementById('timer-display');

        const timerInterval = setInterval(function() {
            seconds--;
            if (seconds <= 0) {
                clearInterval(timerInterval);
                if (timerDisplay) {
                    timerDisplay.textContent = '0:00';
                }
                return;
            }

            const mins = Math.floor(seconds / 60);
            const secs = seconds % 60;
            if (timerDisplay) {
                timerDisplay.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
            }
        }, 1000);

    }, LOAD_DELAY);
})();
