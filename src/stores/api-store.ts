import { createStore } from 'zustand/vanilla';

export interface Skill {
  name: string;
  icon: string;
  slug: string;
}
export enum StatusEnum {
  InProgress = 'in_progress',
  Accepted = 'accepted',
}

export interface Review {
  review: string;
  rating: number;
  status: StatusEnum;
  id: string;
}

export interface Experience {
  companyName: string;
  workTime: [Date, Date | null];
  position: string;
  commitments: string[];
  logo: string;
  id: string;
}

export type ApiStoreType = {
  skills: Skill[] | null;
  reviews: Review[] | null;
  experience: Experience[] | null;
  repositories: any[] | null;
  loading: boolean;
};

export type ApiActions = {
  addSkills: (skills: Skill[]) => void;
  fetchSkills: () => void;
  fetchExperience: () => void;
  fetchRepositories: () => void;
  fetchReviews: () => void;
};

export type ApiStore = ApiStoreType & ApiActions;

export const defaultInitState: ApiStore = {
  skills: null,
  experience: null,
  repositories: null,
  reviews: null,
  loading: false,
  addSkills: (skills: Skill[]) => {},
  fetchSkills: () => {},
  fetchExperience: () => {},
  fetchRepositories: () => {},
  fetchReviews: () => {},
};

export const createApiStore = (initState: ApiStore = defaultInitState) => {
  return createStore<ApiStore>()((set) => ({
    ...initState,
    addSkills: (skills: Skill[]) => set((state) => ({ ...state, skills })),
    fetchSkills: async () => {
      set({ loading: true });
      const response = await fetch(
        'https://portfolio-api-fawn.vercel.app/api/v1/skills'
      );
      const json = await response.json();
      set({
        skills: json.data.skills,
        loading: false,
      });
    },
    fetchExperience: async () => {
      set({ loading: true });
      const response = await fetch(
        'https://portfolio-api-fawn.vercel.app/api/v1/experience'
      );
      const json = await response.json();
      set({
        experience: json.data.data,
        loading: false,
      });
    },
    fetchRepositories: async () => {
      set({ loading: true });
      const response = await fetch(
        'https://portfolio-api-fawn.vercel.app/api/v1/repo'
      );

      const json = await response.json();
      set({
        repositories: json.data.repos,
        loading: false,
      });
    },
    fetchReviews: async () => {
      set({ loading: true });
      const response = await fetch(
        'https://portfolio-api-fawn.vercel.app/api/v1/reviews'
      );
      const json = await response.json();
      set({
        reviews: json.data.data,
        loading: false,
      });
    },
  }));
};
