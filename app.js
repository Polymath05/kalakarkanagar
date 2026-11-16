/**
 * KALAKAR PROJECT — APPLICATION ENGINE
 * Minimal, Archival, Sculptor-First Architecture
 * Supports English and Hindi translations
 */

(function () {
  'use strict';

  // --- Multilingual Translations ---
  const TRANSLATIONS = {
    en: {
      brand_name: "Kalakar Ka Nagar",
      brand_meta: "",
      nav_sculptors: "Sculptors",
      nav_map: "Map",
      map_label: "Studio Geolocation & Fieldwork",
      map_title: "Artisan Workshop Coordinates",
      map_desc: "Geographic coordinates of idol sculpting studios recorded during fieldwork. Hover over any coordinate marker to view workshop documentation, capture dates, and photographic albums.",
      nav_people: "Peoples",
      nav_about: "About",
      hero_title: "An ongoing project preserving the oral histories, studio photographs, and material records of Indian artisans.",
      hero_sub: "Vernacular idol sculpture in India is an ephemeral sacred art—created for festivals and dissolved in water during immersion. Kalakar Project documents the workshops, artisan lineages, migration histories, and studio albums that make this living heritage possible.",
      roster_label: "Sculptors in the Project",
      about_label: "About the Project",
      about_title: "Preserving Workshop Heritage Beyond Visarjan",
      about_p1: "Traditional sculpture artisans across India—working with clay, wood armatures, natural fibers, and sacred iconography—carry deep generational knowledge that shapes our living heritage.",
      about_p2: "Kalakar Project builds dedicated monographs for individual sculptors, archiving their studio photographs, financial histories, and workshop collaborations. If you are an artisan, researcher, or family member with archival albums to share, we welcome your contributions to this project.",
      back_btn: "← Back to All Sculptors",
      studio_photos_title: "Studio & Workshop Photographs",
      studio_photos_count: "5 Documentation Plates",
      timeline_title: "Chronology & Photographic Records",
      timeline_status_all: "Showing all 21 photographic records for 1980–2000 complete decade",
      timeline_status_year: "Showing photographic records for year",
      timeline_legend: "Album Sequence: 1980 – 2000",
      view_profile_link: "View Studio Collection & Timeline →",
      in_documentation: "Field Documentation in Progress",
      records_documented: "Plates Documented",
      key_hub: "Workshop Hub",
      key_era: "Active Period",
      key_studio: "Studio Name",
      key_holdings: "Project Holdings",
      box_lineage: "Documented Studio Personalities & Lineage",
      footer_text: "Kalakar Project — Documenting the Traditional Sculptors of India.",
      // Peoples Page
      people_label: "Kalakar Project",
      people_title: "People",
      people_sub: "The makers, keepers and researchers behind the project.",
      artisans_tag: "Makers & Living Heritage",
      artisans_title: "The Artisans",
      artisans_desc: "Kalakar Project exists because of the traditional sculptors and craftspeople across India. They are the master makers, their families and apprentices, and the workshop hands who shape clay, straw, bamboo and pigment into images of the divine. Many learned the craft from their fathers and grandfathers, carrying deep histories of migration into regional workshops. Each artisan is credited here by name, in their own words wherever possible, and each record is shared with their consent.",
      artisans_btn: "Browse the artisans →",
      founder_tag: "Research & Curation",
      founder_title: "Founder and Researcher",
      founder_p1: "Sharad Chaurasia is an art historian and visual studies researcher based in Lucknow, India. He holds a Master of Visual Art from the University of Hyderabad and a Bachelor of Visual Arts from the University of Lucknow.",
      founder_p2: "His postgraduate dissertation examined the making of kinetic god sculptures and the artisanal practices of Dhoolpet, Hyderabad. Alongside this, he documented the craftsmanship of cobblers in the city.",
      founder_p3: "His research centres on contemporary visual culture, with a particular concern for endangered artisanal practices. His work brings together ethnographic fieldwork, material culture studies and digital humanities. He also translates complex academic ideas into contemporary art, a quiet and considered way of communicating research.",
      contrib_tag: "Collaborative Preservation",
      contrib_title: "Contributors",
      contrib_desc: "The project grows through collaborative effort. Photographers, researchers, translators and community members contribute studio albums, oral histories and records. Each contributor is credited on the records they help create.",
      contrib_cta_title: "Want to contribute?",
      contrib_cta_desc: "If you have photographic albums, field notes, audio recordings, or oral histories from sculpting workshops across India, we warmly invite you to help build this project. Write to us at",
      consent_tag: "Ethics & Stewardship",
      consent_title: "A note on consent and credit",
      consent_desc: "Every artisan's name, image and words appear with their agreement. If you are an artisan or family member featured here and wish to change or withdraw a record, please contact us at"
    },
    hi: {
      brand_name: "कलाकार का नगर",
      brand_meta: "",
      nav_sculptors: "मूर्तिकार",
      nav_map: "मानचित्र",
      map_label: "स्टूडियो भू-स्थान एवं फील्डवर्क",
      map_title: "कारीगर कार्यशाला निर्देशांक",
      map_desc: "फील्डवर्क के दौरान दर्ज किए गए मूर्ति निर्माण स्टूडियो के भौगोलिक निर्देशांक। कार्यशाला विवरण, फोटो की तिथि और छायाचित्र संग्रह देखने के लिए किसी भी निर्देशांक पर माउस ले जाएं।",
      nav_people: "सहयोगी एवं शोधकर्ता",
      nav_about: "परिचय",
      hero_title: "भारत के पारंपरिक मूर्तिकारों के मौखिक इतिहास, स्टूडियो छायाचित्रों और शिल्प पद्धतियों को संरक्षित करने वाला खुला डिजिटल प्रोजेक्ट।",
      hero_sub: "भारत में पारम्परिक मूर्ति शिल्प एक क्षणभंगुर पावन कला है—जो उत्सवों के लिए रची जाती है और विसर्जन के साथ विलीन हो जाती है। कलाकार प्रोजेक्ट उन कार्यशालाओं, कारीगरों के इतिहास और स्टूडियो एल्बमों का दस्तावेजीकरण करता है।",
      roster_label: "प्रोजेक्ट के प्रमुख मूर्तिकार",
      about_label: "कलाकार प्रोजेक्ट के बारे में",
      about_title: "विसर्जन के पार कार्यशाला विरासत का संरक्षण",
      about_p1: "भारत भर में काम करने वाले पारंपरिक मूर्तिकार मिट्टी, काष्ठ ढाँचों, प्राकृतिक रेशों और पवित्र प्रतिमा-विज्ञान का गहरा पीढ़ी-दर-पीढ़ी ज्ञान संजोए हुए हैं।",
      about_p2: "कलाकार प्रोजेक्ट भारत भर के मूर्तिकारों के लिए समर्पित मोनोग्राफ तैयार करता है, उनके स्टूडियो छायाचित्रों, वित्तीय अभिलेखों और कार्यशाला के सहयोग को संरक्षित करता है। हम भारत भर के कारीगरों और शोधकर्ताओं का स्वागत करते हैं।",
      back_btn: "← सभी मूर्तिकारों की सूची",
      studio_photos_title: "स्टूडियो एवं कार्यशाला के छायाचित्र",
      studio_photos_count: "5 ऐतिहासिक प्लेट्स",
      timeline_title: "कालक्रम एवं छायाचित्र अभिलेख",
      timeline_status_all: "1980–2000 दशक के सभी 21 छायाचित्र अभिलेख प्रदर्शित हैं",
      timeline_status_year: "वर्ष के लिए अभिलेख",
      timeline_legend: "एल्बम काल: 1980 – 2000",
      view_profile_link: "स्टूडियो संग्रह एवं टाइमलाइन देखें →",
      in_documentation: "दस्तावेजीकरण प्रक्रिया जारी है",
      records_documented: "प्लेट्स संकलित",
      key_hub: "कार्यशाला केंद्र",
      key_era: "सक्रिय काल",
      key_studio: "स्टूडियो का नाम",
      key_holdings: "संग्रह स्थिति",
      box_lineage: "अभिलेखित कार्यशाला कलाकार एवं परंपरा",
      footer_text: "कलाकार प्रोजेक्ट — भारतीय शिल्पकारों का मौखिक इतिहास एवं स्टूडियो संग्रह।",
      // Peoples Page
      people_label: "कलाकार प्रोजेक्ट",
      people_title: "सहयोगी एवं शोधकर्ता",
      people_sub: "प्रोजेक्ट के निर्माता, संरक्षक और शोधकर्ता।",
      artisans_tag: "शिल्पकार एवं सजीव विरासत",
      artisans_title: "शिल्पकार",
      artisans_desc: "कलाकार प्रोजेक्ट भारत भर के पारंपरिक मूर्तिकारों एवं कारीगरों के दम पर ही जीवित है। वे मुख्य निर्माता, उनके परिवार, शिष्य और कार्यशालाओं के हाथ हैं जो मिट्टी, पुआल, बांस और रंगों से ईश्वरीय प्रतिमाओं को आकार देते हैं। कई लोगों ने यह कला अपने पिताओं और दादाओं से सीखी है। प्रत्येक शिल्पकार को यहां उनके नाम और सहमति के साथ प्रस्तुत किया गया है।",
      artisans_btn: "मूर्तिकारों की सूची देखें →",
      founder_tag: "शोध एवं संकलन",
      founder_title: "संस्थापक एवं शोधकर्ता",
      founder_p1: "शरद चौरसिया लखनऊ, भारत में स्थित एक कला इतिहासकार और दृश्य अध्ययन शोधकर्ता हैं। उन्होंने हैदराबाद विश्वविद्यालय से मास्टर ऑफ विजुअल आर्ट (MVA) और लखनऊ विश्वविद्यालय से बैचलर ऑफ विजुअल आर्ट्स (BVA) की उपाधि प्राप्त की है।",
      founder_p2: "उनके स्नातकोत्तर शोध प्रबंध में धूलपेट, हैदराबाद की गतिमान देव मूर्तियों के निर्माण और कारीगरों की प्रथाओं का अध्ययन किया गया। इसके साथ ही, उन्होंने शहर के मोचियों के शिल्प कौशल का भी दस्तावेजीकरण किया।",
      founder_p3: "उनका शोध समकालीन दृश्य संस्कृति और विशेष रूप से लुप्तप्राय शिल्प पद्धतियों पर केंद्रित है। उनका कार्य नृवंशविज्ञान, भौतिक संस्कृति अध्ययन और डिजिटल मानविकी को एक साथ लाता है।",
      contrib_tag: "सामूहिक संरक्षण",
      contrib_title: "सहयोगकर्ता",
      contrib_desc: "यह प्रोजेक्ट सामूहिक प्रयास से बढ़ता है। फोटोग्राफर, शोधकर्ता, अनुवादक और समुदाय के सदस्य स्टूडियो एल्बम, मौखिक इतिहास और रिकॉर्ड का योगदान करते हैं।",
      contrib_cta_title: "क्या आप योगदान देना चाहते हैं?",
      contrib_cta_desc: "यदि आपके पास भारत भर की मूर्तिकला कार्यशालाओं के स्टूडियो एल्बम, फोटोग्राफ या मौखिक इतिहास हैं, तो हमसे संपर्क करें:",
      consent_tag: "नैतिकता एवं श्रेय",
      consent_title: "सहमति और श्रेय पर एक टिप्पणी",
      consent_desc: "प्रत्येक शिल्पकार का नाम, चित्र और शब्द उनकी सहमति से प्रकाशित हैं। यदि आप कोई रिकॉर्ड बदलना या वापस लेना चाहते हैं, तो हमसे संपर्क करें:"
    }
  };


  // --- Studio Geolocation Data (26 Fieldwork Locations & 262 Photographs) ---
  const STUDIO_LOCATIONS = [
  {
    "id": 1,
    "studio_name": "Studio #01",
    "lat": 17.374061,
    "lon": 78.459047,
    "coord_label": "17.3741\u00b0 N, 78.4590\u00b0 E",
    "locality": "Rahimpura",
    "suburb": "Ward 63 Mangalhat",
    "mandal": "Asif Nagar mandal",
    "hub": "Mangalhat / Rahimpura Hub",
    "location_display": "Rahimpura, Ward 63 Mangalhat (Asif Nagar mandal)",
    "date": "2025-04-10, 2025-04-12",
    "photo_count": 44,
    "images": [
      "IMG20250410181930.jpg",
      "IMG20250410181939.jpg",
      "IMG20250410181940.jpg",
      "IMG20250410182113.jpg",
      "IMG20250410182115.jpg",
      "IMG20250410182612.jpg",
      "IMG20250410182617.jpg",
      "IMG20250410182620.jpg",
      "IMG20250410182628.jpg",
      "IMG20250410182632.jpg",
      "IMG20250410182640.jpg",
      "IMG20250410182643.jpg",
      "IMG20250410182647.jpg",
      "IMG20250410182716.jpg",
      "IMG20250410182717.jpg",
      "IMG20250410182816.jpg",
      "IMG20250410182817.jpg",
      "IMG20250410183109.jpg",
      "IMG20250410183111.jpg",
      "IMG20250410184637.jpg",
      "IMG20250410184639.jpg",
      "IMG20250412144720.jpg",
      "IMG20250412144722.jpg",
      "IMG20250412144748.jpg",
      "IMG20250412144752.jpg",
      "IMG20250412144756.jpg",
      "IMG20250412144807.jpg",
      "IMG20250412145941.jpg",
      "IMG20250412145951.jpg",
      "IMG20250412145954.jpg",
      "IMG20250412145956.jpg",
      "IMG20250412150034.jpg",
      "IMG20250412150037.jpg",
      "IMG20250412151540.jpg",
      "IMG20250412151541.jpg",
      "IMG20250412153532.jpg",
      "IMG20250412153538.jpg",
      "IMG20250412153547.jpg",
      "IMG20250412153548.jpg",
      "IMG20250412153553.jpg",
      "IMG20250412153554.jpg",
      "IMG20250412153607.jpg",
      "IMG20250412153611.jpg",
      "IMG20250412153612.jpg"
    ]
  },
  {
    "id": 2,
    "studio_name": "Studio #02",
    "lat": 17.374688,
    "lon": 78.460312,
    "coord_label": "17.3747\u00b0 N, 78.4603\u00b0 E",
    "locality": "Dhoolpet",
    "suburb": "Goshamahal",
    "mandal": "Nampally mandal",
    "hub": "Dhoolpet / Goshamahal Hub",
    "location_display": "Dhoolpet, Goshamahal (Nampally mandal)",
    "date": "2025-04-10",
    "photo_count": 35,
    "images": [
      "IMG20250410175132.jpg",
      "IMG20250410175137.jpg",
      "IMG20250410175140.jpg",
      "IMG20250410175159.jpg",
      "IMG20250410175201.jpg",
      "IMG20250410175213.jpg",
      "IMG20250410175227.jpg",
      "IMG20250410175231.jpg",
      "IMG20250410175233.jpg",
      "IMG20250410175312.jpg",
      "IMG20250410175336.jpg",
      "IMG20250410175338.jpg",
      "IMG20250410175340.jpg",
      "IMG20250410175354.jpg",
      "IMG20250410175356.jpg",
      "IMG20250410175359.jpg",
      "IMG20250410175401.jpg",
      "IMG20250410175403.jpg",
      "IMG20250410175426.jpg",
      "IMG20250410175427.jpg",
      "IMG20250410175432.jpg",
      "IMG20250410175448.jpg",
      "IMG20250410175457.jpg",
      "IMG20250410175508.jpg",
      "IMG20250410175510.jpg",
      "IMG20250410175528.jpg",
      "IMG20250410175529.jpg",
      "IMG20250410180323.jpg",
      "IMG20250410180325.jpg",
      "IMG20250410180334.jpg",
      "IMG20250410180335.jpg",
      "IMG20250410180359.jpg",
      "IMG20250410180400.jpg",
      "IMG20250410181354.jpg",
      "IMG20250410181509.jpg"
    ]
  },
  {
    "id": 3,
    "studio_name": "Studio #03",
    "lat": 17.377402,
    "lon": 78.454019,
    "coord_label": "17.3774\u00b0 N, 78.4540\u00b0 E",
    "locality": "Bangladeshi Colony",
    "suburb": "Ward 64 Dattatreya Nagar",
    "mandal": "Asif Nagar mandal",
    "hub": "Dattatreya Nagar / Bangladeshi Colony Hub",
    "location_display": "Bangladeshi Colony, Ward 64 Dattatreya Nagar (Asif Nagar mandal)",
    "date": "2025-04-11, 2025-04-12",
    "photo_count": 28,
    "images": [
      "IMG20250411191430.jpg",
      "IMG20250411191434.jpg",
      "IMG20250411191446.jpg",
      "IMG20250411191447.jpg",
      "IMG20250411191450.jpg",
      "IMG20250411191450_01.jpg",
      "IMG20250411191522.jpg",
      "IMG20250411191536.jpg",
      "IMG20250411191543.jpg",
      "IMG20250411191546.jpg",
      "IMG20250411191547.jpg",
      "IMG20250411191555.jpg",
      "IMG20250411191600.jpg",
      "IMG20250411191603.jpg",
      "IMG20250411191615.jpg",
      "IMG20250411191627.jpg",
      "IMG20250411191630.jpg",
      "IMG20250411191631.jpg",
      "IMG20250411191637.jpg",
      "IMG20250411191639.jpg",
      "IMG20250411191642.jpg",
      "IMG20250411191646.jpg",
      "IMG20250411191653.jpg",
      "IMG20250411191654.jpg",
      "IMG20250411191731.jpg",
      "IMG20250411192429.jpg",
      "IMG20250411192431.jpg",
      "IMG20250412164257.jpg"
    ]
  },
  {
    "id": 4,
    "studio_name": "Studio #04",
    "lat": 17.377407,
    "lon": 78.455901,
    "coord_label": "17.3774\u00b0 N, 78.4559\u00b0 E",
    "locality": "Bangladeshi Colony",
    "suburb": "Ward 64 Dattatreya Nagar",
    "mandal": "Asif Nagar mandal",
    "hub": "Dattatreya Nagar / Bangladeshi Colony Hub",
    "location_display": "Bangladeshi Colony, Ward 64 Dattatreya Nagar (Asif Nagar mandal)",
    "date": "2025-04-12",
    "photo_count": 26,
    "images": [
      "IMG20250412182934.jpg",
      "IMG20250412182942.jpg",
      "IMG20250412182945.jpg",
      "IMG20250412182946.jpg",
      "IMG20250412183044.jpg",
      "IMG20250412183045.jpg",
      "IMG20250412183132.jpg",
      "IMG20250412183133.jpg",
      "IMG20250412183136.jpg",
      "IMG20250412183137.jpg",
      "IMG20250412183202.jpg",
      "IMG20250412183203.jpg",
      "IMG20250412183204.jpg",
      "IMG20250412184956.jpg",
      "IMG20250412185000.jpg",
      "IMG20250412185002.jpg",
      "IMG20250412185004.jpg",
      "IMG20250412185008.jpg",
      "IMG20250412185008_01.jpg",
      "IMG20250412190344.jpg",
      "IMG20250412190346.jpg",
      "IMG20250412190350.jpg",
      "IMG20250412190359.jpg",
      "IMG20250412190402.jpg",
      "IMG20250412190413.jpg",
      "IMG20250412190414.jpg"
    ]
  },
  {
    "id": 5,
    "studio_name": "Studio #05",
    "lat": 17.376222,
    "lon": 78.453588,
    "coord_label": "17.3762\u00b0 N, 78.4536\u00b0 E",
    "locality": "Bangladeshi Colony",
    "suburb": "Ward 64 Dattatreya Nagar",
    "mandal": "Asif Nagar mandal",
    "hub": "Dattatreya Nagar / Bangladeshi Colony Hub",
    "location_display": "Bangladeshi Colony, Ward 64 Dattatreya Nagar (Asif Nagar mandal)",
    "date": "2025-04-12",
    "photo_count": 16,
    "images": [
      "IMG20250412161720.jpg",
      "IMG20250412161740.jpg",
      "IMG20250412161751.jpg",
      "IMG20250412161754.jpg",
      "IMG20250412161755.jpg",
      "IMG20250412162606.jpg",
      "IMG20250412162609.jpg",
      "IMG20250412162619.jpg",
      "IMG20250412162621.jpg",
      "IMG20250412162629.jpg",
      "IMG20250412162632.jpg",
      "IMG20250412162640.jpg",
      "IMG20250412162708.jpg",
      "IMG20250412162709.jpg",
      "IMG20250412162711.jpg",
      "IMG20250412162830.jpg"
    ]
  },
  {
    "id": 6,
    "studio_name": "Studio #06",
    "lat": 17.373978,
    "lon": 78.459831,
    "coord_label": "17.3740\u00b0 N, 78.4598\u00b0 E",
    "locality": "Dhoolpet",
    "suburb": "Goshamahal",
    "mandal": "Nampally mandal",
    "hub": "Dhoolpet / Goshamahal Hub",
    "location_display": "Dhoolpet, Goshamahal (Nampally mandal)",
    "date": "2025-04-10",
    "photo_count": 15,
    "images": [
      "IMG20250410181715.jpg",
      "IMG20250410181716.jpg",
      "IMG20250410181751.jpg",
      "IMG20250410181751_01.jpg",
      "IMG20250410181759.jpg",
      "IMG20250410181817.jpg",
      "IMG20250410181818.jpg",
      "IMG20250410182038.jpg",
      "IMG20250410182042.jpg",
      "IMG20250410182053.jpg",
      "IMG20250410182955.jpg",
      "IMG20250410182956.jpg",
      "IMG20250410183844.jpg",
      "IMG20250410183846.jpg",
      "IMG20250410183856.jpg"
    ]
  },
  {
    "id": 7,
    "studio_name": "Studio #07",
    "lat": 17.374126,
    "lon": 78.457942,
    "coord_label": "17.3741\u00b0 N, 78.4579\u00b0 E",
    "locality": "Rahimpura",
    "suburb": "Ward 63 Mangalhat",
    "mandal": "Asif Nagar mandal",
    "hub": "Mangalhat / Rahimpura Hub",
    "location_display": "Rahimpura, Ward 63 Mangalhat (Asif Nagar mandal)",
    "date": "2025-04-12",
    "photo_count": 10,
    "images": [
      "IMG20250412143731.jpg",
      "IMG20250412143738.jpg",
      "IMG20250412143740.jpg",
      "IMG20250412143755.jpg",
      "IMG20250412143759.jpg",
      "IMG20250412143812.jpg",
      "IMG20250412143813.jpg",
      "IMG20250412143858.jpg",
      "IMG20250412143904.jpg",
      "IMG20250412144125.jpg"
    ]
  },
  {
    "id": 8,
    "studio_name": "Studio #08",
    "lat": 17.369239,
    "lon": 78.46015,
    "coord_label": "17.3692\u00b0 N, 78.4601\u00b0 E",
    "locality": "Jummeraat Bazaar",
    "suburb": "Goshamahal",
    "mandal": "Nampally mandal",
    "hub": "Dhoolpet / Goshamahal Hub",
    "location_display": "Jummeraat Bazaar, Goshamahal (Nampally mandal)",
    "date": "2025-04-12",
    "photo_count": 9,
    "images": [
      "IMG20250412134459.jpg",
      "IMG20250412134506.jpg",
      "IMG20250412134612.jpg",
      "IMG20250412135321.jpg",
      "IMG20250412135436.jpg",
      "IMG20250412135437.jpg",
      "IMG20250412135511.jpg",
      "IMG20250412135512.jpg",
      "IMG20250412135526.jpg"
    ]
  },
  {
    "id": 9,
    "studio_name": "Studio #09",
    "lat": 17.376952,
    "lon": 78.456955,
    "coord_label": "17.3770\u00b0 N, 78.4570\u00b0 E",
    "locality": "Mangalhat",
    "suburb": "Ward 64 Dattatreya Nagar",
    "mandal": "Asif Nagar mandal",
    "hub": "Dattatreya Nagar / Bangladeshi Colony Hub",
    "location_display": "Mangalhat, Ward 64 Dattatreya Nagar (Asif Nagar mandal)",
    "date": "2025-04-12",
    "photo_count": 9,
    "images": [
      "IMG20250412190815.jpg",
      "IMG20250412190835.jpg",
      "IMG20250412190853.jpg",
      "IMG20250412190854.jpg",
      "IMG20250412190949.jpg",
      "IMG20250412190950.jpg",
      "IMG20250412190953.jpg",
      "IMG20250412190957.jpg",
      "IMG20250412190957_01.jpg"
    ]
  },
  {
    "id": 10,
    "studio_name": "Studio #10",
    "lat": 17.370783,
    "lon": 78.462311,
    "coord_label": "17.3708\u00b0 N, 78.4623\u00b0 E",
    "locality": "Jummeraat Bazaar",
    "suburb": "Goshamahal",
    "mandal": "Nampally mandal",
    "hub": "Begum Bazaar / Chudi Bazaar Hub",
    "location_display": "Jummeraat Bazaar, Goshamahal (Nampally mandal)",
    "date": "2025-04-10, 2025-04-12",
    "photo_count": 8,
    "images": [
      "IMG20250410171703.jpg",
      "IMG20250410171706.jpg",
      "IMG20250410171753.jpg",
      "IMG20250410171758.jpg",
      "IMG20250410171807.jpg",
      "IMG20250410171808.jpg",
      "IMG20250412131539.jpg",
      "IMG20250412131542.jpg"
    ]
  },
  {
    "id": 11,
    "studio_name": "Studio #11",
    "lat": 17.369558,
    "lon": 78.460012,
    "coord_label": "17.3696\u00b0 N, 78.4600\u00b0 E",
    "locality": "Jummeraat Bazaar",
    "suburb": "Goshamahal",
    "mandal": "Nampally mandal",
    "hub": "Dhoolpet / Goshamahal Hub",
    "location_display": "Jummeraat Bazaar, Goshamahal (Nampally mandal)",
    "date": "2025-04-12",
    "photo_count": 8,
    "images": [
      "IMG20250412134136.jpg",
      "IMG20250412134148.jpg",
      "IMG20250412134150.jpg",
      "IMG20250412134204.jpg",
      "IMG20250412134205.jpg",
      "IMG20250412134245.jpg",
      "IMG20250412135306.jpg",
      "IMG20250412135308.jpg"
    ]
  },
  {
    "id": 12,
    "studio_name": "Studio #12",
    "lat": 17.376898,
    "lon": 78.455482,
    "coord_label": "17.3769\u00b0 N, 78.4555\u00b0 E",
    "locality": "Bangladeshi Colony",
    "suburb": "Ward 64 Dattatreya Nagar",
    "mandal": "Asif Nagar mandal",
    "hub": "Dattatreya Nagar / Bangladeshi Colony Hub",
    "location_display": "Bangladeshi Colony, Ward 64 Dattatreya Nagar (Asif Nagar mandal)",
    "date": "2025-04-12",
    "photo_count": 6,
    "images": [
      "IMG20250412182959.jpg",
      "IMG20250412183000.jpg",
      "IMG20250412183017.jpg",
      "IMG20250412183020.jpg",
      "IMG20250412183027.jpg",
      "IMG20250412183028.jpg"
    ]
  },
  {
    "id": 13,
    "studio_name": "Studio #13",
    "lat": 17.370863,
    "lon": 78.463186,
    "coord_label": "17.3709\u00b0 N, 78.4632\u00b0 E",
    "locality": "Chudi Bazaar",
    "suburb": "Begum Bazaar",
    "mandal": "Nampally mandal",
    "hub": "Begum Bazaar / Chudi Bazaar Hub",
    "location_display": "Chudi Bazaar, Begum Bazaar (Nampally mandal)",
    "date": "2025-04-12",
    "photo_count": 8,
    "images": [
      "IMG20250412131125.jpg",
      "IMG20250412131124.jpg",
      "IMG20250412131109.jpg",
      "IMG20250412131213.jpg",
      "IMG20250412131214.jpg",
      "IMG20250412131220.jpg",
      "IMG20250412131401.jpg",
      "IMG20250412131403.jpg"
    ]
  },
  {
    "id": 14,
    "studio_name": "Studio #14",
    "lat": 17.37864,
    "lon": 78.454711,
    "coord_label": "17.3786\u00b0 N, 78.4547\u00b0 E",
    "locality": "Sibli Hills",
    "suburb": "Ward 63 Mangalhat",
    "mandal": "Asif Nagar mandal",
    "hub": "Mangalhat / Rahimpura Hub",
    "location_display": "Sibli Hills, Ward 63 Mangalhat (Asif Nagar mandal)",
    "date": "2025-04-12",
    "photo_count": 5,
    "images": [
      "IMG20250412173454.jpg",
      "IMG20250412173455.jpg",
      "IMG20250412173513.jpg",
      "IMG20250412173514.jpg",
      "IMG20250412173515.jpg"
    ]
  },
  {
    "id": 15,
    "studio_name": "Studio #15",
    "lat": 17.372132,
    "lon": 78.460552,
    "coord_label": "17.3721\u00b0 N, 78.4606\u00b0 E",
    "locality": "Dhoolpet",
    "suburb": "Goshamahal",
    "mandal": "Nampally mandal",
    "hub": "Dhoolpet / Goshamahal Hub",
    "location_display": "Dhoolpet, Goshamahal (Nampally mandal)",
    "date": "2025-04-12",
    "photo_count": 4,
    "images": [
      "IMG20250412132154.jpg",
      "IMG20250412132204.jpg",
      "IMG20250412132227.jpg",
      "IMG20250412132230.jpg"
    ]
  },
  {
    "id": 16,
    "studio_name": "Studio #16",
    "lat": 17.369084,
    "lon": 78.460601,
    "coord_label": "17.3691\u00b0 N, 78.4606\u00b0 E",
    "locality": "Jummeraat Bazaar",
    "suburb": "Goshamahal",
    "mandal": "Nampally mandal",
    "hub": "Dhoolpet / Goshamahal Hub",
    "location_display": "Jummeraat Bazaar, Goshamahal (Nampally mandal)",
    "date": "2025-04-12",
    "photo_count": 4,
    "images": [
      "IMG20250412134650.jpg",
      "IMG20250412134651.jpg",
      "IMG20250412134702.jpg",
      "IMG20250412134703.jpg"
    ]
  },
  {
    "id": 17,
    "studio_name": "Studio #17",
    "lat": 17.375426,
    "lon": 78.453911,
    "coord_label": "17.3754\u00b0 N, 78.4539\u00b0 E",
    "locality": "Bangladeshi Colony",
    "suburb": "Ward 64 Dattatreya Nagar",
    "mandal": "Asif Nagar mandal",
    "hub": "Dattatreya Nagar / Bangladeshi Colony Hub",
    "location_display": "Bangladeshi Colony, Ward 64 Dattatreya Nagar (Asif Nagar mandal)",
    "date": "2025-04-12",
    "photo_count": 4,
    "images": [
      "IMG20250412160947.jpg",
      "IMG20250412160948.jpg",
      "IMG20250412161143.jpg",
      "IMG20250412161144.jpg"
    ]
  },
  {
    "id": 18,
    "studio_name": "Studio #18",
    "lat": 17.37734,
    "lon": 78.453209,
    "coord_label": "17.3773\u00b0 N, 78.4532\u00b0 E",
    "locality": "Bangladeshi Colony",
    "suburb": "Ward 64 Dattatreya Nagar",
    "mandal": "Asif Nagar mandal",
    "hub": "Dattatreya Nagar / Bangladeshi Colony Hub",
    "location_display": "Bangladeshi Colony, Ward 64 Dattatreya Nagar (Asif Nagar mandal)",
    "date": "2025-04-12",
    "photo_count": 4,
    "images": [
      "IMG20250412164241.jpg",
      "IMG20250412164246.jpg",
      "IMG20250412164250.jpg",
      "IMG20250412164255.jpg"
    ]
  },
  {
    "id": 19,
    "studio_name": "Studio #19",
    "lat": 17.377958,
    "lon": 78.455084,
    "coord_label": "17.3780\u00b0 N, 78.4551\u00b0 E",
    "locality": "Sibli Hills",
    "suburb": "Ward 63 Mangalhat",
    "mandal": "Asif Nagar mandal",
    "hub": "Mangalhat / Rahimpura Hub",
    "location_display": "Sibli Hills, Ward 63 Mangalhat (Asif Nagar mandal)",
    "date": "2025-04-12",
    "photo_count": 4,
    "images": [
      "IMG20250412172339.jpg",
      "IMG20250412173400.jpg",
      "IMG20250412173401.jpg",
      "IMG20250412173421.jpg"
    ]
  },
  {
    "id": 20,
    "studio_name": "Studio #20",
    "lat": 17.378769,
    "lon": 78.45433,
    "coord_label": "17.3788\u00b0 N, 78.4543\u00b0 E",
    "locality": "Bangladeshi Colony",
    "suburb": "Ward 64 Dattatreya Nagar",
    "mandal": "Asif Nagar mandal",
    "hub": "Dattatreya Nagar / Bangladeshi Colony Hub",
    "location_display": "Bangladeshi Colony, Ward 64 Dattatreya Nagar (Asif Nagar mandal)",
    "date": "2025-04-12",
    "photo_count": 4,
    "images": [
      "IMG20250412173427.jpg",
      "IMG20250412173428.jpg",
      "IMG20250412173440.jpg",
      "IMG20250412173441.jpg"
    ]
  },
  {
    "id": 21,
    "studio_name": "Studio #21",
    "lat": 17.377523,
    "lon": 78.453987,
    "coord_label": "17.3775\u00b0 N, 78.4540\u00b0 E",
    "locality": "Bangladeshi Colony",
    "suburb": "Ward 64 Dattatreya Nagar",
    "mandal": "Asif Nagar mandal",
    "hub": "Dattatreya Nagar / Bangladeshi Colony Hub",
    "location_display": "Bangladeshi Colony, Ward 64 Dattatreya Nagar (Asif Nagar mandal)",
    "date": "2025-04-11",
    "photo_count": 3,
    "images": [
      "IMG20250411191703.jpg",
      "IMG20250411191711.jpg",
      "IMG20250411191714.jpg"
    ]
  },
  {
    "id": 22,
    "studio_name": "Studio #22",
    "lat": 17.374962,
    "lon": 78.462715,
    "coord_label": "17.3750\u00b0 N, 78.4627\u00b0 E",
    "locality": "Chudi Bazaar",
    "suburb": "Begum Bazaar",
    "mandal": "Nampally mandal",
    "hub": "Begum Bazaar / Chudi Bazaar Hub",
    "location_display": "Chudi Bazaar, Begum Bazaar (Nampally mandal)",
    "date": "2025-04-10",
    "photo_count": 2,
    "images": [
      "IMG20250410173621.jpg",
      "IMG20250410173623.jpg"
    ]
  },
  {
    "id": 23,
    "studio_name": "Studio #23",
    "lat": 17.375315,
    "lon": 78.458717,
    "coord_label": "17.3753\u00b0 N, 78.4587\u00b0 E",
    "locality": "Rahimpura",
    "suburb": "Ward 63 Mangalhat",
    "mandal": "Asif Nagar mandal",
    "hub": "Mangalhat / Rahimpura Hub",
    "location_display": "Rahimpura, Ward 63 Mangalhat (Asif Nagar mandal)",
    "date": "2025-04-12",
    "photo_count": 2,
    "images": [
      "IMG20250412154756.jpg",
      "IMG20250412154757.jpg"
    ]
  },
  {
    "id": 24,
    "studio_name": "Studio #24",
    "lat": 17.375397,
    "lon": 78.455498,
    "coord_label": "17.3754\u00b0 N, 78.4555\u00b0 E",
    "locality": "Bangladeshi Colony",
    "suburb": "Ward 64 Dattatreya Nagar",
    "mandal": "Asif Nagar mandal",
    "hub": "Dattatreya Nagar / Bangladeshi Colony Hub",
    "location_display": "Bangladeshi Colony, Ward 64 Dattatreya Nagar (Asif Nagar mandal)",
    "date": "2025-04-12",
    "photo_count": 2,
    "images": [
      "IMG20250412160622.jpg",
      "IMG20250412160623.jpg"
    ]
  },
  {
    "id": 25,
    "studio_name": "Studio #25",
    "lat": 17.375124,
    "lon": 78.460556,
    "coord_label": "17.3751\u00b0 N, 78.4606\u00b0 E",
    "locality": "Ghode Ki Khabr",
    "suburb": "Goshamahal",
    "mandal": "Nampally mandal",
    "hub": "Dhoolpet / Goshamahal Hub",
    "location_display": "Ghode Ki Khabr, Goshamahal (Nampally mandal)",
    "date": "2025-04-10",
    "photo_count": 1,
    "images": [
      "IMG20250410174735.jpg"
    ]
  },
  {
    "id": 26,
    "studio_name": "Studio #26",
    "lat": 17.370897,
    "lon": 78.45874,
    "coord_label": "17.3709\u00b0 N, 78.4587\u00b0 E",
    "locality": "Dhoolpet",
    "suburb": "Goshamahal",
    "mandal": "Nampally mandal",
    "hub": "Dhoolpet / Goshamahal Hub",
    "location_display": "Dhoolpet, Goshamahal (Nampally mandal)",
    "date": "2025-04-12",
    "photo_count": 1,
    "images": [
      "IMG20250412192630.jpg"
    ]
  }
];

  // --- Archival Data Definition ---
  const ARCHIVE_DATA = {
    sculptors: [
      {
        id: "ramesh-singh",
        name: "Ramesh Singh Kalakar",
        name_te: "రమేష్ సింగ్ కళాకార్",
        name_hi: "रमेश सिंह कलाकार",
        honorific: "Master Sculptor & Workshop Founder",
        honorific_te: "ప్రధాన శిల్పి & వర్క్‌షాప్ వ్యవస్థాపకులు",
        honorific_hi: "वरिष्ठ मूर्तिकार एवं कार्यशाला संस्थापक",
        studio_name: "Ramesh’s Sculpture Studio",
        studio_name_te: "రమేష్ శిల్ప స్టూడియో",
        studio_name_hi: "रमेश मूर्तिकला स्टूडियो",
        location: "Begum Bazaar, Hyderabad, India",
        location_te: "బేగంబజార్, హైదరాబాద్, భారతదేశం",
        location_hi: "बेगम बाज़ार, हैदराबाद, भारत",
        active_era: "1980–1990",
        portrait_image: "assets/images/ramesh-singh-kalakar.jpg",
        records_count: 21,
        status: "active",
        bio_paragraphs: [
          "Ramesh Singh Kalakar was the founder and master sculptor of a celebrated idol workshop in Begum Bazaar, Hyderabad. Throughout the 1980s and 1990s, his studio served as an artistic crossroads where traditional clay, wood, and plaster techniques met cross-regional artisan collaboration.",
          "Recognizing the refined anatomical and ornamental skills of Bengali sculptors, Ramesh welcomed master artisans of the celebrated Pal lineage (including Haran Pal, Sushanto Pal, Pradeep Pal, Vimal Pal, Arun Pal, Chetana Pal, and Babu Pal) who migrated seasonally from West Bengal to Begum Bazaar.",
          "The studio became renowned across Andhra Pradesh and Telangana for monumental installations reaching over 20 feet, innovative theological crossovers (such as Lord Ganesha sculpted with a wrestler’s physique as warrior Arjuna, and Goddess Durga depicted as soldier-queen Rani Lakshmibai on horseback with riding boots), handcrafted gemstone-and-clay ornaments known as 'Tickli', and pioneering kinetic engineering—including motorized roaring lion heads with integrated audio cassette loops."
        ],
        bio_paragraphs_te: [
          "రమేష్ సింగ్ కళాకార్ హైదరాబాద్‌లోని బేగంబజార్‌లో ప్రసిద్ధి చెందిన విగ్రహ శిల్పకళాశాల వ్యవస్థాపకులు మరియు ప్రధాన శిల్పి. 1980 మరియు 1990 దశాబ్దాలలో వీరి స్టూడియో సాంప్రదాయ మట్టి, కలప, ప్లాస్టర్ శిల్పకళకు మరియు అంతర్రాష్ట్ర కళాకారుల సమ్మేళనానికి కేంద్రంగా విలసిల్లింది.",
          "బెంగాలీ శిల్పుల సున్నితమైన శరీర నిర్మాణ మరియు అలంకరణ నైపుణ్యాన్ని గుర్తించి, పశ్చిమ బెంగాల్‌కు చెందిన పాల్ వంశస్థులైన ప్రముఖ కళాకారులను (హరణ్ పాల్, సుశాంతో పాల్, ప్రదీప్ పాల్, విమల్ పాల్, అరుణ్ పాల్ తదితరులు) బేగంబజార్‌కు ఆహ్వానించి భాగస్వామ్యం కల్పించారు.",
          "20 అడుగులకు పైగా ఎత్తైన మహోన్నత విగ్రహాలు, తిక్లి రత్నాలంకరణలు, మరియు బ్యాటరీతో గర్జించే సింహం తలల వంటి సాంకేతిక ప్రయోగాలతో వీరి శిల్పాలు ఉమ్మడి ఆంధ్రప్రదేశ్ అంతటా విస్తృత కీర్తిని పొందాయి."
        ],
        bio_paragraphs_hi: [
          "रमेश सिंह कलाकार हैदराबाद के बेगम बाज़ार में स्थित प्रसिद्ध मूर्तिकला कार्यशाला के संस्थापक एवं मुख्य मूर्तिकार थे। 1980 एवं 1990 के दशक में उनका स्टूडियो पारंपरिक मृत्तिका, काष्ठ और प्लास्टर तकनीकों तथा अंतर्राज्यीय शिल्पकारों के संगम का प्रमुख केंद्र था।",
          "पश्चिम बंगाल के विख्यात पाल वंश के सिद्धहस्त मूर्तिकारों (हरण पाल, सुशांतो पाल, प्रदीप पाल, विमल पाल, अरुण पाल आदि) को उन्होंने हैदराबाद आमंत्रित किया और स्थानीय एवं बंगाली मूर्तिकला शैलियों का अद्वितीय समन्वय स्थापित किया।",
          "20 फीट से भी ऊंची विशाल प्रतिमाएं, टिकली आभूषण कला, तथा मोटर चालित गर्जना करने वाले सिंह जैसी यांत्रिक नवीनताओं के कारण उनकी कृतियाँ संपूर्ण आंध्र प्रदेश और तेलंगाना में प्रतिष्ठित रहीं।"
        ],
        studio_personalities: [
          "Haran Pal", "Pradeep Pal", "Vimal Pal", "Ramesh Singh Kalakar", 
          "Sushanto Pal", "Arun Pal", "Sheetal Singh (Elder Brother)", 
          "Jai Singh", "Meenakshi Bai", "Babu Pal", "Chetana Pal"
        ],
        studio_photographs: [
          {
            plate: 1,
            title: "Master Artisans of Begum Bazaar Workshop",
            image_url: "assets/images/ramesh-01.jpg",
            caption: "Left to right: Haran Pal, Pradeep Pal, Vimal Pal, Ramesh Singh Kalakar, Sushanto Pal, Arun Pal standing in front of the monumental 15ft Durga tableau."
          },
          {
            plate: 4,
            title: "Senior Assistant Ramesh Singh in Exhibition Area",
            image_url: "assets/images/ramesh-04.jpg",
            caption: "Elder artisan assistant Ramesh Singh seated in the front showroom among completed Navaratri murtis."
          },
          {
            plate: 8,
            title: "Babu Pal & Chetana Pal with Motorized Lion",
            image_url: "assets/images/ramesh-08.jpg",
            caption: "Artisans Babu Pal, Chetana Pal, worker and child standing beside the unfinished Shiva Parivar and kinetic lion head mechanism."
          },
          {
            plate: 11,
            title: "Studio Floor Scene with Meenakshi Bai & 2000 Newspaper",
            image_url: "assets/images/ramesh-11.jpg",
            caption: "Meenakshi Bai seated in the workshop beside raw plaster models. On the floor lies a historic copy of The Times reporting the 2000 Bush vs Gore presidential election."
          },
          {
            plate: 20,
            title: "Studio Interior: Paint Pots & Ram Darbar Assembly",
            image_url: "assets/images/ramesh-20.jpg",
            caption: "Documents the physical workspace: wooden work tables, pigment mixing pots, stools, and miniature raw clay Ganeshas drying on the workshop floor."
          }
        ]
      },
      {
        id: "dhoolpet-artisans",
        name: "Dhoolpet Clay Artisans Guild",
        name_te: "ధూల్‌పేట్ మట్టి శిల్పకారుల సమాఖ్య",
        name_hi: "धूलपेट मृत्तिका मूर्तिकार संघ",
        honorific: "Kumbhar & Murti Masters",
        honorific_te: "కుంభకార & మూర్తి కళాకారులు",
        honorific_hi: "कुंभकार एवं मूर्ति शिल्पकार",
        studio_name: "Dhoolpet Heritage Studios",
        studio_name_te: "ధూల్‌పేట్ హెరిటేజ్ స్టూడియోలు",
        studio_name_hi: "धूलपेट हेरिटेज स्टूडियोज़",
        location: "Dhoolpet, Hyderabad, India",
        location_te: "ధూల్‌పేట్, హైదరాబాద్, భారతదేశం",
        location_hi: "धूलपेट, हैदराबाद, भारत",
        active_era: "1970 – Present",
        portrait_image: "assets/images/ramesh-13.jpg",
        records_count: 0,
        status: "forthcoming",
        bio_paragraphs: [
          "A generational community of clay sculptors inhabiting the historic settlement of Dhoolpet, Hyderabad, representing multi-generational artisanal lineages from Maharashtra, Gujarat, and the Deccan.",
          "Renowned for hand-modelled river silt clay (shadu mati) idols, eco-friendly natural gum binders, and monumental Ganesh Chaturthi installations. Oral history documentation currently in progress."
        ],
        studio_personalities: [],
        studio_photographs: []
      },
      {
        id: "kumharwadi-masters",
        name: "Kumharwadi Terracotta Project",
        name_te: "కుంభార్‌వాడి టెర్రకోట సమాఖ్య",
        name_hi: "कुम्हारवाड़ी टेराकोटा प्रोजेक्ट",
        honorific: "Votive & Ceramic Masters",
        honorific_te: "సాంప్రదాయ కుండల & మట్టి కళాకారులు",
        honorific_hi: "पारंपरिक मृत्तिका एवं घट शिल्पकार",
        studio_name: "Kumharwadi Traditional Kilns",
        studio_name_te: "కుంభార్‌వాడి సాంప్రదాయ ఆవాలు",
        studio_name_hi: "कुम्हारवाड़ी पारंपरिक भट्ठियाँ",
        location: "Old City, Hyderabad, India",
        location_te: "పాతబస్తీ, హైదరాబాద్, భారతదేశం",
        location_hi: "पुराना शहर, हैदराबाद, भारत",
        active_era: "1960 – Present",
        portrait_image: "assets/images/ramesh-06.jpg",
        records_count: 0,
        status: "forthcoming",
        bio_paragraphs: [
          "Custodians of indigenous Deccan pit-kiln firing techniques, crafting traditional votive terracotta deities, ritual pots (Ghatams for Bonalu festivals), and domestic temple sculptures.",
          "Field recording and archival photography currently underway."
        ],
        studio_personalities: [],
        studio_photographs: []
      }
    ],
    works: [
      {
        plate: 1,
        year: 1986,
        sculptor_id: "ramesh-singh",
        title: "Fairy Putting Garlands on Durga Mata",
        image_url: "assets/images/ramesh-01.jpg",
        dimensions: "15ft. X 8ft. X 5ft.",
        making_cost: "25,000 Rs.",
        selling_cost: "45,000 Rs.",
        commission: "Self-Initiated",
        location: "Vijayawada",
        personalities: ["Haran Pal", "Pradeep Pal", "Vimal Pal", "Ramesh Singh Kalakar", "Sushanto Pal", "Arun Pal"],
        concept: "Two airborne celestial fairies descend from the sky to place a floral garland upon Goddess Durga, while Lakshmi, Ganesha, Saraswati, and Kartikeya praise her from below.",
        material: "Plaster of Paris with bamboo and timber armature. Real garments stitched with studio nails. Kolkata natural hair and handmade Tickli jeweled ornamentation."
      },
      {
        plate: 2,
        year: 1980,
        sculptor_id: "ramesh-singh",
        title: "Nava Durga Fighting Set",
        image_url: "assets/images/ramesh-02.jpg",
        dimensions: "8ft. X 4ft. X 3ft.",
        making_cost: "7,000 Rs.",
        selling_cost: "15,000 Rs.",
        commission: "Self-Initiated",
        location: "Jagath Girigutta",
        personalities: [],
        concept: "Goddess Durga and her lion slaying the demon, flanked by the companion figures of Lakshmi, Saraswati, Ganesh, and Kartikeya.",
        material: "Plaster of Paris over bamboo skeleton. Hand-forged iron sheet weaponry fabricated directly in the workshop."
      },
      {
        plate: 3,
        year: 1984,
        sculptor_id: "ramesh-singh",
        title: "Sculptures for Janamashtami Procession (51 Figures)",
        image_url: "assets/images/ramesh-03.jpg",
        dimensions: "9ft. X 7ft. (Central Vishnu)",
        making_cost: "2,00,000 Rs.",
        selling_cost: "5,00,000 Rs.",
        commission: "Hare Rama Hare Krishna Foundation Contract",
        location: "Abids Procession, Hyderabad",
        personalities: ["Sushanto Pal"],
        concept: "A sweeping commission of 51 processional figures including Lord Vishnu reclined under the multi-headed serpent king Sheshnag for the Krishna Janamashtami street procession.",
        material: "Plaster of Paris, bamboo framework, stitched textiles, and high-gloss enamel paints."
      },
      {
        plate: 4,
        year: 1982,
        sculptor_id: "ramesh-singh",
        title: "Maa Sherawali and Maa Durga in Exhibition Area",
        image_url: "assets/images/ramesh-04.jpg",
        dimensions: "8ft. X 4ft. X 3ft.",
        making_cost: "7,000 Rs. each",
        selling_cost: "15,000 Rs. each",
        commission: "Self-Initiated / Festival Season Stock",
        location: "Begum Bazaar Studio",
        personalities: ["Ramesh Singh (Assistant)"],
        concept: "Display of finished festival idols in the front gallery bay of the Begum Bazaar studio, where festival samithis arrived to select their pandal centerpieces.",
        material: "Plaster of Paris, bamboo armature, natural Kolkata hair, and Tickli crowns."
      },
      {
        plate: 5,
        year: 1982,
        sculptor_id: "ramesh-singh",
        title: "Maa Sherawali on Tiger Mount",
        image_url: "assets/images/ramesh-05.jpg",
        dimensions: "8ft. X 4ft. X 3ft.",
        making_cost: "7,000 Rs.",
        selling_cost: "15,000 Rs.",
        commission: "Self-Initiated",
        location: "Hyderabad Region",
        personalities: [],
        concept: "Maa Sherawali conferring protection and blessings (abhaya) to devotees, seated upon a painted tiger mount with parted jaws.",
        material: "Plaster of Paris, bamboo core, draped textiles, and handmade Tickli jewel border trim."
      },
      {
        plate: 6,
        year: 1989,
        sculptor_id: "ramesh-singh",
        title: "Bengali Style Maa Durga (Best Pandal Award 1989)",
        image_url: "assets/images/ramesh-06.jpg",
        dimensions: "9ft. X 5ft. X 3ft.",
        making_cost: "30,000 Rs.",
        selling_cost: "55,000 Rs.",
        commission: "Santosh Nagar Society",
        location: "Santosh Nagar, Hyderabad",
        personalities: [],
        concept: "Durga sculpted in classical Bengali Daaker Saaj style with an ornamental chalchitra arch. Won the 'Best Pandal Award 1989' in Hyderabad.",
        material: "Plaster of Paris, hand-carved painted thermocol back arch, and velour cloth for lion fur."
      },
      {
        plate: 7,
        year: 1985,
        sculptor_id: "ramesh-singh",
        title: "Flying Durga in White Saree (Katyayani)",
        image_url: "assets/images/ramesh-07.jpg",
        dimensions: "12ft. X 4ft. X 2ft.",
        making_cost: "20,000 Rs.",
        selling_cost: "45,000 Rs.",
        commission: "Self-Initiated",
        location: "Ram Nagar",
        personalities: [],
        concept: "Goddess Durga depicted in aerial descent wearing a serene white saree, invoking the sixth day Navratri avatar of Katyayani where white balances fierce power with maternal grace.",
        material: "Plaster of Paris, suspended cantilevered bamboo framework, white silk, and third-eye Shaivite modeling."
      },
      {
        plate: 8,
        year: 1987,
        sculptor_id: "ramesh-singh",
        title: "Shankar’s Family with Motorized Roaring Lion (Process)",
        image_url: "assets/images/ramesh-08.jpg",
        dimensions: "15ft. X 10ft. X 3ft.",
        making_cost: "55,000 Rs.",
        selling_cost: "75,000 Rs.",
        commission: "Self-Initiated",
        location: "Vijayawada",
        personalities: ["Daily wage worker", "Visitor (child)", "Chetana Pal", "Babu Pal"],
        concept: "Monumental tableau of Lord Shiva holding baby Kartikeya, and Parvati holding Ganesha on her lap atop a roaring lion mount.",
        material: "Plaster of Paris, bamboo armature, and an internal kinetic motor mechanism connected to a papier-mâché lion head that moved its neck while a hidden cassette tape player looped an authentic lion roar."
      },
      {
        plate: 9,
        year: 1990,
        sculptor_id: "ramesh-singh",
        title: "Durga Mata with Ganesha & Kartikeya",
        image_url: "assets/images/ramesh-09.jpg",
        dimensions: "15ft. X 6ft. X 4ft.",
        making_cost: "40,000 Rs.",
        selling_cost: "85,000 Rs.",
        commission: "Langar House Community",
        location: "Langar House",
        personalities: [],
        concept: "Five-figure tableau featuring ten-armed Goddess Durga holding Ganesha on her left, flanked by Kartikeya, lion, and mouse mount Mushaka.",
        material: "Plaster of Paris, bamboo support, brocade drapery, and shining lacquer paint."
      },
      {
        plate: 10,
        year: 1990,
        sculptor_id: "ramesh-singh",
        title: "The Cycle of Life (Suite of 12 Figures)",
        image_url: "assets/images/ramesh-10.jpg",
        dimensions: "1ft. to 5ft. (Set of 12 Figures)",
        making_cost: "2,00,000 Rs.",
        selling_cost: "5,00,000 Rs.",
        commission: "Hare Rama Hare Krishna Foundation Contract",
        location: "Tirumala Tirupati Balaji Temple Exhibition",
        personalities: [],
        concept: "A philosophical narrative suite of twelve figures illustrating the stages of human life from infant birth to old age. Ramesh spent a month in Tirupati installing this permanent museum exhibit.",
        material: "Fine Plaster of Paris, anatomical figure modeling, and custom cloth dhotis."
      },
      {
        plate: 11,
        year: 2000,
        sculptor_id: "ramesh-singh",
        title: "Goddess Durga with Devotee Meenakshi Bai",
        image_url: "assets/images/ramesh-11.jpg",
        dimensions: "5ft. X 4ft. X 2ft.",
        making_cost: "2,000 Rs.",
        selling_cost: "5,000 Rs.",
        commission: "Self-Initiated",
        location: "Begum Bazaar Studio",
        personalities: ["Meenakshi Bai"],
        concept: "Studio portrait of Meenakshi Bai seated beside an emerald-sari draped Durga idol on tiger mount. A discarded newspaper on the ground reporting the 2000 US Bush vs Gore election dates the studio session.",
        material: "Plaster of Paris, satin fabric with gold borders, and natural Kolkata hair."
      },
      {
        plate: 12,
        year: 1990,
        sculptor_id: "ramesh-singh",
        title: "Vaishno Devi in Siddhipet",
        image_url: "assets/images/ramesh-12.jpg",
        dimensions: "9ft. X 2ft. X 5ft.",
        making_cost: "8,000 Rs.",
        selling_cost: "45,000 Rs.",
        commission: "Annual Patron Order (Businessman & Pandit)",
        location: "Siddhipet",
        personalities: ["Businessman and Pandit of Siddhipet"],
        concept: "Durga sculpted under the iconographic influence of Vaishno Devi Pindi. Captured during the sacred consecration puja with lit brass lamps.",
        material: "Plaster of Paris, silver foil backdrop, and multi-tiered carved throne."
      },
      {
        plate: 13,
        year: 1988,
        sculptor_id: "ramesh-singh",
        title: "Ganesha as Arjun (Warrior on Chariot)",
        image_url: "assets/images/ramesh-13.jpg",
        dimensions: "20ft. X 22ft. X 12ft. (Colossal)",
        making_cost: "80,000 Rs.",
        selling_cost: "1,00,000 Rs.",
        commission: "Begum Bazaar Merchant",
        location: "Begum Bazar Chatri",
        personalities: ["Sheetal Singh (Elder Brother)"],
        concept: "Ganesha envisioned as the Mahabharata warrior Arjun atop a horse-drawn war chariot, sculpted with a muscular wrestler (pehelwaan) physique. Elder brother Sheetal Singh stands beside the chariot.",
        material: "Monumental PoP timber structure, carved white horses, and golden chariot wheels."
      },
      {
        plate: 14,
        year: 1989,
        sculptor_id: "ramesh-singh",
        title: "Durga Mata as Rani Laxmi Bai on Horseback",
        image_url: "assets/images/ramesh-14.jpg",
        dimensions: "12ft. X 6ft. X 4ft.",
        making_cost: "45,000 Rs.",
        selling_cost: "75,000 Rs.",
        commission: "Self-Initiated",
        location: "Jagat Giri Gutta",
        personalities: [],
        concept: "Goddess Durga portrayed as the freedom fighter Rani Laxmi Bai astride a galloping white stallion with child Ganesha on the saddle, dressed in military cavalry attire with black riding boots.",
        material: "Plaster of Paris, equestrian soldier attire, black boots, and forged steel talwar."
      },
      {
        plate: 15,
        year: 1990,
        sculptor_id: "ramesh-singh",
        title: "Ganesh with Consorts Riddhi and Siddhi",
        image_url: "assets/images/ramesh-15.jpg",
        dimensions: "6ft. X 5ft. X 3ft.",
        making_cost: "20,000 Rs.",
        selling_cost: "60,000 Rs.",
        commission: "Self-Initiated",
        location: "Begum Bazaar Studio",
        personalities: [],
        concept: "Lord Ganesha seated in courtly regal attire, flanked by his consorts Riddhi and Siddhi holding ceremonial flywhisks (chauris).",
        material: "Plaster of Paris, satin sashes, Kolkata natural hair, and Tickli crowns."
      },
      {
        plate: 16,
        year: 1990,
        sculptor_id: "ramesh-singh",
        title: "Flying Durga and Ganesha Slaying Demons",
        image_url: "assets/images/ramesh-16.jpg",
        dimensions: "12ft. X 6ft. X 3ft.",
        making_cost: "30,000 Rs.",
        selling_cost: "60,000 Rs.",
        commission: "Self-Initiated",
        location: "Hyderabad Region",
        personalities: [],
        concept: "Aerial battle composition showing Durga and a warrior Ganesha swooping down from clouds to confront demonic adversaries.",
        material: "Plaster of Paris, suspended cantilevered bamboo framework, and red silk."
      },
      {
        plate: 17,
        year: 1990,
        sculptor_id: "ramesh-singh",
        title: "Hairy Hanuman Roop with Rama & Lakshmana",
        image_url: "assets/images/ramesh-17.jpg",
        dimensions: "7ft. X 4ft. X 3ft.",
        making_cost: "30,000 Rs.",
        selling_cost: "55,000 Rs.",
        commission: "Self-Initiated",
        location: "Hyderabad Region",
        personalities: [],
        concept: "Kneeling Hanuman modeled with lifelike fur texture across his torso and limbs, carrying Lord Rama and Prince Lakshmana upon his shoulders.",
        material: "Plaster of Paris with rough stippling and jute fiber hair application for primate fur realism."
      },
      {
        plate: 18,
        year: 1990,
        sculptor_id: "ramesh-singh",
        title: "Vasudev Carrying Baby Krishna Across Yamuna",
        image_url: "assets/images/ramesh-18.jpg",
        dimensions: "10ft. X 5ft. X 4ft.",
        making_cost: "2,00,000 Rs. (Contract)",
        selling_cost: "5,00,000 Rs. (Contract)",
        commission: "Hare Rama Hare Krishna Foundation Contract",
        location: "Tirupati Balaji Temple Pavilion",
        personalities: ["Jai Singh"],
        concept: "Vasudev carrying newborn Krishna across the stormy river Yamuna under the canopy of multi-headed serpent king Sheshnag.",
        material: "Plaster of Paris, wire mesh armature for serpent hoods, silver drapery, and painted water waves."
      },
      {
        plate: 19,
        year: 1990,
        sculptor_id: "ramesh-singh",
        title: "Ganesha as Krishna Stealing Makhan (Makhan Chor)",
        image_url: "assets/images/ramesh-19.jpg",
        dimensions: "10ft. X 6ft. X 3ft.",
        making_cost: "25,000 Rs.",
        selling_cost: "65,000 Rs.",
        commission: "Self-Initiated",
        location: "Kurnool",
        personalities: [],
        concept: "Lord Ganesha portrayed as child Krishna climbing atop companions to reach hanging earthen butter pots (makhan) while gopis watch in delight.",
        material: "Plaster of Paris, realistic hanging terracotta pots, satin fabrics, and Tickli jewelry."
      },
      {
        plate: 20,
        year: 1990,
        sculptor_id: "ramesh-singh",
        title: "Radha Krishna and Ram Darbar Studio Assembly",
        image_url: "assets/images/ramesh-20.jpg",
        dimensions: "8ft. X 12ft. (Ensemble)",
        making_cost: "50,000 Rs.",
        selling_cost: "1,20,000 Rs.",
        commission: "Temple Trust / Begum Bazaar Project",
        location: "Begum Bazaar Studio",
        personalities: [],
        concept: "Dual assembly featuring Radha-Krishna with Kamadhenu cow on the left, and Lord Rama with Sita, Lakshmana, Bharata, Shatrughna, and Hanuman on the right.",
        material: "Plaster of Paris, satin silks, custom crafted mukuts, paint mixing pots, and raw clay models on the studio floor."
      },
      {
        plate: 21,
        year: 1987,
        sculptor_id: "ramesh-singh",
        title: "Shankar’s Family with Roaring Lion (Installed)",
        image_url: "assets/images/ramesh-21.jpg",
        dimensions: "15ft. X 10ft. X 3ft.",
        making_cost: "55,000 Rs.",
        selling_cost: "75,000 Rs.",
        commission: "Festival Commission",
        location: "Vijayawada Pandal",
        personalities: [],
        concept: "The completed, fully colored and outfitted companion to the process photograph in Plate #8. Depicts Shiva holding infant Kartikeya, and Parvati holding Ganesha atop the motorized roaring lion under festival illumination.",
        material: "Plaster of Paris, papier-mâché motorized oscillating lion head, audio cassette roar playback, gold embroidery, and Kolkata natural hair."
      }
    ]
  };

  // --- Application State ---
  const storedLang = localStorage.getItem('kalakar_lang');
  const state = {
    lang: (storedLang === 'hi') ? 'hi' : 'en',
    currentView: 'directory', // 'directory' | 'sculptor'
    activeSculptorId: null,
    selectedYear: 'all',
    activeModalItem: null
  };

  // Unique chronological years for Ramesh Singh Kalakar
  const RAMESH_YEARS = ['all', 1980, 1982, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 2000];

  // Documented Installation Hubs & Regional Plates Mapping
  const HUBS_DATA = {
    'begum-bazaar': {
      id: 'begum-bazaar',
      name: 'Begum Bazaar, Hyderabad',
      kicker: 'Central Workshop & Studio Hub',
      desc: 'The central studio where master armatures were built, Bengali artisans gathered, and multi-figure temple tableaux were assembled.',
      plates: [4, 11, 13, 15, 20, 1]
    },
    'vijayawada': {
      id: 'vijayawada',
      name: 'Vijayawada, Andhra Pradesh',
      kicker: 'Monumental Pandal Installations',
      desc: 'Colossal 15ft Durga tableau with celestial fairies and motorized kinetic lion heads, plus Shankar\'s Family tableaux commissioned for coastal Andhra.',
      plates: [1, 8, 21]
    },
    'tirupati': {
      id: 'tirupati',
      name: 'Tirupati Balaji (Tirumala)',
      kicker: 'Temple Exhibition & Sacred Dioramas',
      desc: 'Philosophical sculptural tableaux depicting "The Cycle of Life" (human metamorphosis) and Vasudev crossing the Yamuna beneath Sheshnag.',
      plates: [10, 18]
    },
    'siddhipet': {
      id: 'siddhipet',
      name: 'Siddhipet, Telangana',
      kicker: 'Temple Festival Commission',
      desc: '9ft Vaishno Devi idol sculpted for community temple celebrations in Siddhipet.',
      plates: [12]
    },
    'kurnool': {
      id: 'kurnool',
      name: 'Kurnool, Andhra Pradesh',
      kicker: 'Janmashtami Civic Tableau',
      desc: '10ft Ganesha sculpted as Makhan Chor Krishna stealing butter, commissioned for festival display in Kurnool.',
      plates: [19]
    },
    'hyderabad-pandals': {
      id: 'hyderabad-pandals',
      name: 'Hyderabad City Pandals',
      kicker: 'Twin Cities Festival Pandals',
      desc: 'Major urban pandals across Jagath Girigutta, Ram Nagar, Langar House, and Abids featuring dynamic fighting postures and historical icons.',
      plates: [2, 3, 5, 6, 7, 9, 14, 16, 17]
    },
    'jagath-girigutta': {
      id: 'jagath-girigutta',
      name: 'Jagath Girigutta, Hyderabad',
      kicker: 'Heroic & Fighter Murtis',
      desc: 'Nava Durga fighting set and Goddess Durga sculpted in heroic posture as soldier-queen Rani Lakshmibai on horseback.',
      plates: [2, 14]
    },
    'ram-nagar': {
      id: 'ram-nagar',
      name: 'Ram Nagar, Hyderabad',
      kicker: 'Dynamic Fighting Tableau',
      desc: '12ft Flying Durga slaying Mahishasura and Maa Sherawali on a kinetic roaring lion mount.',
      plates: [7]
    },
    'langar-house': {
      id: 'langar-house',
      name: 'Langar House, Hyderabad',
      kicker: 'Pandal Installation',
      desc: 'Durga Mata seated with Ganesha and Kartikeya, adorned with handcrafted Tickli jewelry.',
      plates: [9]
    },
    'abids': {
      id: 'abids',
      name: 'Abids Procession, Hyderabad',
      kicker: 'Processional Tableau',
      desc: '51 sculpted processional figures including reclining Vishnu under Sheshnag for the annual street festival.',
      plates: [3]
    }
  };

  // --- DOM Elements ---
  const dom = {};

  function cacheDOM() {
    dom.viewDirectory = document.getElementById('view-directory');
    dom.viewSculptor = document.getElementById('view-sculptor');
    dom.viewPeople = document.getElementById('view-people');
    dom.sculptorsGrid = document.getElementById('sculptors-grid');

    // Sculptor Profile Page elements
    dom.backToDirectoryBtn = document.getElementById('back-to-directory-btn');
    dom.profileName = document.getElementById('profile-name');
    dom.profileHonorific = document.getElementById('profile-honorific');
    dom.profileStudio = document.getElementById('profile-studio');
    dom.profileLocation = document.getElementById('profile-location');
    dom.profileEra = document.getElementById('profile-era');
    dom.profileRecordsCount = document.getElementById('profile-records-count');
    dom.profileBio = document.getElementById('profile-bio');
    dom.profilePersonalities = document.getElementById('profile-personalities');
    dom.studioPhotosGrid = document.getElementById('studio-photos-grid');

    // Timeline elements
    dom.timelineScrollerTrack = document.getElementById('timeline-scroller-track');
    dom.timelineWorksGrid = document.getElementById('timeline-works-grid');
    dom.timelineStatus = document.getElementById('timeline-status');

    // Modal elements
    dom.modalOverlay = document.getElementById('archival-modal');
    dom.modalCloseBtn = document.getElementById('modal-close-btn');
    dom.modalImg = document.getElementById('modal-img');
    dom.modalPlateHeading = document.getElementById('modal-plate-heading');
    dom.modalWorkTitle = document.getElementById('modal-work-title');
    dom.modalDimensions = document.getElementById('modal-dimensions');
    dom.modalLocation = document.getElementById('modal-location');
    dom.modalCommission = document.getElementById('modal-commission');
    dom.modalEconomics = document.getElementById('modal-economics');
    dom.modalPersonalities = document.getElementById('modal-personalities');
    dom.modalConcept = document.getElementById('modal-concept');
    dom.modalMaterial = document.getElementById('modal-material');
    dom.modalPrevBtn = document.getElementById('modal-prev-btn');
    dom.modalNextBtn = document.getElementById('modal-next-btn');

    // Peoples Page elements
    dom.backFromPeopleBtn = document.getElementById('back-from-people-btn');
    dom.peopleBrowseArtisansBtn = document.getElementById('people-browse-artisans-btn');

    // Interactive Map Popover elements
    dom.mapNodePopover = document.getElementById('map-node-popover');
    dom.popoverBadge = document.getElementById('popover-badge');
    dom.popoverTitle = document.getElementById('popover-title');
    dom.popoverDesc = document.getElementById('popover-desc');
    dom.popoverThumbsRow = document.getElementById('popover-thumbs-row');
    dom.popoverViewAllBtn = document.getElementById('popover-view-all-btn');
    dom.popoverCloseBtn = document.getElementById('popover-close-btn');

    // Location Plates Modal elements
    dom.locationPlatesModal = document.getElementById('location-plates-modal');
    dom.locModalKicker = document.getElementById('loc-modal-kicker');
    dom.locModalTitle = document.getElementById('loc-modal-title');
    dom.locModalDesc = document.getElementById('loc-modal-desc');
    dom.locModalCloseBtn = document.getElementById('loc-modal-close-btn');
    dom.locModalPlatesGrid = document.getElementById('loc-modal-plates-grid');
    dom.locModalGoTimeline = document.getElementById('loc-modal-go-timeline');

    // Studio Map & Lightbox elements
    dom.studioOsmMap = document.getElementById('studio-osm-map');
    dom.studioDetailPanel = document.getElementById('studio-detail-panel');
    dom.studioImageGallery = document.getElementById('studio-image-gallery');
    dom.studioLightboxModal = document.getElementById('studio-lightbox-modal');
    dom.lightboxCloseBtn = document.getElementById('lightbox-close-btn');
    dom.lightboxPrevBtn = document.getElementById('lightbox-prev-btn');
    dom.lightboxNextBtn = document.getElementById('lightbox-next-btn');

    // Language buttons
    dom.langBtns = document.querySelectorAll('.lang-btn');

    // Navigation links
    dom.navSculptors = document.getElementById('nav-sculptors');
    dom.navMap = document.getElementById('nav-map');
    dom.navPeople = document.getElementById('nav-people');
    dom.navAbout = document.getElementById('nav-about');
  }

  // --- Language Switcher Logic ---
  function applyLanguage(lang) {
    if (!TRANSLATIONS[lang]) {
      lang = 'en';
    }
    state.lang = lang;
    localStorage.setItem('kalakar_lang', lang);
    document.documentElement.setAttribute('lang', lang);

    const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

    // Header & Nav
    const elBrandName = document.getElementById('i18n-brand-name');
    if (elBrandName) elBrandName.textContent = t.brand_name;
    const elBrandMeta = document.getElementById('i18n-brand-meta');
    if (elBrandMeta) elBrandMeta.textContent = t.brand_meta;

    const elNavSculptors = document.getElementById('nav-sculptors');
    if (elNavSculptors) elNavSculptors.textContent = t.nav_sculptors;
    const elNavMap = document.getElementById('nav-map');
    if (elNavMap) elNavMap.textContent = t.nav_map;
    const elNavPeople = document.getElementById('nav-people');
    if (elNavPeople) elNavPeople.textContent = t.nav_people;
    const elNavAbout = document.getElementById('nav-about');
    if (elNavAbout) elNavAbout.textContent = t.nav_about;

    // Hero Statement
    const elHeroTitle = document.getElementById('i18n-hero-title');
    if (elHeroTitle) elHeroTitle.textContent = t.hero_title;
    const elHeroSub = document.getElementById('i18n-hero-sub');
    if (elHeroSub) elHeroSub.textContent = t.hero_sub;

    // Roster Label
    const elRosterLabel = document.getElementById('i18n-roster-label');
    if (elRosterLabel) elRosterLabel.textContent = t.roster_label;

    // Map Section
    const elMapLabel = document.getElementById('i18n-map-label');
    if (elMapLabel) elMapLabel.textContent = t.map_label;
    const elMapTitle = document.getElementById('i18n-map-title');
    if (elMapTitle) elMapTitle.textContent = t.map_title;
    const elMapDesc = document.getElementById('i18n-map-desc');
    if (elMapDesc) elMapDesc.textContent = t.map_desc;
    const elMapNodesTitle = document.getElementById('i18n-map-nodes-title');
    if (elMapNodesTitle) elMapNodesTitle.textContent = t.map_nodes_title;

    // About Section
    const elAboutLabel = document.getElementById('i18n-about-label');
    if (elAboutLabel) elAboutLabel.textContent = t.about_label;
    const elAboutTitle = document.getElementById('i18n-about-title');
    if (elAboutTitle) elAboutTitle.textContent = t.about_title;
    const elAboutText = document.getElementById('i18n-about-text');
    if (elAboutText) {
      elAboutText.innerHTML = `<p>${t.about_p1}</p><p>${t.about_p2}</p>`;
    }

    // Peoples Page Labels
    const elPeopleLabel = document.getElementById('i18n-people-label');
    if (elPeopleLabel) elPeopleLabel.textContent = t.people_label;
    const elPeopleTitle = document.getElementById('i18n-people-title');
    if (elPeopleTitle) elPeopleTitle.textContent = t.people_title;
    const elPeopleSub = document.getElementById('i18n-people-sub');
    if (elPeopleSub) elPeopleSub.textContent = t.people_sub;
    const elBackFromPeople = document.getElementById('back-from-people-btn');
    if (elBackFromPeople) elBackFromPeople.textContent = t.back_btn;

    const elArtisansTag = document.getElementById('i18n-artisans-tag');
    if (elArtisansTag) elArtisansTag.textContent = t.artisans_tag;
    const elArtisansTitle = document.getElementById('i18n-artisans-title');
    if (elArtisansTitle) elArtisansTitle.textContent = t.artisans_title;
    const elArtisansDesc = document.getElementById('i18n-artisans-desc');
    if (elArtisansDesc) elArtisansDesc.textContent = t.artisans_desc;
    const elArtisansBtn = document.getElementById('people-browse-artisans-btn');
    if (elArtisansBtn) elArtisansBtn.textContent = t.artisans_btn;

    const elFounderTag = document.getElementById('i18n-founder-tag');
    if (elFounderTag) elFounderTag.textContent = t.founder_tag;
    const elFounderTitle = document.getElementById('i18n-founder-title');
    if (elFounderTitle) elFounderTitle.textContent = t.founder_title;
    const elFounderP = document.getElementById('i18n-founder-paragraphs');
    if (elFounderP) {
      elFounderP.innerHTML = `<p>${t.founder_p1}</p><p>${t.founder_p2}</p><p>${t.founder_p3}</p>`;
    }

    const elContribTag = document.getElementById('i18n-contrib-tag');
    if (elContribTag) elContribTag.textContent = t.contrib_tag;
    const elContribTitle = document.getElementById('i18n-contrib-title');
    if (elContribTitle) elContribTitle.textContent = t.contrib_title;
    const elContribDesc = document.getElementById('i18n-contrib-desc');
    if (elContribDesc) elContribDesc.textContent = t.contrib_desc;
    const elContribCtaTitle = document.getElementById('i18n-contrib-cta-title');
    if (elContribCtaTitle) elContribCtaTitle.textContent = t.contrib_cta_title;
    const elContribCtaDesc = document.getElementById('i18n-contrib-cta-desc');
    if (elContribCtaDesc) {
      elContribCtaDesc.innerHTML = `${t.contrib_cta_desc} <a href="mailto:scr.005@yahoo.com" class="archive-mail-link">scr.005@yahoo.com</a>.`;
    }

    const elConsentTag = document.getElementById('i18n-consent-tag');
    if (elConsentTag) elConsentTag.textContent = t.consent_tag;
    const elConsentTitle = document.getElementById('i18n-consent-title');
    if (elConsentTitle) elConsentTitle.textContent = t.consent_title;
    const elConsentDesc = document.getElementById('i18n-consent-desc');
    if (elConsentDesc) {
      elConsentDesc.innerHTML = `${t.consent_desc} <a href="mailto:scr.005@yahoo.com" class="archive-mail-link">scr.005@yahoo.com</a>.`;
    }

    // Sculptor Page Static Labels
    if (dom.backToDirectoryBtn) dom.backToDirectoryBtn.textContent = t.back_btn;
    const elStudioTitle = document.getElementById('i18n-studio-photos-title');
    if (elStudioTitle) elStudioTitle.textContent = t.studio_photos_title;
    const elStudioCount = document.getElementById('i18n-studio-photos-count');
    if (elStudioCount) elStudioCount.textContent = t.studio_photos_count;

    const elKeyHub = document.getElementById('i18n-key-hub');
    if (elKeyHub) elKeyHub.textContent = t.key_hub;
    const elKeyEra = document.getElementById('i18n-key-era');
    if (elKeyEra) elKeyEra.textContent = t.key_era;
    const elKeyStudio = document.getElementById('i18n-key-studio');
    if (elKeyStudio) elKeyStudio.textContent = t.key_studio;
    const elKeyHoldings = document.getElementById('i18n-key-holdings');
    if (elKeyHoldings) elKeyHoldings.textContent = t.key_holdings;
    const elBoxLineage = document.getElementById('i18n-box-lineage');
    if (elBoxLineage) elBoxLineage.textContent = t.box_lineage;

    const elTimelineTitle = document.getElementById('i18n-timeline-title');
    if (elTimelineTitle) elTimelineTitle.textContent = t.timeline_title;
    const elTimelineLegend = document.getElementById('i18n-timeline-legend');
    if (elTimelineLegend) elTimelineLegend.textContent = t.timeline_legend;

    const elFooterText = document.getElementById('i18n-footer-text');
    if (elFooterText) elFooterText.textContent = t.footer_text;

    // Update active button state
    dom.langBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Re-render current view content with current language
    if (state.currentView === 'directory') {
      renderDirectory();
    } else if (state.currentView === 'sculptor' && state.activeSculptorId) {
      renderSculptorPage(state.activeSculptorId);
    }
  }

  // --- Rendering Functions ---

  // 1. Render Home Sculptors Directory
  function renderDirectory() {
    if (!dom.sculptorsGrid) return;
    dom.sculptorsGrid.innerHTML = '';
    const t = TRANSLATIONS[state.lang] || TRANSLATIONS.en;

    ARCHIVE_DATA.sculptors.forEach(sculptor => {
      const card = document.createElement('article');
      card.className = `sculptor-card ${sculptor.status === 'active' ? 'clickable' : 'forthcoming'}`;

      if (sculptor.status === 'active') {
        card.onclick = () => navigateToSculptor(sculptor.id);
      }

      const displayName = state.lang === 'hi' && sculptor.name_hi ? sculptor.name_hi : sculptor.name;
      const displayStudio = state.lang === 'hi' && sculptor.studio_name_hi ? sculptor.studio_name_hi : sculptor.studio_name;
      const displayLoc = state.lang === 'hi' && sculptor.location_hi ? sculptor.location_hi : sculptor.location;

      const footerAction = sculptor.status === 'active'
        ? `<span class="view-profile-link">${t.view_profile_link}</span>`
        : `<span style="font-size: 0.8rem; color: var(--c-muted); font-style: italic;">${t.in_documentation}</span>`;

      card.innerHTML = `
        <div class="sculptor-card-header">
          <h2 class="sculptor-name">${displayName}</h2>
          <span class="sculptor-period">${sculptor.active_era}</span>
        </div>

        <div class="sculptor-meta-list">
          <div><strong>${t.key_studio}:</strong> ${displayStudio}</div>
          <div><strong>${t.key_hub}:</strong> ${displayLoc}</div>
        </div>

        <div class="sculptor-portrait-wrap">
          <img src="${sculptor.portrait_image}" class="sculptor-portrait" alt="${displayName}" loading="lazy">
        </div>

        <p class="sculptor-bio-snippet">${(state.lang === 'hi' && sculptor.bio_paragraphs_hi ? sculptor.bio_paragraphs_hi[0] : sculptor.bio_paragraphs[0])}</p>

        <div class="sculptor-card-footer">
          <span class="records-badge">${sculptor.records_count > 0 ? sculptor.records_count + ' ' + t.records_documented : t.in_documentation}</span>
          ${footerAction}
        </div>
      `;

      dom.sculptorsGrid.appendChild(card);
    });
  }

  // 2. Render Sculptor Profile Page
  function renderSculptorPage(sculptorId) {
    const sculptor = ARCHIVE_DATA.sculptors.find(s => s.id === sculptorId);
    if (!sculptor) return;
    const t = TRANSLATIONS[state.lang] || TRANSLATIONS.en;

    const displayName = state.lang === 'hi' && sculptor.name_hi ? sculptor.name_hi : sculptor.name;
    const displayHonorific = state.lang === 'hi' && sculptor.honorific_hi ? sculptor.honorific_hi : sculptor.honorific;
    const displayStudio = state.lang === 'hi' && sculptor.studio_name_hi ? sculptor.studio_name_hi : sculptor.studio_name;
    const displayLoc = state.lang === 'hi' && sculptor.location_hi ? sculptor.location_hi : sculptor.location;

    // Fill Details
    dom.profileName.textContent = displayName;
    dom.profileHonorific.textContent = displayHonorific;
    dom.profileStudio.textContent = displayStudio;
    dom.profileLocation.textContent = displayLoc;
    dom.profileEra.textContent = sculptor.active_era;
    dom.profileRecordsCount.textContent = `${sculptor.records_count} ${t.records_documented}`;

    const artisanImg = document.getElementById('profile-artisan-img');
    if (artisanImg) artisanImg.src = sculptor.portrait_image;

    // Fill Bio Paragraphs
    const bios = (state.lang === 'hi' && sculptor.bio_paragraphs_hi) ? sculptor.bio_paragraphs_hi : sculptor.bio_paragraphs;
    dom.profileBio.innerHTML = bios.map(p => `<p>${p}</p>`).join('');

    // Fill Personalities Box
    if (sculptor.studio_personalities && sculptor.studio_personalities.length > 0) {
      dom.profilePersonalities.textContent = sculptor.studio_personalities.join(', ');
    } else {
      dom.profilePersonalities.textContent = 'Archival interviews underway.';
    }

    // Fill Studio Photographs
    dom.studioPhotosGrid.innerHTML = '';
    sculptor.studio_photographs.forEach(sp => {
      const card = document.createElement('div');
      card.className = 'studio-photo-card';
      card.onclick = () => openModalForStudioPhoto(sp);

      card.innerHTML = `
        <div class="studio-photo-img-wrap">
          <img src="${sp.image_url}" class="studio-photo-img" alt="${sp.title}" loading="lazy">
        </div>
        <div class="studio-photo-caption">
          <strong>Plate #${sp.plate}: ${sp.title}</strong>
          ${sp.caption}
        </div>
      `;
      dom.studioPhotosGrid.appendChild(card);
    });

    // Render Timeline Track
    renderTimelineTrack();

    // Render Works for Selected Year
    renderTimelineWorks();
  }

  // 3. Render Timeline Track
  function renderTimelineTrack() {
    if (!dom.timelineScrollerTrack) return;

    const works = ARCHIVE_DATA.works.filter(w => w.sculptor_id === state.activeSculptorId);

    // Count works per year
    const counts = {};
    works.forEach(w => {
      counts[w.year] = (counts[w.year] || 0) + 1;
    });

    const trackInner = document.createElement('div');
    trackInner.className = 'timeline-track-inner';

    RAMESH_YEARS.forEach(yr => {
      const node = document.createElement('div');
      const isActive = state.selectedYear === yr;
      node.className = `timeline-node ${isActive ? 'active' : ''}`;
      node.onclick = () => selectYear(yr);

      const label = yr === 'all' ? (state.lang === 'hi' ? 'सभी' : 'All') : yr;
      const countLabel = yr === 'all' ? `${works.length}` : `${counts[yr] || 0}`;

      node.innerHTML = `
        <div class="node-tick"></div>
        <div class="node-year">${label}</div>
        <div class="node-count">${countLabel}</div>
      `;

      trackInner.appendChild(node);
    });

    dom.timelineScrollerTrack.innerHTML = '';
    dom.timelineScrollerTrack.appendChild(trackInner);
  }

  function selectYear(yr) {
    state.selectedYear = yr;
    renderTimelineTrack();
    renderTimelineWorks();
  }

  // 4. Render Works According to Timeline Filter
  function renderTimelineWorks() {
    if (!dom.timelineWorksGrid) return;
    dom.timelineWorksGrid.innerHTML = '';
    const t = TRANSLATIONS[state.lang] || TRANSLATIONS.en;

    let list = ARCHIVE_DATA.works.filter(w => w.sculptor_id === state.activeSculptorId);

    if (state.selectedYear !== 'all') {
      list = list.filter(w => w.year === state.selectedYear);
    }

    if (dom.timelineStatus) {
      if (state.selectedYear === 'all') {
        dom.timelineStatus.textContent = t.timeline_status_all;
      } else {
        dom.timelineStatus.textContent = `${t.timeline_status_year} ${state.selectedYear} (${list.length})`;
      }
    }

    if (list.length === 0) {
      dom.timelineWorksGrid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 40px 0; color: var(--c-muted); text-align: center;">
          No records cataloged for this specific year. Select 'All' to browse the complete album.
        </div>
      `;
      return;
    }

    list.forEach(work => {
      const card = document.createElement('article');
      card.className = 'work-card';
      card.onclick = () => openModalForWork(work);

      card.innerHTML = `
        <div class="work-img-wrap">
          <img src="${work.image_url}" class="work-img" alt="${work.title}" loading="lazy">
          <span class="work-plate-tag">#${String(work.plate).padStart(2, '0')}</span>
          <span class="work-year-tag">${work.year}</span>
        </div>
        <div class="work-content">
          <h4 class="work-title">${work.title}</h4>
          <div class="work-specs-list">
            <div class="work-spec-line">
              <span>Dimensions</span>
              <span>${work.dimensions}</span>
            </div>
            <div class="work-spec-line">
              <span>Location</span>
              <span>${work.location}</span>
            </div>
            <div class="work-spec-line">
              <span>1980s Cost</span>
              <span>${work.selling_cost}</span>
            </div>
          </div>
        </div>
      `;

      dom.timelineWorksGrid.appendChild(card);
    });
  }

  // --- Modal (Archival Lightbox) Logic ---
  function openModalForWork(work) {
    state.activeModalItem = { type: 'work', data: work };
    updateModalContent();
    dom.modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function openModalForStudioPhoto(photo) {
    state.activeModalItem = { type: 'studio', data: photo };
    updateModalContent();
    dom.modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    dom.modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function updateModalContent() {
    if (!state.activeModalItem) return;

    const item = state.activeModalItem.data;
    dom.modalImg.src = item.image_url;

    if (state.activeModalItem.type === 'work') {
      dom.modalPlateHeading.textContent = `PROJECT RECORD / PLATE #${String(item.plate).padStart(2, '0')} • YEAR ${item.year}`;
      dom.modalWorkTitle.textContent = item.title;
      dom.modalDimensions.textContent = item.dimensions;
      dom.modalLocation.textContent = item.location;
      dom.modalCommission.textContent = item.commission;
      dom.modalEconomics.textContent = `Made: ${item.making_cost} | Sold: ${item.selling_cost}`;
      dom.modalPersonalities.textContent = item.personalities.length > 0 ? item.personalities.join(', ') : 'None documented';
      dom.modalConcept.textContent = item.concept;
      dom.modalMaterial.textContent = item.material;
    } else {
      dom.modalPlateHeading.textContent = `STUDIO DOCUMENTATION / PLATE #${item.plate}`;
      dom.modalWorkTitle.textContent = item.title;
      dom.modalDimensions.textContent = 'Studio Workspace Scene';
      dom.modalLocation.textContent = 'Begum Bazaar, Hyderabad';
      dom.modalCommission.textContent = 'Workshop Collection';
      dom.modalEconomics.textContent = 'Historical Record';
      dom.modalPersonalities.textContent = 'Ramesh Singh Kalakar & Studio Artisans';
      dom.modalConcept.textContent = item.caption;
      dom.modalMaterial.textContent = 'Photographic record of tools, raw armatures, paint pots, and artisans.';
    }
  }

  function stepModal(dir) {
    if (!state.activeModalItem || state.activeModalItem.type !== 'work') return;

    let list = ARCHIVE_DATA.works.filter(w => w.sculptor_id === state.activeSculptorId);
    if (state.selectedYear !== 'all') {
      list = list.filter(w => w.year === state.selectedYear);
    }
    if (list.length === 0) return;

    const curIndex = list.findIndex(w => w.plate === state.activeModalItem.data.plate);
    if (curIndex === -1) return;

    const nextIndex = (curIndex + dir + list.length) % list.length;
    state.activeModalItem = { type: 'work', data: list[nextIndex] };
    updateModalContent();
  }

  // --- Interactive Map Popover Logic ---
  function showMapNodePopover(hubId) {
    const hub = HUBS_DATA[hubId];
    if (!hub || !dom.mapNodePopover) return;

    // Set active state on clicked map dot
    document.querySelectorAll('.map-dot-node').forEach(n => {
      n.classList.toggle('active', n.dataset.hub === hubId);
    });

    // Set active state on sidebar row
    document.querySelectorAll('.map-location-row').forEach(r => {
      r.classList.toggle('active', r.dataset.hub === hubId);
    });

    const works = ARCHIVE_DATA.works.filter(w => hub.plates.includes(w.plate));

    if (dom.popoverBadge) dom.popoverBadge.textContent = hub.kicker || 'Documented Hub';
    if (dom.popoverTitle) dom.popoverTitle.textContent = hub.name;
    if (dom.popoverDesc) dom.popoverDesc.textContent = hub.desc;

    // Populate thumbnails
    if (dom.popoverThumbsRow) {
      dom.popoverThumbsRow.innerHTML = '';
      works.forEach(w => {
        const thumb = document.createElement('div');
        thumb.className = 'popover-thumb-card';
        thumb.title = `Plate #${w.plate < 10 ? '0' + w.plate : w.plate}: ${w.title} (${w.year})`;
        thumb.onclick = (e) => {
          e.stopPropagation();
          openModalForWork(w);
        };

        thumb.innerHTML = `
          <img src="${w.image_url}" alt="Plate #${w.plate}" class="popover-thumb-img" loading="lazy">
          <div class="popover-thumb-info">
            <span class="popover-thumb-plate">#${w.plate < 10 ? '0' + w.plate : w.plate} (${w.year})</span>
            <span class="popover-thumb-name">${w.title}</span>
          </div>
        `;
        dom.popoverThumbsRow.appendChild(thumb);
      });
    }

    if (dom.popoverViewAllBtn) {
      dom.popoverViewAllBtn.textContent = `Open All Plates for this Hub (${works.length}) →`;
      dom.popoverViewAllBtn.onclick = () => {
        closeMapNodePopover();
        openLocationPlatesModal(hubId);
      };
    }

    dom.mapNodePopover.style.display = 'block';
  }

  function closeMapNodePopover() {
    if (dom.mapNodePopover) dom.mapNodePopover.style.display = 'none';
    document.querySelectorAll('.map-dot-node').forEach(n => n.classList.remove('active'));
    document.querySelectorAll('.map-location-row').forEach(r => r.classList.remove('active'));
  }

  // --- Location Plates Modal (Installation Hubs Viewer) ---
  function openLocationPlatesModal(hubId) {
    const hub = HUBS_DATA[hubId];
    if (!hub || !dom.locationPlatesModal) return;

    // Highlight map dot & row
    document.querySelectorAll('.map-dot-node').forEach(n => {
      n.classList.toggle('active', n.dataset.hub === hubId);
    });
    document.querySelectorAll('.map-location-row').forEach(r => {
      r.classList.toggle('active', r.dataset.hub === hubId);
    });

    const works = ARCHIVE_DATA.works.filter(w => hub.plates.includes(w.plate));

    if (dom.locModalKicker) dom.locModalKicker.textContent = hub.kicker || 'Documented Installation Hub';
    if (dom.locModalTitle) dom.locModalTitle.textContent = hub.name;
    if (dom.locModalDesc) dom.locModalDesc.textContent = `${hub.desc} (${works.length} Archival Photographic Plates Documented)`;

    if (dom.locModalPlatesGrid) {
      dom.locModalPlatesGrid.innerHTML = '';
      works.forEach(w => {
        const card = document.createElement('div');
        card.className = 'loc-plate-card';
        card.onclick = () => {
          closeLocationPlatesModal();
          openModalForWork(w);
        };

        card.innerHTML = `
          <div class="loc-plate-img-wrap">
            <img src="${w.image_url}" alt="${w.title}" class="loc-plate-img" loading="lazy">
          </div>
          <div class="loc-plate-content">
            <div class="loc-plate-meta-top">
              <span class="loc-plate-num">Plate #${w.plate < 10 ? '0' + w.plate : w.plate}</span>
              <span class="loc-plate-year">${w.year}</span>
            </div>
            <h3 class="loc-plate-title">${w.title}</h3>
            <div class="loc-plate-specs">
              <div><strong>Dim:</strong> ${w.dimensions}</div>
              <div><strong>Economics:</strong> Making ${w.making_cost} / Sale ${w.selling_cost}</div>
              <div><strong>Location:</strong> ${w.location}</div>
            </div>
            <span class="loc-plate-cta">View High-Res Archival Record →</span>
          </div>
        `;
        dom.locModalPlatesGrid.appendChild(card);
      });
    }

    if (dom.locModalGoTimeline) {
      dom.locModalGoTimeline.onclick = () => {
        closeLocationPlatesModal();
        navigateToSculptor('ramesh-singh');
        if (works.length > 0) {
          selectYear(works[0].year);
        }
      };
    }

    dom.locationPlatesModal.classList.add('active');
  }

  function closeLocationPlatesModal() {
    if (dom.locationPlatesModal) {
      dom.locationPlatesModal.classList.remove('active');
    }
  }

  // --- Peoples Page View ---
  function navigateToPeople() {
    state.currentView = 'people';
    state.activeSculptorId = null;

    if (dom.viewDirectory) dom.viewDirectory.classList.remove('active');
    if (dom.viewSculptor) dom.viewSculptor.classList.remove('active');
    if (dom.viewPeople) dom.viewPeople.classList.add('active');

    // Update Nav Link Active States
    if (dom.navSculptors) dom.navSculptors.classList.remove('active');
    if (dom.navMap) dom.navMap.classList.remove('active');
    if (dom.navPeople) dom.navPeople.classList.add('active');
    if (dom.navAbout) dom.navAbout.classList.remove('active');

    const expectedHash = '#people';
    if (window.location.hash !== expectedHash) {
      history.pushState(null, '', expectedHash);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  // ==========================================================================
  // STUDIO FIELDWORK MAP & GEOLOCATION INTERFACE
  // ==========================================================================
  let studioMap = null;
  let studioMarkers = [];
  let activeStudioId = null;
  let currentLightboxStudio = null;
  let currentLightboxIndex = 0;

  function initStudioMap() {
    const mapSection = document.getElementById('map');
    if (!mapSection || mapSection.style.display === 'none') return;
    const mapContainer = document.getElementById('studio-osm-map');
    if (!mapContainer) return;
    if (typeof L === 'undefined') {
      console.warn('Leaflet library not loaded.');
      return;
    }
    if (studioMap) {
      studioMap.invalidateSize();
      return;
    }

    // Centered around the Hyderabad idol artisanal hub (Dhoolpet / Mangalhat)
    studioMap = L.map('studio-osm-map', {
      center: [17.3745, 78.4590],
      zoom: 15,
      minZoom: 12,
      maxZoom: 18,
      scrollWheelZoom: true
    });

    // OpenStreetMap standard tile layer (styled via CSS warm theme filter)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors'
    }).addTo(studioMap);

    // Plot all 26 geolocated studios with visible coordinate labels on the map
    STUDIO_LOCATIONS.forEach((studio) => {
      const icon = L.divIcon({
        className: 'coord-pin-custom-icon',
        html: `
          <div class="coord-pin-wrapper" id="coord-pin-${studio.id}" data-studio-id="${studio.id}">
            <div class="coord-pin-dot"></div>
            <div class="coord-pin-label">${studio.lat.toFixed(4)}° N, ${studio.lon.toFixed(4)}° E</div>
          </div>
        `,
        iconSize: null
      });

      const marker = L.marker([studio.lat, studio.lon], { icon: icon }).addTo(studioMap);

      // Hover on dot: opens images & updates details
      marker.on('mouseover', () => {
        selectStudioLocation(studio.id);
      });

      // Click on dot (especially convenient for mobile/touch or focused browsing)
      marker.on('click', () => {
        selectStudioLocation(studio.id);
      });

      studioMarkers.push({ id: studio.id, marker: marker });
    });

    // Default selection: Studio #01
    if (STUDIO_LOCATIONS.length > 0) {
      selectStudioLocation(STUDIO_LOCATIONS[0].id);
    }
  }

  function selectStudioLocation(id) {
    const studio = STUDIO_LOCATIONS.find(s => s.id === id);
    if (!studio) return;

    activeStudioId = id;

    // Highlight active pin marker
    document.querySelectorAll('.coord-pin-wrapper').forEach(el => {
      if (parseInt(el.dataset.studioId, 10) === id) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });

    // Update Details in Right Panel
    const panelBadge = document.getElementById('panel-studio-badge');
    const panelTitle = document.getElementById('panel-studio-title');
    const panelCoord = document.getElementById('panel-coord');
    const panelDate = document.getElementById('panel-date');
    const panelLocation = document.getElementById('panel-location');
    const panelPhotoCount = document.getElementById('panel-photo-count');

    if (panelBadge) panelBadge.textContent = studio.studio_name;
    if (panelTitle) panelTitle.textContent = studio.studio_name;
    if (panelCoord) panelCoord.textContent = studio.coord_label;
    if (panelDate) panelDate.textContent = studio.date || '—';
    if (panelLocation) panelLocation.textContent = studio.location_display;
    if (panelPhotoCount) panelPhotoCount.textContent = `${studio.images.length} Photos`;

    // Render image gallery for this coordinate
    const gallery = document.getElementById('studio-image-gallery');
    if (gallery) {
      gallery.innerHTML = '';
      studio.images.forEach((imgFilename, index) => {
        const card = document.createElement('div');
        card.className = 'studio-thumb-card';
        card.title = `${studio.studio_name} — Image ${index + 1} of ${studio.images.length}`;

        const img = document.createElement('img');
        img.loading = 'lazy';
        img.src = `Studio Location Images/${encodeURIComponent(imgFilename)}`;
        img.alt = `${studio.studio_name} image ${index + 1}`;

        const badge = document.createElement('span');
        badge.className = 'thumb-badge';
        badge.textContent = `#${index + 1}`;

        card.appendChild(img);
        card.appendChild(badge);

        card.onclick = () => {
          openStudioLightbox(studio, index);
        };

        gallery.appendChild(card);
      });
    }
  }

  // --- Studio Image Lightbox Modal ---
  function openStudioLightbox(studio, index) {
    currentLightboxStudio = studio;
    currentLightboxIndex = index;
    updateStudioLightbox();
    const modal = document.getElementById('studio-lightbox-modal');
    if (modal) modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function updateStudioLightbox() {
    if (!currentLightboxStudio) return;
    const studio = currentLightboxStudio;
    const imgFilename = studio.images[currentLightboxIndex];

    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxBadge = document.getElementById('lightbox-studio-badge');
    const lightboxTitle = document.getElementById('lightbox-studio-title');
    const lightboxIndexEl = document.getElementById('lightbox-img-index');
    const lightboxCoord = document.getElementById('lightbox-coord');
    const lightboxDate = document.getElementById('lightbox-date');
    const lightboxLocation = document.getElementById('lightbox-location');
    const lightboxFilename = document.getElementById('lightbox-filename');

    if (lightboxImg) {
      lightboxImg.src = `Studio Location Images/${encodeURIComponent(imgFilename)}`;
      lightboxImg.alt = `${studio.studio_name} photo ${currentLightboxIndex + 1}`;
    }
    if (lightboxBadge) lightboxBadge.textContent = studio.studio_name;
    if (lightboxTitle) lightboxTitle.textContent = studio.studio_name;
    if (lightboxIndexEl) lightboxIndexEl.textContent = `Photo ${currentLightboxIndex + 1} of ${studio.images.length}`;
    if (lightboxCoord) lightboxCoord.textContent = studio.coord_label;
    if (lightboxDate) lightboxDate.textContent = studio.date || '—';
    if (lightboxLocation) lightboxLocation.textContent = studio.location_display;
    if (lightboxFilename) lightboxFilename.textContent = imgFilename;
  }

  function stepStudioLightbox(direction) {
    if (!currentLightboxStudio) return;
    const count = currentLightboxStudio.images.length;
    currentLightboxIndex = (currentLightboxIndex + direction + count) % count;
    updateStudioLightbox();
  }

  function closeStudioLightbox() {
    const modal = document.getElementById('studio-lightbox-modal');
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // --- Navigation & View Switching ---
  function navigateToSculptor(sculptorId) {
    state.activeSculptorId = sculptorId;
    state.currentView = 'sculptor';
    state.selectedYear = 'all';

    if (dom.viewDirectory) dom.viewDirectory.classList.remove('active');
    if (dom.viewPeople) dom.viewPeople.classList.remove('active');
    if (dom.viewSculptor) dom.viewSculptor.classList.add('active');

    // Clear active from header nav
    if (dom.navSculptors) dom.navSculptors.classList.remove('active');
    if (dom.navMap) dom.navMap.classList.remove('active');
    if (dom.navPeople) dom.navPeople.classList.remove('active');
    if (dom.navAbout) dom.navAbout.classList.remove('active');

    const expectedHash = `#sculptor/${sculptorId}`;
    if (window.location.hash !== expectedHash) {
      history.pushState(null, '', expectedHash);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });

    renderSculptorPage(sculptorId);
  }

  function navigateToDirectory(targetSectionId) {
    state.currentView = 'directory';
    state.activeSculptorId = null;

    if (dom.viewSculptor) dom.viewSculptor.classList.remove('active');
    if (dom.viewPeople) dom.viewPeople.classList.remove('active');
    if (dom.viewDirectory) dom.viewDirectory.classList.add('active');

    // Update Nav Link Active States
    if (dom.navSculptors) dom.navSculptors.classList.toggle('active', !targetSectionId);
    if (dom.navMap) dom.navMap.classList.toggle('active', targetSectionId === 'map');
    if (dom.navPeople) dom.navPeople.classList.remove('active');
    if (dom.navAbout) dom.navAbout.classList.toggle('active', targetSectionId === 'about');

    const expectedHash = targetSectionId ? `#${targetSectionId}` : '';
    if (window.location.hash !== expectedHash) {
      history.pushState(null, '', expectedHash || window.location.pathname);
    }

    renderDirectory();

    if (targetSectionId) {
      setTimeout(() => {
        const sec = document.getElementById(targetSectionId);
        if (sec) sec.scrollIntoView({ behavior: 'smooth' });
        if (targetSectionId === 'map' && studioMap) {
          studioMap.invalidateSize();
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function handleHashChange() {
    const hash = window.location.hash;
    if (hash.startsWith('#sculptor/')) {
      const id = hash.replace('#sculptor/', '');
      const sculptor = ARCHIVE_DATA.sculptors.find(s => s.id === id);
      if (sculptor && sculptor.status === 'active') {
        navigateToSculptor(id);
        return;
      }
    } else if (hash === '#people') {
      navigateToPeople();
      return;
    } else if (hash === '#map') {
      navigateToDirectory('map');
      return;
    } else if (hash === '#about') {
      navigateToDirectory('about');
      return;
    }
    navigateToDirectory();
  }

  // --- Setup Event Listeners ---
  function setupEvents() {
    if (dom.navSculptors) {
      dom.navSculptors.onclick = (e) => {
        e.preventDefault();
        navigateToDirectory();
      };
    }
    if (dom.navMap) {
      dom.navMap.onclick = (e) => {
        e.preventDefault();
        navigateToDirectory('map');
      };
    }
    if (dom.navPeople) {
      dom.navPeople.onclick = (e) => {
        e.preventDefault();
        navigateToPeople();
      };
    }
    if (dom.navAbout) {
      dom.navAbout.onclick = (e) => {
        e.preventDefault();
        navigateToDirectory('about');
      };
    }

    if (dom.backToDirectoryBtn) {
      dom.backToDirectoryBtn.onclick = () => navigateToDirectory();
    }
    if (dom.backFromPeopleBtn) {
      dom.backFromPeopleBtn.onclick = () => navigateToDirectory();
    }
    if (dom.peopleBrowseArtisansBtn) {
      dom.peopleBrowseArtisansBtn.onclick = (e) => {
        e.preventDefault();
        navigateToDirectory('sculptors');
      };
    }

    // Map Dot Nodes Clicks
    document.querySelectorAll('.map-dot-node').forEach(node => {
      node.addEventListener('click', (e) => {
        e.stopPropagation();
        showMapNodePopover(node.dataset.hub);
      });
      node.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          showMapNodePopover(node.dataset.hub);
        }
      });
    });

    // Map Locations Rows Clicks (Installation Hubs)
    document.querySelectorAll('.map-location-row').forEach(row => {
      row.addEventListener('click', (e) => {
        e.stopPropagation();
        openLocationPlatesModal(row.dataset.hub);
      });
      row.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLocationPlatesModal(row.dataset.hub);
        }
      });
    });

    // Popover Close
    if (dom.popoverCloseBtn) {
      dom.popoverCloseBtn.onclick = closeMapNodePopover;
    }

    // Location Modal Close
    if (dom.locModalCloseBtn) {
      dom.locModalCloseBtn.onclick = closeLocationPlatesModal;
    }

    if (dom.locationPlatesModal) {
      dom.locationPlatesModal.onclick = (e) => {
        if (e.target === dom.locationPlatesModal) closeLocationPlatesModal();
      };
    }

    // Archival Inspector Modal Close
    if (dom.modalCloseBtn) {
      dom.modalCloseBtn.onclick = closeModal;
    }

    if (dom.modalOverlay) {
      dom.modalOverlay.onclick = (e) => {
        if (e.target === dom.modalOverlay) closeModal();
      };
    }

    // Studio Lightbox Modal Events
    if (dom.lightboxCloseBtn) {
      dom.lightboxCloseBtn.onclick = closeStudioLightbox;
    }
    if (dom.studioLightboxModal) {
      dom.studioLightboxModal.onclick = (e) => {
        if (e.target === dom.studioLightboxModal) closeStudioLightbox();
      };
    }
    if (dom.lightboxPrevBtn) {
      dom.lightboxPrevBtn.onclick = () => stepStudioLightbox(-1);
    }
    if (dom.lightboxNextBtn) {
      dom.lightboxNextBtn.onclick = () => stepStudioLightbox(1);
    }

    if (dom.modalPrevBtn) dom.modalPrevBtn.onclick = () => stepModal(-1);
    if (dom.modalNextBtn) dom.modalNextBtn.onclick = () => stepModal(1);

    // Global keyboard listeners
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (dom.studioLightboxModal && dom.studioLightboxModal.classList.contains('active')) {
          closeStudioLightbox();
        } else if (dom.modalOverlay && dom.modalOverlay.classList.contains('active')) {
          closeModal();
        } else if (dom.locationPlatesModal && dom.locationPlatesModal.classList.contains('active')) {
          closeLocationPlatesModal();
        } else if (dom.mapNodePopover && dom.mapNodePopover.style.display !== 'none') {
          closeMapNodePopover();
        }
      } else if (dom.studioLightboxModal && dom.studioLightboxModal.classList.contains('active')) {
        if (e.key === 'ArrowLeft') stepStudioLightbox(-1);
        if (e.key === 'ArrowRight') stepStudioLightbox(1);
      } else if (dom.modalOverlay && dom.modalOverlay.classList.contains('active')) {
        if (e.key === 'ArrowLeft') stepModal(-1);
        if (e.key === 'ArrowRight') stepModal(1);
      }
    });

    // Clicking outside map popover closes it
    document.addEventListener('click', (e) => {
      if (dom.mapNodePopover && dom.mapNodePopover.style.display !== 'none') {
        if (!dom.mapNodePopover.contains(e.target) && !e.target.closest('.map-dot-node')) {
          closeMapNodePopover();
        }
      }
    });

    // Language buttons click
    dom.langBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        applyLanguage(btn.dataset.lang);
      });
    });

    window.addEventListener('hashchange', handleHashChange);
  }

  // --- Initializer ---
  function init() {
    cacheDOM();
    setupEvents();
    applyLanguage(state.lang);
    initStudioMap();
    handleHashChange();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
