let pointInPolygon = require('./calculate');

const horizontalCoordCorners = [-4, -4, 0, 0];
const vericalCoordCorners = [-4, 0, -4, 0];
const numberPolygonCoorners = 4;
const xCoord = -2;
const yCoord = -2;

const coordInPolygon = pointInPolygon(horizontalCoordCorners, vericalCoordCorners, numberPolygonCoorners, xCoord, yCoord);
console.log(coordInPolygon ? 'Inside' : 'Outside');
