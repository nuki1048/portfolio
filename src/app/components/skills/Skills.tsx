import IconText from '../IconText';
import Section from '../section';
import Tag from '../tag';

const Skills: React.FC = () => {
  return (
    <Section className="flex flex-col items-center">
      <Tag className="mx-auto">Skills</Tag>
      <h3 className="mt-4 mb-6 text-lg text-center md:text-xl text-gray-light-600 dark:text-gray-light-600">
        The skills, tools and technologies I am really good at:
      </h3>
      <ul className="w-full grid grid-cols-1 md:grid-cols-5 xl:grid-cols-8		 auto-rows-auto gap-5">
        <IconText imageSrc="/assets/icons/icon-figma.svg" text="Figma" />
        <IconText
          imageSrc="/assets/icons/icon-javascript.svg"
          text="Javascript"
        />
        <IconText
          imageSrc="/assets/icons/icon-typescript.svg"
          text="Typescript"
        />
        <IconText imageSrc="/assets/icons/icon-git.svg" text="Git" />
        <IconText imageSrc="/assets/icons/icon-nest.svg" text="Nest.js" />
        <IconText imageSrc="/assets/icons/icon-mongodb.svg" text="MongoDB" />
        <IconText imageSrc="/assets/icons/icon-nextjs.svg" text="Next.js" />
        <IconText imageSrc="/assets/icons/icon-nodejs.svg" text="Node.js" />
        <IconText
          imageSrc="/assets/icons/icon-postgresql.svg"
          text="PostgreSQL"
        />
        <IconText imageSrc="/assets/icons/icon-react.svg" text="React" />
        <IconText imageSrc="/assets/icons/icon-sass.svg" text="Sass/Scss" />
        <IconText imageSrc="/assets/icons/icon-socket.svg" text="Socket.io" />
        <IconText
          imageSrc="/assets/icons/icon-storybook.svg"
          text="Storybook"
        />
        <IconText imageSrc="/assets/icons/icon-cypress.svg" text="Cypress" />
        <IconText
          imageSrc="/assets/icons/icon-tailwindcss.svg"
          text="Tailwind.css"
        />
        <IconText imageSrc="/assets/icons/icon-express.svg" text="Express.js" />
      </ul>
    </Section>
  );
};
export default Skills;
