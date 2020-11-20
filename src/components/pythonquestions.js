export const pythonQuestions = [
  {
    qid: 0,
    question: "What is output for − a = ['hat', 'mat', 'rat'] 'rhyme'.join(a)",
    description: "The method join() takes list of string as input and returns string as output. It removes ‘,’ and add the given string with join to the list.",
    options: [
      {
        text: "[‘hat’,’mat’,’rat’,’rhyme’]",
        is_correct: false,
      },
      {
        text: "‘hatmatratrhyme’",
        is_correct: false,
      },
      {
        text: "[‘hat mat rat rhyme’]",
        is_correct: false,
      },
      {
        text: "‘hatrhymematrhyme rat’",
        is_correct: true,
      },
    ],
  },
  {
    qid: 1,
    question: "Which is invalid in python for z = 5 ?",
    description: "z = z++ is not valid in python, it is not a legal expression. It results in syntax error.",
    options: [
      {
        text: "z = z++",
        is_correct: true,
      },
      {
        text: "z = ++z",
        is_correct: false,
      },
      {
        text: "z += 1",
        is_correct: false,
      },
      {
        text: "z -= 1",
        is_correct: false,
      },
    ],
  },
  {
    qid: 2,
    question: "Which operator is right-associative",
    description: "‘=‘ operator is right associative as assignment operators are right associative.",
    options: [
      {
        text: "*",
        is_correct: false,
      },
      {
        text: "=",
        is_correct: true,
      },
      {
        text: "+",
        is_correct: false,
      },
      {
        text: "%",
        is_correct: false,
      },
    ],
  },
  {
    qid: 3,
    question: "Suppose we have two sets A & B, then A<B is:",
    description: "If A is proper subset of B then hen all elements of A are in B but B contains at least one element that is not in B.",
    options: [
      {
        text: "True if len(A) is less than len(B).",
        is_correct: false,
      },
      {
        text: "True if A is a proper subset of B.",
        is_correct: true,
      },
      {
        text:
          "True if the elements in A when compared are less than the elements in B.",
        is_correct: false,
      },
      {
        text: "True if A is a proper superset of B.",
        is_correct: false,
      },
    ],
  },
  {
    qid: 4,
    question: "Which options are correct to create an empty set in Python?",
    description: "we need to define the set by including the keyword ‘set’.",
    options: [
      {
        text: "{}",
        is_correct: false,
      },
      {
        text: "()",
        is_correct: false,
      },
      {
        text: "[]",
        is_correct: false,
      },
      {
        text: "set()",
        is_correct: true,
      },
    ],
  },
  {
    qid: 5,
    question:
      "Select the correct function among them which can be used to write the data to perform for a binary output?",
    description: "",
    options: [
      {
        text: "Write",
        is_correct: false,
      },
      {
        text: "Output.binary",
        is_correct: false,
      },
      {
        text: "Dump",
        is_correct: true,
      },
      {
        text: "Binary.output",
        is_correct: false,
      },
    ],
  },
  {
    qid: 6,
    question:
      "What is the output of the following program : print 'Hello World'[::-1]",
    description: "[::] depicts extended slicing in Python and [::-1] returns the reverse of the string.",
    options: [
      {
        text: "dlroW olleH",
        is_correct: true,
      },
      {
        text: "Hello Worl",
        is_correct: false,
      },
      {
        text: "d",
        is_correct: false,
      },
      {
        text: "Error",
        is_correct: false,
      },
    ],
  },
  {
    qid: 7,
    question:
      "Given a function that does not return any value, what value is shown when executed at the shell?",
    description: "Python explicitly defines the None object that is returned if no value is specified.",
    options: [
      {
        text: "int",
        is_correct: false,
      },
      {
        text: "bool",
        is_correct: false,
      },
      {
        text: "void",
        is_correct: false,
      },
      {
        text: "None",
        is_correct: true,
      },
    ],
  },
  {
    qid: 8,
    question: "Which module in Python supports regular expressions?",
    description: "re is a part of the standard library and can be imported using: import re.",
    options: [
      {
        text: "re",
        is_correct: true,
      },
      {
        text: "regex",
        is_correct: false,
      },
      {
        text: "pyregex",
        is_correct: false,
      },
      {
        text: "None of the above",
        is_correct: false,
      },
    ],
  },
  {
    qid: 9,
    question:
      "What is the output of the following program : print 0.1 + 0.2 == 0.3",
    description: "Neither of 0.1, 0.2 and 0.3 can be represented accurately in binary. The round off errors from 0.1 and 0.2 accumulate and hence there is a difference of 5.5511e-17 between (0.1 + 0.2) and 0.3.",
    options: [
      {
        text: "True",
        is_correct: false,
      },
      {
        text: "False",
        is_correct: true,
      },
      {
        text: "Machine dependent",
        is_correct: false,
      },
      {
        text: "Error",
        is_correct: false,
      },
    ],
  },
];
