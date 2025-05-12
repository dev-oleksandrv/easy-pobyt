"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Karta Pobytu and why do I need to prepare for it?",
    answer:
      "Karta Pobytu is a residence permit for foreigners living in Poland. The application process includes tests on Polish history and culture, as well as an interview. Proper preparation is essential to increase your chances of approval.",
  },
  {
    question: "How does the energy system work?",
    answer:
      "Free users receive 10 energy points to start. Each practice test costs 1 energy point, and each mock interview costs 5 energy points. Premium users have unlimited energy and can practice as much as they want.",
  },
  {
    question: "Can I use Easy Pobyt if I don't speak Polish?",
    answer:
      "Yes! Easy Pobyt is available in four languages: English, Polish, Ukrainian, and Belarusian. You can practice in your preferred language while still learning the essential Polish terms and concepts.",
  },
  {
    question: "How realistic are the mock interviews?",
    answer:
      "Our mock interviews are designed to closely simulate the actual Karta Pobytu interview experience. They include common questions asked by immigration officers and provide feedback on your responses to help you improve.",
  },
  {
    question: "Is the free version enough to pass the Karta Pobytu test?",
    answer:
      "Many users have successfully passed their Karta Pobytu test using only the free version. However, the premium version offers unlimited practice and more advanced features that can further increase your chances of success.",
  },
  {
    question: "Can I cancel my premium subscription at any time?",
    answer:
      "Yes, you can cancel your premium subscription at any time. We also offer a 7-day money-back guarantee if you're not satisfied with the premium features.",
  },
  {
    question: "How often is the content updated?",
    answer:
      "We regularly update our question database to reflect any changes in the Karta Pobytu application process. Our team monitors official requirements and user feedback to ensure our content remains relevant and accurate.",
  },
  {
    question: "Do you offer any guarantees of passing the Karta Pobytu test?",
    answer:
      "While we can't guarantee that everyone will pass (as the final decision rests with the immigration authorities), our users report a 92% success rate after using Easy Pobyt to prepare for their tests and interviews.",
  },
];

export function HomeFaq() {
  return (
    <section id="faq" className="py-20 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C3B5F] mb-4 font-['Poppins']">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about Easy Pobyt and the Karta Pobytu application
            process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6"
              >
                <AccordionTrigger className="text-[#0C3B5F] font-medium py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions?{" "}
            <a href="#" className="text-[#E12D39] font-medium">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
