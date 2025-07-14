import React from 'react'
import HighlightText from '../HomePage/HighlightText';
import CTAButton from "../../core/HomePage/Button";
import { motion } from 'framer-motion';
import { FaBook, FaCertificate, FaLaptopCode, FaUserGraduate, FaStar, FaBriefcase } from "react-icons/fa";

const LearningGridArray = [
  {
    order: -1,
    heading: "World-Class Learning for",
    highlightText: "Anyone, Anywhere",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
    BtnText: "Learn More",
    BtnLink: "/contact",
  },
  {
    order: 1,
    heading: "Curriculum Based on Industry Needs",
    description:
      "Save time and money! The curriculum is made easier to understand and aligned with real-world industry needs.",
    icon: <FaBook />,
  },
  {
    order: 2,
    heading: "Our Learning Methods",
    description:
      "We provide hands-on projects and mentor feedback to reinforce every concept.",
    icon: <FaLaptopCode />,
  },
  {
    order: 3,
    heading: "Certification",
    description:
      "Earn verifiable certifications that you can share on your resume and LinkedIn.",
    icon: <FaCertificate />,
  },
  {
    order: 4,
    heading: `Rating "Auto-grading"`,
    description:
      "Automated assessments for instant feedback and faster learning.",
    icon: <FaStar />,
  },
  {
    order: 5,
    heading: "Ready to Work",
    description:
      "Real-world projects ensure you're job-ready from day one.",
    icon: <FaBriefcase />,
  },
];

const fadeInVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

const LearningGrid = () => {
  return (
    <div className="grid mx-auto w-[350px] xl:w-fit grid-cols-1 xl:grid-cols-4 mb-12 gap-4">
      {LearningGridArray.map((card, index) => {
        return (
          <motion.div
            key={index}
            className={`
              ${index === 0 && "xl:col-span-2 xl:h-[300px] p-5"}
              ${
                card.order % 2 === 1
                  ? "bg-richblack-700"
                  : "bg-richblack-800"
              }
              ${
                card.order === 3 && "xl:col-start-2"
              }
              ${
                card.order < 0 && "bg-transparent"
              }
              rounded-xl shadow-md hover:shadow-yellow-100 transition-all duration-300 transform hover:scale-[1.02]
            `}
            custom={index}
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {card.order < 0 ? (
              <div className="xl:w-[90%] flex flex-col pb-5 gap-3">
                <div className="text-4xl font-semibold">
                  {card.heading}
                  <HighlightText text={card.highlightText} />
                </div>
                <p className="font-medium text-richblack-300">
                  {card.description}
                </p>
                <div className="w-fit mt-4">
                  <CTAButton active={true} linkto={card.BtnLink}>
                    {card.BtnText}
                  </CTAButton>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-6 p-4">
                {card.icon && (
                  <div className="text-3xl text-yellow-50">{card.icon}</div>
                )}
                <h1 className="text-richblack-5 text-lg font-semibold">
                  {card.heading}
                </h1>
                <p className="text-richblack-300 font-medium text-sm">
                  {card.description}
                </p>
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default LearningGrid;



{/*import React from 'react'
import HighlightText from '../HomePage/HighlightText';
import CTAButton from "../../core/HomePage/Button";

const LearningGridArray = [
    {
      order: -1,
      heading: "World-Class Learning for",
      highlightText: "Anyone, Anywhere",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
      BtnText: "Learn More",
      BtnLink: "/contact",
    },
    {
      order: 1,
      heading: "Curriculum Based on Industry Needs",
      description:
        "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
    },
    {
      order: 2,
      heading: "Our Learning Methods",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 3,
      heading: "Certification",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 4,
      heading: `Rating "Auto-grading"`,
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 5,
      heading: "Ready to Work",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
  ];


const LearningGrid = () => {
  return (
    <div className='grid mx-auto w-[350px] xl:w-fit grid-cols-1 xl:grid-cols-4 mb-12'>
    {
        LearningGridArray.map( (card, index) => {
            return (
                <div
                key={index}
                className={`${index === 0 && "lg:col-span-2 lg:h-[280px] p-5"}
                ${
                    card.order % 2 === 1 ? "bg-richblack-700 lg:h-[280px] p-5" : "bg-richblack-800 lg:h-[280px] p-5"
                }
                ${card.order === 3 && "lg:col-start-2"}
                ${card.order < 0 && "bg-transparent"}
                `}
                >
                {
                    card.order < 0 
                    ? (
                        <div className='lg:w-[90%] flex flex-col pb-5 gap-3'>
                            <div className='text-4xl font-semibold'>
                                {card.heading}
                                <HighlightText text={card.highlightText} />
                            </div>
                            <p className='font-medium'>
                                {card.description}
                            </p>
                            <div className='w-fit mt-4'>
                                <CTAButton active={true} linkto={card.BtnLink}>
                                    {card.BtnText}
                                </CTAButton>
                            </div>
                        </div>
                    )
                    : (<div className='flex flex-col gap-8 p-7'>
                        <h1 className='text-richblack-5 text-lg'>
                            {card.heading}
                        </h1>
                        <p className='text-richblack-300 font-medium'>
                            {card.description}
                        </p>
                    </div>)
                }

                </div>
            )
        } )
    } 
    </div>
  )
}

export default LearningGrid*/}
