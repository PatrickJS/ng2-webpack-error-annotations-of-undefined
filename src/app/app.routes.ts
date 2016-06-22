import { RouterConfig } from '@angular/router';
import { Eager } from './eager';
import { Lazy } from './lazy';
import { TestGuard } from './test-guard';

export const routes: RouterConfig = [
  { path: '', redirectTo: 'eager'},
  { path: 'eager', component: Eager},
  { path: 'lazy', component: 'Lazy', canDeactivate: [ TestGuard ] }
];

// Async load a component using Webpack's require with es6-promise-loader and webpack `require`
// asyncRoutes is needed for our @angularclass/webpack-toolkit that will allow us to resolve
// the component correctly
export const asyncRoutes: AsyncRoutes = {
  'Lazy': require('es6-promise-loader!./lazy')
};


// Optimizations for initial loads
// An array of callbacks to be invoked after bootstrap to prefetch async routes
// export const prefetchRouteCallbacks: Array<Es6PromiseLoader | Function> = [
  // asyncRoutes['About'] // es6-promise-loader returns a function
// ];


// Es6PromiseLoader and AsyncRoutes interfaces are defined in custom-typings
