import Section from '../section';
import Tag from '../tag';
import TestimonialsCard from '../testimonialsCard';

const text =
  '“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”';

const Testimonials: React.FC = () => {
  return (
    <Section className="flex flex-col items-center ">
      <Tag className="mx-auto">Testimonials</Tag>
      <h2 className="mt-4 text-lg text-center md:text-xl  text-gray-light-600 dark:text-gray-dark-500">
        Nice things people have said about me:
      </h2>
      <ul className="mt-12 flex flex-wrap gap-12">
        <TestimonialsCard
          review={text}
          title="John Doe"
          company="Founder - xyz.com"
        />
        <TestimonialsCard
          review={text}
          title="John Doe"
          company="Founder - xyz.com"
        />
        <TestimonialsCard
          review={text}
          title="John Doe"
          company="Founder - xyz.com"
        />
      </ul>
    </Section>
  );
};
export default Testimonials;
