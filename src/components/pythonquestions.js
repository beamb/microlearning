export const pythonQuestions = [
  {
    qid: 0,
    question: "PYTHON: What is output for − a = ['he', 'she', 'we'] ' '.join(a)",
    description:
      "The method join() takes list of string as input and returns string as output. It removes ‘,’ and add the given string with join to the list.",
    options: [
      {
        text: "['heshewe']",
        is_correct: false,
      },
      {
        text: "['he she we']",
        is_correct: false,
      },
      {
        text: "'he she we'",
        is_correct: false,
      },
      {
        text: "'heshewe'",
        is_correct: true,
      },
    ],
  },
  {
    qid: 1,
    question: "PYTHON: Which is invalid in python for z = 5 ?",
    description:
      "z = z++ is not valid in python, it is not a legal expression. It results in syntax error.",
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
    question: "PYTHON: Which operator is right-associative",
    description:
      "‘=‘ operator is right associative as assignment operators are right associative.",
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
    question: "PYTHON: Suppose we have two sets A & B, then A<B is:",
    description:
      "If A is proper subset of B then all elements of A are in B but B contains at least one element that is not in B.",
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
    question: "PYTHON: Which options are correct to create an empty set in Python?",
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
    question: "PYTHON: What does ~~~~~~5 evaluate to?",
    description: "~x is equivalent to -(x+1).",
    options: [
      {
        text: "-11",
        is_correct: false,
      },
      {
        text: "+11",
        is_correct: false,
      },
      {
        text: "+5",
        is_correct: true,
      },
      {
        text: "-5",
        is_correct: false,
      },
    ],
  },
  {
    qid: 6,
    question:
      "PYTHON: What is the output of the following program : print 'Hello World'[::-1]",
    description:
      "[::] depicts extended slicing in Python and [::-1] returns the reverse of the string.",
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
      "PYTHON: Given a function that does not return any value, what value is shown when executed at the shell?",
    description:
      "Python explicitly defines the None object that is returned if no value is specified.",
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
    question: "PYTHON: Which module in Python supports regular expressions?",
    description:
      "re is a part of the standard library and can be imported using: import re.",
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
      "PYTHON: What is the output of the following program : print 0.1 + 0.2 == 0.3",
    description:
      "Neither of 0.1, 0.2 and 0.3 can be represented accurately in binary. The round off errors from 0.1 and 0.2 accumulate and hence there is a difference of 5.5511e-17 between (0.1 + 0.2) and 0.3.",
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
  {
    qid: 10,
    question: "PYTHON: What is output for − b = [11,13,15,17,19,21] ptint(b[::2])",
    description: "b[::2] :- it iterates over the list with ‘2’ increments",
    options: [
      {
        text: "[19,21]",
        is_correct: false,
      },
      {
        text: "[11,15]",
        is_correct: false,
      },
      {
        text: "[11,15,19]",
        is_correct: true,
      },
      {
        text: "[13,17,21]",
        is_correct: false,
      },
    ],
  },
  {
    qid: 11,
    question:
      "PYTHON: Suppose we have a set a = {10,9,8,7}, and we execute a.remove(14) what will happen ?",
    description:
      "since there is no such element in the set, so key error is raised.",
    options: [
      {
        text: "Key error is raised.",
        is_correct: true,
      },
      {
        text: "We cannot remove an element from set.",
        is_correct: false,
      },
      {
        text: "Method is executed but no exception is raised.",
        is_correct: false,
      },
      {
        text: "There doesn’t exist such method as remove.",
        is_correct: false,
      },
    ],
  },
  {
    qid: 12,
    question:
      "PYTHON: Suppose you are given a set(s1={1,2,3}) then what is the output for the code − 2 * s1?",
    description: "* cannot be operated on the sets.",
    options: [
      {
        text: "(1,1,2,2,3,3)",
        is_correct: false,
      },
      {
        text: "Illegal",
        is_correct: true,
      },
      {
        text: "[1,1,2,2,3,3]",
        is_correct: false,
      },
      {
        text: "(1,2,3,1,2,3)",
        is_correct: false,
      },
    ],
  },
  {
    qid: 13,
    question: "PYTHON: Which method is used to convert raw byte data to a string?",
    description:
      "Decode is the method used to convert the raw byte data to a string.",
    options: [
      {
        text: "Encode()",
        is_correct: false,
      },
      {
        text: "Convert()",
        is_correct: false,
      },
      {
        text: "tostring()",
        is_correct: false,
      },
      {
        text: "Decode()",
        is_correct: true,
      },
    ],
  },
  {
    qid: 14,
    question: "PYTHON: Which is the special symbol used in python to add comments?",
    description: "'#' is the special symbol used in python to add comments.",
    options: [
      {
        text: "$",
        is_correct: false,
      },
      {
        text: "//",
        is_correct: false,
      },
      {
        text: "/*.... */",
        is_correct: false,
      },
      {
        text: "#",
        is_correct: true,
      },
    ],
  },
  {
    qid: 15,
    question:
      "PYTHON: What will be the output of the following code : print type(type(int))",
    description:
      "The type() function returns the class of the argument the object belongs to. Thus, type(int) returns which is of the type ‘type’ object.",
    options: [
      {
        text: "type 'int'",
        is_correct: false,
      },
      {
        text: "Error",
        is_correct: false,
      },
      {
        text: "type 'type'",
        is_correct: true,
      },
      {
        text: "0",
        is_correct: false,
      },
    ],
  },
  {
    qid: 16,
    question: "PYTHON: What is the output of the following code : print 9//2",
    description:
      "The ‘//’ operator in Python returns the integer part of the floating number.",
    options: [
      {
        text: "4",
        is_correct: true,
      },
      {
        text: "4.5",
        is_correct: false,
      },
      {
        text: "4.0",
        is_correct: false,
      },
      {
        text: "Error",
        is_correct: false,
      },
    ],
  },
  {
    qid: 17,
    question: "PYTHON: Which operator is overloaded by the or() function?",
    description: "or() function overloads the bitwise OR operator",
    options: [
      {
        text: "||",
        is_correct: false,
      },
      {
        text: "//",
        is_correct: false,
      },
      {
        text: "/",
        is_correct: false,
      },
      {
        text: "|",
        is_correct: true,
      },
    ],
  },
  {
    qid: 18,
    question: "PYTHON: Which of these is not a core data type?",
    description: "Class is a user defined data type",
    options: [
      {
        text: "Class",
        is_correct: true,
      },
      {
        text: "Lists",
        is_correct: false,
      },
      {
        text: "Dictionary",
        is_correct: false,
      },
      {
        text: "Tuples",
        is_correct: false,
      },
    ],
  },
  {
    qid: 19,
    question:
      "PYTHON: Given a string s = “Welcome”, which of the following code is incorrect?",
    description: "strings are immutable in Python",
    options: [
      {
        text: "print s[0]",
        is_correct: false,
      },
      {
        text: "s[1] = ‘r’",
        is_correct: true,
      },
      {
        text: "print s.lower()",
        is_correct: false,
      },
      {
        text: "print s.strip()",
        is_correct: false,
      },
    ],
  },
];
