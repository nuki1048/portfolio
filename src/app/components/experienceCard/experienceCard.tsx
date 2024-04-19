import { type StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

interface Props {
  position: string;
  companyLogoSrc: string | StaticImport;
  skills: string[];
  workPeriod: [Date, Date | null];
}

const ExperienceCard: React.FC<Props> = ({
  companyLogoSrc,
  position,
  skills,
  workPeriod,
}) => {
  const workTime = `${new Date(workPeriod[0]).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'long',
  })} - ${
    workPeriod[1] !== null
      ? new Date(workPeriod[1]).toLocaleDateString('en-us', {
          year: 'numeric',
          month: 'long',
        })
      : 'Current'
  }`;

  return (
    <div className="p-8 flex flex-col md:flex-row items-start justify-center  gap-4 md:gap-12 rounded-xl shadow-md dark:shadow-2xl h-fit bg-gray-light dark:bg-gray-dark-100 w-full">
      <Image
        src={companyLogoSrc}
        width={102}
        height={28}
        alt="Expirience Company Logo"
        className="order-1"
      />
      <div className="order-3 md:order-2 flex flex-col gap-4  md:mr-auto">
        <h3 className="font-semibold text-lg md:text-xl text-gray-light-900 dark:text-gray-dark-900">
          {position}
        </h3>
        <ul className="list-disc list-inside flex flex-col gap-2">
          {skills.map((item) => (
            <li
              key={`id-${item}`}
              className="text-gray-light-600 dark:text-gray-dark-600"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      {/* TODO: CHANGE THAT TO DYNAMIC DATA */}
      <span className="order-2 md:order-last text-gray-light-700 dark:text-gray-dark-700">
        {workTime}
      </span>
    </div>
  );
};
export default ExperienceCard;
