export const useUniqBy = () => {
  Array.prototype.uniqBy = function(iteratee) {
    return this.filter(
      (val, ind, self) =>
        self.findIndex((val2) => iteratee(val2) === iteratee(val)) === ind,
    );
  };
}
