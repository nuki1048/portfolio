import Image from 'next/image';

interface Props {
  text: string;
  imageSrc: string;
}

const ICON_SIZE = 64;

const IconText: React.FC<Props> = ({ text, imageSrc }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <Image
        src={imageSrc}
        width={ICON_SIZE}
        height={ICON_SIZE}
        alt="Icon With Text"
        className="w-16 h-16"
      />

      <span className="text-lg text-gray-light-600 dark:text-gray-dark-600">
        {text}
      </span>
    </div>
  );
};

export default IconText;
