import type { Locale } from '../types';
import type { ZodiacSign } from '../types';

const zodiacSymbols = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'] as const;
const slugs = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'] as const;
const elements: ZodiacSign['element'][] = ['fire', 'earth', 'air', 'water', 'fire', 'earth', 'air', 'water', 'fire', 'earth', 'air', 'water'];

const enNames = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
const enKeywords: readonly [string, string, string][] = [
  ['Energy', 'Leadership', 'Courage'],
  ['Stability', 'Sensuality', 'Patience'],
  ['Curiosity', 'Communication', 'Adaptability'],
  ['Intuition', 'Nurturing', 'Emotion'],
  ['Creativity', 'Pride', 'Generosity'],
  ['Precision', 'Service', 'Discernment'],
  ['Balance', 'Harmony', 'Partnership'],
  ['Depth', 'Transformation', 'Power'],
  ['Freedom', 'Wisdom', 'Adventure'],
  ['Discipline', 'Ambition', 'Responsibility'],
  ['Innovation', 'Humanity', 'Independence'],
  ['Compassion', 'Imagination', 'Spirituality'],
];

const trNames = ['Koç', 'Boğa', 'İkizler', 'Yengeç', 'Aslan', 'Başak', 'Terazi', 'Akrep', 'Yay', 'Oğlak', 'Kova', 'Balık'];
const trKeywords: readonly [string, string, string][] = [
  ['Enerji', 'Liderlik', 'Cesaret'],
  ['Stabilite', 'Duyusallık', 'Sabır'],
  ['Merak', 'İletişim', 'Uyum'],
  ['Sezgi', 'Bakım', 'Duygu'],
  ['Yaratıcılık', 'Gurur', 'Cömertlik'],
  ['Hassasiyet', 'Hizmet', 'Ayırt Etme'],
  ['Denge', 'Uyum', 'Ortaklık'],
  ['Derinlik', 'Dönüşüm', 'Güç'],
  ['Özgürlük', 'Bilgelik', 'Macera'],
  ['Disiplin', 'Hırs', 'Sorumluluk'],
  ['Yenilik', 'İnsanlık', 'Bağımsızlık'],
  ['Şefkat', 'Hayal Gücü', 'Spiritüellik'],
];

const deNames = ['Widder', 'Stier', 'Zwillinge', 'Krebs', 'Löwe', 'Jungfrau', 'Waage', 'Skorpion', 'Schütze', 'Steinbock', 'Wassermann', 'Fische'];
const deKeywords: readonly [string, string, string][] = [
  ['Energie', 'Führung', 'Mut'],
  ['Stabilität', 'Sinnlichkeit', 'Geduld'],
  ['Neugier', 'Kommunikation', 'Anpassung'],
  ['Intuition', 'Fürsorge', 'Emotion'],
  ['Kreativität', 'Stolz', 'Großzügigkeit'],
  ['Präzision', 'Dienst', 'Urteilsvermögen'],
  ['Balance', 'Harmonie', 'Partnerschaft'],
  ['Tiefe', 'Transformation', 'Kraft'],
  ['Freiheit', 'Weisheit', 'Abenteuer'],
  ['Disziplin', 'Ambition', 'Verantwortung'],
  ['Innovation', 'Menschlichkeit', 'Unabhängigkeit'],
  ['Mitgefühl', 'Vorstellungskraft', 'Spiritualität'],
];

const frNames = ['Bélier', 'Taureau', 'Gémeaux', 'Cancer', 'Lion', 'Vierge', 'Balance', 'Scorpion', 'Sagittaire', 'Capricorne', 'Verseau', 'Poissons'];
const frKeywords: readonly [string, string, string][] = [
  ['Énergie', 'Leadership', 'Courage'],
  ['Stabilité', 'Sensualité', 'Patience'],
  ['Curiosité', 'Communication', 'Adaptabilité'],
  ['Intuition', 'Maternage', 'Émotion'],
  ['Créativité', 'Fierté', 'Générosité'],
  ['Précision', 'Service', 'Discernement'],
  ['Équilibre', 'Harmonie', 'Partenariat'],
  ['Profondeur', 'Transformation', 'Pouvoir'],
  ['Liberté', 'Sagesse', 'Aventure'],
  ['Discipline', 'Ambition', 'Responsabilité'],
  ['Innovation', 'Humanité', 'Indépendance'],
  ['Compassion', 'Imagination', 'Spiritualité'],
];

function buildSigns(
  names: readonly string[],
  keywords: readonly [string, string, string][]
): ZodiacSign[] {
  return names.map((name, i) => ({
    name,
    symbol: zodiacSymbols[i]!,
    slug: slugs[i]!,
    element: elements[i]!,
    keywords: keywords[i]!,
  }));
}

const enSigns = buildSigns(enNames, enKeywords);
const trSigns = buildSigns(trNames, trKeywords);
const deSigns = buildSigns(deNames, deKeywords);
const frSigns = buildSigns(frNames, frKeywords);

export type HomeLocale = Record<
  Locale,
  {
    home: {
      heroIntro: string;
      heroHeadline: string;
      heroSubtitle: string;
      bookConsultation: string;
      heroFloatingLabel: string;
      yourSkyGuide: string;
      yourSkyGuideSubtitle: string;
      zodiacSigns: ZodiacSign[];
    };
    homeServicesTitle: string;
    homeAstrologyConsulting: string;
    homeAstrologyWestern: string;
    homeAstrologyKarma: string;
    homeAstrologyDraconic: string;
    homeHolisticMovement: string;
    homePilatesPersonal: string;
    homeConsciousnessTransformation: string;
    homeThetaHealing: string;
    homeDailyRitualsTitle: string;
    homeDailyRitualsSubtitle: string;
  }
>;

export const homeLocales: HomeLocale = {
  en: {
    home: {
      heroIntro: 'Welcome, I am Ümran.',
      heroHeadline: 'Ready to Lead Your Own Life?',
      heroSubtitle: 'Meet the ancient map of your soul, the limitless power of your mind, and the unique discipline of your body.',
      bookConsultation: 'For Consultation & Education',
      heroFloatingLabel: 'BIRTH CHART',
      yourSkyGuide: 'Your Sky Guide',
      yourSkyGuideSubtitle: 'Choose your sign and start your journey.',
      zodiacSigns: enSigns,
    },
    homeServicesTitle: 'Services',
    homeAstrologyConsulting: 'Astrology Consulting',
    homeAstrologyWestern: 'Western',
    homeAstrologyKarma: 'Karma',
    homeAstrologyDraconic: 'Draconic',
    homeHolisticMovement: 'Holistic Movement',
    homePilatesPersonal: 'Pilates & Personal Training',
    homeConsciousnessTransformation: 'Consciousness Transformation',
    homeThetaHealing: 'Theta Healing',
    homeDailyRitualsTitle: "Ümran's Daily Rituals",
    homeDailyRitualsSubtitle: 'A promise to live in tune with the spirit of the times.',
  },
  tr: {
    home: {
      heroIntro: 'Hoş geldiniz, ben Ümran.',
      heroHeadline: 'Kendi Hayatının Öncüsü Olmaya Hazır Mısın?',
      heroSubtitle: 'Ruhun kadim haritası, zihnin sınırsız gücü ve bedenin eşsiz disipliniyle tanışın.',
      bookConsultation: 'Danışmanlık ve Eğitim için',
      heroFloatingLabel: 'DOĞUM HARİTASI',
      yourSkyGuide: 'Gökyüzü Rehberiniz',
      yourSkyGuideSubtitle: 'Burcunu seç ve yolculuğuna başla.',
      zodiacSigns: trSigns,
    },
    homeServicesTitle: 'Hizmetler',
    homeAstrologyConsulting: 'Astroloji Danışmanlığı',
    homeAstrologyWestern: 'Batı',
    homeAstrologyKarma: 'Karma',
    homeAstrologyDraconic: 'Drakonik',
    homeHolisticMovement: 'Bütünsel Hareket',
    homePilatesPersonal: 'Pilates & Kişisel Antrenman',
    homeConsciousnessTransformation: 'Bilinçaltı Dönüşüm',
    homeThetaHealing: 'Theta Healing',
    homeDailyRitualsTitle: "Ümran'ın Günlük Ritüelleri",
    homeDailyRitualsSubtitle: 'Zamanın ruhuna uygun yaşama sözü.',
  },
  de: {
    home: {
      heroIntro: 'Willkommen, ich bin Ümran.',
      heroHeadline: 'Bereit, dein eigenes Leben zu führen?',
      heroSubtitle: 'Lerne die uralte Landkarte deiner Seele, die grenzenlose Kraft deines Geistes und die einzigartige Disziplin deines Körpers kennen.',
      bookConsultation: 'Für Beratung & Bildung',
      heroFloatingLabel: 'GEBURTSHOROSKOP',
      yourSkyGuide: 'Ihr Himmelsführer',
      yourSkyGuideSubtitle: 'Wähle dein Zeichen und starte deine Reise.',
      zodiacSigns: deSigns,
    },
    homeServicesTitle: 'Dienstleistungen',
    homeAstrologyConsulting: 'Astrologie-Beratung',
    homeAstrologyWestern: 'Westlich',
    homeAstrologyKarma: 'Karma',
    homeAstrologyDraconic: 'Drakonisch',
    homeHolisticMovement: 'Ganzheitliche Bewegung',
    homePilatesPersonal: 'Pilates & Personal Training',
    homeConsciousnessTransformation: 'Bewusstseinswandel',
    homeThetaHealing: 'Theta Healing',
    homeDailyRitualsTitle: 'Ümrans tägliche Rituale',
    homeDailyRitualsSubtitle: 'Ein Versprechen, im Einklang mit dem Geist der Zeit zu leben.',
  },
  fr: {
    home: {
      heroIntro: 'Bienvenue, je suis Ümran.',
      heroHeadline: 'Prêt à être le pionnier de votre propre vie ?',
      heroSubtitle: 'Découvrez la carte ancienne de votre âme, la puissance sans limites de votre esprit et la discipline unique de votre corps.',
      bookConsultation: 'Pour consultation et formation',
      heroFloatingLabel: 'THÈME NATAL',
      yourSkyGuide: 'Votre guide du ciel',
      yourSkyGuideSubtitle: 'Choisissez votre signe et commencez votre voyage.',
      zodiacSigns: frSigns,
    },
    homeServicesTitle: 'Services',
    homeAstrologyConsulting: 'Consultation astrologique',
    homeAstrologyWestern: 'Occidentale',
    homeAstrologyKarma: 'Karma',
    homeAstrologyDraconic: 'Draconique',
    homeHolisticMovement: 'Mouvement holistique',
    homePilatesPersonal: 'Pilates & entraînement personnel',
    homeConsciousnessTransformation: 'Transformation de la conscience',
    homeThetaHealing: 'Theta Healing',
    homeDailyRitualsTitle: "Rituels quotidiens d'Ümran",
    homeDailyRitualsSubtitle: "Une promesse de vivre au rythme de l'esprit du temps.",
  },
};
