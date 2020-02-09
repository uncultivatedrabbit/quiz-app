const STORE = {
  questions: [
    {
      // Question 1
      id: 1,
      question: "What will this function return?",
      answers: [5, 10, 15, 0],
      correctAnswer: 15,
      funcExample: `
      function math(a,b){
        return a + b;
      }
      
      math(5, 10);
      `,
      explanation: "This function adds the arguments a and b together and returns their sum." 
    },
    {
      // Question 2
      id: 2,
      question: "What is this function an example of?",
      answers: ['Closure', 'Recursion', 'Ternary Operation', 'Infinite Loop'],
      correctAnswer: "Recursion",
      funcExample: `
      function factorial(n){
        if (n <= 1) return 0;
        return n * factorial(n - 1);
      }
      `,
      explanation: "This function is an example of recursion, when a function calls itself."
    },
    {
      //Question 3
      id: 3,
      question: "Which object method would be most useful to turn an object into an array like this:",
      answers: ['Object.values()', 'Object.entries()', 'Object.keys()', 'Object.assign()'],
      correctAnswer: "Object.entries()",
      funcExample: `toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]`,
      explanation: 'Object.entries() takes an object and returns an array in the form ["key", "value"].'
    },
    {
      //Question 4
      id: 4,
      question: "Which regex equation could be used to determine if a string has the characters 'a' and 'c' (in that order) with <u>zero or more</u> 'b' characters between?",
      answers: ['/ab*c/', '/[abc]/', '/a[b]c/', '/a^bc/'],
      correctAnswer: "/ab*c/",
      funcExample: `
      function regexTest(string){
        const regex = /*insert regex here*/;
        return regex.test(string);
      }`,
      explanation: "'*' in regex means 0 or more of any character."
    },
    {
      //Question 5
      id: 5,
      question: "What does the following code do:",
      answers: ['Check if array has only numbers', 'Find index of all numbers in array', 'Remove numbers from array', 'Return a new array with only numbers'],
      correctAnswer: "Return a new array with only numbers",
      funcExample: `const arrayManipulation = arr => arr.filter(n => typeof n === 'number');`,
      explanation: "The filter method returns an array of values that pass the condition in the provided function."
    },
    {
      //Question 6
      id: 6,
      question: "Why does this code return false?",
      answers: ["Two objects can't have the same key/value pairs", 'Both objects exist in different places in memory', 'Objects can only be compared with "=="', 'You can never compare objects'],
      correctAnswer: 'Both objects exist in different places in memory',
      funcExample: `
      const obj1 = {name: "Brandon", awesomenessLevel: 1000}
      const obj2 = {name: "Brandon", awesomenessLevel: 1000}
      
      console.log(obj1 === obj2) // returns false`,
      explanation: "Objects (even ones with the exact same key and value pairs) are still unique and different pieces of data that exist in different places in memory."
    },
    {
      //Question 7
      id: 7,
      question: "What is NOT true of JSON:",
      answers: ['JSON stands for JavaScript Object Notation', "JSON doesn't support null values", 'JSON keys must be in quotations unlike regular JavaScript objects', 'JSON is often used in GET AJAX requests'],
      correctAnswer: "JSON doesn't support null values",
      funcExample: null,
      explanation: "JSON accepts strings, numbers, objects, arrays, booleans, and null values."
    },
    {
      //Question 8
      id: 8,
      question: "Why won't this code work?",
      answers: ['Incorrect use of "const"', '"getElementsByClassName" returns a node list, not a single element', "You can't change CSS using JavaScript", '"element" should be ".element"'],
      correctAnswer: '"getElementsByClassName" returns a node list, not a single element',
      funcExample: `
      function changeColor(newColor){
        const el = document.getElementsByClassName('element')
        el.style.color = newColor
      }
      `,
      explanation: "'getElementsByClassName' returns a node list (similar to an array) which must be iterated over like any other list."
    },
    {
      //Question 9
      id: 9,
      question: "What is the time complexity of this function?",
      answers: ['O(1)', 'O(N)', 'O(N^2)', 'O(logn)'],
      correctAnswer: 'O(N)',
      funcExample: `
      const findIndex = (items, match) => {
        for (let i = 0, total = items.length; i < total; i++)
          if (items[i] == match)
            return i;
         return -1;
      };
      `,
      explanation: "unnested for loops go through 'n' iterations that increase linearly with the the size of 'n', therefore the time complexity (or Big O notation) is O(n)."
    },
    {
      //Question 10
      id: 10,
      question: "How would you split this string representing time on a clock into an array of hours and seconds?",
      answers: ["time.split('')", "time.split(' ')", "time.split('2')", "time.split(':')"],
      correctAnswer: "time.split(':')",
      funcExample: `const time = "02:21"`,
      explationation: 'time.split(":") will return ["02", "21"] because it was split on the colon.'
    }
  ],
  currentScore: 0,
  currentQuestion: 0,
};
