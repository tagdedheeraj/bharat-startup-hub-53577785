
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import HeroSection from '@/components/funding/HeroSection';
import FundingOptionsSection from '@/components/funding/FundingOptionsSection';
import ProcessSection from '@/components/funding/ProcessSection';
import BenefitsSection from '@/components/funding/BenefitsSection';
import FAQSection from '@/components/funding/FAQSection';
import CTASection from '@/components/funding/CTASection';
import LegalDisclaimer from '@/components/funding/LegalDisclaimer';
import { debugPortals } from '@/utils/portalCleanup';

const FundingConsultationPage = () => {
  const { toast } = useToast();
  
  // More comprehensive setup for bottom nav visibility on this page
  useEffect(() => {
    console.log("FundingConsultationPage mounted - ensuring bottom nav and dialog visibility");
    
    // Function to ensure bottom navigation and all interactive elements are visible
    const ensureUIVisibility = () => {
      // Check bottom nav first
      const bottomNav = document.querySelector('.fixed.bottom-0');
      if (bottomNav instanceof HTMLElement) {
        bottomNav.style.display = 'block';
        bottomNav.classList.remove('hidden');
        console.log("Bottom nav visibility forced on funding page");
      }
      
      // Also check for any hidden support buttons
      const supportButtons = document.querySelectorAll('.support-button');
      supportButtons.forEach(button => {
        if (button instanceof HTMLElement) {
          button.style.display = 'flex';
          button.classList.remove('hidden');
          console.log("Support button visibility forced on funding page");
        }
      });
      
      // Check for any dialog triggers that might be hidden
      const dialogTriggers = document.querySelectorAll('[data-state="closed"]');
      dialogTriggers.forEach(trigger => {
        if (trigger instanceof HTMLElement && trigger.style.display === 'none') {
          trigger.style.display = '';
          console.log("Dialog trigger visibility restored");
        }
      });
      
      // Check for portals
      debugPortals();
    };
    
    // Run immediately and multiple times with delays to catch timing issues
    ensureUIVisibility();
    
    // Set up multiple timers at different intervals
    const timers = [
      setTimeout(ensureUIVisibility, 100),
      setTimeout(ensureUIVisibility, 500),
      setTimeout(ensureUIVisibility, 1000),
      setTimeout(ensureUIVisibility, 2000),
      setTimeout(ensureUIVisibility, 5000),
    ];
    
    // Also set up a periodic check
    const intervalId = setInterval(ensureUIVisibility, 3000);
    
    // Show a toast notification to confirm the page is ready
    setTimeout(() => {
      toast({
        title: "Page Ready",
        description: "Funding consultation options are now available.",
        duration: 3000,
      });
    }, 1000);
    
    return () => {
      // Clean up all timers
      timers.forEach(clearTimeout);
      clearInterval(intervalId);
      
      // Do final cleanup to ensure we don't leave any stray portals
      const orphanedPortals = document.querySelectorAll('[data-radix-portal][style*="display: none"]');
      orphanedPortals.forEach(portal => {
        try {
          console.log("Cleaning up orphaned portal on page exit");
          portal.remove();
        } catch (e) {
          console.debug("Failed to clean up portal:", e);
        }
      });
    };
  }, [toast]);

  return (
    <div className="pb-20"> {/* Added padding to bottom to ensure content doesn't get hidden behind the nav */}
      <HeroSection />
      <FundingOptionsSection />
      <ProcessSection />
      <BenefitsSection />
      <FAQSection />
      <CTASection />
      <LegalDisclaimer />
    </div>
  );
};

export default FundingConsultationPage;
