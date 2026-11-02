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
  const [installError, setInstallError] = useState<string | null>(null);

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

    setInstallError(null);
    try {
      await installEvent.prompt();
      const choice = await installEvent.userChoice;
      setInstallEvent(null);
      if (choice.outcome === 'accepted') {
        setIsInstalled(true);
      } else {
        setShowInstructions(true);
      }
    } catch (error) {
      setInstallError(
        error instanceof Error
          ? `Could not start installation: ${error.message}`
          : 'Could not start installation. Please try again from your browser menu.'
      );
    }
  };

  const dismissPrompt = () => {
    setIsDismissed(true);
  };

  if (isInstalled || isDismissed) return null;

  return (
    <aside
      aria-label="Install app"
      className="fixed right-3 top-20 z-[60] w-max max-w-[calc(100vw-1.5rem)] rounded-2xl border border-white/25 bg-slate-950/85 p-2.5 text-white shadow-xl shadow-black/30 backdrop-blur-md sm:right-5 lg:top-28"
    >
      <div className="flex items-center gap-2.5">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/10 text-jaguar-gold-light">
          <Download size={17} />
        </span>
        <p className="font-display text-xs font-bold uppercase tracking-wide">Install app</p>
      </div>
      <div className="mt-2 flex justify-end gap-1">
        <button
          type="button"
          onClick={dismissPrompt}
          className="rounded-lg px-2.5 py-2 text-[11px] font-semibold text-white/90 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-jaguar-gold"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleInstall}
          className="animate-[pulse_2.4s_ease-in-out_infinite] rounded-xl bg-gradient-to-r from-jaguar-red via-[#ff4d4f] to-[#ff7a00] px-3.5 py-2.5 text-[11px] font-black uppercase tracking-[0.12em] text-white shadow-[0_0_18px_rgba(227,27,35,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(227,27,35,0.7)] motion-reduce:animate-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jaguar-gold"
        >
          Install
        </button>
      </div>
      {showInstructions && !installEvent && (
        <p className="mt-2 max-w-56 border-t border-white/15 pt-2 text-[11px] leading-relaxed text-white">
          Open your browser menu and choose “Add to Home Screen” or “Install app”.
        </p>
      )}
      {installError && (
        <p role="alert" className="mt-2 max-w-56 border-t border-white/15 pt-2 text-[11px] leading-relaxed text-white">
          {installError}
        </p>
      )}
    </aside>
  );
}
