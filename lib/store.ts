import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface LanguageState {
  lang: 'id' | 'en';
  setLang: (newLang: 'id' | 'en') => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      lang: 'id', // Default bahasa Indonesia
      setLang: (newLang) => set({ lang: newLang }),
    }),
    {
      name: 'language-storage', // Key in localStorage
    }
  )
);