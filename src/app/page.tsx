import Promo from './components/promo/promo';
import Tag from './components/tag/tag';

export default function Home(): JSX.Element {
  return (
    <main className="container mx-auto">
      <Promo />
      <Tag>About Me</Tag>
    </main>
  );
}
