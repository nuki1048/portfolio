interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: string;
}

const wrapperStyles =
  'w-fit px-5 py-1 rounded-xl bg-gray-light-200 dark:bg-gray-dark-200';
const Tag: React.FC<Props> = ({ children, className, ...restProps }) => {
  return (
    <div className={`${wrapperStyles} ${className}`} {...restProps}>
      <span className="text-sm text-gray-light-600 dark:text-gray-dark-600">
        {children}
      </span>
    </div>
  );
};

export default Tag;
