import Avatar from '../avatar';

interface Props {
  review: string;
  title: string;
  company: string;
}

const TestimonialsCard: React.FC<Props> = ({ company, review, title }) => {
  return (
    <div className="p-12 flex-1 w-fit h-fit flex flex-col items-center gap-6 rounded-xl shadow-2xl bg-gray-light dark:bg-gray-dark-100">
      <Avatar />
      <p className="text-gray-light-600 dark:text-gray-dark-600">{review}</p>
      <div>
        <h3 className="font-semibold text-lg md:text-xl text-gray-light-900 dark:text-gray-dark-900 ">
          {title}
        </h3>
        <span className="mt-1 text-sm text-gray-light-600 dark:text-gray-dark-600">
          {company}
        </span>
      </div>
    </div>
  );
};

export default TestimonialsCard;
