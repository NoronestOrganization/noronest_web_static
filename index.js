/**
 * NoroNest Website JavaScript
 * Handles language toggle, mobile menu, scroll animations, and form submission
 */

// ===================================
// Language Translations
// ===================================

const translations = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_about: "About Us",
    nav_services: "Services",
    nav_team: "Team",
    nav_contact: "Contact",
    
    // Hero Section
    hero_badge: "AI-Powered Healthcare",
    hero_title: "Personalizing <span>Neuro-rehabilitation</span>",
    hero_subtitle: "Preventive and supportive digital solutions for neurodegenerative diseases.",
    keyword_1: "Cognitive Serious Games",
    keyword_2: "AI-Driven Solutions",
    keyword_3: "Digital Therapeutics",
    hero_cta_primary: "Explore Solutions",
    hero_cta_secondary: "Get in Touch",
    float_card_1: "Real-time Analytics",
    float_card_2: "Patient-Centered",
    
    // Summary Section
    summary_title: "Empowering Neuro Health",
    summary_subtitle: "Discover how NoroNest is revolutionizing neuro-rehabilitation through innovative technology and personalized care.",
    card_about_title: "About Us",
    card_about_desc: "Learn about our mission to transform neuro-rehabilitation through AI-driven personalized solutions.",
    card_products_title: "Our Solutions",
    card_products_desc: "Explore our suite of cognitive games, mobile applications, and clinical web panels.",
    card_contact_title: "Contact Us",
    card_contact_desc: "Ready to learn more? Get in touch with our team for partnerships and inquiries.",
    card_cta: "Learn More",
    
    // Features Section
    features_title: "Why Choose NoroNest?",
    features_subtitle: "Our comprehensive approach combines cutting-edge technology with clinical expertise.",
    feature_1_title: "AI-Powered Analysis",
    feature_1_desc: "Machine learning algorithms provide personalized rehabilitation pathways based on individual patient data.",
    feature_2_title: "Clinical Validation",
    feature_2_desc: "Evidence-based solutions developed in collaboration with leading neurologists and healthcare professionals.",
    feature_3_title: "Mobile Accessibility",
    feature_3_desc: "Seamless access to therapeutic games and progress tracking from any device, anywhere.",
    feature_4_title: "Patient-Centered",
    feature_4_desc: "Designed with the patient experience in mind, ensuring engagement and long-term adherence.",
    feature_5_title: "Real-time Monitoring",
    feature_5_desc: "Continuous tracking of patient progress with instant insights for healthcare providers.",
    feature_6_title: "Data Security",
    feature_6_desc: "HIPAA-compliant infrastructure ensuring the highest standards of patient data protection.",
    
    // CTA Section
    cta_title: "Ready to Transform Neuro-rehabilitation?",
    cta_subtitle: "Join us in our mission to improve the lives of patients with neurodegenerative diseases.",
    cta_button: "Schedule a Demo",
    
    // Footer
    footer_desc: "AI-driven neuro-rehabilitation solutions for a healthier tomorrow.",
    footer_company: "Company",
    footer_solutions: "Solutions",
    footer_legal: "Legal",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",
    footer_cookies: "Cookie Policy",
    footer_rights: "All rights reserved.",
    service_games: "Cognitive Games",
    service_mobile: "Mobile App",
    service_panel: "Web Panel",
    
    // Team Page
    team_page_title: "Our Team",
    team_page_subtitle: "Meet the passionate experts behind NoroNest's innovative neuro-rehabilitation solutions.",
    team_backend: "Backend Team",
    team_game: "Game Development Team",
    team_clinical: "Clinical Team",
    team_ml: "Machine Learning Team",
    team_coming_soon: "Coming Soon",
    team_view_profile: "View Profile →",
    role_backend_dev: "Backend Developer",
    role_game_dev: "Game Developer",
    role_ux_designer: "UI/UX Designer",
    role_clinical_advisor: "Clinical Advisor",
    role_neurologist: "Neurologist",
    role_ml_engineer: "ML Engineer",
    role_data_scientist: "Data Scientist",
    team_cta_title: "Join Our Team",
    team_cta_subtitle: "We're always looking for talented individuals passionate about making a difference in healthcare.",
    team_cta_button: "Get in Touch",
    team_category_management: "Management",
    team_category_software: "Software Development Team",
    team_category_clinical: "Clinical Team",
    team_category_ml: "Machine Learning Team",
    software_team_category_title: "Yazılım Ekibi",
    management_team_category_title: "Yönetim",
    clinical_team_category_title: "Klinil Ekip",
    machine_learning_team_category_title: "Makine Öğrenmesi Ekibi",


    // Profile Page
    profile_skills: "Skills & Technologies",
    profile_cta_title: "Want to Work Together?",
    profile_cta_subtitle: "Get in touch with our team to learn more about collaboration opportunities.",
    
    // Services Page
    services_page_title: "Our Solutions",
    services_page_subtitle: "Comprehensive digital solutions designed to support neuro-rehabilitation at every stage.",
    service_games_title: "Preventive & Supportive Games",
    service_games_desc: "Engaging cognitive serious games designed to exercise and strengthen neural pathways. Our scientifically-validated games target memory, attention, executive function, and other cognitive domains crucial for brain health.",
    service_mobile_title: "Mobile Application",
    service_mobile_desc: "Access your personalized neuro-rehabilitation program anytime, anywhere. Our mobile application provides seamless access to cognitive exercises, progress tracking, and communication with your healthcare team.",
    service_panel_title: "Clinical Web Panel",
    service_panel_desc: "A comprehensive dashboard for healthcare professionals to monitor patient progress, customize treatment plans, and access detailed analytics. Our web panel provides actionable insights powered by machine learning algorithms.",
    service_explore: "Explore Games →",
    service_coming_soon: "Coming Soon",
    feature_memory: "Memory Training",
    feature_attention: "Attention Exercises",
    feature_executive: "Executive Function",
    feature_adaptive: "Adaptive Difficulty",
    feature_ios: "iOS & Android",
    feature_offline: "Offline Mode",
    feature_notifications: "Smart Reminders",
    feature_sync: "Cloud Sync",
    feature_analytics: "Real-time Analytics",
    feature_reports: "Custom Reports",
    feature_patients: "Patient Management",
    feature_ai: "AI Insights",
    services_features_title: "Platform Features",
    services_features_subtitle: "Built with cutting-edge technology to deliver the best neuro-rehabilitation experience.",
    platform_ai: "AI-Powered Personalization",
    platform_ai_desc: "Machine learning algorithms adapt exercises to each patient's unique cognitive profile.",
    platform_tracking: "Progress Tracking",
    platform_tracking_desc: "Comprehensive metrics and visualizations to monitor cognitive improvements over time.",
    platform_security: "Enterprise Security",
    platform_security_desc: "HIPAA-compliant infrastructure with end-to-end encryption for patient data protection.",
    platform_cloud: "Cloud-Based Platform",
    platform_cloud_desc: "Access from anywhere with automatic updates and seamless device synchronization.",
    platform_collaboration: "Clinical Collaboration",
    platform_collaboration_desc: "Tools for healthcare teams to coordinate care and share patient insights securely.",
    platform_reports: "Detailed Reports",
    platform_reports_desc: "Generate comprehensive reports for clinical documentation and insurance purposes.",
    services_cta_title: "Ready to Get Started?",
    services_cta_subtitle: "Contact us to learn how NoroNest can support your neuro-rehabilitation needs.",
    
    // Contact Page
    contact_page_title: "Get in Touch",
    contact_page_subtitle: "We'd love to hear from you. Reach out for partnerships, demos, or general inquiries.",
    contact_info_title: "Let's Connect",
    contact_info_desc: "Whether you're a healthcare provider, investor, or researcher, we're here to answer your questions and explore collaboration opportunities.",
    contact_address: "Address",
    contact_email: "Email",
    contact_phone: "Phone",
    contact_hours: "Business Hours",
    contact_hours_value: "Monday - Friday: 9:00 - 18:00",
    form_firstname: "First Name",
    form_lastname: "Last Name",
    form_email: "Email Address",
    form_company: "Company / Organization",
    form_subject: "Subject",
    form_message: "Message",
    form_submit: "Send Message",
    
    // About Page
    about_page_title: "About NoroNest",
    about_page_subtitle: "Pioneering the future of neuro-rehabilitation through innovation and compassion.",
    about_mission_title: "Our Mission",
    about_mission_p1: "At NoroNest, we believe that everyone deserves access to personalized, effective neuro-rehabilitation care. Our mission is to transform the way neurodegenerative diseases are managed through innovative AI-driven solutions.",
    about_mission_p2: "We combine cutting-edge technology with clinical expertise to create engaging, scientifically-validated tools that support cognitive health and empower both patients and healthcare providers.",
    stat_sessions: "Sessions Completed",
    stat_partners: "Healthcare Partners",
    stat_experts: "Expert Team Members",
    about_vision_title: "Our Vision",
    about_vision_subtitle: "We envision a world where cognitive health is accessible, measurable, and improvable for everyone.",
    value_innovation: "Innovation First",
    value_innovation_desc: "Continuously pushing the boundaries of what's possible in digital neuro-rehabilitation.",
    value_patient: "Patient-Centered",
    value_patient_desc: "Every decision we make is guided by the needs and well-being of patients and their families.",
    value_evidence: "Evidence-Based",
    value_evidence_desc: "Our solutions are grounded in rigorous scientific research and clinical validation.",
    value_collaboration: "Collaboration",
    value_collaboration_desc: "Working closely with healthcare professionals, researchers, and patients to improve outcomes.",
    value_accessibility: "Accessibility",
    value_accessibility_desc: "Making advanced neuro-rehabilitation accessible to everyone, regardless of location.",
    value_trust: "Trust & Privacy",
    value_trust_desc: "Maintaining the highest standards of data security and patient privacy in everything we do.",
    about_story_title: "Our Story",
    about_story_p1: "NoroNest was founded with a simple yet powerful vision: to make cognitive rehabilitation more accessible, engaging, and effective for patients with neurodegenerative diseases.",
    about_story_p2: "Our team of neurologists, AI researchers, game developers, and healthcare professionals came together to address a critical gap in the healthcare system—the lack of personalized, technology-driven rehabilitation tools.",
    about_story_p3: "Today, we're proud to be at the forefront of digital neuro-rehabilitation, helping thousands of patients improve their cognitive health through our innovative platform.",
    about_meet_team: "Meet Our Team",
    about_cta_title: "Join Us in Our Mission",
    about_cta_subtitle: "Whether you're a healthcare provider, investor, or patient, we'd love to connect with you."
  },
  
  tr: {
    // Navigation
    nav_home: "Ana Sayfa",
    nav_about: "Hakkımızda",
    nav_services: "Hizmetler",
    nav_team: "Ekip",
    nav_contact: "İletişim",
    
    // Hero Section
    hero_badge: "Yapay Zeka Destekli Sağlık",
    hero_title: "<span>Nöro-rehabilitasyonu</span> Kişiselleştiriyoruz",
    hero_subtitle: "Nörodejeneratif hastalıklar için önleyici ve destekleyici dijital çözümler.",
    keyword_1: "Bilişsel Ciddi Oyunlar",
    keyword_2: "Yapay Zeka Çözümleri",
    keyword_3: "Dijital Terapötikler",
    hero_cta_primary: "Çözümleri Keşfet",
    hero_cta_secondary: "İletişime Geç",
    float_card_1: "Gerçek Zamanlı Analiz",
    float_card_2: "Hasta Odaklı",
    
    // Summary Section
    summary_title: "Nöro Sağlığı Güçlendiriyoruz",
    summary_subtitle: "NoroNest'in yenilikçi teknoloji ve kişiselleştirilmiş bakım yoluyla nöro-rehabilitasyonu nasıl dönüştürdüğünü keşfedin.",
    card_about_title: "Hakkımızda",
    card_about_desc: "Yapay zeka destekli kişiselleştirilmiş çözümlerle nöro-rehabilitasyonu dönüştürme misyonumuzu öğrenin.",
    card_products_title: "Çözümlerimiz",
    card_products_desc: "Bilişsel oyunlar, mobil uygulamalar ve klinik web panellerimizi keşfedin.",
    card_contact_title: "İletişim",
    card_contact_desc: "Daha fazla bilgi almak ister misiniz? Ortaklık ve sorularınız için ekibimizle iletişime geçin.",
    card_cta: "Daha Fazla",
    
    // Features Section
    features_title: "Neden NoroNest?",
    features_subtitle: "Kapsamlı yaklaşımımız, son teknoloji ile klinik uzmanlığı bir araya getirir.",
    feature_1_title: "Yapay Zeka Analizi",
    feature_1_desc: "Makine öğrenimi algoritmaları, bireysel hasta verilerine dayalı kişiselleştirilmiş rehabilitasyon yolları sağlar.",
    feature_2_title: "Klinik Doğrulama",
    feature_2_desc: "Önde gelen nörologlar ve sağlık uzmanlarıyla işbirliği içinde geliştirilen kanıta dayalı çözümler.",
    feature_3_title: "Mobil Erişim",
    feature_3_desc: "Terapötik oyunlara ve ilerleme takibine her yerden, her cihazdan kesintisiz erişim.",
    feature_4_title: "Hasta Odaklı",
    feature_4_desc: "Hasta deneyimi göz önünde bulundurularak tasarlanmış, katılımı ve uzun vadeli bağlılığı sağlar.",
    feature_5_title: "Gerçek Zamanlı İzleme",
    feature_5_desc: "Sağlık hizmeti sağlayıcıları için anlık içgörülerle hasta ilerlemesinin sürekli takibi.",
    feature_6_title: "Veri Güvenliği",
    feature_6_desc: "Hasta veri korumasının en yüksek standartlarını sağlayan HIPAA uyumlu altyapı.",
    
    // CTA Section
    cta_title: "Nöro-rehabilitasyonu Dönüştürmeye Hazır mısınız?",
    cta_subtitle: "Nörodejeneratif hastalığı olan hastaların yaşamlarını iyileştirme misyonumuza katılın.",
    cta_button: "Demo Talep Et",
    
    // Footer
    footer_desc: "Daha sağlıklı bir yarın için yapay zeka destekli nöro-rehabilitasyon çözümleri.",
    footer_company: "Şirket",
    footer_solutions: "Çözümler",
    footer_legal: "Yasal",
    footer_privacy: "Gizlilik Politikası",
    footer_terms: "Kullanım Şartları",
    footer_cookies: "Çerez Politikası",
    footer_rights: "Tüm hakları saklıdır.",
    service_games: "Bilişsel Oyunlar",
    service_mobile: "Mobil Uygulama",
    service_panel: "Web Paneli",
    
    // Team Page
    team_page_title: "Ekibimiz",
    team_page_subtitle: "NoroNest'in yenilikçi nöro-rehabilitasyon çözümlerinin arkasındaki tutkulu uzmanlarla tanışın.",
    team_backend: "Backend Ekibi",
    team_game: "Oyun Geliştirme Ekibi",
    team_clinical: "Klinik Ekip",
    team_ml: "Makine Öğrenimi Ekibi",
    team_coming_soon: "Yakında",
    team_view_profile: "Profili Görüntüle →",
    role_backend_dev: "Backend Geliştirici",
    role_game_dev: "Oyun Geliştirici",
    role_ux_designer: "UI/UX Tasarımcı",
    role_clinical_advisor: "Klinik Danışman",
    role_neurologist: "Nörolog",
    role_ml_engineer: "ML Mühendisi",
    role_data_scientist: "Veri Bilimci",
    team_cta_title: "Ekibimize Katılın",
    team_cta_subtitle: "Sağlık alanında fark yaratmaya tutkulu yetenekli bireyler arıyoruz.",
    team_cta_button: "İletişime Geç",
    team_category_management: "Yönetim",
    team_category_software: "Yazılım Geliştirme Ekibi",
    team_category_clinical: "Klinik Ekip",
    team_category_ml: "Makine Öğrenmesi Ekibi",
    software_team_category_title: "Yazılım Ekibi",
    management_team_category_title: "Yönetim",
    clinical_team_category_title: "Klinil Ekip",
    machine_learning_team_category_title: "Makine Öğrenmesi Ekibi",

    // Profile Page
    profile_skills: "Yetenekler ve Teknolojiler",
    profile_cta_title: "Birlikte Çalışmak İster misiniz?",
    profile_cta_subtitle: "İşbirliği fırsatları hakkında daha fazla bilgi edinmek için ekibimizle iletişime geçin.",
    
    // Services Page
    services_page_title: "Çözümlerimiz",
    services_page_subtitle: "Nöro-rehabilitasyonun her aşamasını desteklemek için tasarlanmış kapsamlı dijital çözümler.",
    service_games_title: "Önleyici ve Destekleyici Oyunlar",
    service_games_desc: "Sinir yollarını çalıştırmak ve güçlendirmek için tasarlanmış ilgi çekici bilişsel ciddi oyunlar. Bilimsel olarak doğrulanmış oyunlarımız, beyin sağlığı için kritik olan bellek, dikkat, yönetici işlev ve diğer bilişsel alanları hedefler.",
    service_mobile_title: "Mobil Uygulama",
    service_mobile_desc: "Kişiselleştirilmiş nöro-rehabilitasyon programınıza her zaman, her yerden erişin. Mobil uygulamamız, bilişsel egzersizlere, ilerleme takibine ve sağlık ekibinizle iletişime kesintisiz erişim sağlar.",
    service_panel_title: "Klinik Web Paneli",
    service_panel_desc: "Sağlık profesyonellerinin hasta ilerlemesini izlemesi, tedavi planlarını özelleştirmesi ve detaylı analizlere erişmesi için kapsamlı bir kontrol paneli. Web panelimiz, makine öğrenimi algoritmalarıyla desteklenen eyleme geçirilebilir içgörüler sağlar.",
    service_explore: "Oyunları Keşfet →",
    service_coming_soon: "Yakında",
    feature_memory: "Bellek Eğitimi",
    feature_attention: "Dikkat Egzersizleri",
    feature_executive: "Yönetici İşlev",
    feature_adaptive: "Uyarlanabilir Zorluk",
    feature_ios: "iOS ve Android",
    feature_offline: "Çevrimdışı Mod",
    feature_notifications: "Akıllı Hatırlatıcılar",
    feature_sync: "Bulut Senkronizasyonu",
    feature_analytics: "Gerçek Zamanlı Analiz",
    feature_reports: "Özel Raporlar",
    feature_patients: "Hasta Yönetimi",
    feature_ai: "Yapay Zeka İçgörüleri",
    services_features_title: "Platform Özellikleri",
    services_features_subtitle: "En iyi nöro-rehabilitasyon deneyimini sunmak için son teknoloji ile inşa edildi.",
    platform_ai: "Yapay Zeka Kişiselleştirme",
    platform_ai_desc: "Makine öğrenimi algoritmaları, egzersizleri her hastanın benzersiz bilişsel profiline uyarlar.",
    platform_tracking: "İlerleme Takibi",
    platform_tracking_desc: "Zaman içindeki bilişsel gelişmeleri izlemek için kapsamlı metrikler ve görselleştirmeler.",
    platform_security: "Kurumsal Güvenlik",
    platform_security_desc: "Hasta veri koruması için uçtan uca şifreleme ile HIPAA uyumlu altyapı.",
    platform_cloud: "Bulut Tabanlı Platform",
    platform_cloud_desc: "Otomatik güncellemeler ve kesintisiz cihaz senkronizasyonu ile her yerden erişim.",
    platform_collaboration: "Klinik İşbirliği",
    platform_collaboration_desc: "Sağlık ekiplerinin bakımı koordine etmesi ve hasta içgörülerini güvenli bir şekilde paylaşması için araçlar.",
    platform_reports: "Detaylı Raporlar",
    platform_reports_desc: "Klinik dokümantasyon ve sigorta amaçlı kapsamlı raporlar oluşturun.",
    services_cta_title: "Başlamaya Hazır mısınız?",
    services_cta_subtitle: "NoroNest'in nöro-rehabilitasyon ihtiyaçlarınızı nasıl destekleyebileceğini öğrenmek için bizimle iletişime geçin.",
    
    // Contact Page
    contact_page_title: "İletişime Geçin",
    contact_page_subtitle: "Sizden haber almak isteriz. Ortaklıklar, demolar veya genel sorular için bize ulaşın.",
    contact_info_title: "Bağlantı Kuralım",
    contact_info_desc: "İster sağlık hizmeti sağlayıcısı, ister yatırımcı veya araştırmacı olun, sorularınızı yanıtlamak ve işbirliği fırsatlarını keşfetmek için buradayız.",
    contact_address: "Adres",
    contact_email: "E-posta",
    contact_phone: "Telefon",
    contact_hours: "Çalışma Saatleri",
    contact_hours_value: "Pazartesi - Cuma: 9:00 - 18:00",
    form_firstname: "Ad",
    form_lastname: "Soyad",
    form_email: "E-posta Adresi",
    form_company: "Şirket / Kuruluş",
    form_subject: "Konu",
    form_message: "Mesaj",
    form_submit: "Mesaj Gönder",
    
    // About Page
    about_page_title: "NoroNest Hakkında",
    about_page_subtitle: "İnovasyon ve şefkat yoluyla nöro-rehabilitasyonun geleceğine öncülük ediyoruz.",
    about_mission_title: "Misyonumuz",
    about_mission_p1: "NoroNest olarak, herkesin kişiselleştirilmiş, etkili nöro-rehabilitasyon bakımına erişimi hak ettiğine inanıyoruz. Misyonumuz, yenilikçi yapay zeka destekli çözümlerle nörodejeneratif hastalıkların yönetim biçimini dönüştürmektir.",
    about_mission_p2: "Son teknolojiyi klinik uzmanlıkla birleştirerek, bilişsel sağlığı destekleyen ve hem hastaları hem de sağlık hizmeti sağlayıcılarını güçlendiren ilgi çekici, bilimsel olarak doğrulanmış araçlar oluşturuyoruz.",
    stat_sessions: "Tamamlanan Seans",
    stat_partners: "Sağlık Ortağı",
    stat_experts: "Uzman Ekip Üyesi",
    about_vision_title: "Vizyonumuz",
    about_vision_subtitle: "Bilişsel sağlığın herkes için erişilebilir, ölçülebilir ve geliştirilebilir olduğu bir dünya hayal ediyoruz.",
    value_innovation: "Önce İnovasyon",
    value_innovation_desc: "Dijital nöro-rehabilitasyonda mümkün olanın sınırlarını sürekli zorlamak.",
    value_patient: "Hasta Odaklı",
    value_patient_desc: "Aldığımız her karar, hastaların ve ailelerinin ihtiyaçları ve refahı tarafından yönlendirilir.",
    value_evidence: "Kanıta Dayalı",
    value_evidence_desc: "Çözümlerimiz titiz bilimsel araştırma ve klinik doğrulamaya dayanmaktadır.",
    value_collaboration: "İşbirliği",
    value_collaboration_desc: "Sonuçları iyileştirmek için sağlık profesyonelleri, araştırmacılar ve hastalarla yakın çalışma.",
    value_accessibility: "Erişilebilirlik",
    value_accessibility_desc: "Konumdan bağımsız olarak gelişmiş nöro-rehabilitasyonu herkes için erişilebilir kılmak.",
    value_trust: "Güven ve Gizlilik",
    value_trust_desc: "Yaptığımız her şeyde veri güvenliği ve hasta gizliliğinin en yüksek standartlarını korumak.",
    about_story_title: "Hikayemiz",
    about_story_p1: "NoroNest, basit ama güçlü bir vizyonla kuruldu: nörodejeneratif hastalığı olan hastalar için bilişsel rehabilitasyonu daha erişilebilir, ilgi çekici ve etkili hale getirmek.",
    about_story_p2: "Nörologlar, yapay zeka araştırmacıları, oyun geliştiricileri ve sağlık profesyonellerinden oluşan ekibimiz, sağlık sistemindeki kritik bir boşluğu—kişiselleştirilmiş, teknoloji odaklı rehabilitasyon araçlarının eksikliğini—gidermek için bir araya geldi.",
    about_story_p3: "Bugün, dijital nöro-rehabilitasyonun ön saflarında olmaktan ve yenilikçi platformumuz aracılığıyla binlerce hastanın bilişsel sağlığını iyileştirmesine yardımcı olmaktan gurur duyuyoruz.",
    about_meet_team: "Ekibimizle Tanışın",
    about_cta_title: "Misyonumuza Katılın",
    about_cta_subtitle: "İster sağlık hizmeti sağlayıcısı, ister yatırımcı veya hasta olun, sizinle bağlantı kurmak isteriz."
  }
};

// ===================================
// Language Toggle Functionality
// ===================================

let currentLang = localStorage.getItem('language') || 'en';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('language', lang);
  
  // Update HTML lang attribute
  document.documentElement.lang = lang;
  
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      // Check if the translation contains HTML (like <span>)
      if (translations[lang][key].includes('<')) {
        element.innerHTML = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });
  
  // Update language toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
  // Set initial language
  setLanguage(currentLang);
  
  // Add event listeners to language toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.getAttribute('data-lang'));
    });
  });
});

// ===================================
// Mobile Menu Toggle
// ===================================

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }
});

// ===================================
// Scroll Reveal Animations
// ===================================

function reveal() {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  const windowHeight = window.innerHeight;
  const revealPoint = 150;
  
  reveals.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    
    if (elementTop < windowHeight - revealPoint) {
      element.classList.add('active');
    }
  });
}

// Run reveal on scroll and load
window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// ===================================
// Navbar Scroll Effect
// ===================================

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 30px rgba(126, 167, 228, 0.15)';
      } else {
        navbar.style.boxShadow = '0 2px 20px rgba(126, 167, 228, 0.1)';
      }
    });
  }
});

// ===================================
// Smooth Scroll for Anchor Links
// ===================================

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});

// ===================================
// Contact Form Handling
// ===================================

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(this);
      const data = Object.fromEntries(formData.entries());
      
      // Here you would typically send the data to a server
      console.log('Form submitted:', data);
      
      // Show success message (you can customize this)
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = currentLang === 'tr' ? 'Gönderildi!' : 'Sent!';
      submitBtn.disabled = true;
      
      // Reset form
      setTimeout(() => {
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 3000);
    });
  }
});

// ===================================
// Active Navigation Link
// ===================================

document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname;
  
  document.querySelectorAll('.nav-link').forEach(link => {
    const linkPath = new URL(link.href, window.location.origin).pathname;
    
    // Remove existing active class
    link.classList.remove('active');
    
    // Check if this link matches the current path
    if (currentPath === linkPath || 
        (currentPath.endsWith('/') && linkPath === currentPath + 'index.html') ||
        (linkPath.endsWith('/') && currentPath === linkPath + 'index.html')) {
      link.classList.add('active');
    }
  });
});