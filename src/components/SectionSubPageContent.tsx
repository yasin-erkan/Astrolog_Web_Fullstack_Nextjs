import type { ReactNode } from 'react';

export type SubPageBlock = {
  title: string;
  intro: string;
  body1: string;
  body2?: string;
  highlights?: readonly string[];
};

export default function SectionSubPageContent({
  page,
  fallbackTitle,
  fallbackBody,
  rightSlot,
}: {
  page: SubPageBlock | null | undefined;
  fallbackTitle: string;
  fallbackBody: string;
  rightSlot?: ReactNode;
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
      <h1 className="font-cinzel text-3xl md:text-4xl theme-text tracking-wide mb-6">{page.title}</h1>
      {rightSlot ? (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 mb-8">
          <div className="md:col-span-2 flex-shrink-0">{rightSlot}</div>
          <div className="md:col-span-3 theme-text text-sm sm:text-base opacity-90 leading-relaxed flex flex-col justify-center">
            <p>{page.intro}</p>
          </div>
        </div>
      ) : (
        <p className="theme-text opacity-90 leading-relaxed mb-4">{page.intro}</p>
      )}
      <div className="theme-text opacity-90 leading-relaxed space-y-4">
        <p>{page.body1}</p>
        {page.body2 && <p>{page.body2}</p>}
        {page.highlights && page.highlights.length > 0 && (
          <ul className="list-disc pl-5 space-y-1 mt-4">
            {page.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
