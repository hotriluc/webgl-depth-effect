import { create } from 'zustand';

interface GalleryState {
  domFigures: Array<HTMLElement>;
  setDomFigures: (list: Array<HTMLElement>) => void;
}

export const useGallery = create<GalleryState>((set) => ({
  domFigures: [],
  setDomFigures: (list) => set({ domFigures: list }),
}));
