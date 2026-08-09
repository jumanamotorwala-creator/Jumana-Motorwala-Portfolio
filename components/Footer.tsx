export default function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-paper">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-navy/60 md:flex-row md:px-10">
        <p>&copy; {new Date().getFullYear()} Jumana Motorwala. All rights reserved.</p>
        <p>Built with Next.js &amp; Tailwind CSS.</p>
      </div>
    </footer>
  );
}
