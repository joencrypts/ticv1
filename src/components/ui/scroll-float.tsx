import React, { useEffect, useMemo, useRef, ReactNode, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  scrollContainerRef,
  containerClassName = '',
  textClassName = '',
  animationDuration = 1,
  ease = 'back.inOut(2)',
  scrollStart = 'center bottom+=50%',
  scrollEnd = 'bottom bottom-=40%',
  stagger = 0.03,
  as: HeadingTag = 'h2'
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split('').map((char, index) => (
      <span className="inline-block word" key={index}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;
    const isMobile = window.innerWidth < 768;

    const charElements = el.querySelectorAll('.inline-block');

    // Fallback: Ensure text is visible after a delay if animation doesn't trigger
    const fallbackTimeout = setTimeout(() => {
      gsap.set(charElements, {
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
      });
    }, 2000);

    // On mobile, set initial visibility and use simpler animation
    if (isMobile) {
      // Set text visible immediately on mobile
      gsap.set(charElements, {
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
      });
      
      // Optional: Simple fade-in animation on mobile (but text is already visible)
      const mobileAnimation = gsap.fromTo(
        charElements,
        {
          opacity: 0.3,
          yPercent: 10,
        },
        {
          opacity: 1,
          yPercent: 0,
          duration: 0.6,
          ease: 'power2.out',
          stagger: stagger * 1.5,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top 85%',
            end: 'top 60%',
            toggleActions: 'play none none none',
            once: true,
          }
        }
      );

      return () => {
        clearTimeout(fallbackTimeout);
        mobileAnimation.scrollTrigger?.kill();
        mobileAnimation.kill();
      };
    }

    // Desktop animation with full scroll effect
    // Set initial state to visible as fallback
    gsap.set(charElements, {
      opacity: 1,
      yPercent: 0,
      scaleY: 1,
      scaleX: 1,
    });

    const scrollTrigger = gsap.fromTo(
      charElements,
      {
        willChange: 'opacity, transform',
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: '50% 0%'
      },
      {
        duration: animationDuration,
        ease: ease,
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: true,
          onEnter: () => {
            clearTimeout(fallbackTimeout);
          },
          onEnterBack: () => {
            clearTimeout(fallbackTimeout);
          },
          invalidateOnRefresh: true
        }
      }
    );

    return () => {
      clearTimeout(fallbackTimeout);
      scrollTrigger.scrollTrigger?.kill();
      scrollTrigger.kill();
    };
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return (
    <HeadingTag ref={containerRef} className={`overflow-visible sm:overflow-hidden ${containerClassName}`}>
      <span 
        className={`inline-block ${textClassName}`} 
        style={{ 
          WebkitBackgroundClip: 'text', 
          backgroundClip: 'text'
        }}
      >
        {splitText}
      </span>
    </HeadingTag>
  );
};

export default React.memo(ScrollFloat);

