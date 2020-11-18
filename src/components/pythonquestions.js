export const pythonQuestions = [
  {
    qid: 0,
    question: "What is output for − a = ['hat', 'mat', 'rat'] 'rhyme'.join(a)",
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
