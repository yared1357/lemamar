import { useEffect, useState } from 'react';
import { Download } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

interface NavigatorWithStandalone extends Navigator {
  standalone?: boolean;
}

export default function InstallPrompt() {
  const [installEvent, setInstallEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(() => {
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (navigator as NavigatorWithStandalone).standalone === true;
    return isStandalone;
  });
  const [isDismissed, setIsDismissed] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setInstallEvent(event as BeforeInstallPromptEvent);
    };
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setInstallEvent(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstall = async () => {
    if (!installEvent) {
      setShowInstructions((visible) => !visible);
      return;
    }

    await installEvent.prompt();
    const choice = await installEvent.userChoice;
    setInstallEvent(null);
    if (choice.outcome === 'accepted') setIsInstalled(true);
  };

  const dismissPrompt = () => {
    setIsDismissed(true);
  };

  if (isInstalled || isDismissed) return null;

  return (
    <aside
      aria-label="Install The Jaguar app"
      className="fixed bottom-28 left-3 right-3 z-[60] mx-auto max-w-sm rounded-2xl border border-jaguar-gold/30 bg-[linear-gradient(135deg,#252530_0%,#17171e_100%)] p-3 text-white shadow-xl shadow-black/30 sm:left-auto sm:right-4 sm:mx-0 sm:w-[min(20rem,calc(100vw-2rem))] lg:bottom-6 lg:right-6"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-jaguar-gold/15 text-jaguar-gold-light">
          <Download size={17} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-display text-xs font-bold uppercase tracking-wide">Install The Jaguar</p>
        </div>
      </div>
      <div className="mt-3 flex justify-end gap-2">
        <button
          type="button"
          onClick={dismissPrompt}
          className="rounded-lg px-3 py-2 text-[11px] font-semibold text-white/65 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-jaguar-gold"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleInstall}
          className="rounded-xl bg-gradient-to-r from-jaguar-red via-[#ff4d4f] to-[#ff7a00] px-4 py-2.5 text-[11px] font-black uppercase tracking-[0.12em] text-white shadow-[0_10px_22px_rgba(227,27,35,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_26px_rgba(227,27,35,0.42)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jaguar-gold"
        >
          Install
        </button>
      </div>
      {showInstructions && !installEvent && (
        <p className="mt-2 border-t border-white/10 pt-2 text-[11px] leading-relaxed text-white/70">
          Open your browser menu and choose “Add to Home Screen” or “Install app”.
        </p>
      )}
    </aside>
  );
}
