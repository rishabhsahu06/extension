// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'applyCoupon') {
      // Find coupon input field and apply coupon
      const couponInputs = document.querySelectorAll('input[name*="coupon"], input[name*="discount"], input[name*="promo"]');
      
      if (couponInputs.length > 0) {
        const couponInput = couponInputs[0];
        couponInput.value = request.code;
        
        // Simulate input event
        couponInput.dispatchEvent(new Event('input', { bubbles: true }));
        
        // Find and click apply button
        const applyButtons = Array.from(document.querySelectorAll('button')).filter(button => 
          button.textContent.toLowerCase().includes('apply') ||
          button.textContent.toLowerCase().includes('submit') ||
          button.textContent.toLowerCase().includes('verify')
        );
        
        if (applyButtons.length > 0) {
          applyButtons[0].click();
        }
      }
    }
  });