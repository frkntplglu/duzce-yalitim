import { navLinks, site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-paper">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8">
        <div className="grid gap-10 border-b border-line-light pb-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo tone="light" />
            <p className="mt-5 max-w-sm leading-relaxed text-paper/75">{site.summary}</p>
          </div>

          <nav aria-label="Alt menü" className="md:col-span-3">
            <h2 className="text-sm font-semibold text-paper/60">Sayfa</h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-paper/90 hover:text-yellow">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h2 className="text-sm font-semibold text-paper/60">İletişim</h2>
            <ul className="mt-4 space-y-2.5">
              {site.phones.map((p) => (
                <li key={p.href}>
                  <a href={p.href} className="font-semibold tabular-nums text-paper hover:text-yellow">
                    {p.display}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-paper/90 hover:text-yellow"
                >
                  Instagram: {site.instagram.handle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="pt-8 text-sm text-paper/60">
          © {year} {site.name}
        </p>
      </div>
    </footer>
  );
}
