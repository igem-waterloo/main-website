import React from 'react';

const Accordion = ({ title, children }) => {
  return (
    <section className="w-full bg-gray border rounded-2xl border-transparent cursor-pointer">
      <details className="space-y-2">
        <summary className="focus:outline-none focus-visible:ring-2 text-blue font-bg-r text-lg p-6">
          {title}
        </summary>
        <p className="text-blue font-nunito text-base p-6 pt-0">{children}</p>
      </details>
    </section>
  );
};

export default Accordion;