export const FAQ_ITEMS = [
  {
    id: 1,
    question: "What is BookFlow?",
    answer:
      "BookFlow is an AI-powered app that helps you absorb knowledge faster through book summaries, key insights, and practical takeaways. Get the essence of any book in minutes.",
  },
  {
    id: 2,
    question: "How does the free trial work?",
    answer:
      "All plans include a 7-day free trial. You can cancel anytime during the trial period without being charged. After the trial, your subscription will automatically renew.",
  },
  {
    id: 3,
    question: "Can I cancel my subscription?",
    answer:
      "Yes, you can cancel your subscription at any time from your account settings. Your access will continue until the end of your current billing period.",
  },
  {
    id: 4,
    question: "What platforms is BookFlow available on?",
    answer:
      "BookFlow is available on iOS and Android. Download the app from the App Store or Google Play Store to get started.",
  },
  {
    id: 5,
    question: "Do I need an internet connection?",
    answer:
      "While you need an internet connection to download summaries, you can access previously downloaded content offline with our offline mode feature.",
  },
  {
    id: 6,
    question: "How many books can I access?",
    answer:
      "With a BookFlow subscription, you get unlimited access to our entire library of book summaries. We add new summaries regularly.",
  },
] as const;

export type FAQItem = (typeof FAQ_ITEMS)[number];
