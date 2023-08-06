import { IThreshold } from './Threshold.interface';

export interface ISlide {
  imgUrl: string;
  depthMapUrl: string;
  threshold: IThreshold;
}
