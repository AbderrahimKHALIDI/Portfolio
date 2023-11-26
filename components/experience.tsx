"use client";

import React, { useState, useEffect } from "react";
import SectionHeading from "./section-heading";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/them-context";


export default function Experience() {
  const { ref,inView } = useSectionInView("Experience",0.4);
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    
    if (inView && !isVisible) {
      setIsVisible(true);
      
    }
  }, [inView, isVisible]);

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
          className={`${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } transition-opacity transform duration-500 ease-in-out`}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                visibility: isVisible ? "visible" : "hidden",
              }}
              contentArrowStyle={{
                borderRight:
                theme === "light"
                  ? "0.4rem solid #9ca3af"
                  : "0.4rem solid rgba(255, 255, 255, 0.5)",
                visibility: isVisible ? "visible" : "hidden",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                visibility: isVisible ? "visible" : "hidden",
                background:
                theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
              key={item.title}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
