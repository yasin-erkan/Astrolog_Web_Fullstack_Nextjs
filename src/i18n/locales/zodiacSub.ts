/**
 * Zodiac sign detail pages: /[lang]/zodiac/[slug]
 * One block per sign per locale: metaTitle, metaDescription, title, intro, body1, body2?, highlights?
 */

import type { Locale } from '../types';

export type ZodiacSubBlock = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  intro: string;
  body1: string;
  body2?: string;
  highlights?: readonly string[];
};

const slugs = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'] as const;

function block(
  title: string,
  intro: string,
  body1: string,
  body2: string,
  metaTitle: string,
  metaDesc: string,
  highlights: readonly string[]
): ZodiacSubBlock {
  return { metaTitle, metaDescription: metaDesc, title, intro, body1, body2, highlights };
}

// EN content per sign (short; backend can replace later)
const enBlocks: Record<(typeof slugs)[number], ZodiacSubBlock> = {
  aries: block(
    'Aries',
    'Aries is the first sign of the zodiac: fire, cardinal, ruled by Mars.',
    'You carry the energy of the pioneer—direct, brave and full of initiative. In your chart, your Aries placements show where you take the lead and where you need to channel your courage with care.',
    'Today: Allow yourself one bold move. A small step in a direction you have been avoiding can rekindle your fire.',
    'Aries | Astrolog Umran',
    'Aries: fire sign, Mars-ruled. Discover themes and daily inspiration.',
    ['Courage', 'Initiative', 'Leadership']
  ),
  taurus: block(
    'Taurus',
    'Taurus is an earth sign: fixed, ruled by Venus.',
    'You embody stability, sensuality and patience. Your Taurus placements show where you build lasting value and where you need to slow down to enjoy the fruits of your efforts.',
    'Today: Ground yourself with one sensory ritual—good food, nature or touch. It restores your centre.',
    'Taurus | Astrolog Umran',
    'Taurus: earth sign, Venus-ruled. Themes and daily inspiration.',
    ['Stability', 'Sensuality', 'Patience']
  ),
  gemini: block(
    'Gemini',
    'Gemini is an air sign: mutable, ruled by Mercury.',
    'You are curious, communicative and adaptable. Your Gemini placements show where you connect, learn and exchange ideas—and where you may need to go deeper before moving on.',
    'Today: Share one idea or question with someone. Conversation opens new doors.',
    'Gemini | Astrolog Umran',
    'Gemini: air sign, Mercury-ruled. Themes and daily inspiration.',
    ['Curiosity', 'Communication', 'Adaptability']
  ),
  cancer: block(
    'Cancer',
    'Cancer is a water sign: cardinal, ruled by the Moon.',
    'You are intuitive, nurturing and emotionally aware. Your Cancer placements show where you care, protect and need emotional safety—and where you can learn to hold boundaries with love.',
    'Today: Honour one feeling without fixing it. Let it be present for a few minutes.',
    'Cancer | Astrolog Umran',
    'Cancer: water sign, Moon-ruled. Themes and daily inspiration.',
    ['Intuition', 'Nurturing', 'Emotion']
  ),
  leo: block(
    'Leo',
    'Leo is a fire sign: fixed, ruled by the Sun.',
    'You bring creativity, pride and generosity. Your Leo placements show where you shine and where you may need to give without demanding the spotlight in return.',
    'Today: Do one thing that makes you feel proud of yourself. Your radiance is a gift.',
    'Leo | Astrolog Umran',
    'Leo: fire sign, Sun-ruled. Themes and daily inspiration.',
    ['Creativity', 'Pride', 'Generosity']
  ),
  virgo: block(
    'Virgo',
    'Virgo is an earth sign: mutable, ruled by Mercury.',
    'You value precision, service and discernment. Your Virgo placements show where you refine, help and analyse—and where you can soften the inner critic.',
    'Today: Complete one small task with full attention. Mastery in the detail brings peace.',
    'Virgo | Astrolog Umran',
    'Virgo: earth sign, Mercury-ruled. Themes and daily inspiration.',
    ['Precision', 'Service', 'Discernment']
  ),
  libra: block(
    'Libra',
    'Libra is an air sign: cardinal, ruled by Venus.',
    'You seek balance, harmony and partnership. Your Libra placements show where you relate, beautify and weigh options—and where you can choose without waiting for everyone’s approval.',
    'Today: Create one moment of beauty or fairness. It rebalances your inner scale.',
    'Libra | Astrolog Umran',
    'Libra: air sign, Venus-ruled. Themes and daily inspiration.',
    ['Balance', 'Harmony', 'Partnership']
  ),
  scorpio: block(
    'Scorpio',
    'Scorpio is a water sign: fixed, ruled by Pluto (and Mars).',
    'You go deep: transformation, power and truth. Your Scorpio placements show where you intensity and regenerate—and where you can release control to renew.',
    'Today: Let go of one thing that no longer serves you. Surrender is part of your strength.',
    'Scorpio | Astrolog Umran',
    'Scorpio: water sign, Pluto-ruled. Themes and daily inspiration.',
    ['Depth', 'Transformation', 'Power']
  ),
  sagittarius: block(
    'Sagittarius',
    'Sagittarius is a fire sign: mutable, ruled by Jupiter.',
    'You love freedom, wisdom and adventure. Your Sagittarius placements show where you expand, teach and seek meaning—and where you can land long enough to integrate what you find.',
    'Today: Learn or share one thing that expands your view. Then let it settle.',
    'Sagittarius | Astrolog Umran',
    'Sagittarius: fire sign, Jupiter-ruled. Themes and daily inspiration.',
    ['Freedom', 'Wisdom', 'Adventure']
  ),
  capricorn: block(
    'Capricorn',
    'Capricorn is an earth sign: cardinal, ruled by Saturn.',
    'You embody discipline, ambition and responsibility. Your Capricorn placements show where you build structures and authority—and where you can allow rest without guilt.',
    'Today: Take one step toward a long-term goal. Then rest without apologising.',
    'Capricorn | Astrolog Umran',
    'Capricorn: earth sign, Saturn-ruled. Themes and daily inspiration.',
    ['Discipline', 'Ambition', 'Responsibility']
  ),
  aquarius: block(
    'Aquarius',
    'Aquarius is an air sign: fixed, ruled by Uranus (and Saturn).',
    'You bring innovation, humanity and independence. Your Aquarius placements show where you break norms and connect to the collective—and where you can honour your need for space.',
    'Today: Do one thing that feels uniquely you. Your originality is needed.',
    'Aquarius | Astrolog Umran',
    'Aquarius: air sign, Uranus-ruled. Themes and daily inspiration.',
    ['Innovation', 'Humanity', 'Independence']
  ),
  pisces: block(
    'Pisces',
    'Pisces is a water sign: mutable, ruled by Neptune (and Jupiter).',
    'You carry compassion, imagination and spirituality. Your Pisces placements show where you dissolve boundaries and connect to the unseen—and where you need grounding to stay clear.',
    'Today: Give yourself one moment of silence or creativity. Your sensitivity is a gift.',
    'Pisces | Astrolog Umran',
    'Pisces: water sign, Neptune-ruled. Themes and daily inspiration.',
    ['Compassion', 'Imagination', 'Spirituality']
  ),
};

// TR, DE, FR: same structure, localized (short versions for brevity; expand as needed)
function trBlock(title: string, intro: string, body1: string, body2: string, highlights: readonly string[]): ZodiacSubBlock {
  return { metaTitle: `${title} | Astrolog Umran`, metaDescription: `${title} burcu: temalar ve günlük ilham.`, title, intro, body1, body2, highlights };
}
const trBlocks: Record<(typeof slugs)[number], ZodiacSubBlock> = {
  aries: trBlock('Koç', 'Koç, zodyakın ilk burcudur: ateş, öncü, Mars yönetiminde.', 'Öncü enerjisini taşırsınız—diret, cesur ve girişken. Haritanızda Koç yerleşimleri nerede öncü olduğunuzu ve cesaretinizi nerede bilinçle kanalize etmeniz gerektiğini gösterir.', 'Bugün: Senden kaçındığın bir yönde tek cesur adım at. Küçük bir adım ateşini yeniden canlandırabilir.', ['Cesaret', 'Girişim', 'Liderlik']),
  taurus: trBlock('Boğa', 'Boğa toprak burcudur: sabit, Venüs yönetiminde.', 'Stabilite, duyusallık ve sabır taşırsınız. Boğa yerleşimleriniz kalıcı değer nerede kurduğunuzu ve nerede yavaşlayıp emeğinizin meyvesini tatmanız gerektiğini gösterir.', 'Bugün: Kendini tek bir duyusal ritüelle topraklayın—iyi yemek, doğa veya dokunuş. Merkezini yeniler.', ['Stabilite', 'Duyusallık', 'Sabır']),
  gemini: trBlock('İkizler', 'İkizler hava burcudur: değişken, Merkür yönetiminde.', 'Meraklı, iletişimci ve uyumlusunuz. İkizler yerleşimleriniz nerede bağ kurduğunuzu, öğrendiğinizi ve fikir paylaştığınızı gösterir.', 'Bugün: Bir fikri veya soruyu biriyle paylaş. Sohbet yeni kapılar açar.', ['Merak', 'İletişim', 'Uyum']),
  cancer: trBlock('Yengeç', 'Yengeç su burcudur: öncü, Ay yönetiminde.', 'Sezgisel, besleyici ve duygusal farkındasınız. Yengeç yerleşimleriniz nerede baktığınızı, koruduğunuzu ve duygusal güvenceye ihtiyaç duyduğunuzu gösterir.', 'Bugün: Bir duyguya, onu düzeltmeden saygı göster. Birkaç dakika yanında kalsın.', ['Sezgi', 'Bakım', 'Duygu']),
  leo: trBlock('Aslan', 'Aslan ateş burcudur: sabit, Güneş yönetiminde.', 'Yaratıcılık, gurur ve cömertlik getirirsiniz. Aslan yerleşimleriniz nerede parladığınızı gösterir.', 'Bugün: Kendinle gurur duyduğun bir şey yap. Işığın bir hediyedir.', ['Yaratıcılık', 'Gurur', 'Cömertlik']),
  virgo: trBlock('Başak', 'Başak toprak burcudur: değişken, Merkür yönetiminde.', 'Hassasiyet, hizmet ve ayırt etmeyi değerlisiniz. Başak yerleşimleriniz nerede incelttiğinizi ve yardım ettiğinizi gösterir.', 'Bugün: Tek küçük işi tam dikkatle tamamla. Detayda ustalık huzur getirir.', ['Hassasiyet', 'Hizmet', 'Ayırt Etme']),
  libra: trBlock('Terazi', 'Terazi hava burcudur: öncü, Venüs yönetiminde.', 'Denge, uyum ve ortaklık ararsınız. Terazi yerleşimleriniz nerede ilişki kurduğunuzu ve güzelleştirdiğinizi gösterir.', 'Bugün: Tek bir güzellik veya adalet anı yarat. İç terazinizi dengeler.', ['Denge', 'Uyum', 'Ortaklık']),
  scorpio: trBlock('Akrep', 'Akrep su burcudur: sabit, Plüton yönetiminde.', 'Derinlik, dönüşüm ve güç. Akrep yerleşimleriniz nerede yoğunlaştığınızı ve yenilendiğinizi gösterir.', 'Bugün: Artık hizmet etmeyen bir şeyi bırak. Teslimiyet gücünün parçasıdır.', ['Derinlik', 'Dönüşüm', 'Güç']),
  sagittarius: trBlock('Yay', 'Yay ateş burcudur: değişken, Jüpiter yönetiminde.', 'Özgürlük, bilgelik ve macera. Yay yerleşimleriniz nerede genişlediğinizi ve anlam aradığınızı gösterir.', 'Bugün: Bakışını genişleten bir şey öğren veya paylaş. Sonra yerleşmesine izin ver.', ['Özgürlük', 'Bilgelik', 'Macera']),
  capricorn: trBlock('Oğlak', 'Oğlak toprak burcudur: öncü, Satürn yönetiminde.', 'Disiplin, hırs ve sorumluluk. Oğlak yerleşimleriniz nerede yapı ve otorite kurduğunuzu gösterir.', 'Bugün: Uzun vadeli bir hedefe bir adım at. Sonra özür dilemeden dinlen.', ['Disiplin', 'Hırs', 'Sorumluluk']),
  aquarius: trBlock('Kova', 'Kova hava burcudur: sabit, Uranüs yönetiminde.', 'Yenilik, insanlık ve bağımsızlık. Kova yerleşimleriniz normları nerede kırdığınızı gösterir.', 'Bugün: Sadece sana özel gelen bir şey yap. Orijinalliğin gerekli.', ['Yenilik', 'İnsanlık', 'Bağımsızlık']),
  pisces: trBlock('Balık', 'Balık su burcudur: değişken, Neptün yönetiminde.', 'Şefkat, hayal gücü ve spiritüellik. Balık yerleşimleriniz sınırları nerede çözdüğünüzü gösterir.', 'Bugün: Kendine sessizlik veya yaratıcılık anı ver. Hassasiyetin bir hediyedir.', ['Şefkat', 'Hayal Gücü', 'Spiritüellik']),
};

function deBlock(title: string, intro: string, body1: string, body2: string, highlights: readonly string[]): ZodiacSubBlock {
  return { metaTitle: `${title} | Astrolog Umran`, metaDescription: `${title}: Themen und tägliche Inspiration.`, title, intro, body1, body2, highlights };
}
const deBlocks: Record<(typeof slugs)[number], ZodiacSubBlock> = {
  aries: deBlock('Widder', 'Widder ist das erste Zeichen: Feuer, kardinal, von Mars beherrscht.', 'Sie tragen Pionierenergie—direkt, mutig und initiativ. Widder-Stellungen zeigen, wo Sie führen und wo Sie Mut mit Bedacht kanalisieren.', 'Heute: Erlauben Sie sich einen mutigen Schritt.', ['Energie', 'Führung', 'Mut']),
  taurus: deBlock('Stier', 'Stier ist ein Erdzeichen: fix, von Venus beherrscht.', 'Sie verkörpern Stabilität, Sinnlichkeit und Geduld. Stier-Stellungen zeigen, wo Sie dauerhaften Wert schaffen.', 'Heute: Erdung durch ein sinnliches Ritual.', ['Stabilität', 'Sinnlichkeit', 'Geduld']),
  gemini: deBlock('Zwillinge', 'Zwillinge ist ein Luftzeichen: mutable, von Merkur beherrscht.', 'Sie sind neugierig, kommunikativ und anpassungsfähig. Zwillinge-Stellungen zeigen, wo Sie verbinden und lernen.', 'Heute: Teilen Sie eine Idee oder Frage.', ['Neugier', 'Kommunikation', 'Anpassung']),
  cancer: deBlock('Krebs', 'Krebs ist ein Wasserzeichen: kardinal, vom Mond beherrscht.', 'Sie sind intuitiv, fürsorglich und emotional bewusst. Krebs-Stellungen zeigen, wo Sie sorgen und schützen.', 'Heute: Eine Emotion anerkennen, ohne sie zu reparieren.', ['Intuition', 'Fürsorge', 'Emotion']),
  leo: deBlock('Löwe', 'Löwe ist ein Feuerzeichen: fix, von der Sonne beherrscht.', 'Sie bringen Kreativität, Stolz und Großzügigkeit. Löwe-Stellungen zeigen, wo Sie strahlen.', 'Heute: Eine Sache tun, auf die Sie stolz sind.', ['Kreativität', 'Stolz', 'Großzügigkeit']),
  virgo: deBlock('Jungfrau', 'Jungfrau ist ein Erdzeichen: mutable, von Merkur beherrscht.', 'Sie schätzen Präzision, Dienst und Urteilsvermögen. Jungfrau-Stellungen zeigen, wo Sie verfeinern und helfen.', 'Heute: Eine kleine Aufgabe mit voller Aufmerksamkeit erledigen.', ['Präzision', 'Dienst', 'Urteilsvermögen']),
  libra: deBlock('Waage', 'Waage ist ein Luftzeichen: kardinal, von Venus beherrscht.', 'Sie suchen Balance, Harmonie und Partnerschaft. Waage-Stellungen zeigen, wo Sie in Beziehung gehen.', 'Heute: Einen Moment von Schönheit oder Fairness schaffen.', ['Balance', 'Harmonie', 'Partnerschaft']),
  scorpio: deBlock('Skorpion', 'Skorpion ist ein Wasserzeichen: fix, von Pluto beherrscht.', 'Sie gehen in die Tiefe: Transformation, Kraft und Wahrheit. Skorpion-Stellungen zeigen, wo Sie intensivieren.', 'Heute: Eine Sache loslassen, die nicht mehr dient.', ['Tiefe', 'Transformation', 'Kraft']),
  sagittarius: deBlock('Schütze', 'Schütze ist ein Feuerzeichen: mutable, von Jupiter beherrscht.', 'Sie lieben Freiheit, Weisheit und Abenteuer. Schütze-Stellungen zeigen, wo Sie sich ausweiten.', 'Heute: Eine Sache lernen oder teilen, die den Blick weitet.', ['Freiheit', 'Weisheit', 'Abenteuer']),
  capricorn: deBlock('Steinbock', 'Steinbock ist ein Erdzeichen: kardinal, von Saturn beherrscht.', 'Sie verkörpern Disziplin, Ambition und Verantwortung. Steinbock-Stellungen zeigen, wo Sie Strukturen bauen.', 'Heute: Einen Schritt zu einem Langzeitziel. Dann ruhen.', ['Disziplin', 'Ambition', 'Verantwortung']),
  aquarius: deBlock('Wassermann', 'Wassermann ist ein Luftzeichen: fix, von Uranus beherrscht.', 'Sie bringen Innovation, Menschlichkeit und Unabhängigkeit. Wassermann-Stellungen zeigen, wo Sie Normen brechen.', 'Heute: Eine Sache tun, die sich einzigartig anfühlt.', ['Innovation', 'Menschlichkeit', 'Unabhängigkeit']),
  pisces: deBlock('Fische', 'Fische ist ein Wasserzeichen: mutable, von Neptun beherrscht.', 'Sie tragen Mitgefühl, Vorstellungskraft und Spiritualität. Fische-Stellungen zeigen, wo Sie Grenzen auflösen.', 'Heute: Einen Moment Stille oder Kreativität gönnen.', ['Mitgefühl', 'Vorstellungskraft', 'Spiritualität']),
};

function frBlock(title: string, intro: string, body1: string, body2: string, highlights: readonly string[]): ZodiacSubBlock {
  return { metaTitle: `${title} | Astrolog Umran`, metaDescription: `${title} : thèmes et inspiration quotidienne.`, title, intro, body1, body2, highlights };
}
const frBlocks: Record<(typeof slugs)[number], ZodiacSubBlock> = {
  aries: frBlock('Bélier', 'Le Bélier est le premier signe : feu, cardinal, régi par Mars.', 'Vous portez l’énergie du pionnier—direct, courageux et plein d’initiative. Vos placements Bélier montrent où vous prenez la tête.', 'Aujourd’hui : Permettez-vous un geste audacieux.', ['Énergie', 'Leadership', 'Courage']),
  taurus: frBlock('Taureau', 'Le Taureau est un signe de terre : fixe, régi par Vénus.', 'Vous incarnez la stabilité, la sensualité et la patience. Vos placements Taureau montrent où vous construisez une valeur durable.', 'Aujourd’hui : Ancrage par un rituel sensoriel.', ['Stabilité', 'Sensualité', 'Patience']),
  gemini: frBlock('Gémeaux', 'Les Gémeaux sont un signe d’air : mutable, régi par Mercure.', 'Vous êtes curieux, communicatif et adaptable. Vos placements Gémeaux montrent où vous connectez et apprenez.', 'Aujourd’hui : Partager une idée ou une question.', ['Curiosité', 'Communication', 'Adaptabilité']),
  cancer: frBlock('Cancer', 'Le Cancer est un signe d’eau : cardinal, régi par la Lune.', 'Vous êtes intuitif, nourricier et émotionnellement conscient. Vos placements Cancer montrent où vous prenez soin.', 'Aujourd’hui : Honorer un sentiment sans le corriger.', ['Intuition', 'Maternage', 'Émotion']),
  leo: frBlock('Lion', 'Le Lion est un signe de feu : fixe, régi par le Soleil.', 'Vous apportez créativité, fierté et générosité. Vos placements Lion montrent où vous brillez.', 'Aujourd’hui : Faire une chose dont vous êtes fier.', ['Créativité', 'Fierté', 'Générosité']),
  virgo: frBlock('Vierge', 'La Vierge est un signe de terre : mutable, régi par Mercure.', 'Vous valorisez la précision, le service et le discernement. Vos placements Vierge montrent où vous affinez.', 'Aujourd’hui : Accomplir une petite tâche en pleine attention.', ['Précision', 'Service', 'Discernement']),
  libra: frBlock('Balance', 'La Balance est un signe d’air : cardinal, régi par Vénus.', 'Vous cherchez l’équilibre, l’harmonie et le partenariat. Vos placements Balance montrent où vous reliez.', 'Aujourd’hui : Créer un moment de beauté ou de justice.', ['Équilibre', 'Harmonie', 'Partenariat']),
  scorpio: frBlock('Scorpion', 'Le Scorpion est un signe d’eau : fixe, régi par Pluton.', 'Vous allez en profondeur : transformation, pouvoir et vérité. Vos placements Scorpion montrent où vous intensifiez.', 'Aujourd’hui : Lâcher une chose qui ne sert plus.', ['Profondeur', 'Transformation', 'Pouvoir']),
  sagittarius: frBlock('Sagittaire', 'Le Sagittaire est un signe de feu : mutable, régi par Jupiter.', 'Vous aimez la liberté, la sagesse et l’aventure. Vos placements Sagittaire montrent où vous vous développez.', 'Aujourd’hui : Apprendre ou partager une chose qui élargit la vue.', ['Liberté', 'Sagesse', 'Aventure']),
  capricorn: frBlock('Capricorne', 'Le Capricorne est un signe de terre : cardinal, régi par Saturne.', 'Vous incarnez la discipline, l’ambition et la responsabilité. Vos placements Capricorne montrent où vous structurez.', 'Aujourd’hui : Un pas vers un objectif à long terme. Puis vous reposer.', ['Discipline', 'Ambition', 'Responsabilité']),
  aquarius: frBlock('Verseau', 'Le Verseau est un signe d’air : fixe, régi par Uranus.', 'Vous apportez l’innovation, l’humanité et l’indépendance. Vos placements Verseau montrent où vous brisez les normes.', 'Aujourd’hui : Faire une chose qui vous semble unique.', ['Innovation', 'Humanité', 'Indépendance']),
  pisces: frBlock('Poissons', 'Les Poissons sont un signe d’eau : mutable, régi par Neptune.', 'Vous portez compassion, imagination et spiritualité. Vos placements Poissons montrent où vous dissolvez les frontières.', 'Aujourd’hui : Vous offrir un moment de silence ou de créativité.', ['Compassion', 'Imagination', 'Spiritualité']),
};

export type ZodiacSubLocale = Record<Locale, Record<(typeof slugs)[number], ZodiacSubBlock>>;

export const zodiacSubLocales: ZodiacSubLocale = {
  en: enBlocks,
  tr: trBlocks,
  de: deBlocks,
  fr: frBlocks,
};
