import About from './components/about/About';
import Promo from './components/promo/promo';

export default function Home(): JSX.Element {
  return (
    <main className="container mx-auto">
      <Promo />
      <About />
    </main>
  );
}
