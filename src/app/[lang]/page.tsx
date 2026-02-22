export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-start pt-12 md:pt-16 text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(179,145,110,0.25),transparent_50%)] bg-astro-dark" />

        <div className="z-10 animate-fade-in">
          <span className="text-astro-gold text-5xl mb-6 block">🌙</span>
          <h1 className="font-cinzel text-6xl md:text-8xl text-astro-gold mb-4 tracking-wider drop-shadow-[0_4px_20px_rgba(179,145,110,0.25)]">
            Astrolog
          </h1>
          <p className="font-montserrat text-lg md:text-2xl text-astro-gold/85 tracking-[0.4em] uppercase mb-10">
            Gökyüzünün Kadim Rehberliği
          </p>
          <button className="px-12 py-4 bg-astro-gold text-astro-dark font-semibold uppercase tracking-widest hover:bg-astro-gold/90 hover:brightness-110 transition-all duration-300 rounded-sm">
            Danışmanlık Alın
          </button>
        </div>
      </section>

      {/* HOROSCOPES SECTION (Bottom of the image) */}
      <section className="max-w-7xl mx-auto py-24 px-6 bg-astro-bg">
        <h2 className="font-cinzel text-4xl text-center mb-16 text-astro-dark">
          Gökyüzü Rehberiniz
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-8">
          {BURCLAR.map(burc => (
            <div
              key={burc.name}
              className="flex flex-col items-center group cursor-pointer">
              <div className="w-16 h-16 rounded-full border border-astro-border flex items-center justify-center mb-3 group-hover:scale-110 group-hover:border-astro-gold transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(179,145,110,0.2)]">
                <span className="text-2xl">{burc.symbol}</span>
              </div>
              <span className="text-[10px] font-montserrat uppercase tracking-widest text-astro-muted group-hover:text-astro-gold transition-colors">
                {burc.name}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

//  add to the bottom of the page or constants
const BURCLAR = [
  {name: 'Koç', symbol: '♈'},
  {name: 'Boğa', symbol: '♉'},
  {name: 'İkizler', symbol: '♊'},
  {name: 'Yengeç', symbol: '♋'},
  {name: 'Aslan', symbol: '♌'},
  {name: 'Başak', symbol: '♍'},
  {name: 'Terazi', symbol: '♎'},
  {name: 'Akrep', symbol: '♏'},
  {name: 'Yay', symbol: '♐'},
  {name: 'Oğlak', symbol: '♑'},
  {name: 'Kova', symbol: '♒'},
  {name: 'Balık', symbol: '♓'},
];
