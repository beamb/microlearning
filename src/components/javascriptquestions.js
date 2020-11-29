export const javascriptQuestions = [
  {
    qid: 0,
    question: "Which of the following is correct about features of JavaScript?",
    description: "Both of the above options are correct.",
    options: [
      {
        text: "JavaScript is is complementary to and integrated with HTML.",
        is_correct: false,
      },
      {
        text: "JavaScript is open and cross-platform.",
        is_correct: false,
      },
      {
        text: "Both of the above.",
        is_correct: true,
      },
      {
        text: "None of the above.",
        is_correct: false,
      },
    ],
  },
  {
    qid: 1,
    question:
      "Which of the following is the correct syntax to print a page using JavaScript?",
    description: "window.print(); is the correct option.",
    options: [
      {
        text: "window.print();",
        is_correct: true,
      },
      {
        text: "browser.print();",
        is_correct: false,
      },
      {
        text: "navigator.print();",
        is_correct: false,
      },
      {
        text: "document.print();",
        is_correct: false,
      },
    ],
  },
  {
    qid: 2,
    question:
      "Which of the following type of variable is visible only within a function where it is defined?",
    description:
      "Local Variables: A local variable will be visible only within a function where it is defined. Function parameters are always local to that function.",
    options: [
      {
        text: "global variable",
        is_correct: false,
      },
      {
        text: "local variable",
        is_correct: true,
      },
      {
        text: "Both of the above.",
        is_correct: false,
      },
      {
        text: "None of the above.",
        is_correct: false,
      },
    ],
  },
  {
    qid: 3,
    question:
      "Which of the following function of Number object formats a number with a specific number of digits to the right of the decimal?",
    description:
      "toFixed() − Formats a number with a specific number of digits to the right of the decimal.",
    options: [
      {
        text: "toExponential()",
        is_correct: false,
      },
      {
        text: "toPrecision()",
        is_correct: false,
      },
      {
        text: "toLocaleString()",
        is_correct: false,
      },
      {
        text: "toFixed()",
        is_correct: true,
      },
    ],
  },
  {
    qid: 4,
    question:
      "Which of the following function of Number object returns a string value version of the current number in a format that may vary according to a browser's locale settings.?",
    description:
      "toLocaleString() − Returns a string value version of the current number in a format that may vary according to a browser's locale settings.",
    options: [
      {
        text: "toExponential()",
        is_correct: false,
      },
      {
        text: "toFixed()",
        is_correct: false,
      },
      {
        text: "toLocaleString()",
        is_correct: true,
      },
      {
        text: "toString()",
        is_correct: false,
      },
    ],
  },
  {
    qid: 5,
    question:
      "Which of the following function of String object is used to find a match between a regular expression and a string, and to replace the matched substring with a new substring?",
    description:
      "replace() − Used to find a match between a regular expression and a string, and to replace the matched substring with a new substring.",
    options: [
      {
        text: "concat()",
        is_correct: false,
      },
      {
        text: "match()",
        is_correct: false,
      },
      {
        text: "replace()",
        is_correct: true,
      },
      {
        text: "search()",
        is_correct: false,
      },
    ],
  },
  {
    qid: 6,
    question:
      "Which of the following function of String object returns the calling string value converted to lower case while respecting the current locale?",
    description:
      "toLocaleLowerCase() − Returns the calling string value converted to lower case while respecting the current locale.",
    options: [
      {
        text: "toLocaleLowerCase()",
        is_correct: true,
      },
      {
        text: "toLowerCase()",
        is_correct: false,
      },
      {
        text: "toString()",
        is_correct: false,
      },
      {
        text: "substring()",
        is_correct: false,
      },
    ],
  },
  {
    qid: 7,
    question:
      "Which of the following function of String object causes a string to be displayed in the specified size as if it were in a <font size = 'size'> tag?",
    description:
      "fontsize() − Causes a string to be displayed in the specified size as if it were in a <font size = 'size'> tag.",
    options: [
      {
        text: "fixed()",
        is_correct: false,
      },
      {
        text: "fontcolor()",
        is_correct: false,
      },
      {
        text: "fontsize()",
        is_correct: true,
      },
      {
        text: "bold()",
        is_correct: false,
      },
    ],
  },
  {
    qid: 8,
    question:
      "Which of the following function of Array object creates a new array with the results of calling a provided function on every element in this array?",
    description:
      "map() − Creates a new array with the results of calling a provided function on every element in this array.",
    options: [
      {
        text: "push()",
        is_correct: false,
      },
      {
        text: "join()",
        is_correct: false,
      },
      {
        text: "pop()",
        is_correct: false,
      },
      {
        text: "map()",
        is_correct: true,
      },
    ],
  },
  {
    qid: 9,
    question:
      "Which of the following function of Array object reverses the order of the elements of an array?",
    description: "reverse() − Reverses the order of the elements of an array.",
    options: [
      {
        text: "reverse()",
        is_correct: true,
      },
      {
        text: "push()",
        is_correct: false,
      },
      {
        text: "reduce()",
        is_correct: false,
      },
      {
        text: "reduceRight()",
        is_correct: false,
      },
    ],
  },
  {
    qid: 10,
    question:
      "What is the HTML tag under which one can write the JavaScript code?",
    description:
      "If we want to write a JavaScript code under HTML tag, you will have to use the “script” tag.",
    options: [
      {
        text: "<javascript>",
        is_correct: false,
      },
      {
        text: "<scripted>",
        is_correct: false,
      },
      {
        text: "<script>",
        is_correct: true,
      },
      {
        text: "<js>",
        is_correct: false,
      },
    ],
  },
  {
    qid: 11,
    question:
      "Which of the following is the correct syntax to display “Practice.now()” in an alert box using JavaScript?",
    description:
      "To display any text in the alert box, you need to write it as alert(“Practice.now()”);.",
    options: [
      {
        text: "alert(“Practice.now()”);",
        is_correct: true,
      },
      {
        text: "alertbox(“Practice.now()”);",
        is_correct: false,
      },
      {
        text: "msg(“Practice.now()”);",
        is_correct: false,
      },
      {
        text: "msgbox(“Practice.now()”);",
        is_correct: false,
      },
    ],
  },
  {
    qid: 12,
    question:
      "What is the correct syntax for referring to an external script called “geek.js”?",
    description: "The “src” term is used to refer to any JavaScript file.",
    options: [
      {
        text: "<script name=”geek.js”>",
        is_correct: false,
      },
      {
        text: "<script src=”geek.js”>",
        is_correct: true,
      },
      {
        text: "<script href=”geek.js”>",
        is_correct: false,
      },
      {
        text: "<script ref=”geek.js”>",
        is_correct: false,
      },
    ],
  },
  {
    qid: 13,
    question:
      "Predict the output of the following JavaScript code. <script type='text/javascript'> a = 8 + '8'; document.write(a); </script>",
    description:
      "In the above given code, 8+”8″ have first integer and second string data types. Rather than adding the two numbers, it concatenated the two.",
    options: [
      {
        text: "16",
        is_correct: false,
      },
      {
        text: "Compilation Error",
        is_correct: false,
      },
      {
        text: "Run Time Error",
        is_correct: false,
      },
      {
        text: "88",
        is_correct: true,
      },
    ],
  },
  {
    qid: 14,
    question: "Which of the following is not a reserved word in JavaScript?",
    description:
      "In JavaScript, interface, throws and short are reserved keywords.",
    options: [
      {
        text: "interface",
        is_correct: false,
      },
      {
        text: "throws",
        is_correct: false,
      },
      {
        text: "program",
        is_correct: true,
      },
      {
        text: "short",
        is_correct: false,
      },
    ],
  },
  {
    qid: 15,
    question:
      "How to write an ‘if’ statement for executing some code. If “i” is NOT equal to 5?",
    description: "JavaScript do not accept <> operator as not equal to.",
    options: [
      {
        text: "if(i<>5)",
        is_correct: false,
      },
      {
        text: "if i<>5",
        is_correct: false,
      },
      {
        text: "if(i!=5)",
        is_correct: true,
      },
      {
        text: "if i!=5",
        is_correct: false,
      },
    ],
  },
  {
    qid: 16,
    question: "What is the correct syntax for adding comments in JavaScript?",
    description: "Correct Syntax for comments in JavaScript is //comment.",
    options: [
      {
        text: "//This is a comment",
        is_correct: true,
      },
      {
        text: "<!–This is a comment–&gt",
        is_correct: false,
      },
      {
        text: "–This is a comment",
        is_correct: false,
      },
      {
        text: "**This is a comment**",
        is_correct: false,
      },
    ],
  },
  {
    qid: 17,
    question:
      "What is the method in JavaScript used to remove the whitespace at the beginning and end of any string ?",
    description:
      "The trim() method in JavaScript is used to remove the whitespaces at the beginning and end of the string.",
    options: [
      {
        text: "strip()",
        is_correct: false,
      },
      {
        text: "stripped()",
        is_correct: false,
      },
      {
        text: "trim()",
        is_correct: true,
      },
      {
        text: "trimmed()",
        is_correct: false,
      },
    ],
  },
  {
    qid: 18,
    question:
      "In JavaScript, we do not have datatypes like integer and float. What is the function that can be used to check if the number is an integer or not?",
    description:
      "isInteger() function is used to check whether a number is integer or not. The function is used as: document.write(number.isInteger(2018)) will result as true.",
    options: [
      {
        text: "Integer(value)",
        is_correct: false,
      },
      {
        text: "ifInteger(value)",
        is_correct: false,
      },
      {
        text: "ifinteger(value)",
        is_correct: false,
      },
      {
        text: "isInteger(value)",
        is_correct: true,
      },
    ],
  },
  {
    qid: 19,
    question: "JavaScript is a ________ Side Scripting Language.",
    description:
      "JavaScript is a Browser Side Scripting Language. ASP, PHP, Perl are Server Side Scripting Language.",
    options: [
      {
        text: "Browser",
        is_correct: true,
      },
      {
        text: "Server",
        is_correct: false,
      },
      {
        text: "ISP",
        is_correct: false,
      },
      {
        text: "None of the above",
        is_correct: false,
      },
    ],
  },
];
