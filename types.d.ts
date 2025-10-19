/// <reference types="vite/client" />

declare module '~icons/*' {
  import * as React from 'react';
  const component: React.FC<React.SVGProps<SVGSVGElement>>;
  export default component;
}

declare module "swiper/css";
declare module "swiper/css/navigation";
declare module "swiper/css/pagination";
declare module "swiper/css/autoplay";
declare module "swiper/modules";
