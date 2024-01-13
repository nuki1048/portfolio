import {
  About,
  Experience,
  Promo,
  Skills,
  Testimonials,
  Work,
} from './components';

export default function Home(): JSX.Element {
  return (
    <main className="container mx-auto">
      <Promo />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Testimonials />
    </main>
  );
}
