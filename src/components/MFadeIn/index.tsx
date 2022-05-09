import React, { useEffect, useState } from "react";
import './style.scss';

const FadeInSection = ({children}: PropsType) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = React.createRef<HTMLDivElement>();

    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      if (domRef && domRef.current) {
          observer.observe(domRef.current);
      }
    }, []); //eslint-disable-line

    return (
      <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {children}
      </div>
    );
  }

  interface PropsType {
      children: any;
  }

  export default FadeInSection