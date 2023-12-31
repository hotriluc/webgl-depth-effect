import { create } from 'zustand';
import { ISlide } from '../interfaces/Slide.interface';
import { mod } from '../utils/math';

const slides: Array<ISlide> = [
  {
    imgUrl: '/1.jpg',
    depthMapUrl: '/1.png',
    threshold: { horizontal: 2.5, vertical: 5 },
  },
  {
    imgUrl: '/2.jpg',
    depthMapUrl: '/2.png',
    threshold: { horizontal: 2, vertical: 4 },
  },
  {
    imgUrl: '/3.jpg',
    depthMapUrl: '/3.png',
    threshold: { horizontal: 2, vertical: 4 },
  },
  {
    imgUrl: '/4.jpg',
    depthMapUrl: '/4.png',
    threshold: { horizontal: 2, vertical: 4 },
  },
  {
    imgUrl: '/5.jpg',
    depthMapUrl: '/5.png',
    threshold: { horizontal: 2, vertical: 4 },
  },
  {
    imgUrl: '/6.jpg',
    depthMapUrl: '/6.png',
    threshold: { horizontal: 2, vertical: 4 },
  },
  {
    imgUrl: '/7.jpg',
    depthMapUrl: '/7.png',
    threshold: { horizontal: 2, vertical: 4 },
  },
  {
    imgUrl: '/8.jpg',
    depthMapUrl: '/8.png',
    threshold: { horizontal: 2, vertical: 4 },
  },
  {
    imgUrl: '/9.jpg',
    depthMapUrl: '/9.png',
    threshold: { horizontal: 2, vertical: 4 },
  },
];

interface GalleryState {
  slides: Array<ISlide>;
  domSlides: Array<HTMLElement>;
  dimension: { rows: number; cols: number };
  currentSlide: number;
  prevSlide: () => void;
  nextSlide: () => void;
  setDomSlides: (list: Array<HTMLElement>) => void;
  setDimension: (rows: number, cols: number) => void;
}

export const useGallery = create<GalleryState>((set) => ({
  slides: slides,
  dimension: { rows: 3, cols: 3 },
  setDimension: (rows: number, cols: number) =>
    set(() => ({
      dimension: { rows, cols },
    })),
  domSlides: [],
  setDomSlides: (list) => set({ domSlides: list }),
  currentSlide: 0,
  prevSlide: () =>
    set((state: GalleryState) => ({
      currentSlide: mod(state.currentSlide - 1, state.dimension.rows),
    })),
  nextSlide: () =>
    set((state: GalleryState) => ({
      currentSlide: mod(state.currentSlide + 1, state.dimension.rows),
    })),
}));
