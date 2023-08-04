import { create } from 'zustand';
import { ISlide } from '../interfaces/Slide.interface';

interface GalleryState {
  slides: Array<ISlide>;
  domSlides: Array<HTMLElement>;
  setDomSlides: (list: Array<HTMLElement>) => void;
}
const slides: Array<ISlide> = [
  {
    imgUrl: '/1.jpeg',
    depthMapUrl: '/1-depth.png',
    threshold: { horizontal: 3.5, vertical: 2.5 },
  },
  {
    imgUrl: '/1.jpeg',
    depthMapUrl: '/1-depth.png',
    threshold: { horizontal: 3.5, vertical: 2.5 },
  },
  {
    imgUrl: '/1.jpeg',
    depthMapUrl: '/1-depth.png',
    threshold: { horizontal: 3.5, vertical: 2.5 },
  },
];

export const useGallery = create<GalleryState>((set) => ({
  slides: slides,
  domSlides: [],
  setDomSlides: (list) => set({ domSlides: list }),
}));
