import { Home, User, Dumbbell, Images, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'About', href: '#about', icon: User },
  { label: 'Training', href: '#training', icon: Dumbbell },
  { label: 'Gallery', href: '#gallery', icon: Images },
  { label: 'Contact', href: '#contact', icon: Phone },
];

export default function BottomNav() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = navItems.map((item) => ({
      id: item.href.replace('#', ''),
      el: document.getElementById(item.href.replace('#', '')),
    }));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach(({ el }) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-jaguar-white/95 backdrop-blur-lg border-t border-jaguar-line safe-area-bottom">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.href.replace('#', '');
          return (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className="flex flex-col items-center gap-1 px-3 py-1.5 transition-colors duration-200"
              aria-label={item.label}
            >
              <Icon
                size={22}
                className={`transition-colors duration-200 ${
                  isActive ? 'text-jaguar-red' : 'text-jaguar-ash'
                }`}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span
                className={`text-[0.625rem] font-semibold tracking-wide transition-colors duration-200 ${
                  isActive ? 'text-jaguar-red' : 'text-jaguar-ash'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
