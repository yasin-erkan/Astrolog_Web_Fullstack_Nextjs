/**
 * Healing sub-pages: holistic-movement, theta-healing, etc.
 * Block: metaTitle, metaDescription, title, intro, body1, body2?, highlights?; holisticMovement has photoAlt.
 */

import type { Locale } from '../types';

export type HealingSubBlock = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  intro: string;
  body1: string;
  body2?: string;
  highlights?: readonly string[];
  photoAlt?: string;
};

const sub = (en: HealingSubBlock, tr: HealingSubBlock, de: HealingSubBlock, fr: HealingSubBlock) => ({ en, tr, de, fr });

const ph = (title: string): HealingSubBlock => ({
  metaTitle: `${title} | Astrolog Umran`,
  metaDescription: `${title} – holistic healing.`,
  title,
  intro: 'Content for this section is being prepared. Please check back later or book a general session.',
  body1: 'You can reach out via the contact page for more information.',
});
const phTr = (title: string): HealingSubBlock => ({
  metaTitle: `${title} | Astrolog Umran`,
  metaDescription: `${title} – bütünsel şifa.`,
  title,
  intro: 'Bu bölümün içeriği hazırlanıyor. Lütfen daha sonra tekrar bakın veya genel bir seans randevusu alın.',
  body1: 'Daha fazla bilgi için iletişim sayfasından ulaşabilirsiniz.',
});
const phDe = (title: string): HealingSubBlock => ({
  metaTitle: `${title} | Astrolog Umran`,
  metaDescription: `${title} – ganzheitliche Heilung.`,
  title,
  intro: 'Der Inhalt für diesen Bereich wird vorbereitet. Bitte schauen Sie später wieder vorbei oder buchen Sie eine allgemeine Sitzung.',
  body1: 'Weitere Informationen erhalten Sie über die Kontaktseite.',
});
const phFr = (title: string): HealingSubBlock => ({
  metaTitle: `${title} | Astrolog Umran`,
  metaDescription: `${title} – soin holistique.`,
  title,
  intro: 'Le contenu de cette section est en préparation. Revenez plus tard ou réservez une séance générale.',
  body1: 'Vous pouvez nous contacter via la page contact pour plus d’informations.',
});

const holisticMovement = sub(
  {
    metaTitle: 'Holistic Movement & Pilates | Astrolog Umran',
    metaDescription: 'Holistic Movement with Pilates: body, breath and awareness.',
    title: 'Holistic Movement with Pilates',
    intro: 'Holistic Movement with Pilates is where body, breath and awareness meet. It is not only exercise; it is a moving meditation that aligns your physical practice with your inner rhythm.',
    body1: 'Through controlled, mindful movement we build strength and flexibility while staying present. Each session invites you to listen to your body, respect its limits and discover its potential. The practice supports posture, core stability and a calmer mind.',
    body2: 'In the spirit of Astro-Pilates, we honour the connection between cosmic cycles and the body. Whether you are new to Pilates or deepening your practice, these sessions offer a space to move with intention and grace.',
    photoAlt: 'Holistic Movement and Pilates practice',
  },
  {
    metaTitle: 'Bütüncül Hareket & Pilates | Astrolog Umran',
    metaDescription: 'Pilates ile bütüncül hareket: beden, nefes ve farkındalık.',
    title: 'Pilates ile Bütüncül Hareket',
    intro: 'Pilates ile Bütüncül Hareket, beden, nefes ve farkındalığın buluştuğu yerdir. Sadece egzersiz değil; fiziksel pratiğinizi iç ritminizle uyumlu hale getiren hareketli bir meditasyondur.',
    body1: 'Kontrollü ve bilinçli hareketle güç ve esneklik kazanırken anda kalırsınız. Her seans bedeninizi dinlemenizi, sınırlarına saygı göstermenizi ve potansiyelini keşfetmenizi davet eder.',
    body2: 'Astro-Pilates ruhunda, gökyüzü döngüleri ile beden arasındaki bağı onurlandırıyoruz. Pilatese yeni başlıyor ya da pratiğinizi derinleştiriyor olun, bu seanslar niyet ve zarafetle hareket edeceğiniz bir alan sunar.',
    photoAlt: 'Bütüncül Hareket ve Pilates pratiği',
  },
  {
    metaTitle: 'Ganzheitliche Bewegung & Pilates | Astrolog Umran',
    metaDescription: 'Ganzheitliche Bewegung mit Pilates: Körper, Atem und Bewusstsein.',
    title: 'Ganzheitliche Bewegung mit Pilates',
    intro: 'Ganzheitliche Bewegung mit Pilates ist der Ort, an dem Körper, Atem und Bewusstsein sich treffen. Es ist nicht nur Training, sondern eine bewegte Meditation.',
    body1: 'Durch kontrollierte, achtsame Bewegung bauen wir Kraft und Flexibilität auf und bleiben im gegenwärtigen Moment. Die Praxis unterstützt Haltung, Rumpfstabilität und einen ruhigeren Geist.',
    body2: 'Im Geiste von Astro-Pilates ehren wir die Verbindung zwischen kosmischen Zyklen und dem Körper.',
    photoAlt: 'Ganzheitliche Bewegung und Pilates-Praxis',
  },
  {
    metaTitle: 'Mouvement holistique & Pilates | Astrolog Umran',
    metaDescription: 'Mouvement holistique avec le Pilates : corps, souffle et conscience.',
    title: 'Mouvement holistique avec le Pilates',
    intro: "Le mouvement holistique avec le Pilates est l'endroit où le corps, le souffle et la conscience se rencontrent. C'est une méditation en mouvement qui aligne votre pratique avec votre rythme intérieur.",
    body1: 'Par le mouvement contrôlé et conscient, nous développons force et souplesse tout en restant présents. La pratique soutient la posture, la stabilité du centre et un mental plus calme.',
    body2: "Dans l'esprit d'Astro-Pilates, nous honorons le lien entre les cycles cosmiques et le corps.",
    photoAlt: 'Pratique du mouvement holistique et du Pilates',
  }
);

const placeholders = [
  ['Bodily Awareness', 'Beden Farkındalığı', 'Körperbewusstsein', 'Conscience corporelle'],
  ['Theta Healing', 'Theta Healing', 'Theta Healing', 'Theta Healing'],
  ['Life Guidance', 'Yaşam Rehberliği', 'Lebensbegleitung', 'Guidance de vie'],
  ['Spirit of Time', 'Zamanın Ruhu', 'Geist der Zeit', 'Esprit du temps'],
  ['Crystal Guidance', 'Kristal Rehberliği', 'Kristallberatung', 'Guidance des cristaux'],
  ['Element Exercises', 'Element Egzersizleri', 'Element-Übungen', 'Exercices des éléments'],
  ['Moon Flows', 'Ay Akışları', 'Mondflüsse', 'Flux lunaires'],
  ['Chakra Balancing', 'Çakra Dengeleme', 'Chakra-Balance', 'Équilibrage des chakras'],
  ['Crystal Therapy', 'Kristal Terapi', 'Kristalltherapie', 'Thérapie par les cristaux'],
  ['Group Sessions', 'Grup Seansları', 'Gruppensitzungen', 'Séances de groupe'],
  ['Corporate Wellness', 'Kurumsal Wellness', 'Corporate Wellness', 'Bien-être en entreprise'],
];

export type HealingSubLocale = Record<Locale, {
  holisticMovement: HealingSubBlock;
  bodilyAwareness: HealingSubBlock;
  thetaHealing: HealingSubBlock;
  lifeGuidance: HealingSubBlock;
  spiritOfTime: HealingSubBlock;
  crystalGuidance: HealingSubBlock;
  elementExercises: HealingSubBlock;
  moonFlows: HealingSubBlock;
  chakraBalancing: HealingSubBlock;
  crystalTherapy: HealingSubBlock;
  groupSessions: HealingSubBlock;
  corporateWellness: HealingSubBlock;
}>;

function buildPlaceholders(): HealingSubLocale {
  const en: HealingSubLocale['en'] = { holisticMovement: holisticMovement.en, bodilyAwareness: ph(placeholders[0][0]), thetaHealing: ph(placeholders[1][0]), lifeGuidance: ph(placeholders[2][0]), spiritOfTime: ph(placeholders[3][0]), crystalGuidance: ph(placeholders[4][0]), elementExercises: ph(placeholders[5][0]), moonFlows: ph(placeholders[6][0]), chakraBalancing: ph(placeholders[7][0]), crystalTherapy: ph(placeholders[8][0]), groupSessions: ph(placeholders[9][0]), corporateWellness: ph(placeholders[10][0]) };
  const tr: HealingSubLocale['tr'] = { holisticMovement: holisticMovement.tr, bodilyAwareness: phTr(placeholders[0][1]), thetaHealing: phTr(placeholders[1][1]), lifeGuidance: phTr(placeholders[2][1]), spiritOfTime: phTr(placeholders[3][1]), crystalGuidance: phTr(placeholders[4][1]), elementExercises: phTr(placeholders[5][1]), moonFlows: phTr(placeholders[6][1]), chakraBalancing: phTr(placeholders[7][1]), crystalTherapy: phTr(placeholders[8][1]), groupSessions: phTr(placeholders[9][1]), corporateWellness: phTr(placeholders[10][1]) };
  const de: HealingSubLocale['de'] = { holisticMovement: holisticMovement.de, bodilyAwareness: phDe(placeholders[0][2]), thetaHealing: phDe(placeholders[1][2]), lifeGuidance: phDe(placeholders[2][2]), spiritOfTime: phDe(placeholders[3][2]), crystalGuidance: phDe(placeholders[4][2]), elementExercises: phDe(placeholders[5][2]), moonFlows: phDe(placeholders[6][2]), chakraBalancing: phDe(placeholders[7][2]), crystalTherapy: phDe(placeholders[8][2]), groupSessions: phDe(placeholders[9][2]), corporateWellness: phDe(placeholders[10][2]) };
  const fr: HealingSubLocale['fr'] = { holisticMovement: holisticMovement.fr, bodilyAwareness: phFr(placeholders[0][3]), thetaHealing: phFr(placeholders[1][3]), lifeGuidance: phFr(placeholders[2][3]), spiritOfTime: phFr(placeholders[3][3]), crystalGuidance: phFr(placeholders[4][3]), elementExercises: phFr(placeholders[5][3]), moonFlows: phFr(placeholders[6][3]), chakraBalancing: phFr(placeholders[7][3]), crystalTherapy: phFr(placeholders[8][3]), groupSessions: phFr(placeholders[9][3]), corporateWellness: phFr(placeholders[10][3]) };
  return { en, tr, de, fr };
}

export const healingSubLocales = buildPlaceholders();
