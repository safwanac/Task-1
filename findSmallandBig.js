const arr = [1, 2, 4, 32, 12, 6, 8];

function findsmallOrBig(a) {
  if (a.length === 0) {
    throw new Error("Array is empty");
  }

  let smallest = a[0];
  let biggest = a[0];

  for (let i = 1; i < a.length; i++) {
    if (a[i] < smallest) {
      smallest = a[i];
    }

    if (a[i] > biggest) {
      biggest = a[i];
    }
  }

  return { smallest, biggest };
}

const result = findsmallOrBig(arr);

console.log("Smallest number:", result.smallest);
console.log("Biggest number:", result.biggest);
