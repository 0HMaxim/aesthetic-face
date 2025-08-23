/// <reference types="vite/client" />

declare module '~icons/*' {
  import * as React from 'react';
  const component: React.FC<React.SVGProps<SVGSVGElement>>;
  export default component;
}