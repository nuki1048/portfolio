import Image from 'next/image';
import Tag from '../tag';
import Link from 'next/link';
import Iframe from 'react-iframe';
import { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import { animated, useInView } from '@react-spring/web';
export enum RowOrder {
  Normal,
  Reverse,
}

interface Props {
  order?: RowOrder;
  name: string;
  description: string;
  topics: string[];
  homepage?: string;
  url: string;
}

const ProjectCard: React.FC<Props> = ({
  order,
  description,
  name,
  topics,
  url,
  homepage,
}) => {
  const [showScroll, setShowScroll] = useState<boolean>(false);
  const rowOrderStyles =
    order === RowOrder.Reverse ? 'md:flex-row-reverse' : 'md:flex-row';
  const [refZX9, springsZX9] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: 100 * -1,
      },
      to: {
        opacity: 1,
        x: 0,
      },
    }),
    { once: true },
  );

  const [fromRightRef, fromRightSpring] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: 100,
      },
      to: {
        opacity: 1,
        x: 0,
      },
    }),
    { once: true },
  );

  return (
    <animated.div
      style={order === RowOrder.Normal ? springsZX9 : fromRightSpring}
      ref={order === RowOrder.Normal ? refZX9 : fromRightRef}
      className={`w-full h-fit flex flex-col ${rowOrderStyles} rounded-xl shadow-md bg-gray-light dark:bg-gray-dark-100`}
    >
      <div className="flex-1	p-12 border-gray-light-100 dark:border-gray-dark-100 bg-gray-light-50 dark:bg-gray-dark-50">
        {homepage != null ? (
          <Iframe
            url={homepage}
            className="object-cover w-72 h-48 md:w-[480px] md:h-[380px] rounded-xl shadow-lg"
            display="block"
            position="relative"
            scrolling={showScroll ? 'yes' : 'no'}
            onMouseOut={() => {
              setShowScroll(false);
            }}
            onMouseOver={() => {
              setShowScroll(true);
            }}
            styles={{ borderRadius: '24px', background: '#fff' }}
          />
        ) : (
          <Image
            src="/assets/images/unsplash-bg.jpg"
            width={480}
            height={380}
            alt="Project Photo"
            className="object-cover w-72 h-48 md:w-[480px] md:h-[380px] rounded-xl shadow-lg"
          />
        )}
      </div>
      <div className="flex-1	p-12 flex flex-col gap-6">
        <h3 className="text-lg md:text-xl font-semibold text-gray-light-900 dark:text-gray-dark-900">
          {name}
        </h3>
        <p className="text-gray-light-600 dark:text-gray-dark-600 tracking-wide">
          {description}
        </p>
        <ul className="flex gap-2 flex-wrap">
          {topics.map((item) => (
            <Tag key={`id-${item}`}>{item}</Tag>
          ))}
        </ul>
        <Link
          id="link"
          target="_blank"
          href={url}
          className="p-1.5 rounded-lg transition-shadow duration-300 hover:shadow-xl w-fit h-fit"
        >
          <Image
            src="/assets/icons/external-link.svg"
            width={24}
            height={24}
            alt="External Link"
          />
        </Link>
        <Tooltip
          anchorSelect="#link"
          place="top"
          content="Redirect to github repository!"
        />
      </div>
    </animated.div>
  );
};

export default ProjectCard;
