interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
}

const Section: React.FC<Props> = ({ children, className }) => {
  return (
    <section className={`py-16 md:py-24 ${className}`}>{children}</section>
  );
};

export default Section;
