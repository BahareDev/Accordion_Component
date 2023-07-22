import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const data = [
  {
    id: 1,
    title: "Accordion 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    id: 1,
    title: "Accordion 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    id: 1,
    title: "Accordion 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
];

function Accordion() {
  return (
    <div className="accordion">
      {data.map((item) => (
        <AccordionItem key={item.id} item={item} />
      ))}
    </div>
  );
}

function AccordionItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div key={item.id} className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}>
      <div
        className="accordion-item__header"
        onClick={() => setIsOpen((is) => !is)}
      >
        <div>{item.title}</div>
        <ChevronDownIcon
        className="accordion-item__chevron"
          // style={{
          //   width: "1.2rem",
          //   rotate: isOpen ? "180deg" : "0deg",
          //   transition: "all 0.3s ease-out",
          // }}
        />
      </div>
      <div className="accordion-item__content">{item.text}</div>
      {/* {isOpen && <div className="accordion-item__content">{item.text}</div>} */}
    </div>
  );
}

export default Accordion;
