// Define an object `obj1`
let obj1 = {
  name: "Dulitha",
  age: 23,
  address: {
    add1: "saliyapura",
    add2: "anuradhapura",
  },
};

// Point `objCopy` to the same reference as `obj1`
let objCopy = obj1;

// Add a new property `degree` to `objCopy`. Since `objCopy` and `obj1` point to the same object,
// this change will reflect in `obj1` as well.
objCopy.degree = "BICT";

console.log("Obj1 =", obj1); // `degree` property added
console.log("......................................................");
console.log("ObjCopy =", objCopy); // Same as `obj1`

// Create a shallow copy of `obj1` using spread operator and assign to `objCopy`.
// Now `objCopy` and `obj1` no longer reference the same object.
objCopy = { ...obj1 };

// Add a new property `sex` to `objCopy`. This doesn't affect `obj1` since they are separate objects now.
objCopy.sex = "male";

console.log("Obj1 =", obj1); // `degree` remains, no `sex` property added
console.log("......................................................");
console.log("ObjCopy =", objCopy); // `sex` added, contains same properties as `obj1`

// Define another object `obj2`
let obj2 = {
  name: "Dulitha",
  age: 23,
  address: {
    add1: "saliyapura",
    add2: "anuradhapura",
  },
};

// Create a shallow copy of `obj2`, while modifying the `address` property
// to also be a shallow copy with `add1` updated to a new value.
let objCopy2 = {
  ...obj2,
  address: { ...obj2.address, add1: "katupuliyankulama" }, // Deep copy of `address`
};

// `objCopy2` has its own copy of `address` with `add1` modified.
// The original `obj2` remains unchanged.
console.log("Obj2 =", obj2); // Original address unchanged
console.log("......................................................");
console.log("ObjCopy2 =", objCopy2); // Updated address

// Shallow Copy vs Reference:
// When assigning objCopy = obj1;, both variables reference the same memory location. Changes to objCopy directly affect obj1.
// Using { ...obj1 } creates a shallow copy, so objCopy and obj1 no longer share the same memory reference.

// Shallow Copy Limitation:
// Nested objects like address in obj1 are still shared between the original object and its shallow copy. A deep copy is required to create independent nested objects.

// Deep Copy:
// In objCopy2, a deep copy of address was created using { ...obj2.address }. Thus, changes to objCopy2.address do not affect obj2.address.
