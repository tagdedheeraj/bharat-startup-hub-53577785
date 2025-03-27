
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
      // Optional cleanup function for any leftover toast portals
      try {
        const toastPortals = document.querySelectorAll('[role="status"]');
        toastPortals.forEach(portal => {
          try {
            if (portal && portal.parentNode) {
              portal.parentNode.removeChild(portal);
            }
          } catch (e) {
            // Silent fail
          }
        });
      } catch (e) {
        // Silent fail
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
