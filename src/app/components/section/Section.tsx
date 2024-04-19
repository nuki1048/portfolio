import { animated, useInView } from '@react-spring/web';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
}

const Section: React.FC<Props> = ({ children, className }) => {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: '-40% 0%',
    }
  );

  return (
    <animated.section
      ref={ref}
      style={springs}
      className={`py-16 md:py-24 ${className}`}
    >
      {children}
    </animated.section>
  );
};

export default Section;
