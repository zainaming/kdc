import React from 'react';

import service2 from '../assets/serviceImg2.png';
import service3 from '../assets/serviceImg3.png';
import service4 from '../assets/serviceImg4.png';

export const servicesData = [
  {
    id: "personal-support",
    title: "Personal Support",
    description: "Comprehensive daily assistance tailored to individual needs and preferences.",
    image: service2,
    whatItMeans: "Personal Support services are designed to assist individuals with daily living activities while promoting independence and dignity. We provide personalized care that respects each person's unique routines, choices, and goals, ensuring they can live as independently as possible in their preferred environment.",
    howWeSupport: [
      {
        title: "Daily Living Assistance",
        content: "Support with personal hygiene, dressing, grooming, and other essential daily activities based on individual needs and preferences."
      },
      {
        title: "Meal Support",
        content: "Assistance with meal planning, preparation, and feeding as needed, respecting dietary preferences and restrictions."
      },
      {
        title: "Household Management",
        content: "Help with light housekeeping, laundry, shopping, and maintaining a safe, clean living environment."
      }
    ],
    whatsIncluded: [
      {
        title: "Personal Care",
        content: "Individualized support for hygiene, dressing, and grooming."
      },
      {
        title: "Nutritional Support",
        content: "Assistance with meal planning, preparation, and eating."
      },
      {
        title: "Home Maintenance",
        content: "Support with cleaning, laundry, and household organization."
      },
      {
        title: "Safety Monitoring",
        content: "Ongoing supervision to ensure physical safety and well-being."
      }
    ]
  },
  {
    id: "respite-under-21",
    title: "Respite (Under 21)",
    description: "Temporary relief care for families of children and youth under 21 with developmental disabilities.",
    image: service3,
    whatItMeans: "Respite services provide temporary relief to families and caregivers of children and youth under 21 who have developmental disabilities. Our trained staff offer safe, engaging, and supportive care that gives families a break while ensuring their loved one continues to receive quality support in a nurturing environment.",
    howWeSupport: [
      {
        title: "Trained Caregivers",
        content: "Our respite staff are specially trained to work with children and youth with developmental disabilities, understanding their unique needs and communication styles."
      },
      {
        title: "Flexible Scheduling",
        content: "We offer respite services during evenings, weekends, and holidays to accommodate family needs and provide relief when it's most needed."
      },
      {
        title: "Engaging Activities",
        content: "Age-appropriate and ability-appropriate activities that promote development, socialization, and enjoyment during respite time."
      }
    ],
    whatsIncluded: [
      {
        title: "In-Home Respite",
        content: "Care provided in the family's home to maintain familiar routines and environment."
      },
      {
        title: "Community-Based Respite",
        content: "Outings and activities in the community to promote social inclusion and skill development."
      },
      {
        title: "Overnight Support",
        content: "Extended respite care including overnight stays when authorized."
      },
      {
        title: "Family Relief",
        content: "Temporary relief for primary caregivers to rest, attend to personal needs, or manage other responsibilities."
      }
    ]
  },
  {
    id: "life-skill-development",
    title: "Life Skill Development",
    description: "Structured training to build essential life skills for greater independence and community participation.",
    image: service4,
    whatItMeans: "Life Skill Development services focus on teaching practical skills that enable individuals to live more independently and participate meaningfully in their communities. Through structured, individualized training, we help individuals develop competencies in areas such as self-care, communication, social interaction, and daily living tasks.",
    howWeSupport: [
      {
        title: "Individualized Training Plans",
        content: "Customized skill development plans based on assessed needs, interests, and long-term goals."
      },
      {
        title: "Hands-On Learning",
        content: "Practical, real-world learning opportunities in natural environments where skills will be used."
      },
      {
        title: "Progressive Skill Building",
        content: "Skills are taught in logical sequences, with each new ability building on previously mastered competencies."
      }
    ],
    whatsIncluded: [
      {
        title: "Self-Care Skills",
        content: "Training in personal hygiene, grooming, dressing, and health management."
      },
      {
        title: "Communication Skills",
        content: "Development of verbal, non-verbal, and alternative communication methods."
      },
      {
        title: "Social Skills",
        content: "Building abilities for appropriate social interaction, relationship building, and community engagement."
      },
      {
        title: "Daily Living Skills",
        content: "Instruction in meal preparation, money management, transportation use, and household tasks."
      }
    ]
  }
];