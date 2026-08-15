import SignalLine from "./SignalLine";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <SignalLine />
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-wrap justify-between gap-4 font-mono text-[11px] uppercase tracking-widest text-muted">
        <span>© 2026 Harsh Singh · Bengaluru, IN</span>
        <span>Designed & built by Harsh · v1.0</span>
      </div>
    </footer>
  );
}