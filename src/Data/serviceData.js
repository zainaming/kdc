import React from 'react';
import service1 from '../assets/serviceImg1.png';
import service2 from '../assets/serviceImg2.png';
import service3 from '../assets/serviceImg3.png';
import service4 from '../assets/serviceImg4.png';
import service5 from '../assets/serviceImg5.png';
import service6 from '../assets/serviceImg6.png';


// Personal Support, Respite (Under 21), Life Skill Development 1

export const servicesData = [
  {
    id: "respecting-choice",
    title: "Respecting  Choice & Routines",
    description: "At KDC Serenity Home LLC, we respect each individual's right to choose about their daily life.",
    image: service1,
    whatItMeans: "Respecting individual choice and routines is fundamental to our approach. We believe that every person deserves to have control over their daily life, including when they wake up, what they eat, how they spend their time, and who they spend it with. Our support is designed to empower individuals to make their own choices while providing the necessary assistance to ensure safety and well-being.",
    howWeSupport: [
      {
        title: "Easy Decision Making",
        content: "We support individuals in making informed decisions by providing clear information about options, explaining consequences in accessible ways, and respecting their final choices even when they differ from our recommendations."
      },
      {
        title: "Respect for Personal Preferences",
        content: "We document and honor each person's preferences regarding daily routines, food choices, social interactions, and personal care. These preferences are incorporated into care plans and reviewed regularly to ensure they remain current."
      },
      {
        title: "Informed Choice",
        content: "Our staff receives training on supported decision-making techniques, ensuring that individuals understand their options and can express their preferences. We provide choices in a way that's appropriate to each person's communication style and cognitive abilities."
      }
    ],
    whatsIncluded: [
      {
        title: "Personal Preferences Support",
        content: "Assistance with daily living activities that align with each individual's unique preferences and routines."
      },
      {
        title: "Choice Facilitation",
        content: "Support in making informed choices about daily activities, meals, social interactions, and personal care."
      },
      {
        title: "Routine Flexibility",
        content: "Support that allows for flexibility in daily routines while ensuring safety and well-being."
      },
      {
        title: "Respectful Communication",
        content: "Staff are trained to communicate in a way that respects individual choices and promotes autonomy."
      }
    ]
  },
  {
    id: "person-centered-planning",
    title: "Person-Centered Planning & Implementation",
    description: "Individualized planning and delivery of services based on assessed needs and goals.",
    image: service2,
    whatItMeans: "Person-centered planning puts the individual at the center of all decisions. We work collaboratively with each person, their family, and support network to create comprehensive plans that reflect their unique goals, strengths, and aspirations. Our implementation approach ensures these plans are not just documents but living guides that shape daily support.",
    howWeSupport: [
      {
        title: "Collaborative Assessment",
        content: "We conduct thorough assessments involving the individual, family members, and relevant professionals to understand needs, preferences, and long-term goals."
      },
      {
        title: "Customized Planning",
        content: "Each plan is tailored to the individual's specific circumstances, incorporating their voice and choices throughout the development process."
      },
      {
        title: "Ongoing Implementation",
        content: "Plans are regularly reviewed and adjusted based on progress, changing needs, and feedback from all stakeholders."
      }
    ],
    whatsIncluded: [
      {
        title: "Individual Assessment",
        content: "Comprehensive evaluation of needs, strengths, and preferences."
      },
      {
        title: "Collaborative Planning",
        content: "Working together with individuals and families to develop personalized plans."
      },
      {
        title: "Goal Setting",
        content: "Establishing meaningful, achievable goals that reflect personal aspirations."
      },
      {
        title: "Regular Reviews",
        content: "Ongoing evaluation and adjustment of plans to ensure effectiveness."
      }
    ]
  },
  {
    id: "daily-supports",
    title: "Daily Supports Aligned with Authorized Services",
    description: "Assistance with daily living activities in accordance with approved and funded services.",
    image: service3,
    whatItMeans: "Our daily support services are carefully aligned with authorized funding and individual needs. We provide consistent, reliable assistance that helps individuals maintain independence while ensuring all services comply with regulatory requirements and funding guidelines.",
    howWeSupport: [
      {
        title: "Personalized Assistance",
        content: "Support is tailored to each person's specific needs, from basic daily activities to more complex care requirements."
      },
      {
        title: "Consistent Care",
        content: "We maintain consistent staffing and routines to provide stability and build trust with those we serve."
      },
      {
        title: "Compliance Monitoring",
        content: "All services are documented and monitored to ensure they align with authorized plans and regulatory standards."
      }
    ],
    whatsIncluded: [
      {
        title: "Personal Care Assistance",
        content: "Support with hygiene, dressing, and grooming as needed."
      },
      {
        title: "Meal Preparation",
        content: "Assistance with planning and preparing nutritious meals."
      },
      {
        title: "Household Tasks",
        content: "Help with cleaning, laundry, and other household activities."
      },
      {
        title: "Medication Reminders",
        content: "Support with medication management as authorized."
      }
    ]
  },
  {
    id: "independence-skill-building",
    title: "Independence & Skill-Building Support",
    description: "Support that encourages skill development, autonomy, and meaningful participation.",
    image: service4,
    whatItMeans: "We believe in fostering independence through targeted skill-building. Our approach focuses on identifying each person's strengths and potential, then providing opportunities and support to develop new abilities that enhance their quality of life and autonomy.",
    howWeSupport: [
      {
        title: "Strength-Based Approach",
        content: "We identify and build upon existing strengths rather than focusing solely on deficits or limitations."
      },
      {
        title: "Progressive Skill Development",
        content: "Skills are taught in a logical sequence, with each new ability building on previously mastered competencies."
      },
      {
        title: "Real-World Application",
        content: "Learning occurs in natural environments where skills will be used, ensuring practical application and retention."
      }
    ],
    whatsIncluded: [
      {
        title: "Life Skills Training",
        content: "Developing skills for daily living and independence."
      },
      {
        title: "Social Skills Development",
        content: "Building confidence and abilities for social interactions."
      },
      {
        title: "Community Integration",
        content: "Support for participating in community activities and events."
      },
      {
        title: "Vocational Skills",
        content: "Training for employment and meaningful work opportunities."
      }
    ]
  },
  {
    id: "coordination-transitions",
    title: "Coordination during transitions to/from providers",
    description: "Care coordination during transitions, with proper consent and authorized releases.",
    image: service5,
    whatItMeans: "Transitions between providers can be challenging, but our coordinated approach ensures continuity of care and minimizes disruption. We work closely with all involved parties to facilitate smooth transitions while maintaining the individual's preferences and established routines.",
    howWeSupport: [
      {
        title: "Comprehensive Handoffs",
        content: "Detailed information is shared between providers with proper consent, ensuring continuity of care and support."
      },
      {
        title: "Transition Planning",
        content: "We develop detailed transition plans that address potential challenges and ensure all parties are prepared."
      },
      {
        title: "Ongoing Communication",
        content: "Regular communication is maintained throughout the transition process to address concerns and ensure success."
      }
    ],
    whatsIncluded: [
      {
        title: "Transition Assessment",
        content: "Evaluating needs and preparing for smooth transitions."
      },
      {
        title: "Care Coordination",
        content: "Working with all providers to ensure continuity of services."
      },
      {
        title: "Documentation Transfer",
        content: "Secure and authorized sharing of necessary information."
      },
      {
        title: "Follow-up Support",
        content: "Ongoing monitoring to ensure successful transitions."
      }
    ]
  },
  {
    id: "secure-documentation",
    title: "Secure Documentation & Records Management",
    description: "Accurate, confidential documentation in compliance with privacy requirements.",
    image: service6,
    whatItMeans: "We maintain the highest standards of documentation and record-keeping to ensure accuracy, confidentiality, and compliance with all regulatory requirements. Our systems protect sensitive information while ensuring that necessary data is available to support quality care.",
    howWeSupport: [
      {
        title: "Confidential Systems",
        content: "All records are stored in secure, password-protected systems with access limited to authorized personnel only."
      },
      {
        title: "Accurate Documentation",
        content: "We maintain detailed, timely records of all services provided, ensuring accuracy and completeness."
      },
      {
        title: "Compliance Assurance",
        content: "Our documentation practices meet or exceed all regulatory requirements for privacy and record-keeping."
      }
    ],
    whatsIncluded: [
      {
        title: "Secure Record Keeping",
        content: "Protected storage of all personal and medical information."
      },
      {
        title: "Accurate Reporting",
        content: "Detailed documentation of services and progress."
      },
      {
        title: "Privacy Compliance",
        content: "Adherence to all confidentiality and privacy regulations."
      },
      {
        title: "Authorized Access",
        content: "Controlled access to records by authorized personnel only."
      }
    ]
  }
];