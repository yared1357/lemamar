import { useEffect, useState } from 'react';
import { Download, X } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

interface NavigatorWithStandalone extends Navigator {
  standalone?: boolean;
}

const dismissedStorageKey = 'the-jaguar-install-prompt-dismissed';

export default function InstallPrompt() {
  const [installEvent, setInstallEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(() => {
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (navigator as NavigatorWithStandalone).standalone === true;
    return isStandalone;
  });
  const [isDismissed, setIsDismissed] = useState(
    () => localStorage.getItem(dismissedStorageKey) === 'true'
  );
  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setInstallEvent(event as BeforeInstallPromptEvent);
    };
    const handleAppInstalled = () => {
      localStorage.removeItem(dismissedStorageKey);
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
    localStorage.setItem(dismissedStorageKey, 'true');
    setIsDismissed(true);
  };

  if (isInstalled || isDismissed) return null;

  return (
    <aside
      aria-label="Install The Jaguar app"
      className="fixed right-3 top-20 z-[60] w-[min(22rem,calc(100vw-1.5rem))] rounded-2xl border border-jaguar-gold/30 bg-[linear-gradient(135deg,#20202a_0%,#17171e_100%)] p-4 text-white shadow-2xl shadow-black/25 lg:right-6 lg:top-28"
    >
      <button
        type="button"
        onClick={dismissPrompt}
        aria-label="Dismiss install reminder"
        className="absolute right-2 top-2 rounded-full p-1.5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
      >
        <X size={16} />
      </button>
      <div className="flex items-center gap-3 pr-6">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-jaguar-gold/15 text-jaguar-gold-light">
          <Download size={19} />
        </span>
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-wide">Install The Jaguar</p>
          <p className="mt-0.5 text-xs leading-relaxed text-white/65">
            Add the app to your device for quick access.
          </p>
        </div>
      </div>
      <button
        type="button"
        onClick={handleInstall}
        className="mt-3 w-full rounded-xl bg-jaguar-red px-4 py-2 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-jaguar-red-dark"
      >
        {installEvent ? 'Install app' : 'How to install'}
      </button>
      {showInstructions && !installEvent && (
        <p className="mt-3 text-xs leading-relaxed text-white/70">
          Open your browser menu and choose “Add to Home Screen” or “Install app”.
        </p>
      )}
    </aside>
  );
}
