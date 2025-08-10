// declare namespace JSX {
//   interface IntrinsicElements {
//     'rux-global-status-bar': any;
//     'rux-header': any;
//     'rux-monitoring-icon': any;
//   }
// }
import { ThreeElements } from '@react-three/fiber'

declare global {
  namespace React {
    namespace JSX {
        interface IntrinsicElements extends ThreeElements {
           'rux-global-status-bar': any;
           'rux-header': any;
           'rux-monitoring-icon': any;
        }
    }
  }
}