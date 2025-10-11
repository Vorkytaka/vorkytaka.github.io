// Text Toggle Utility
// Auto-initializes all text toggles on page load

export function initializeTextToggles() {
  const toggleTriggers = document.querySelectorAll('.text-toggle');
  
  toggleTriggers.forEach(trigger => {
    const targetId = trigger.getAttribute('data-target');
    if (!targetId) return;
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      setupToggle(trigger as HTMLElement, targetElement);
    }
  });
}

function setupToggle(trigger: HTMLElement, targetElement: HTMLElement) {
  // Add accessibility attributes
  trigger.setAttribute('role', 'button');
  trigger.setAttribute('tabindex', '0');
  trigger.setAttribute('aria-expanded', 'false');
  trigger.setAttribute('aria-controls', targetElement.id);
  
  // Toggle function
  function toggleText() {
    const isHidden = targetElement.classList.contains('hidden');
    targetElement.classList.toggle('hidden');
    trigger.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
  }
  
  // Add click event
  trigger.addEventListener('click', toggleText);
  
  // Add keyboard event
  trigger.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleText();
    }
  });
}

// Auto-initialize when DOM is ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeTextToggles);
  } else {
    initializeTextToggles();
  }
}