import Link from "next/link";

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  /** Set true for the CTA-style link (e.g. "Resume") if it should stand out from primary nav items. */
  emphasized?: boolean;
}

export default function NavLink({
  href,
  children,
  emphasized = false,
  ...rest
}: NavLinkProps) {
  const base =
    "font-medium text-sm tracking-wide transition-colors px-1 py-1";

  const styles = emphasized
    ? `${base} rounded-full bg-lime text-navy px-4 py-2 hover:bg-lime/90`
    : `${base} rounded-sm text-navy hover:text-navy/70`;

  return (
    <Link href={href} className={styles} {...rest}>
      {children}
    </Link>
  );
}