import Image from 'next/image';

const interestsContent = {
  en: {
    title: "PERSONAL INTERESTS",
    interests: [
      {
        title: "Reading",
        fact: "I read more than 45 books a year and aim to increase that number by 3 every year. I love exploring both fiction and non-fiction to continuously expand my perspective."
      },
      {
        title: "Space Exploration",
        fact: "I am fascinated by unexplored planets, like those in the Kepler system, and love learning about the mysteries of distant worlds and what they could teach us about the universe."
      },
      {
        title: "Learning Languages",
        fact: "I speak 7 languages fluently and plan to learn 2 more by the time I turn 25, driven by a passion for connecting with people and cultures worldwide."
      },
      {
        title: "Classical Music",
        fact: "My favorite piece is Finlandia by Sibelius, which I admire for its powerful, soaring melodies and the way it evokes both national pride and deep emotion."
      },
      {
        title: "History",
        fact: "I enjoy uncovering little-known stories from the past and am fascinated by how historical events shape the modern world—did you know some ancient libraries contained more knowledge than early universities?"
      }
    ]
  },
  fr: {
    title: "INTÉRÊTS PERSONNELS",
    interests: [
      {
        title: "Lecture",
        fact: "Je lis plus de 45 livres par an et vise à augmenter ce nombre de 3 chaque année. J'aime explorer à la fois la fiction et la non-fiction pour élargir continuellement ma perspective."
      },
      {
        title: "Exploration Spatiale",
        fact: "Je suis fascinée par les planètes inexplorées, comme celles du système Kepler, et j'aime apprendre sur les mystères des mondes lointains et ce qu'ils pourraient nous enseigner sur l'univers."
      },
      {
        title: "Apprentissage des Langues",
        fact: "Je parle couramment 7 langues et prévois d'en apprendre 2 autres avant mes 25 ans, motivée par une passion pour connecter avec les gens et les cultures du monde entier."
      },
      {
        title: "Musique Classique",
        fact: "Ma pièce préférée est Finlandia de Sibelius, que j'admire pour ses mélodies puissantes et la façon dont elle évoque à la fois la fierté nationale et l'émotion profonde."
      },
      {
        title: "Histoire",
        fact: "J'aime découvrir des histoires peu connues du passé et je suis fascinée par la façon dont les événements historiques façonnent le monde moderne—saviez-vous que certaines bibliothèques antiques contenaient plus de connaissances que les premières universités?"
      }
    ]
  },
  es: {
    title: "INTERESES PERSONALES",
    interests: [
      {
        title: "Lectura",
        fact: "Leo más de 45 libros al año y apunto a aumentar ese número en 3 cada año. Me encanta explorar tanto ficción como no ficción para expandir continuamente mi perspectiva."
      },
      {
        title: "Exploración Espacial",
        fact: "Estoy fascinada por los planetas inexplorados, como los del sistema Kepler, y me encanta aprender sobre los misterios de mundos distantes y lo que podrían enseñarnos sobre el universo."
      },
      {
        title: "Aprendizaje de Idiomas",
        fact: "Hablo con fluidez 7 idiomas y planeo aprender 2 más antes de cumplir 25 años, impulsada por una pasión por conectarme con personas y culturas de todo el mundo."
      },
      {
        title: "Música Clásica",
        fact: "Mi pieza favorita es Finlandia de Sibelius, que admiro por sus melodías poderosas y la forma en que evoca tanto el orgullo nacional como la emoción profunda."
      },
      {
        title: "Historia",
        fact: "Disfruto descubriendo historias poco conocidas del pasado y me fascina cómo los eventos históricos dan forma al mundo moderno—¿sabías que algunas bibliotecas antiguas contenían más conocimiento que las primeras universidades?"
      }
    ]
  },
  ar: {
    title: "الاهتمامات الشخصية",
    interests: [
      {
        title: "القراءة",
        fact: "أقرأ أكثر من 45 كتابًا سنويًا وأهدف إلى زيادة هذا العدد بمقدار 3 كل عام. أحب استكشاف الخيال وغير الخيال لتوسيع منظوري باستمرار."
      },
      {
        title: "استكشاف الفضاء",
        fact: "أنا مفتونة بالكواكب غير المستكشفة، مثل تلك الموجودة في نظام كيبلر، وأحب التعرف على أسرار العوالم البعيدة وما يمكن أن تعلمنا إياه عن الكون."
      },
      {
        title: "تعلم اللغات",
        fact: "أتحدث 7 لغات بطلاقة وأخطط لتعلم لغتين أخريين قبل أن أبلغ 25 عامًا، مدفوعة بشغف التواصل مع الناس والثقافات في جميع أنحاء العالم."
      },
      {
        title: "الموسيقى الكلاسيكية",
        fact: "قطعتي المفضلة هي فنلنديا لسيبيليوس، التي أعجب بها لألحانها القوية والطريقة التي تستحضر بها الفخر الوطني والعاطفة العميقة."
      },
      {
        title: "التاريخ",
        fact: "أستمتع باكتشاف قصص قليلة المعرفة من الماضي وأنا مفتونة بكيفية تشكيل الأحداث التاريخية للعالم الحديث - هل تعلم أن بعض المكتبات القديمة كانت تحتوي على معرفة أكثر من الجامعات الأولى؟"
      }
    ]
  }
};

const Interests = ({ lang = "en" }) => {
  const t = interestsContent[lang] || interestsContent.en;

  return (
    <section
      className="w-full py-16 relative overflow-hidden"
      style={{
        backgroundColor: "#9870ab",
        minHeight: "665px",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          {t.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.interests.map((interest, index) => (
            <div
              key={index}
              className="flip-card"
              style={{ height: "250px" }}
            >
              <div className="flip-card-inner">
                {/* Front of card */}
                <div className="flip-card-front">
                  <h3 className="text-[#9870ab] text-xl font-bold">
                    {interest.title}
                  </h3>
                </div>
                {/* Back of card */}
                <div className="flip-card-back">
                  <p className="text-[#9870ab] text-sm leading-relaxed">
                    {interest.fact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Side image */}
      <Image
        src="/side.png"
        alt="Decorative side"
        width={500}
        height={500}
        className="absolute bottom-10 right-[200px] w-auto h-[300px] object-contain z-0"
        style={{
          pointerEvents: 'none',
          opacity: 0.8
        }}
      />
    </section>
  );
};

export default Interests;
