import type { Locale } from '../types';

/** Page block with SEO meta; used by getTranslations and generateMetadata */
export interface PageBlockLocale {
  metaTitle: string;
  metaDescription: string;
  title: string;
  intro: string;
  body1: string;
  body2?: string;
  highlights?: readonly string[];
}

export type PagesLocale = Record<
  Locale,
  {
    common: { contentComingSoon: string; readMore: string };
    holisticMovement: { intro: string; body1: string; body2: string; photoAlt: string };
    consultationsPage: PageBlockLocale;
    healingPage: PageBlockLocale;
    academyPage: PageBlockLocale;
    dailyRoutinesPage: PageBlockLocale;
    freeChartPage: PageBlockLocale;
    contactPage: PageBlockLocale;
    pages: { contact: string; academy: string; healing: string; astroPilates: string; birthChart: string; synastry: string };
  }
>;

export const pagesLocales: PagesLocale = {
  en: {
    common: { contentComingSoon: 'Content coming soon.', readMore: 'Read more' },
    holisticMovement: {
      intro: 'Holistic Movement with Pilates is where body, breath and awareness meet. It is not only exercise; it is a moving meditation that aligns your physical practice with your inner rhythm.',
      body1: 'Through controlled, mindful movement we build strength and flexibility while staying present. Each session invites you to listen to your body, respect its limits and discover its potential. The practice supports posture, core stability and a calmer mind.',
      body2: 'In the spirit of Astro-Pilates, we honour the connection between cosmic cycles and the body. Whether you are new to Pilates or deepening your practice, these sessions offer a space to move with intention and grace.',
      photoAlt: 'Holistic Movement and Pilates practice',
    },
    consultationsPage: {
      metaTitle: 'Consultations | Astrolog Umran',
      metaDescription: 'Astrology consultations: natal chart, solar return, synastry, horary, rectification, predictive and karmic astrology.',
      title: 'Astrology Consultations with Ümran',
      intro: 'An astrology consultation is a space where we sit with your birth chart and current cycles in an honest, grounded way. The aim is not to tell you who you are, but to name what is already moving within you.',
      body1: 'Together we look at themes such as relationships, career, purpose, health and timing. Rather than fixed predictions, you receive a clear picture of your patterns, resources and crossroads, along with suggestions you can actually use.',
      body2: 'Every consultation is tailored to you. Whether this is your first reading or a continuation, you are invited to leave with more clarity, self-respect and courage to make decisions that are aligned with your own sky.',
      highlights: ['Natal chart and life themes in depth', 'Relationship & synastry focus where needed', 'Yearly timing and key transits', 'Practical guidance for everyday decisions'],
    },
    healingPage: {
      metaTitle: 'Healing & Astro-Pilates | Astrolog Umran',
      metaDescription: 'Astro-Pilates and holistic healing: Pilates, bodily awareness, Theta Healing, crystal guidance and wellness sessions.',
      title: 'Holistic Healing & Energy Work',
      intro: 'Some stories in the chart ask to be met not only with words, but also through the body and the subconscious. In holistic healing sessions we weave together Astro-Pilates, Theta Healing and crystal-based work where appropriate.',
      body1: 'The intention is not to "fix" you, but to support the release of outdated patterns, soften stress and restore your natural rhythm. We work within your boundaries, with simple practices that you can continue between sessions.',
      body2: 'You do not need to have a spiritual background to benefit. These sessions are grounded, gentle and respectful of your pace, offering a bridge between insight and embodiment.',
      highlights: ['Astro-Pilates for posture and body awareness', 'Theta Healing for subconscious beliefs and patterns', 'Crystals and frequency work as complementary support'],
    },
    academyPage: {
      metaTitle: 'Academy | Astrolog Umran',
      metaDescription: 'Learn astrology and access free resources, workshop recordings, sky calendar and beginner guides.',
      title: 'Astrology Academy & Study Path',
      intro: 'The academy is for those who want to build a solid foundation in astrology without losing the soul of the work. We move step by step, with clear language and plenty of examples.',
      body1: 'You learn how to read a birth chart, understand planets, signs and houses, and gradually combine technique with intuition. Classes are structured, but there is always room for your questions and real-life charts.',
      body2: "Whether you are curious for your own growth or considering professional work in the future, the aim is the same: to help you develop your own voice in astrology, instead of copying someone else's.",
      highlights: ['Foundations for beginners and self-learners', 'Practice-oriented workshops and case studies', 'Materials and recordings you can revisit'],
    },
    dailyRoutinesPage: {
      metaTitle: "Daily Rituals | Astrolog Umran",
      metaDescription: "Ümran's daily rituals: planet salutation, bodily awareness, crystal guidance and Theta intentions.",
      title: "Ümran's Daily Rituals",
      intro: 'Astrology is most powerful when it is lived in small, consistent gestures. Daily rituals are simple practices that help you stay in dialogue with the sky and with yourself.',
      body1: 'From greeting the planet of the day to a few conscious breaths, journal prompts or a short movement sequence, each ritual is designed to be realistic in a busy life. A few minutes are enough if they are regular.',
      body2: 'You are invited to adapt these ideas to your own culture, body and schedule. There is no "perfect day" here—only the choice to return to yourself again and again.',
      highlights: ['Planet-of-the-day reflections', 'Short breath and movement practices', 'Simple crystal and candle rituals for focus'],
    },
    freeChartPage: {
      metaTitle: 'Free Birth Chart | Astrolog Umran',
      metaDescription: 'Get your free birth chart and discover the map of your sky.',
      title: 'Free Birth Chart Glimpse',
      intro: 'The free birth chart glimpse is a small introduction to your sky. You receive a short written note about a few key points in your chart.',
      body1: 'It does not replace a full consultation and cannot cover all your questions, but it can help you feel how your chart speaks to you and whether you resonate with my way of working.',
      body2: 'If you later book a full session, we build on what has already been shared. In this way, nothing is wasted and your process keeps a sense of continuity.',
      highlights: ['Short written overview of 2–3 main themes', 'Designed as a first step into astrology', 'Can be credited towards a later full session (if you choose)'],
    },
    contactPage: {
      metaTitle: 'Contact | Astrolog Umran',
      metaDescription: 'Contact Astrolog Umran for consultations and sessions.',
      title: 'Contact & Booking',
      intro: 'For questions, session bookings or collaboration ideas, you can reach out via the contact details below. Your message will be read personally and with care.',
      body1: 'If you are writing about a consultation, please share your time zone and a few possible time slots. For birth chart work, your date, exact time and place of birth are also needed.',
      body2: 'You will receive a reply as soon as possible with available dates and next steps. Until then, thank you for your trust and for sharing a part of your story.',
      highlights: ['Astrology and healing session bookings', 'Questions about workshops and events', 'Collaboration and media inquiries'],
    },
    pages: { contact: 'Contact', academy: 'Academy', healing: 'Healing', astroPilates: 'Astro-Pilates', birthChart: 'Birth Chart', synastry: 'Synastry Analysis' },
  },
  tr: {
    common: { contentComingSoon: 'İçerik yakında eklenecek.', readMore: 'Devamını oku' },
    holisticMovement: {
      intro: 'Pilates ile Bütüncül Hareket, beden, nefes ve farkındalığın buluştuğu yerdir. Sadece egzersiz değil; fiziksel pratiğinizi iç ritminizle uyumlu hale getiren hareketli bir meditasyondur.',
      body1: 'Kontrollü ve bilinçli hareketle güç ve esneklik kazanırken anda kalırsınız. Her seans bedeninizi dinlemenizi, sınırlarına saygı göstermenizi ve potansiyelini keşfetmenizi davet eder. Pratik duruş, core stabilitesi ve daha sakin bir zihin sunar.',
      body2: 'Astro-Pilates ruhunda, gökyüzü döngüleri ile beden arasındaki bağı onurlandırıyoruz. Pilatese yeni başlıyor ya da pratiğinizi derinleştiriyor olun, bu seanslar niyet ve zarafetle hareket edeceğiniz bir alan sunar.',
      photoAlt: 'Bütüncül Hareket ve Pilates pratiği',
    },
    consultationsPage: {
      metaTitle: 'Danışmanlıklar | Astrolog Umran',
      metaDescription: 'Astroloji danışmanlıkları: doğum haritası, yıllık öngörü, sinastri, horary, rektifikasyon ve karmik astroloji.',
      title: 'Ümran ile Astroloji Danışmanlıkları',
      intro: 'Astroloji danışmanlığı, doğum haritanız ve içinde bulunduğunuz döngülerle sakin, ayakları yere basan bir şekilde oturduğumuz alandır. Amaç size kim olduğunuzu söylemek değil; içinizde zaten hareket edenleri daha net ve anlaşılır kılmaktır.',
      body1: 'İlişkiler, kariyer, yaşam amacı, sağlık ve zamanlama gibi temalara haritanız üzerinden bakarız. Katı kehanetler yerine; kalıplarınızı, kaynaklarınızı ve yol ayrımlarınızı gösteren net bir çerçeve ve günlük hayatta kullanabileceğiniz öneriler alırsınız.',
      body2: 'Her seans size özeldir. İster ilk kez haritanızı dinleyin, ister devam randevusu olsun; niyet, kendi gökyüzünüzle daha barışık, daha net ve kararlarınızda daha cesur bir yerden ayrılmanızdır.',
      highlights: ['Doğum haritası ve yaşam temalarına derin bakış', 'Gerektiğinde ilişki ve sinastri odaklı çalışma', 'Yıllık zamanlama ve önemli transitler', 'Günlük kararlar için uygulanabilir rehberlik'],
    },
    healingPage: {
      metaTitle: 'Şifa & Astro-Pilates | Astrolog Umran',
      metaDescription: 'Astro-Pilates ve bütünsel şifa: Pilates, beden farkındalığı, Theta Healing, kristal rehberliği ve wellness seansları.',
      title: 'Bütünsel Şifa & Enerji Çalışmaları',
      intro: 'Bazı hikâyeler yalnızca sözle değil; beden ve bilinçaltı üzerinden de karşılanmak ister. Bütünsel şifa seanslarında, ihtiyaca göre Astro-Pilates, Theta Healing ve kristal çalışmaları gibi yöntemleri bir arada kullanırız.',
      body1: 'Niyet sizi "düzeltmek" değil; artık hizmet etmeyen kalıpları yumuşatmak, stresi azaltmak ve doğal ritminizi yeniden hatırlamanızı desteklemektir. Sınırlarınızın içinde, seanslar arasında da sürdürebileceğiniz sade pratiklerle ilerleriz.',
      body2: 'Bu çalışmalardan fayda görmek için spiritüel bir geçmişe sahip olmanız gerekmez. Seanslar ayakları yere basan, yumuşak ve sizin hızınıza saygılıdır; içgörü ile bedensel deneyim arasında köprü kurmayı hedefler.',
      highlights: ['Duruş ve beden farkındalığı için Astro-Pilates', 'Bilinçaltı inanç ve kalıpları için Theta Healing', 'Destekleyici kristal ve frekans çalışmaları'],
    },
    academyPage: {
      metaTitle: 'Akademi | Astrolog Umran',
      metaDescription: 'Astroloji öğrenin; ücretsiz kaynaklar, atölye kayıtları, gökyüzü takvimi ve başlangıç rehberleri.',
      title: 'Astroloji Akademisi & Öğrenim Yolu',
      intro: 'Akademi, astrolojiyi hem sağlam temelde hem de işin ruhunu kaybetmeden öğrenmek isteyenler içindir. Açık, sade bir dil ve bol örnekle adım adım ilerleriz.',
      body1: 'Doğum haritasını okumayı, gezegenleri, burçları ve evleri anlamayı; zamanla tekniği sezginizle birleştirmeyi öğrenirsiniz. Dersler yapılandırılmıştır ama gerçek hayat örnekleri ve sorularınız için her zaman alan vardır.',
      body2: 'Sadece kendi yolculuğunuz için merak ediyor olun ya da ileride profesyonel çalışmayı hedefleyin; amaç, başkasını kopyalamadan, astrolojide kendi sesinizi bulmanıza destek olmaktır.',
      highlights: ['Yeni başlayanlar ve kendi kendine öğrenenler için sağlam temel', 'Uygulama odaklı atölyeler ve vaka çalışmaları', 'Tekrar izlenebilir materyaller ve kayıtlar'],
    },
    dailyRoutinesPage: {
      metaTitle: 'Günlük Ritüeller | Astrolog Umran',
      metaDescription: "Ümran'ın günlük ritüelleri: günün gezegenine selamlama, beden farkındalığı, kristal rehberliği ve teta niyetleri.",
      title: "Ümran'ın Günlük Ritüelleri",
      intro: 'Astrolojinin en derin etkisi, küçük ama düzenli jestlerle yaşandığında ortaya çıkar. Günlük ritüeller, gökyüzüyle ve kendinizle diyaloğu canlı tutan sade pratiklerdir.',
      body1: 'Günün gezegenine selamlama, birkaç bilinçli nefes, kısa yazı çalışmaları ya da mini bir hareket serisi… Her biri yoğun bir hayatın içinde gerçekçi olacak şekilde tasarlanmıştır. Düzenli olduğunda, birkaç dakika bile yeterlidir.',
      body2: 'Bu fikirleri kendi kültürünüze, bedeninize ve takviminize uyarlamanız için bir davet olarak düşünün. Burada "mükemmel gün" yok; tekrar tekrar kendinize dönmeyi seçen insan var.',
      highlights: ['Günün gezegenine dair kısa farkındalıklar', 'Kısa nefes ve hareket pratikleri', 'Odaklanma için basit kristal ve mum ritüelleri'],
    },
    freeChartPage: {
      metaTitle: 'Ücretsiz Doğum Haritası | Astrolog Umran',
      metaDescription: 'Ücretsiz doğum haritanızı alın ve gökyüzü haritanızı keşfedin.',
      title: 'Ücretsiz Doğum Haritası Ön Bakış',
      intro: 'Ücretsiz doğum haritası ön bakışı, gökyüzünüzle tanışmak için küçük bir adımdır. Haritanızdaki birkaç kilit nokta hakkında kısa bir yazılı not alırsınız.',
      body1: 'Tam bir danışmanlığın yerini tutmaz ve tüm sorularınızı kapsayamaz; ancak haritanızın sizinle nasıl konuştuğunu ve benim çalışma tarzımla uyum hissedip hissetmediğinizi anlamanıza yardımcı olur.',
      body2: 'Daha sonra tam bir seans aldığınızda, bu ön bakışta paylaşılanlar üzerine inşa ederiz. Böylece hiçbir şey boşa gitmez ve sürecinizde bir süreklilik duygusu korunur.',
      highlights: ['2–3 ana tema üzerine kısa yazılı özet', 'Astrolojiye ilk adım için tasarlanmış', 'İsterseniz ilerideki tam seansa ön hazırlık olarak kullanılabilir'],
    },
    contactPage: {
      metaTitle: 'İletişim | Astrolog Umran',
      metaDescription: 'Danışmanlık ve seanslar için Astrolog Umran ile iletişime geçin.',
      title: 'İletişim & Randevu',
      intro: 'Sorularınız, seans randevusu ya da iş birliği fikirleriniz için aşağıdaki iletişim kanalları üzerinden ulaşabilirsiniz. Mesajınız bizzat ve özenle okunur.',
      body1: 'Danışmanlık talebiniz varsa, mümkünse saat diliminizi ve sizin için uygun olabilecek birkaç zaman aralığını paylaşın. Harita çalışmaları için doğum tarihiniz, mümkün olduğunca net doğum saatiniz ve doğum yeriniz de gereklidir.',
      body2: 'Mümkün olan en kısa sürede, uygun tarihler ve sonraki adımlarla birlikte size dönüş yapılır. O zamana kadar, hikâyenizin bir parçasını paylaştığınız ve güven duyduğunuz için teşekkür ederim.',
      highlights: ['Astroloji ve şifa seansları için randevu talepleri', 'Atölye ve etkinliklerle ilgili sorular', 'İş birliği ve medya ile ilgili başvurular'],
    },
    pages: { contact: 'İletişim', academy: 'Akademi', healing: 'Şifa', astroPilates: 'Astro-Pilates', birthChart: 'Doğum Haritası', synastry: 'Sinastri Analizi' },
  },
  de: {
    common: { contentComingSoon: 'Inhalt kommt in Kürze.', readMore: 'Weiterlesen' },
    holisticMovement: {
      intro: 'Ganzheitliche Bewegung mit Pilates ist der Ort, an dem Körper, Atem und Bewusstsein sich treffen. Es ist nicht nur Training, sondern eine bewegte Meditation, die Ihre körperliche Praxis mit Ihrem inneren Rhythmus in Einklang bringt.',
      body1: 'Durch kontrollierte, achtsame Bewegung bauen wir Kraft und Flexibilität auf und bleiben im gegenwärtigen Moment. Jede Einheit lädt Sie ein, auf Ihren Körper zu hören, seine Grenzen zu respektieren und sein Potenzial zu entdecken. Die Praxis unterstützt Haltung, Rumpfstabilität und einen ruhigeren Geist.',
      body2: 'Im Geiste von Astro-Pilates ehren wir die Verbindung zwischen kosmischen Zyklen und dem Körper. Ob Sie neu im Pilates sind oder Ihre Praxis vertiefen – diese Sitzungen bieten einen Raum, sich mit Absicht und Anmut zu bewegen.',
      photoAlt: 'Ganzheitliche Bewegung und Pilates-Praxis',
    },
    consultationsPage: {
      metaTitle: 'Beratungen | Astrolog Umran',
      metaDescription: 'Astrologie-Beratungen: Geburtshoroskop, Solar Return, Synastrie, Horary, Rektifikation und karmische Astrologie.',
      title: 'Astrologische Beratungen mit Ümran',
      intro: 'Eine astrologische Beratung ist ein geschützter Raum, in dem wir Ihr Geburtshoroskop und aktuelle Zyklen ehrlich und geerdet betrachten. Ziel ist nicht, Ihnen zu sagen, wer Sie sind, sondern das zu benennen, was ohnehin bereits in Ihnen in Bewegung ist.',
      body1: 'Wir beleuchten Themen wie Beziehungen, Beruf, Berufung, Gesundheit und Timing. Anstelle starrer Vorhersagen erhalten Sie ein klares Bild Ihrer Muster, Ressourcen und Kreuzungen – sowie Anregungen, die Sie im Alltag wirklich anwenden können.',
      body2: 'Jede Sitzung ist individuell. Ob erstes Reading oder Folgetermin – Sie sind eingeladen, mit mehr Klarheit, Selbstachtung und Mut zu gehen, Entscheidungen zu treffen, die zu Ihrem eigenen Himmel passen.',
      highlights: ['Vertiefte Sicht auf Geburtshoroskop und Lebensthemen', 'Bei Bedarf Fokus auf Beziehung & Synastrie', 'Jahresthemen und wichtige Transite', 'Praktische Impulse für Alltagsentscheidungen'],
    },
    healingPage: {
      metaTitle: 'Heilung & Astro-Pilates | Astrolog Umran',
      metaDescription: 'Astro-Pilates und ganzheitliche Heilung: Pilates, Körperbewusstsein, Theta Healing, Kristallberatung und Wellness-Sitzungen.',
      title: 'Ganzheitliche Heilung & Energiearbeit',
      intro: 'Manche Themen im Horoskop möchten nicht nur über Worte, sondern auch über Körper und Unterbewusstsein berührt werden. In ganzheitlichen Heilungssitzungen verweben wir bei Bedarf Astro-Pilates, Theta Healing und Kristallarbeit.',
      body1: 'Ziel ist nicht, Sie „zu reparieren“, sondern das Loslassen veralteter Muster, die Reduktion von Stress und die Rückkehr zu Ihrem eigenen Rhythmus zu unterstützen. Wir arbeiten in Ihren Grenzen, mit einfachen Übungen, die Sie zwischen den Sitzungen weiterführen können.',
      body2: 'Sie müssen keinen spirituellen Hintergrund haben, um davon zu profitieren. Die Sitzungen sind geerdet, sanft und respektieren Ihr Tempo – als Brücke zwischen Einsicht und Verkörperung.',
      highlights: ['Astro-Pilates für Haltung und Körperbewusstsein', 'Theta Healing für unbewusste Glaubenssätze und Muster', 'Kristalle und Frequenzen als ergänzende Unterstützung'],
    },
    academyPage: {
      metaTitle: 'Akademie | Astrolog Umran',
      metaDescription: 'Astrologie lernen: kostenlose Ressourcen, Workshop-Aufzeichnungen, Himmelskalender und Anfänger-Guides.',
      title: 'Astrologie-Akademie & Lernweg',
      intro: 'Die Akademie richtet sich an alle, die Astrologie auf einer soliden Grundlage lernen möchten, ohne die Seele der Arbeit zu verlieren. Wir gehen Schritt für Schritt vor, mit klarer Sprache und vielen Beispielen.',
      body1: 'Sie lernen, ein Geburtshoroskop zu lesen, Planeten, Zeichen und Häuser zu verstehen und nach und nach Technik mit Intuition zu verbinden. Die Kurse sind strukturiert, lassen aber Raum für Ihre Fragen und reale Horoskope.',
      body2: 'Ob zur persönlichen Entwicklung oder mit Blick auf eine spätere professionelle Tätigkeit – das Ziel ist, dass Sie Ihre eigene astrologische Stimme entwickeln, statt jemand anderen zu kopieren.',
      highlights: ['Stabiles Fundament für Einsteiger und Selbstlernende', 'Praxisorientierte Workshops und Fallbeispiele', 'Unterlagen und Aufzeichnungen zum Wiederholen'],
    },
    dailyRoutinesPage: {
      metaTitle: 'Tägliche Rituale | Astrolog Umran',
      metaDescription: 'Ümrans tägliche Rituale: Gruß an den Planeten des Tages, Körperbewusstsein, Kristallberatung und Theta-Absichten.',
      title: 'Ümrans tägliche Rituale',
      intro: 'Astrologie wirkt am stärksten, wenn sie in kleinen, beständigen Gesten gelebt wird. Tägliche Rituale sind einfache Übungen, die den Dialog mit dem Himmel – und mit Ihnen selbst – lebendig halten.',
      body1: 'Vom Gruß an den Planeten des Tages über bewusste Atemzüge bis hin zu kurzen Schreibimpulsen oder einer kleinen Bewegungssequenz – jedes Ritual ist so gestaltet, dass es auch in einem vollen Alltag realistisch bleibt.',
      body2: 'Sie sind eingeladen, diese Ideen an Ihre eigene Kultur, Ihren Körper und Ihren Zeitplan anzupassen. Es gibt hier keinen „perfekten Tag“ – nur die Entscheidung, immer wieder zu sich zurückzukehren.',
      highlights: ['Kurzreflexionen zum Planeten des Tages', 'Kurze Atem- und Bewegungsübungen', 'Einfache Kristall- und Kerzenrituale für Fokus'],
    },
    freeChartPage: {
      metaTitle: 'Kostenloses Geburtshoroskop | Astrolog Umran',
      metaDescription: 'Kostenloses Geburtshoroskop erstellen und Ihre Himmelskarte entdecken.',
      title: 'Kostenloser Blick in Ihr Geburtshoroskop',
      intro: 'Der kostenlose Blick ins Geburtshoroskop ist ein kleiner Einstieg in Ihren Himmel. Sie erhalten eine kurze schriftliche Notiz zu einigen wichtigen Punkten.',
      body1: 'Er ersetzt keine ausführliche Beratung und kann nicht alle Fragen abdecken, hilft aber zu spüren, wie Ihr Horoskop mit Ihnen spricht und ob Sie mit meiner Arbeitsweise in Resonanz gehen.',
      body2: 'Wenn Sie später eine vollständige Sitzung buchen, knüpfen wir an das bereits Geteilte an. So geht nichts verloren und Ihr Prozess behält eine klare Linie.',
      highlights: ['Kurze schriftliche Übersicht über 2–3 Hauptthemen', 'Als erster Schritt in die Astrologie gedacht', 'Kann als Grundlage für eine spätere Vollsitzung dienen'],
    },
    contactPage: {
      metaTitle: 'Kontakt | Astrolog Umran',
      metaDescription: 'Kontakt zu Astrolog Umran für Beratungen und Sitzungen.',
      title: 'Kontakt & Terminvereinbarung',
      intro: 'Für Fragen, Terminwünsche oder Kooperationsideen können Sie über die unten genannten Wege Kontakt aufnehmen. Ihre Nachricht wird persönlich und mit Sorgfalt gelesen.',
      body1: 'Wenn Sie wegen einer Beratung schreiben, nennen Sie bitte Ihre Zeitzone und einige mögliche Zeitfenster. Für Horoskoparbeit benötige ich zudem Ihr Geburtsdatum, Ihre möglichst genaue Geburtszeit und Ihren Geburtsort.',
      body2: 'Sie erhalten so bald wie möglich eine Antwort mit freien Terminen und den nächsten Schritten. Vielen Dank für Ihr Vertrauen und dafür, dass Sie einen Teil Ihrer Geschichte teilen.',
      highlights: ['Terminwünsche für Astrologie- und Heilsitzungen', 'Fragen zu Workshops und Veranstaltungen', 'Kooperationen und Medienanfragen'],
    },
    pages: { contact: 'Kontakt', academy: 'Akademie', healing: 'Heilung', astroPilates: 'Astro-Pilates', birthChart: 'Geburtshoroskop', synastry: 'Synastrie-Analyse' },
  },
  fr: {
    common: { contentComingSoon: 'Contenu à venir.', readMore: 'Lire la suite' },
    holisticMovement: {
      intro: "Le mouvement holistique avec le Pilates est l'endroit où le corps, le souffle et la conscience se rencontrent. Ce n'est pas qu'une pratique physique ; c'est une méditation en mouvement qui aligne votre pratique avec votre rythme intérieur.",
      body1: 'Par le mouvement contrôlé et conscient, nous développons force et souplesse tout en restant présents. Chaque séance vous invite à écouter votre corps, respecter ses limites et découvrir son potentiel. La pratique soutient la posture, la stabilité du centre et un mental plus calme.',
      body2: "Dans l'esprit d'Astro-Pilates, nous honorons le lien entre les cycles cosmiques et le corps. Que vous débutiez le Pilates ou approfondissiez votre pratique, ces séances offrent un espace pour bouger avec intention et grâce.",
      photoAlt: 'Pratique du mouvement holistique et du Pilates',
    },
    consultationsPage: {
      metaTitle: 'Consultations | Astrolog Umran',
      metaDescription: 'Consultations astrologie: thème natal, retour solaire, synastrie, horary, rectification et astrologie karmique.',
      title: 'Consultations astrologiques avec Ümran',
      intro: "Une consultation astrologique est une rencontre avec votre propre carte du ciel. Ensemble, nous regardons votre thème natal, vos cycles actuels et vos questions avec clarté et douceur.",
      body1: "Les thèmes de relation, de vocation, de travail, de santé ou de timing prennent forme dans le thème. Plutôt que des prédictions figées, vous recevez des mots pour ce que vous ressentez déjà, ainsi que des pistes concrètes pour avancer.",
      body2: "Chaque séance est personnalisée. Que ce soit votre première lecture ou un suivi, l'intention reste la même : repartir avec plus de clarté, de bienveillance envers vous-même et de courage pour vivre sous votre propre étoile.",
      highlights: ['Thème natal et grandes thématiques de vie', 'Focus relationnel & synastrie', 'Cycles annuels et transits importants', 'Suggestions concrètes pour le quotidien'],
    },
    healingPage: {
      metaTitle: 'Guérison & Astro-Pilates | Astrolog Umran',
      metaDescription: 'Astro-Pilates et guérison holistique: Pilates, conscience corporelle, Theta Healing, guidance des cristaux et séances bien-être.',
      title: 'Guérison holistique & travail énergétique',
      intro: "Parfois, le thème ne suffit pas ; le corps et le subconscient demandent aussi à être inclus. Ici, nous réunissons des approches comme l'Astro-Pilates, le Theta Healing et la guidance des cristaux.",
      body1: "Les séances peuvent vous aider à relâcher d'anciens schémas, apaiser le stress et vous reconnecter à votre propre rythme. Le travail se fait avec délicatesse, dans le respect de vos limites, sur les plans visibles et invisibles.",
      body2: "La guérison n'est pas une solution instantanée, mais un chemin pour se souvenir de votre entièreté. Ces espaces sont pensés comme des lieux sûrs et ancrés, que vous veniez d'un parcours spirituel ou simplement de la curiosité.",
      highlights: ['Astro-Pilates pour la conscience corporelle', 'Theta Healing pour les croyances subconscientes', 'Soutien par les cristaux et les fréquences'],
    },
    academyPage: {
      metaTitle: 'Académie | Astrolog Umran',
      metaDescription: "Apprendre l'astrologie: ressources gratuites, enregistrements d'ateliers, calendrier du ciel et guides débutant.",
      title: "Académie d'astrologie & apprentissage",
      intro: "Si vous souhaitez approfondir l'astrologie de manière structurée, l'académie est là pour vous. Nous partons des bases et avançons étape par étape, avec un langage clair et accessible.",
      body1: "Vous apprenez à lire un thème natal, à comprendre les planètes, signes et maisons, et à relier savoir technique et intuition. Des supports, exemples de thèmes et espaces de questions accompagnent le parcours.",
      body2: "Que votre intention soit d'en faire un métier ou simplement de mieux connaître votre propre thème, ces cours sont conçus pour vous aider à trouver votre voix en astrologie.",
      highlights: ['Bases adaptées aux débutants', 'Ateliers orientés pratique', 'Supports que vous pouvez revisiter'],
    },
    dailyRoutinesPage: {
      metaTitle: 'Rituels quotidiens | Astrolog Umran',
      metaDescription: "Rituels quotidiens d'Ümran: salutation à la planète du jour, conscience corporelle, guidance des cristaux et intentions thêta.",
      title: "Rituels quotidiens d'Ümran",
      intro: "L'astrologie n'appartient pas qu'aux grands tournants ; elle peut se vivre dans le rythme du quotidien. Ces rituels sont de petites pratiques douces à intégrer dans vos journées.",
      body1: "Saluer la planète du jour, respirer en conscience, écrire quelques lignes, bouger le corps quelques minutes… Chaque geste est une invitation à revenir vers vous-même.",
      body2: "Les rituels sont modulables selon votre réalité. L'objectif n'est pas de faire parfait, mais de créer une continuité, même avec de tous petits gestes.",
      highlights: ['Réflexions autour de la planète du jour', 'Courtes pratiques de mouvement et de respiration', 'Rituels simples avec cristaux et bougies'],
    },
    freeChartPage: {
      metaTitle: 'Thème natal gratuit | Astrolog Umran',
      metaDescription: 'Obtenez votre thème natal gratuit et découvrez la carte de votre ciel.',
      title: 'Aperçu gratuit de votre thème natal',
      intro: "Un aperçu gratuit de votre thème natal est une porte d'entrée légère dans l'astrologie. Vous recevez un court texte présentant quelques points importants de votre carte du ciel.",
      body1: "Ce n'est pas une consultation complète, mais cela permet de sentir comment votre thème vous parle. C'est idéal si vous êtes curieux·se sans encore être prêt·e pour une séance entière.",
      body2: "Si vous choisissez ensuite une consultation approfondie, nous construirons sur ce qui a déjà été partagé. Rien n'est perdu.",
      highlights: ['Résumé écrit court et ciblé', 'Mise en lumière de 2–3 grandes thématiques', 'Premier pas doux vers le travail ensemble'],
    },
    contactPage: {
      metaTitle: 'Contact | Astrolog Umran',
      metaDescription: 'Contacter Astrolog Umran pour consultations et séances.',
      title: 'Contact & prise de rendez-vous',
      intro: "Pour toute question, demande de séance ou proposition de collaboration, vous pouvez écrire via les moyens de contact indiqués. Chaque message est lu avec attention.",
      body1: "Pour une consultation, merci si possible de préciser votre fuseau horaire et quelques créneaux qui vous conviennent. Pour le travail sur le thème, la date, l'heure et le lieu de naissance sont nécessaires.",
      body2: "Vous recevrez une réponse dès que possible, avec les disponibilités et les prochaines étapes. Merci pour votre confiance en partageant votre histoire.",
      highlights: ['Rendez-vous pour consultations et séances de guérison', 'Questions sur les ateliers et événements', 'Demandes de collaboration & médias'],
    },
    pages: { contact: 'Contact', academy: 'Académie', healing: 'Guérison', astroPilates: 'Astro-Pilates', birthChart: 'Thème natal', synastry: 'Analyse de synastrie' },
  },
};
