export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 bg-[#0b0b0b] text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-8 py-10 md:py-12">
        <p className="font-sans text-xs md:text-sm text-white/70">
          © {new Date().getFullYear()} Syren. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

