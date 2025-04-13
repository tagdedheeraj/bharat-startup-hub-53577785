
import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { useEffect } from "react"

export function Toaster() {
  const { toasts } = useToast()

  // Ensure we clean up any lingering toast elements when the component unmounts
  useEffect(() => {
    return () => {
      // Cleanup function for any leftover toast portals and dropdown menus
      try {
        // First, clean up toast portals
        const toastPortals = document.querySelectorAll('[role="status"]');
        toastPortals.forEach(portal => {
          try {
            if (portal && portal.parentNode) {
              portal.parentNode.removeChild(portal);
            }
          } catch (e) {
            // Silent fail - don't use remove() directly to avoid DOM errors
            console.debug("Toast portal cleanup error:", e);
          }
        });
        
        // Then, clean up any dropdown menu portals
        const dropdownPortals = document.querySelectorAll('[data-radix-portal], [data-radix-dropdown-menu-content]');
        dropdownPortals.forEach(portal => {
          try {
            if (portal && document.body.contains(portal)) {
              document.body.removeChild(portal);
            }
          } catch (e) {
            // Silent fail - use try/catch for each operation
            console.debug("Dropdown portal cleanup error:", e);
          }
        });
      } catch (e) {
        // Silent fail for overall operation
        console.debug("Portal cleanup error:", e);
      }
    };
  }, []);

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
