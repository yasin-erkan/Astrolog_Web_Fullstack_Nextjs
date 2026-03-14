export default function LangLoading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4" aria-live="polite" aria-busy="true">
      <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-astro-gold/40 border-t-astro-gold animate-spin" aria-hidden />
      <p className="font-montserrat text-sm text-astro-gold/80 mt-6 uppercase tracking-widest">Loading</p>
    </div>
  );
}
