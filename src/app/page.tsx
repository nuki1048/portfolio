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
    fetchRepositories();
    fetchExperience();
    fetchSkills();
    fetchReviews();
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
