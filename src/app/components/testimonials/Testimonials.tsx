import { Element } from 'react-scroll';
import Section from '../section';
import Tag from '../tag';
import TestimonialsCard from '../testimonialsCard';
import { Loader } from '../loader/Loader';
import { useApiStore } from '@/providers/api-store-provider';

const Testimonials: React.FC = () => {
  const { reviews, loading } = useApiStore((state) => state);
  return (
    <Element name="testimonials">
      <Section className="flex flex-col items-center ">
        <Tag className="mx-auto">Testimonials</Tag>
        <h2 className="mt-4 text-lg text-center md:text-xl  text-gray-light-600 dark:text-gray-dark-500">
          Nice things people have said about me:
        </h2>
        <ul className="mt-12 flex flex-wrap gap-12">
          {loading || (reviews == null && <Loader />)}
          {!loading &&
            reviews?.map((review) => (
              <TestimonialsCard
                key={review.id}
                review={review.review}
                title="John Doe"
                company="Founder - xyz.com"
              />
            ))}
        </ul>
      </Section>
    </Element>
  );
};
export default Testimonials;
