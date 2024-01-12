import About from './components/about';
import Promo from './components/promo';
import Skills from './components/skills';

export default function Home(): JSX.Element {
  return (
    <main className="container mx-auto">
      <Promo />
      <About />
      <Skills />
    </main>
  );
}
