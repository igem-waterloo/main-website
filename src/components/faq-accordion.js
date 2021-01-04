import React from 'react';

const Accordion = ({ title, children }) => {
  return (
    <section className="bg-gray p-6 border rounded-2xl border-transparent">
      <details className="space-y-2">
        <summary className="focus:outline-none focus-visible:ring-2 text-blue font-bg-r text-lg">
          {title}
        </summary>
        <p className="text-blue font-nunito text-base">{children}</p>
      </details>
    </section>
  );
};

export default Accordion;