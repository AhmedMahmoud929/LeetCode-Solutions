function nearestValidPoint(x, y, points = []) {
  let smIndex = 10e7,
    smDist = 10e7;
  const calcDistance = (p) => {
    return Math.abs(p[0] - x) + Math.abs(p[1] - y);
  };

  points.map((p, i) => {
    if (p[0] == x || p[1] == y) {
      const distance = calcDistance(p);
      if (smDist > distance) {
        smDist = distance;
        smIndex = i;
      } else if (smDist == distance) {
        smIndex = Math.min(smIndex, i);
      }
    }
  });
  return smIndex == 10e7 ? -1 : smIndex;
}