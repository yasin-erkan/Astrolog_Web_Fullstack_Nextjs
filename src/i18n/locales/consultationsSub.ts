/**
 * Consultation sub-pages: birth-chart, synastry, horary, etc.
 * Each block: metaTitle, metaDescription, title, intro, body1, body2?, highlights?
 */

import type { Locale } from '../types';

export type SubPageBlock = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  intro: string;
  body1: string;
  body2?: string;
  highlights?: readonly string[];
};

const sub = (
  en: SubPageBlock,
  tr: SubPageBlock,
  de: SubPageBlock,
  fr: SubPageBlock
) => ({ en, tr, de, fr });

const birthChart = sub(
  {
    metaTitle: 'Natal Chart | Astrolog Umran',
    metaDescription: 'Natal chart reading: your birth chart, life themes and potential.',
    title: 'Natal Chart Reading',
    intro: 'Your natal chart is a map of the sky at the moment you were born. In this consultation we explore its key themes and what they mean for you.',
    body1: 'We look at your Sun, Moon and rising sign, the angles and houses, and the main planetary patterns. The aim is to give you a clear, grounded understanding you can use in daily life.',
    body2: 'Suitable for first-time readers and those who want to go deeper.',
    highlights: ['Full chart overview', 'Life themes and timing', 'Practical takeaways'],
  },
  {
    metaTitle: 'Doğum Haritası | Astrolog Umran',
    metaDescription: 'Doğum haritası yorumu: yaşam temaları ve potansiyel.',
    title: 'Doğum Haritası Yorumu',
    intro: 'Doğum haritanız, doğduğunuz anda gökyüzünün bir haritasıdır. Bu danışmanlıkta ana temaları ve sizin için anlamını keşfediyoruz.',
    body1: 'Güneş, Ay ve yükselen burcunuz, açılar, evler ve temel gezegen kalıplarına bakarız. Amaç, günlük hayatta kullanabileceğiniz net ve ayakları yere basan bir anlayış sunmaktır.',
    body2: 'İlk kez harita dinleyenler ve derinleşmek isteyenler için uygundur.',
    highlights: ['Haritanın bütünü', 'Yaşam temaları ve zamanlama', 'Pratik çıkarımlar'],
  },
  {
    metaTitle: 'Geburtshoroskop | Astrolog Umran',
    metaDescription: 'Geburtshoroskop-Deutung: Ihre Himmelskarte und Lebensthemen.',
    title: 'Geburtshoroskop-Deutung',
    intro: 'Ihr Geburtshoroskop ist eine Karte des Himmels im Moment Ihrer Geburt. In dieser Beratung erkunden wir die zentralen Themen und ihre Bedeutung für Sie.',
    body1: 'Wir betrachten Sonne, Mond und Aszendenten, die Winkel und Häuser sowie die wichtigsten Planetenmuster. Ziel ist ein klares, geerdetes Verständnis für den Alltag.',
    body2: 'Geeignet für Erstlesungen und für alle, die vertiefen möchten.',
    highlights: ['Gesamtüberblick Horoskop', 'Lebensthemen und Timing', 'Praktische Impulse'],
  },
  {
    metaTitle: 'Thème natal | Astrolog Umran',
    metaDescription: 'Lecture du thème natal : votre carte du ciel et thèmes de vie.',
    title: 'Lecture du thème natal',
    intro: 'Votre thème natal est une carte du ciel au moment de votre naissance. Lors de cette consultation, nous en explorons les thèmes clés et leur sens pour vous.',
    body1: 'Nous regardons votre Soleil, Lune et ascendant, les angles et maisons, et les principales configurations planétaires. L’objectif est de vous donner une compréhension claire et ancrée, utilisable au quotidien.',
    body2: 'Adapté aux premières lectures comme à un travail d’approfondissement.',
    highlights: ['Vue d’ensemble du thème', 'Thématiques de vie et timing', 'Pistes concrètes'],
  }
);

const synastry = sub(
  {
    metaTitle: 'Synastry | Astrolog Umran',
    metaDescription: 'Relationship astrology: synastry and composite charts for couples.',
    title: 'Synastry (Relationship Astrology)',
    intro: 'Synastry compares two birth charts to understand the dynamics, strengths and challenges of a relationship.',
    body1: 'We look at how your planets interact with your partner’s, where you support each other and where friction may arise. The focus is on clarity and practical insight, not judgment.',
    highlights: ['Chart comparison', 'Compatibility and growth areas', 'Communication and timing'],
  },
  {
    metaTitle: 'Sinastri | Astrolog Umran',
    metaDescription: 'İlişki astrolojisi: çiftler için sinastri ve kompozit haritalar.',
    title: 'Sinastri (İlişki Astrolojisi)',
    intro: 'Sinastri, iki doğum haritasını karşılaştırarak ilişkinin dinamiklerini, güçlü ve zorlu yanlarını anlamayı sağlar.',
    body1: 'Sizin ve partnerinizin gezegenlerinin nasıl etkileştiğine, birbirinizi nerede desteklediğinize ve nerede sürtüşme olabileceğine bakarız. Odak netlik ve pratik içgörüdür.',
    highlights: ['Harita karşılaştırması', 'Uyum ve büyüme alanları', 'İletişim ve zamanlama'],
  },
  {
    metaTitle: 'Synastrie | Astrolog Umran',
    metaDescription: 'Beziehungsastrologie: Synastrie und Komposit für Paare.',
    title: 'Synastrie (Beziehungsastrologie)',
    intro: 'Synastrie vergleicht zwei Geburtshoroskope, um die Dynamik, Stärken und Herausforderungen einer Beziehung zu verstehen.',
    body1: 'Wir betrachten, wie Ihre Planeten mit denen des Partners wirken, wo Sie sich stützen und wo Reibung entstehen kann. Im Mittelpunkt stehen Klarheit und praktische Einsicht.',
    highlights: ['Horoskopvergleich', 'Kompatibilität und Wachstum', 'Kommunikation und Timing'],
  },
  {
    metaTitle: 'Synastrie | Astrolog Umran',
    metaDescription: 'Astrologie relationnelle : synastrie et thèmes composites pour couples.',
    title: 'Synastrie (astrologie relationnelle)',
    intro: 'La synastrie compare deux thèmes nataux pour comprendre la dynamique, les forces et les défis d’une relation.',
    body1: 'Nous regardons comment vos planètes interagissent avec celles du partenaire, où vous vous soutenez et où des frictions peuvent apparaître. L’accent est mis sur la clarté et des pistes concrètes.',
    highlights: ['Comparaison des thèmes', 'Compatibility et axes de croissance', 'Communication et timing'],
  }
);

/** Placeholder for other consultation sub-pages; expand as needed */
const placeholder = (navKey: string): SubPageBlock => ({
  metaTitle: `${navKey} | Astrolog Umran`,
  metaDescription: `${navKey} consultation.`,
  title: navKey,
  intro: 'Content for this section is being prepared. Please check back later or book a general consultation.',
  body1: 'You can reach out via the contact page for more information.',
});

const placeholderTr = (navKey: string): SubPageBlock => ({
  metaTitle: `${navKey} | Astrolog Umran`,
  metaDescription: `${navKey} danışmanlığı.`,
  title: navKey,
  intro: 'Bu bölümün içeriği hazırlanıyor. Lütfen daha sonra tekrar bakın veya genel bir danışmanlık randevusu alın.',
  body1: 'Daha fazla bilgi için iletişim sayfasından ulaşabilirsiniz.',
});

const placeholderDe = (navKey: string): SubPageBlock => ({
  metaTitle: `${navKey} | Astrolog Umran`,
  metaDescription: `${navKey}-Beratung.`,
  title: navKey,
  intro: 'Der Inhalt für diesen Bereich wird vorbereitet. Bitte schauen Sie später wieder vorbei oder buchen Sie eine allgemeine Beratung.',
  body1: 'Weitere Informationen erhalten Sie über die Kontaktseite.',
});

const placeholderFr = (navKey: string): SubPageBlock => ({
  metaTitle: `${navKey} | Astrolog Umran`,
  metaDescription: `Consultation ${navKey}.`,
  title: navKey,
  intro: 'Le contenu de cette section est en préparation. Revenez plus tard ou réservez une consultation générale.',
  body1: 'Vous pouvez nous contacter via la page contact pour plus d’informations.',
});

const horary = sub(placeholder('Horary'), placeholderTr('Horary'), placeholderDe('Horary'), placeholderFr('Horary'));
const rectification = sub(placeholder('Rectification'), placeholderTr('Rektifikasyon'), placeholderDe('Rektifikation'), placeholderFr('Rectification'));
const karmic = sub(placeholder('Karmic Astrology'), placeholderTr('Karmik Astroloji'), placeholderDe('Karmische Astrologie'), placeholderFr('Astrologie karmique'));
const spiritualGuidance = sub(placeholder('Spiritual Guidance'), placeholderTr('Ruhsal Rehberlik'), placeholderDe('Spirituelle Begleitung'), placeholderFr('Guidance spirituelle'));
const electional = sub(placeholder('Electional'), placeholderTr('Eleksiyon'), placeholderDe('Elektion'), placeholderFr('Élection'));
const predictive = sub(placeholder('Predictive'), placeholderTr('Öngörü'), placeholderDe('Prädiktiv'), placeholderFr('Prédictive'));
const solarReturn = sub(placeholder('Solar Return'), placeholderTr('Yıllık Öngörü'), placeholderDe('Solar Return'), placeholderFr('Retour solaire'));
const composite = sub(placeholder('Composite'), placeholderTr('Kompozit'), placeholderDe('Komposit'), placeholderFr('Composite'));
const businessPartnership = sub(placeholder('Business Partnership'), placeholderTr('İş Ortaklığı'), placeholderDe('Geschäftspartnerschaft'), placeholderFr('Partenariat professionnel'));

export type ConsultationsSubLocale = Record<
  Locale,
  {
    birthChart: SubPageBlock;
    synastry: SubPageBlock;
    horary: SubPageBlock;
    rectification: SubPageBlock;
    karmic: SubPageBlock;
    spiritualGuidance: SubPageBlock;
    electional: SubPageBlock;
    predictive: SubPageBlock;
    solarReturn: SubPageBlock;
    composite: SubPageBlock;
    businessPartnership: SubPageBlock;
  }
>;

export const consultationsSubLocales: ConsultationsSubLocale = {
  en: { birthChart: birthChart.en, synastry: synastry.en, horary: horary.en, rectification: rectification.en, karmic: karmic.en, spiritualGuidance: spiritualGuidance.en, electional: electional.en, predictive: predictive.en, solarReturn: solarReturn.en, composite: composite.en, businessPartnership: businessPartnership.en },
  tr: { birthChart: birthChart.tr, synastry: synastry.tr, horary: horary.tr, rectification: rectification.tr, karmic: karmic.tr, spiritualGuidance: spiritualGuidance.tr, electional: electional.tr, predictive: predictive.tr, solarReturn: solarReturn.tr, composite: composite.tr, businessPartnership: businessPartnership.tr },
  de: { birthChart: birthChart.de, synastry: synastry.de, horary: horary.de, rectification: rectification.de, karmic: karmic.de, spiritualGuidance: spiritualGuidance.de, electional: electional.de, predictive: predictive.de, solarReturn: solarReturn.de, composite: composite.de, businessPartnership: businessPartnership.de },
  fr: { birthChart: birthChart.fr, synastry: synastry.fr, horary: horary.fr, rectification: rectification.fr, karmic: karmic.fr, spiritualGuidance: spiritualGuidance.fr, electional: electional.fr, predictive: predictive.fr, solarReturn: solarReturn.fr, composite: composite.fr, businessPartnership: businessPartnership.fr },
};
