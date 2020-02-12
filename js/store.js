const STORE = {
  questions: [
    {
      // Question 1
      id: 1,
      question: "What will this function return?",
      answers: ["5", "10", "15", "0"],
      correctAnswer: "15",
      funcExample: `
      <span class="keyword">function</span> <span class="function">math</span><span class="punc">(</span>a<span class="punc">,</span> b<span class="punc">){</span>
        <span class="keyword">return</span> a <span class="math">+</span> b<span class="punc">;</span>
      <span class="punc">}</span>
      
      <span class="function">math</span><span class="punc">(</span><span class="number">5</span><span class="punc">,</span> <span class="number">10</span><span class="punc">);</span>
      `,
      explanation:
        "This function adds the arguments a and b together and returns their sum, giving us <b>15</b>.",
    },
    {
      // Question 2
      id: 2,
      question: "What is this function an example of?",
      answers: ['Closure', 'Recursion', 'Ternary Operation', 'Infinite Loop'],
      correctAnswer: "Recursion",
      funcExample: `
      <span class="keyword">function</span> <span class="function">factorial</span><span class="punc">(</span>n<span class="punc">){</span>
        <span class="keyword">if</span> <span class="punc">(</span>n <span class="math"><=</span> <span class="number">1</span><span class="punc">)</span> <span class="function">return</span> <span class="math">-</span><span class="number">1</span><span class="punc">;</span>
        <span class="keyword">return</span> n <span class="math">*</span> <span class="function">factorial</span><span class="punc">(</span>n <span class="math">-</span> <span class="number">1</span><span class="punc">);</span>
      }
      `,
      explanation: "This function is an example of <b>recursion</b>, when a function calls itself."
    },
    {
      //Question 3
      id: 3,
      question: "Which object method would be most useful to turn an object into an array like this:",
      answers: ['Object.values()', 'Object.entries()', 'Object.keys()', 'Object.assign()'],
      correctAnswer: "Object.entries()",
      funcExample: `<span class="function">toArray</span><span class="punc">({</span> a<span class="punc">:</span> <span class="number">1</span><span class="punc">,</span> b<span class="punc">:</span> <span class="number">2</span> <span class="punc">})</span> 
        <span class="math">➞</span> <span class="punc">[[</span><span class="string">"a"</span><span class="punc">,</span> <span class="number">1</span><span class="punc">]</span><span class="punc">,</span> <span class="punc">[</span><span class="string">"b"</span><span class="punc">,</span> <span class="number">2</span><span class="punc">]]</span>`,
      explanation: '<b>Object.entries()</b> takes an object and returns an array in the form ["key", "value"].'
    },
    {
      //Question 4
      id: 4,
      question: "Which regex equation could be used to determine if a string has the characters 'a' and 'c' (in that order) with <u>zero or more</u> 'b' characters between?",
      answers: ['/ab*c/', '/[abc]/', '/a[b]c/', '/a^bc/'],
      correctAnswer: "/ab*c/",
      funcExample: `
      <span class="keyword">function</span> <span class="function">regexTest</span><span class="punc">(</span>string<span class="punc">){</span>
        <span class="keyword">const</span> regex <span class="math">=</span> <span class="punc">/</span><span class="regex">*insert regex here*</span><span class="punc">/;</span>
        <span class="keyword">return</span> regex<span class="punc">.</span><span class="function">test</span><span class="punc">(</span>string<span class="punc">);</span>
      }`,
      explanation: "'*' in regex means 0 or more of any character, so <b>/ab*c/</b> means a followed by zero or more b characters followed by c."
    },
    {
      //Question 5
      id: 5,
      question: "What does the following code do:",
      answers: ['Check if array has only numbers', 'Find index of all numbers in array', 'Remove numbers from array', 'Return a new array with only numbers'],
      correctAnswer: "Return a new array with only numbers",
      funcExample: `<span class="keyword">const</span> arrayManipulation <span class="math">=</span> arr <span class="math">=></span><span class="punc"> {</span>
       <span class="keyword">return </span>arr<span class="punc">
        .</span><span class="function">filter</span><span class="punc">(</span>n <span class="math">=></span> <span class="keyword">typeof</span> n <span class="math">===</span> <span class="string">'number'</span><span class="punc">);</span>
      <span class="punc">}</span>`,
      explanation: "The filter method returns an array of values that pass the condition in the provided function, <b>which here returns only number values</b>."
    },
    {
      //Question 6
      id: 6,
      question: "Why does this code return false?",
      answers: ["Two objects can't have the same key/value pairs", 'Both objects exist in different places in memory', 'Objects can only be compared with "=="', 'You can never compare objects'],
      correctAnswer: 'Both objects exist in different places in memory',
      funcExample: `
      <span class="keyword">const</span> obj1 <span class="math">=</span> <span class="punc">{</span>name<span class="punc">:</span> <span class="string">"Brandon"</span><span class="punc">}</span>
      <span class="keyword">const</span> obj2 <span class="math">=</span> <span class="punc">{</span>name<span class="punc">:</span> <span class="string">"Brandon"</span><span class="punc">}</span>

      <span class="keyword">console</span><span class="punc">.</span><span class="function">log</span><span class="punc">(</span>obj1 <span class="math">===</span> obj2<span class="punc">)</span> 
        <span class="comment">// returns false</span>`,
      explanation: "Objects (even ones with the exact same key and value pairs) are still unique and different pieces of data that exist <b>in different places in memory.</b>"
    },
    {
      //Question 7
      id: 7,
      question: "What is NOT true of JSON:",
      answers: ['JSON stands for JavaScript Object Notation', `JSON doesn't support null values`, 'JSON keys must be in quotations unlike regular JavaScript objects', 'JSON is often used in GET AJAX requests'],
      correctAnswer: `JSON doesn't support null values`,
      funcExample: null,
      explanation: `JSON accepts strings, numbers, objects, arrays, booleans, <b>and null values</b>.`
    },
    {
      //Question 8
      id: 8,
      question: "Why won't this code work?",
      answers: ['Incorrect use of "const"', `getElementsByClassName returns a node list, not a single element`, "You can't change CSS using JavaScript", `element should be .element`],
      correctAnswer: `getElementsByClassName returns a node list, not a single element`,
      funcExample: `
      <span class="keyword">function</span> <span class="function">changeColor</span><span class="punc">(</span>newColor<span class="punc">){</span>
        <span class="keyword">const</span> el <span class="math">=</span> document<span class="punc">.</span><span class="function">getElementsByClassName</span><span class="punc">(</span><span class="string">'element'</span><span class="punc">);</span>
        el<span class="punc">.</span>style<span class="punc">.</span><span class="function">color</span> = newColor<span class="punc">;</span>
      <span class="punc">}</span>
      `,
      explanation: `<b>getElementsByClassName returns a node list</b> (similar to an array) which must be iterated over like any other list.`
    },
    {
      // Question 9
      id: 9,
      question: "What is the time complexity of this function?",
      answers: ['O(1)', 'O(N)', 'O(N^2)', 'O(logn)'],
      correctAnswer: 'O(N)',
      funcExample: `
      <span class="keyword">const</span> findIndex <span class="math">=</span> <span class="punc">(</span>items<span class="punc">,</span> match<span class="punc">)</span> <span class="math">=></span> <span class="punc">{</span>
        <span class="keyword">for</span> <span class="punc">(</span><span class="keyword">let</span> i <span class="math">=</span> <span class="number">0</span><span class="punc">,</span> total <span class="math">=</span> items<span class="punc">.</span>length<span class="punc">;</span> i <span class="math"><</span> total<span class="punc">;</span> i<span class="math">++</span><span class="punc">) {</span> 
          <span class="keyword">if</span> <span class="punc">(</span>items<span class="punc">[</span>i<span class="punc">]</span> <span class="math">==</span> match<span class="punc">)</span> 
          <span class="keyword">return</span> i;
        <span class="punc">}</span>
        <span class="keyword">return</span> -1;
      <span class="punc">};</span>
      `,
      explanation: "unnested for loops go through 'n' iterations <b>that increase linearly</b> with the the size of 'n', therefore the time complexity (or Big O notation) is O(n)."
    },
    {
      //Question 10
      id: 10,
      question: "How would you split this string representing time on a clock into an array of hours and seconds?",
      answers: ["time.split('')", "time.split(' ')", "time.split('2')", "time.split(':')"],
      correctAnswer: "time.split(':')",
      funcExample: `<span class="keyword">const</span> time <span class="math">=</span> <span class="string">"02:21"</span><span class="punc">;</span>`,
      explanation: '<b>time.split(":")</b> will return ["02", "21"] because it was split on the colon.'
    }
  ],
  currentScore: 0,
  currentQuestion: 0,
};
