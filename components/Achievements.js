import { FaLongArrowAltDown } from "react-icons/fa";
import { useRouter } from "next/router";

const achievementsContent = {
  en: {
    title: "ACHIEVEMENTS & HACKATHONS",
    items: [
      {
        role: "Datathon Participant",
        org: "IE Sustainability Datathon (EDP Challenge)",
        background: "#fff",
        period: "10/2024",
        details: [
          "Selected to participate in the EDP Challenge, a datathon organized by IE University in collaboration with EDP (Energias de Portugal), focused on advancing sustainable energy solutions.",
          "Worked on developing forecasting models to predict System Price (GBP/MWh) and Net Imbalance Volume (NIV, MWh) in the UK electricity market, with 48 half-hourly predictions per day.",
          "Leveraged and combined multiple large-scale datasets (2018–2024), including:",
          "• Price data (Day Ahead, Intraday, Balancing Mechanism).",
          "• Generation data (Solar, Wind, Nuclear, Fossil Gas, Biomass, Hydro, etc.).",
          "• Demand & load data (Loss of Load Probability, Demand Outturn, Actual Total Load).",
          "• Balancing data (System Price, NIV, Bid/Offer acceptances, BSAD volumes).",
          "Designed an end-to-end pipeline covering data cleaning, exploratory data analysis, feature engineering, and predictive modeling, with results structured for submission in CSV format.",
          "Applied time series forecasting techniques (regression-based models, statistical baselines, and machine learning approaches) to minimize Root Mean Square Error (RMSE), the key evaluation metric.",
          "Conducted feature engineering (lag variables, moving averages, cyclical encoding for time features) and explored correlations across supply, demand, and market prices.",
          "Balanced technical and business deliverables:",
          "Technical → submitted reproducible code, predictions, and RMSE evaluations.",
          "Business → prepared an executive summary and presentation highlighting the market, environmental, and economic impact of Battery Energy Storage Systems (BESS) in renewable energy arbitrage.",
          "Gained hands-on experience in energy market modeling, sustainability-driven AI, and decision-making under uncertainty, with an emphasis on bridging data science insights and real-world business strategies."
        ],
        btn: "Open Scoring Model",
        background: "#9870ab",
        btnLink: "/Datathon/Datathon-scoring-model.html",
        btnType: "file"
      },
      {
        role: "Hackathon Participant",
        org: "IE University - Madrid, Spain",
        period: "10/2024",
        details: [
          "Participated in a hackathon focused on extracting structured data from PDF documents, such as term sheets and investment conditions.",
          "Utilized Python to build a solution that extracted essential fields, including Name, ISIN, Issuer, Currency (Ccy), Underlyings, Strike, Issue Date, Maturity, Cap, Barrier, etc.",
          "Implemented a PDF loader or OCR solution, exploring various models like Unstructured or custom-built options to extract data effectively.",
          "Evaluated the project based on extracted metrics, accuracy rate, and efficiency of the runtime (few seconds per document).",
          "Delivered the final project as a structured Python folder with CSV output files containing extracted data fields.",
          "Followed key requirements such as handling missing or differently named fields, ensuring runtime efficiency, and leveraging external datasets available to the company.",
          "Explored alternatives to Large Language Models (LLMs) and OpenAI for data extraction, focusing on accuracy and compliance with hackathon rules."
        ],
        btn: "View on GitHub",
        btnLink: "https://github.com/ayayasminebelloum/ie-hackathon-2023",
        btnType: "link"
      }
    ],
  },
  fr: {
    title: "RÉALISATIONS & HACKATHONS",
    items: [
      {
        role: "Participant Datathon",
        org: "IE Sustainability Datathon (Défi EDP)",
        period: "10/2024",
        details: [
          "Sélectionnée pour participer au Défi EDP, un datathon organisé par IE University en collaboration avec EDP (Energias de Portugal), axé sur les solutions énergétiques durables.",
          "Développement de modèles de prévision pour le prix du système (GBP/MWh) et le volume net de déséquilibre (NIV, MWh) sur le marché britannique de l'électricité, avec 48 prédictions demi-horaires par jour.",
          "Utilisation et combinaison de grands ensembles de données (2018–2024), notamment :",
          "• Données de prix (Day Ahead, Intraday, Balancing Mechanism).",
          "• Données de production (Solaire, Éolien, Nucléaire, Gaz fossile, Biomasse, Hydro, etc.).",
          "• Données de demande & charge (Probabilité de perte de charge, Demande réelle, Charge totale réelle).",
          "• Données d'équilibrage (Prix du système, NIV, acceptations d'offres, volumes BSAD).",
          "Conception d'un pipeline complet : nettoyage des données, analyse exploratoire, ingénierie des caractéristiques, modélisation prédictive, résultats soumis au format CSV.",
          "Application de techniques de prévision de séries temporelles (modèles de régression, bases statistiques, approches ML) pour minimiser la RMSE.",
          "Ingénierie des caractéristiques (variables de retard, moyennes mobiles, encodage cyclique du temps) et exploration des corrélations entre offre, demande et prix.",
          "Livrables techniques et business :",
          "Technique → code reproductible, prédictions, évaluations RMSE.",
          "Business → résumé exécutif et présentation sur l'impact des systèmes de stockage d'énergie par batterie (BESS) dans l'arbitrage des énergies renouvelables.",
          "Expérience pratique en modélisation de marché énergétique, IA durable et prise de décision sous incertitude, reliant science des données et stratégies business."
        ],
        btn: "Ouvrir le modèle de scoring",
        btnLink: "/Datathon/Datathon-scoring-model.html",
        btnType: "file"
      },
      {
        role: "Participant Hackathon",
        org: "IE University - Madrid, Espagne",
        period: "",
        details: [
          "Participation à un hackathon sur l'extraction de données structurées à partir de PDF (term sheets, conditions d'investissement).",
          "Utilisation de Python pour extraire des champs essentiels : Nom, ISIN, Émetteur, Devise, Sous-jacents, Strike, Date d'émission, Maturité, Cap, Barrière, etc.",
          "Implémentation d'un chargeur PDF/OCR, exploration de modèles variés pour une extraction efficace.",
          "Évaluation du projet selon les métriques extraites, taux de précision et efficacité du runtime.",
          "Livraison du projet sous forme de dossier Python structuré avec fichiers CSV.",
          "Respect des exigences : gestion des champs manquants ou renommés, efficacité, utilisation de datasets externes.",
          "Exploration d'alternatives aux LLMs/OpenAI pour l'extraction, en privilégiant la précision et la conformité."
        ],
        btn: "Voir sur GitHub",
        btnLink: "https://github.com/ayayasminebelloum/ie-hackathon-2023",
        btnType: "link"
      }
    ],
    explore: "Explorez le code du projet ci-dessous"
  },
  es: {
    title: "LOGROS & HACKATHONS",
    items: [
      {
        role: "Participante Datathon",
        org: "IE Sustainability Datathon (Desafío EDP)",
        period: "10/2024",
        details: [
          "Seleccionada para el Desafío EDP, datathon organizado por IE University y EDP, centrado en soluciones energéticas sostenibles.",
          "Desarrollo de modelos de predicción para System Price (GBP/MWh) y Net Imbalance Volume (NIV, MWh) en el mercado eléctrico del Reino Unido, con 48 predicciones diarias.",
          "Uso y combinación de grandes conjuntos de datos (2018–2024):",
          "• Datos de precios (Day Ahead, Intraday, Balancing Mechanism).",
          "• Datos de generación (Solar, Eólica, Nuclear, Gas fósil, Biomasa, Hidro, etc.).",
          "• Datos de demanda y carga (Loss of Load Probability, Demand Outturn, Actual Total Load).",
          "• Datos de balance (System Price, NIV, aceptaciones de ofertas, volúmenes BSAD).",
          "Pipeline completo: limpieza, análisis exploratorio, ingeniería de características, modelado predictivo, resultados en CSV.",
          "Técnicas de predicción de series temporales (regresión, estadísticos, ML) para minimizar RMSE.",
          "Ingeniería de características (variables de retraso, medias móviles, codificación cíclica) y exploración de correlaciones.",
          "Entregables técnicos y de negocio:",
          "Técnico → código reproducible, predicciones, evaluaciones RMSE.",
          "Negocio → resumen ejecutivo y presentación sobre el impacto de BESS en el arbitraje de energías renovables.",
          "Experiencia práctica en modelado de mercados energéticos, IA sostenible y toma de decisiones bajo incertidumbre, conectando ciencia de datos y estrategia empresarial."
        ],
        btn: "Abrir modelo de scoring",
        btnLink: "/Datathon/Datathon-scoring-model.html",
        btnType: "file"
      },
      {
        role: "Participante Hackathon",
        org: "IE University - Madrid, España",
        period: "",
        details: [
          "Participación en hackathon sobre extracción de datos estructurados de PDFs (term sheets, condiciones de inversión).",
          "Uso de Python para extraer campos clave: Nombre, ISIN, Emisor, Moneda, Subyacentes, Strike, Fecha de emisión, Vencimiento, Cap, Barrera, etc.",
          "Implementación de cargador PDF/OCR, exploración de modelos para extracción eficiente.",
          "Evaluación por métricas extraídas, precisión y eficiencia.",
          "Entrega como carpeta Python estructurada con archivos CSV.",
          "Cumplimiento de requisitos: gestión de campos faltantes/renombrados, eficiencia, uso de datasets externos.",
          "Exploración de alternativas a LLMs/OpenAI, priorizando precisión y cumplimiento."
        ],
        btn: "Ver en GitHub",
        btnLink: "https://github.com/ayayasminebelloum/ie-hackathon-2023",
        btnType: "link"
      }
    ],
    explore: "Explora el código del proyecto abajo"
  },
  ar: {
    title: "الإنجازات والهاكاثونات",
    items: [
      {
        role: "مشارك في الداتاثون",
        org: "IE Sustainability Datathon (تحدي EDP)",
        period: "10/2024",
        details: [
          "تم اختياري للمشاركة في تحدي EDP، وهو داتاثون نظمته جامعة IE بالتعاون مع EDP (طاقة البرتغال)، يركز على حلول الطاقة المستدامة.",
          "عملت على تطوير نماذج توقعات لسعر النظام (GBP/MWh) وحجم عدم التوازن الصافي (NIV, MWh) في سوق الكهرباء البريطاني، مع 48 توقع نصف ساعة يومياً.",
          "استخدمت ودمجت مجموعات بيانات ضخمة (2018–2024) تشمل:",
          "• بيانات الأسعار (اليوم التالي، داخل اليوم، آلية الموازنة).",
          "• بيانات التوليد (شمسي، ريح، نووي، غاز، كتلة حيوية، هيدرو، إلخ).",
          "• بيانات الطلب والتحميل (احتمالية فقدان الحمل، الطلب الفعلي، إجمالي الحمل الفعلي).",
          "• بيانات الموازنة (سعر النظام، NIV، قبول العروض، أحجام BSAD).",
          "صممت خط أنابيب متكامل: تنظيف البيانات، التحليل الاستكشافي، هندسة الميزات، النمذجة التنبؤية، النتائج بصيغة CSV.",
          "طبقت تقنيات توقع السلاسل الزمنية (نماذج الانحدار، الأسس الإحصائية، طرق التعلم الآلي) لتقليل RMSE.",
          "هندسة الميزات (متغيرات التأخير، المتوسطات المتحركة، الترميز الدوري للوقت) واستكشاف العلاقات بين العرض والطلب والأسعار.",
          "تسليمات تقنية وتجارية:",
          "تقني → كود قابل لإعادة الإنتاج، توقعات، تقييمات RMSE.",
          "تجاري → ملخص تنفيذي وعرض حول تأثير أنظمة تخزين الطاقة بالبطاريات (BESS) في التحكيم بالطاقة المتجددة.",
          "اكتسبت خبرة عملية في نمذجة سوق الطاقة، الذكاء الاصطناعي المستدام، واتخاذ القرار تحت عدم اليقين، مع التركيز على ربط رؤى علم البيانات باستراتيجيات الأعمال."
        ],
        btn: "فتح نموذج التقييم",
        btnLink: "/Datathon/Datathon-scoring-model.html",
        btnType: "file"
      },
      {
        role: "مشارك هاكاثون",
        org: "IE University - مدريد، إسبانيا",
        period: "",
        details: [
          "شاركت في هاكاثون يركز على استخراج بيانات منظمة من ملفات PDF (شروط الاستثمار، أوراق الشروط).",
          "استخدمت بايثون لاستخراج الحقول الأساسية: الاسم، ISIN، المُصدر، العملة، الأصول، Strike، تاريخ الإصدار، الاستحقاق، Cap، Barrier، إلخ.",
          "نفذت محمل PDF أو حل OCR، واستكشفت نماذج مختلفة لاستخراج البيانات بكفاءة.",
          "تم تقييم المشروع بناءً على المقاييس المستخرجة، معدل الدقة، وكفاءة وقت التشغيل.",
          "تم تسليم المشروع كمجلد بايثون منظم مع ملفات CSV.",
          "اتبعت متطلبات رئيسية مثل التعامل مع الحقول المفقودة أو المسماة بشكل مختلف، وضمان كفاءة وقت التشغيل، والاستفادة من مجموعات البيانات الخارجية.",
          "استكشفت بدائل لنماذج اللغة الكبيرة (LLMs) وOpenAI، مع التركيز على الدقة والامتثال لقواعد الهاكاثون."
        ],
        btn: "عرض على GitHub",
        btnLink: "https://github.com/ayayasminebelloum/ie-hackathon-2023",
        btnType: "link"
      }
    ],
    explore: "استكشف كود المشروع أدناه"
  }
};

const Achievements = ({ lang = "en" }) => {
  const t = achievementsContent[lang] || achievementsContent.en;
  const isRTL = lang === "ar";

  // Glassmorphism styles
  const glassStyle = "bg-white/30 backdrop-blur-lg shadow-xl rounded-2xl border border-white/40 p-8 mb-8 relative flex flex-col";
  const arrowStyle = "flex items-center justify-center mt-6";
  const btnStyle = "mt-4 px-4 py-2 rounded-lg text-white font-semibold hover:bg-[#7a598c] transition flex items-center gap-2";
  const btnBgStyle = { backgroundColor: "#9870ab" };

  // Handle file open/download
  const handleFileOpen = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section
      id="achievements"
      className={`about-section flex flex-col items-center justify-center w-full relative`}
      style={{
        background: "#9870ab",
        padding: "4rem 0",
        minHeight: "200vh",
        marginTop: "5rem"
      }}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Top left side.png */}
      <img
        src="/side.png"
        alt="side decoration"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "350px",
          height: "auto",
          zIndex: 10,
        }}
      />
      {/* Bottom right side.png */}
      <img
        src="/side.png"
        alt="side decoration"
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "350px",
          height: "auto",
          zIndex: 10,
        }}
      />
      <h2
        className="text-3xl md:text-4xl font-bold mb-8"
        style={{ color: "#fff" }}
      >
        {t.title}
      </h2>
      <div className={`flex flex-col gap-8 w-full max-w-3xl`}>
        {t.items.map((item, i) => (
          <div key={i} className={glassStyle} style={{alignItems: isRTL ? "flex-end" : "flex-start"}}>
            <div
              className="font-semibold text-lg mb-2"
              style={{ color: "#fff" }}
            >
              {item.role} {item.org && <>| {item.org}</>} {item.period && <>| {item.period}</>}
            </div>
            <ul className="list-disc list-inside ml-4 whitespace-pre-line" style={isRTL ? {textAlign: "right", marginLeft: 0, marginRight: "1rem"} : {}}>
              {item.details.map((d, j) => <li key={j}>{d}</li>)}
            </ul>
            <div className={arrowStyle}>
              <FaLongArrowAltDown size={24} />
            </div>
            {item.btnType === "file" ? (
              <button
                className={btnStyle}
                style={btnBgStyle}
                onClick={() => handleFileOpen(item.btnLink)}
              >
                {item.btn}
              </button>
            ) : (
              <a
                href={item.btnLink}
                target="_blank"
                rel="noopener noreferrer"
                className={btnStyle}
                style={btnBgStyle}
              >
                {item.btn}
              </a>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 text-lg font-medium">{t.explore}</div>
    </section>
  );
};

export default Achievements;
