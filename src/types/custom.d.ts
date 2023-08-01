import { SketchMaterialImpl } from '../components/scene/SlideMaterial';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      sketchMaterial: SketchMaterialImpl;
    }
  }
}
export default global;
