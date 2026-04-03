import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { faqs } from '../data/siteContent';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-spacing">
      <div className="container-shell">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions about home visit physiotherapy."
          description="These answers help patients understand how doorstep treatment works before they book."
          centered
        />
        <div className="mx-auto mt-10 max-w-4xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question} className="card-surface overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="text-lg font-bold text-slate-900 dark:text-white">{faq.question}</span>
                  <ChevronDown className={`transition ${isOpen ? 'rotate-180' : ''}`} size={20} />
                </button>
                {isOpen ? <p className="px-6 pb-6 text-sm leading-7 text-slate-600 dark:text-slate-300">{faq.answer}</p> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
