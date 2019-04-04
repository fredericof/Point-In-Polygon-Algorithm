/* 
-------------------------- Ray Casting Algorithm --------------------------
numberPolygonCoorners  =  how many corners the polygon has (no repeats)
horizontalCoordCorners[]      =  horizontal coordinates of corners
vericalCoordCorners[]      =  vertical coordinates of corners
xCoord, yCoord         =  point to be tested
Resp: Then, if there are an odd number of nodes on each side of the test point, then it is inside the polygon;
Refs: http://alienryderflex.com/polygon/
*/

// The most simple Algorithm
module.exports = function pointInPolygon(horizontalCoordCorners, vericalCoordCorners, numberPolygonCoorners, xCoord, yCoord) {
  let oddNodes = false;
  let j = numberPolygonCoorners - 1;
  for (i = 0; i < numberPolygonCoorners; i++) {
    if (vericalCoordCorners[i] < yCoord && vericalCoordCorners[j] >= yCoord || vericalCoordCorners[j] < yCoord && vericalCoordCorners[i] >= yCoord) {
      if (horizontalCoordCorners[i] + (yCoord - vericalCoordCorners[i]) / (vericalCoordCorners[j] - vericalCoordCorners[i]) * (horizontalCoordCorners[j] - horizontalCoordCorners[i]) < xCoord) {
        oddNodes = !oddNodes;
      }
    }
    j = i;
  }
  return oddNodes;
};