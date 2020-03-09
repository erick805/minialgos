/*
Given an array route of 3D points, implement a function calcDroneMinEnergy that computes and returns the minimal amount of energy the drone would need to complete its route. Assume that the drone starts its flight at the first point in route. That is, no energy was expended to place the drone at the starting point.

For simplicity, every 3D point will be represented as an integer array whose length is 3. Also, the values at indexes 0, 1, and 2 represent the x, y and z coordinates in a 3D point, respectively.

Explain your solution and analyze its time and space complexities.
*/

// ascends - loses 1 kwh
// descends - gains 1 kwh
// initial point = no energy required

/*
input:  route = [ [0,   2, 10],
                  [3,   5,  0],
                  [9,  20,  6],
                  [10, 12, 15],
                  [10, 10,  8] ]

output: 5
*/

// Edge cases
// [[0,2,10]] => 0

// O(route.length) time | O(1) space
const calcDroneMinEnergy = route => {
  let newHeight = route[0][2];

  for (let i = 1; i < route.length; i++) {
    const currHeight = route[i][2];
    if (currHeight > newHeight) {
      newHeight = currHeight;
    }
  }

  return newHeight - route[0][2];
};
