
export class TestGuard {
  canDeactivate(comp, p) {
    console.log('checking....');
    // return Observable.fromPromise(Promise.resolve(true))
    return true;
  }
}
