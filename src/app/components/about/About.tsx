import Image from 'next/image';
import Tag from '../tag/tag';

const textStyles = 'text-gray-light-600 dark:text-gray-dark-600';
const About: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <Tag className="mx-auto">About Me</Tag>
      <div className="flex flex-col gap-12 items-center md:flex-row md:items-start pt-6 px-0 md:px-7 2xl:px-0 md:pt-12 md:gap-12 xl:gap-48">
        <div className="relative w-72 h-[360px] md:w-[400px] md:h-[480px]">
          <Image
            src="/assets/images/about_me_portrait.jpg"
            width={400}
            height={480}
            alt="About me portrait"
            className="w-full h-full border-gray-light  border-8 dark:border-gray-dark"
          />
          <div className="absolute w-80 h-full top-5 left-1/2 -translate-x-1/2 md:-translate-x-0  md:top-10 md:-left-10 -z-10 bg-gray-light-200 border-gray-light dark:bg-gray-dark-200 border-8 dark:border-gray-dark"></div>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-light-900 dark:text-gray-dark-900">
            Curious about me? Here you have it:
          </h3>
          <p className={textStyles}>
            I'm a passionate,
            <a href="#" className="underline">
              self-proclaimed designer
            </a>
            who specializes in full stack development (React.js & Node.js). I am
            very enthusiastic about bringing the technical and visual aspects of
            digital products to life. User experience, pixel perfect design, and
            writing clear, readable, highly performant code matters to me.
          </p>
          <p className={textStyles}>
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </p>
          <p className={textStyles}>
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </p>
          <p className={textStyles}>
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            <a href="#">Twitter</a> where I share tech-related bites and build
            in public, or you can follow me on <a href="#">GitHub</a>.
          </p>
          <p className={textStyles}>Finally, some quick bits about me.</p>
          <ul
            className={`${textStyles}  list-disc list-inside	grid grid-rows-2	grid-cols-2 gap-2.5`}
          >
            <li>B.E. in Computer Engineering</li>
            <li>Full time freelancer</li>
            <li>Avid learner</li>
            <li>Aspiring indie hacker</li>
          </ul>
          <p className={textStyles}>
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
