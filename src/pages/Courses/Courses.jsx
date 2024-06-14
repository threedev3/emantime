import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import SubBanner from "../../components/banner/SubBanner";
import TajweedCourse from "../../components/tajweedCourse/TajweedCourse";
import tutorImg from "../../assets/img/tutor.png";
import memoPic from "../../assets/img/pic.png";
import ExtraFeatures from "../../components/extraFeature/ExtraFeatures";
import seeratImg from "../../assets/img/seeratimg.png";
import trialImg from "../../assets/img/trialimg.png";
import AnotherCourse from "../../components/anotherCourse/AnotherCourse";

function Courses() {
  return (
    <div>
      <SubBanner course="Courses" />
      <ExtraFeatures order="order-last" cardbg="bg-white" />
      <TajweedCourse
        title="Tajweed Course"
        description="At EmanTime,we offer a comprehensive Tajweed course with our
                  qualified female tutors to help you improve your Quran
                  recitation and become a fluent rectiter of the Holy Quran.
                  Throughout daily or weekly online sessions, you will be
                  introduced to the basics of the course. Tajweed is the set of
                  rules for the pronunciation of each letter and word of the
                  Quran, so our native Quran teachers are certainly the right
                  choice to enhance your Quran recitation for both sisters and
                  young children."
        btn1="Get Enrolled Now"
        btn2="Pricing Details"
        img={tutorImg}
        bg="bg-pricingActive"
        textColor="text-white"
        paraColor="text-white"
      />
      <AnotherCourse
        title="Seerat- Al-Nabawi Course"
        description="This is a course by EmanTime for Sisters who aim to strengthen their love for the Prophet Muhammadصلى الله عليه وسلم, obtain a deeper knowledge of the Prophetic  life, and analyse the possibilities of restoring the spirit of Islam by studying the Prophetic journey in detail with our trained female teachers. Course outline: This course will explore the life of our beloved prophet Muhammadصلى الله عليه وسلمfrom the period of ignorance preceding the establishment of Islam. The course covers Muhammad'sصلى الله عليه وسلمbirth and childhood, ordination as a prophet, the development of Islam in Makkah, migration to Madinah, and his numerous challenges and conflicts. The life of the Prophetصلى الله عليه وسلم is both inspirational and emotional, and it is rich with teachings and tales that continue to unfold for us even today. Studying the life of the Prophet Muhammadصلى الله عليه وسلمis a definitely a forward toward better understanding of the deen for all muslims"
        textColor="text-gray-600"
        paraColor="text-black"
        btn1="Get Enrolled Now"
        btn2="Pricing Details"
      />
      <TajweedCourse
        title="One-To-One Quran Recitation Course"
        description="At EmanTime, we provide several resources to sisters and children who seek to study Quran recitation. We have competent female Islamic tutors with remarkable knowledge of the Holy Quran. You will be able to learn Quran recitation within the comfort of your phones! And your busy schedules as well!"
        btn1="Get Enrolled Now"
        btn2="Pricing Details"
        img={seeratImg}
        bg="bg-missionbg"
        textColor="text-gray-600"
        paraColor="text-black"
      />
      <TajweedCourse
        title="One-To-One Counselling Sessions"
        description="Exclusively designed for sisters, our counselling sessions offer advice rooted in the teachings of the Quran and Hadith. Find solace, wisdom, and practical solutions to navigate through life's complexities with divine guidance. Our compassionate counsellors are here to support you on your journey, providing a safe and confidential space to address your concerns. Experience the power of Quranic and Hadith-based counselling and unlock the transformative potential it holds for your well-being."
        btn1="Get Enrolled Now"
        btn2="Pricing Details"
        img={trialImg}
        bg="bg-pricingActive"
        textColor="text-white"
        order="order-last"
        paraColor="text-white"
      />
      <AnotherCourse
        title="Islamic Studies Classes"
        description="Embark on a comprehensive Islamic studies course at Emantime. Our carefully designed course dives into the basic principles, history, and teachings of Islam, providing a strong foundation for your spiritual growth. Taught by knowledgeable tutors, this online course offers a flexible and engaging learning experience. Join us at Emantime and unlock the treasures of Islamic knowledge from the comfort of your own home. Book your trial class now and embark on a transformative spiritual journey."
        textColor="text-gray-600"
        paraColor="text-black"
        btn1="Get Enrolled Now"
        btn2="Pricing Details"
      />
      <TajweedCourse
        title="Quran Memorization Course"
        description="Our online Quran memorization program is curated to help you embark on a rewarding journey of memorising the Holy Book of Allah. With expert guidance and effective teaching methods, you'll develop a strong base and memorization skills that will enable you to preserve and recite the Quran with fluency, accuracy and beauty. Experience the convenience of flexible schedules, personalised instruction, and a supportive online learning environment. Start your Quran memorization journey with Emantime and embark on a path of spiritual growth and connection with the divine words of Allah."
        btn1="Get Enrolled Now"
        btn2="Pricing Details"
        img={memoPic}
        bg="bg-missionbg"
        textColor="text-gray-600"
        paraColor="text-black"
      />
      <ContactForm />
    </div>
  );
}

export default Courses;
