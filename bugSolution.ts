function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Access the array element
console.log(greeter(user[0])); // Accessing the first element

// Solution 2: Join the array elements into a single string
console.log(greeter(user.join(" "))); // Joining with space

// Solution 3: Modify the function signature to accept an array
function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(" ");
}
console.log(greeterArray(user));