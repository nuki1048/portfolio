import Image from 'next/image';
import IconUser from '../../../../public/assets/icons/icon-user.svg';
interface Props {
  imageSrc?: string;
}

const Avatar: React.FC<Props> = ({ imageSrc }) => {
  return (
    <span className="rounded-full w-16 h-16 flex justify-center items-center overflow-hidden bg-[#9CA3AF]">
      {imageSrc ? (
        <Image
          src={imageSrc ? imageSrc : '/assets/icons/icon-user.svg'}
          width={40}
          height={40}
          alt="Avatar Photo"
        />
      ) : (
        <IconUser className="bg-[#9CA3AF] rounded-full" />
      )}
    </span>
  );
};
export default Avatar;
