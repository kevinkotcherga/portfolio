import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, CustomEase);

export const cardStacks = () => {
  gsap.fromTo(
    '.stacks__hover-me',
    {
      opacity: 0,
    },
    {
      opacity: 1,
      scale: 1,
      scrollTrigger: {
        trigger: '.stacks__hover-me',
        start: 'top center',
        end: 'bottom center',
        onEnter: function() {
          gsap.to('.stacks__hover-me', { opacity: 1, duration: 0.2 });
        },
        onLeave: function() {
          gsap.to('.stacks__hover-me', { opacity: 0, duration: 0.2, delay: 2 });
        }
      }
    }
  );
};
