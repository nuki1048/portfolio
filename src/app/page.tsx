'use client';
import { useEffect } from 'react';
import {
  About,
  Experience,
  Promo,
  Skills,
  Testimonials,
  Work,
  Contacts,
  Footer,
} from './components';
import { useApiStore } from '@/providers/api-store-provider';

export default function Home(): JSX.Element {
  const { fetchRepositories, fetchExperience, fetchSkills, fetchReviews } =
    useApiStore((state) => state);
  useEffect(() => {
    try {
      fetchRepositories().catch((errr) => {
        console.log(errr);
      });
      fetchExperience().catch((errr) => {
        console.log(errr);
      });
      fetchSkills().catch((errr) => {
        console.log(errr);
      });
      fetchReviews().catch((errr) => {
        console.log(errr);
      });
    } catch (error) {
      console.log('error');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <main className="container mx-auto">
        <Promo />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Testimonials />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
