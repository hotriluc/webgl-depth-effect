import { SketchMaterialImpl } from '../components/materials/SketchMaterial';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      sketchMaterial: SketchMaterialImpl;
    }
  }
}
export default global;
