import React from 'react';

const Accordion = ({ title, children }) => {
  return (
    <section className = "cursor-pointer">
      <details className="space-y-2">
        <summary className="focus:outline-none focus-visible:ring-2 text-yellow font-bold font-nunito text-sm">
          {title}
        </summary>
        <p>{children}</p>
      </details>
    </section>
  );
};

export default Accordion;