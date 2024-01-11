interface Props {
  children: string;
}

const Tag: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-fit px-5 py-1 rounded-xl bg-gray-light-200 dark:bg-gray-dark-200">
      <span className="text-sm text-gray-light-600 dark:text-gray-dark-600">
        {children}
      </span>
    </div>
  );
};

export default Tag;
