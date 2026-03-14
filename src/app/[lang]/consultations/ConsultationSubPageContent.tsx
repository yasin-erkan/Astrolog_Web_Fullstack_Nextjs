type Block = {
  title: string;
  intro: string;
  body1: string;
  body2?: string;
  highlights?: readonly string[];
};

export default function ConsultationSubPageContent({
  page,
  fallbackTitle,
  fallbackBody,
}: {
  page: Block | null | undefined;
  fallbackTitle: string;
  fallbackBody: string;
}) {
  if (!page) {
    return (
      <main className="max-w-[900px] mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <h1 className="font-cinzel text-3xl md:text-4xl theme-text tracking-wide mb-6">{fallbackTitle}</h1>
        <p className="theme-text opacity-90 leading-relaxed">{fallbackBody}</p>
      </main>
    );
  }
  return (
    <main className="max-w-[900px] mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <h1 className="font-cinzel text-3xl md:text-4xl theme-text tracking-wide mb-4">{page.title}</h1>
      <p className="theme-text opacity-90 leading-relaxed mb-4">{page.intro}</p>
      <p className="theme-text opacity-90 leading-relaxed mb-4">{page.body1}</p>
      {page.body2 && <p className="theme-text opacity-90 leading-relaxed mb-4">{page.body2}</p>}
      {page.highlights && page.highlights.length > 0 && (
        <ul className="list-disc pl-5 space-y-1 theme-text opacity-90">
          {page.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </main>
  );
}
