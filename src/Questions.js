import React, { useState, useEffect, useRef } from "react";

export const javaQuestions = (props) => { 
    java: [ {
        qid: 0, 
        question: "What is a class in java?",
        answer1: [{
            text: "A class is a blue print from which individual objects are created. A class can contain fields and methods to describe the behavior of an object.",
            is_correct: true,
        }],
        answer2: [{
            text: "A class is a special data type.",
            is_correct: false,
        }],
        answer3: [{
            text: "A class is used to allocate memory to a data type.",
            is_correct: false,
        }],
        answer4: [{
            text: "None of the above",
            is_correct: false,
        }]
     },
    {
        qid: 1,  
        question: "What is Encapsulation?",
        answer1: [{
            text: "Encapsulation is a technique to define different methods of same type.",
            is_correct: false,
        }],
        answer2: [{
            text: "Encapsulation is the ability of an object to take on many forms.",
            is_correct: false,
        }],
        answer3: [{
            text: "Encapsulation is the technique of making the fields in a class private and providing access to the fields via public methods.",
            is_correct: true,
        }],
        answer4: [{
            text: "None of the above",
            is_correct: false,
        }]
    },
    {
        qid: 2,  
        question: "What is the size of boolean variable?",
        answer1: [{
            text: "8 bit",
            is_correct: false,
        }],
        answer2: [{
            text: "16 bit",
            is_correct: true,
        }],
        answer3: [{
            text: "32 bit",
            is_correct: false,
        }],
        answer4: [{
            text: "None precisely defined",
            is_correct: false,
        }] 
    },
    {
        qid: 3,  
        question: "What is polymorphism?",
        answer1: [{
            text: "Polymorphism is a technique to define different objects of same type.",
            is_correct: false,
        }],
        answer2: [{
            text: "Polymorphism is the ability of an object to take on many forms.",
            is_correct: true,
        }],
        answer3: [{
            text: "Polymorphism is a technique to define different methods of same type.",
            is_correct: false,
        }],
        answer4: [{
            text: "None of the above",
            is_correct: false,
        }] 
    },
    {
        qid: 3,  
        question: "What is the default value of float variable?",
        answer1: [{
            text: "0.0d",
            is_correct: false,
        }],
        answer2: [{
            text: "0",
            is_correct: false,
        }],
        answer3: [{
            text: "0.0f",
            is_correct: true,
        }],
        answer4: [{
            text: "Not defined",
            is_correct: false,
        }] 
    },
    {
        qid: 4,  
        question: "What is an applet?",
        answer1: [{
            text: "Applet is a run time environment.",
            is_correct: false,
        }],
        answer2: [{
            text: "Applet is a standalone java program.",
            is_correct: false,
        }],
        answer3: [{
            text: "Applet is a tool.",
            is_correct: false,
        }],
        answer4: [{
            text: "An applet is a Java program that runs in a Web browser.",
            is_correct: true,
        }]    
    },
    {
        qid: 5,  
        question: "Method Overriding is an example of",
        answer1: [{
            text: "Static Binding.",
            is_correct: false,
        }],
        answer2: [{
            text: "Dynamic Binding.",
            is_correct: true,
        }],
        answer3: [{
            text: "Both of the above.",
            is_correct: false,
        }],
        answer4: [{
            text: "None of the above",
            is_correct: false,
        }]   
    },
    {
        qid: 6,  
        question: "What invokes a thread's run() method?",
        answer1: [{
            text: "Main application running the thread.",
            is_correct: false,
        }],
        answer2: [{
            text: "start() method of the thread class.",
            is_correct: false,
        }],
        answer3: [{
            text: "JVM invokes the thread's run() method when the thread is initially executed.",
            is_correct: true,
        }],
        answer4: [{
            text: "None of the above",
            is_correct: false,
        }] 
    },
    {
        qid: 7,  
        question: "What will happen if static modifier is removed from the signature of the main method?",
        answer1: [{
            text: "Compilation Error.",
            is_correct: false,
        }],
        answer2: [{
            text: "Program will compile and run without any output.",
            is_correct: false,
        }],
        answer3: [{
            text: "Program will compile and run to show the required output.",
            is_correct: false,
        }],
        answer4: [{
            text: "RunTime Error: NoSuchMethodError.",
            is_correct: true,
        }] 
    },
    {
        qid: 8,  
        question: "Which of the following is Faster, StringBuilder or StringBuffer?",
        answer1: [{
            text: "StringBuilder",
            is_correct: true,
        }],
        answer2: [{
            text: "StringBuffer",
            is_correct: false,
        }],
        answer3: [{
            text: "Both of the above",
            is_correct: false,
        }],
        answer4: [{
            text: "None of the above",
            is_correct: false,
        }] 
    },
    {
        qid: 9,  
        question: "If we declare int [ ] ar = {1,2,3,4,5,6}; The size of the array ar is:",
        answer1: [{
            text: "0",
            is_correct: false,
        }],
        answer2: [{
            text: "5",
            is_correct: false,
        }],
        answer3: [{
            text: "6",
            is_correct: true,
        }],
        answer4: [{
            text: "7",
            is_correct: false,
        }] 
    },
    ]
};

export const pythonQuestions = (props) => {
    python: [ {
        qid: 0,  
        question: "What is output for − a = ['hat', 'mat', 'rat'] 'rhyme'.join(a)",
        answer1: [{
            text: "[‘hat’,’mat’,’rat’,’rhyme’]",
            is_correct: false,
        }],
        answer2: [{
            text: "‘hatmatratrhyme’",
            is_correct: false,
        }],
        answer3: [{
            text: "[‘hat mat rat rhyme’]",
            is_correct: false,
        }],
        answer4: [{
            text: "‘hatrhymematrhyme rat’",
            is_correct: true,
        }]    
    },
    {
        qid: 1,  
        question: "Which is invalid in python for z = 5 ?",
        answer1: [{
            text: "z = z++",
            is_correct: true,
        }],
        answer2: [{
            text: "z = ++z",
            is_correct: false,
        }],
        answer3: [{
            text: "z += 1",
            is_correct: false,
        }],
        answer4: [{
            text: "z -= 1",
            is_correct: false,
        }] 
    },
    {
        qid: 2,  
        question: "Which operator is right-associative",
        answer1: [{
            text: "*",
            is_correct: false,
        }],
        answer2: [{
            text: "=",
            is_correct: true,
        }],
        answer3: [{
            text: "+",
            is_correct: false,
        }],
        answer4: [{
            text: "%",
            is_correct: false,
        }] 
    },
    {
        qid: 3,  
        question: "Suppose we have two sets A & B, then A<B is:",
        answer1: [{
            text: "True if len(A) is less than len(B).",
            is_correct: false,
        }],
        answer2: [{
            text: "True if A is a proper subset of B.",
            is_correct: true,
        }],
        answer3: [{
            text: "True if the elements in A when compared are less than the elements in B.",
            is_correct: false,
        }],
        answer4: [{
            text: "True if A is a proper superset of B.",
            is_correct: false,
        }] 
    },
    {
        qid: 4,  
        question: "Which options are correct to create an empty set in Python?",
        answer1: [{
            text: "{}",
            is_correct: false,
        }],
        answer2: [{
            text: "()",
            is_correct: false,
        }],
        answer3: [{
            text: "[]",
            is_correct: false,
        }],
        answer4: [{
            text: "set()",
            is_correct: true,
        }] 
    },
    {
        qid: 5,  
        question: "Select the correct function among them which can be used to write the data to perform for a binary output?",
        answer1: [{
            text: "Write",
            is_correct: false,
        }],
        answer2: [{
            text: "Output.binary",
            is_correct: false,
        }],
        answer3: [{
            text: "Dump",
            is_correct: true,
        }],
        answer4: [{
            text: "Binary.output",
            is_correct: false,
        }] 
    },
    {
        qid: 6,  
        question: "What is the output of the following program : print 'Hello World'[::-1]",
        answer1: [{
            text: "dlroW olleH",
            is_correct: true,
        }],
        answer2: [{
            text: "Hello Worl",
            is_correct: false,
        }],
        answer3: [{
            text: "d",
            is_correct: false,
        }],
        answer4: [{
            text: "Error",
            is_correct: false,
        }] 
    },
    {
        qid: 7,  
        question: "Given a function that does not return any value, what value is shown when executed at the shell?",
        answer1: [{
            text: "int",
            is_correct: false,
        }],
        answer2: [{
            text: "bool",
            is_correct: false,
        }],
        answer3: [{
            text: "void",
            is_correct: false,
        }],
        answer4: [{
            text: "None",
            is_correct: true,
        }]  
    },
    {
        qid: 8,  
        question: "Which module in Python supports regular expressions?",
        answer1: [{
            text: "re",
            is_correct: true,
        }],
        answer2: [{
            text: "regex",
            is_correct: false,
        }],
        answer3: [{
            text: "pyregex",
            is_correct: false,
        }],
        answer4: [{
            text: "None of the above",
            is_correct: false,
        }]  
    },
    {
        qid: 9,  
        question: "What is the output of the following program : print 0.1 + 0.2 == 0.3",
        answer1: [{
            text: "True",
            is_correct: false,
        }],
        answer2: [{
            text: "False",
            is_correct: true,
        }],
        answer3: [{
            text: "Machine dependent",
            is_correct: false,
        }],
        answer4: [{
            text: "Error",
            is_correct: false,
        }] 
    }]
};

export const javascriptQuestions = (props) => {
    javascript: [ {
        qid: 0,  
        question: "Which of the following is correct about features of JavaScript?",
        answer1: [{
            text: "JavaScript is is complementary to and integrated with HTML.",
            is_correct: false,
        }],
        answer2: [{
            text: "JavaScript is open and cross-platform.",
            is_correct: false,
        }],
        answer3: [{
            text: "Both of the above.",
            is_correct: true,
        }],
        answer4: [{
            text: "All of the above.",
            is_correct: false,
        }] 
    }, {
        qid: 1,  
        question: "Which of the following is the correct syntax to print a page using JavaScript?",
        answer1: [{
            text: "window.print();",
            is_correct: true,
        }],
        answer2: [{
            text: "browser.print();",
            is_correct: false,
        }],
        answer3: [{
            text: "navigator.print();",
            is_correct: false,
        }],
        answer4: [{
            text: "document.print();",
            is_correct: false,
        }] 
    },
    {
        qid: 2,  
        question: "Which of the following type of variable is visible only within a function where it is defined?",
        answer1: [{
            text: "global variable",
            is_correct: false,
        }],
        answer2: [{
            text: "local variable",
            is_correct: true,
        }],
        answer3: [{
            text: "Both of the above.",
            is_correct: false,
        }],
        answer4: [{
            text: "None of the above.",
            is_correct: false,
        }] 
    },
    {
        qid: 3,  
        question: "Which of the following function of Number object formats a number with a specific number of digits to the right of the decimal?",
        answer1: [{
            text: "toExponential()",
            is_correct: false,
        }],
        answer2: [{
            text: "toPrecision()",
            is_correct: false,
        }],
        answer3: [{
            text: "toLocaleString()",
            is_correct: false,
        }],
        answer4: [{
            text: "toFixed()",
            is_correct: true,
        }]  
    },
    {
        qid: 4,  
        question: "Which of the following function of Number object returns a string value version of the current number in a format that may vary according to a browser's locale settings.?",
        answer1: [{
            text: "toExponential()",
            is_correct: false,
        }],
        answer2: [{
            text: "toFixed()",
            is_correct: false,
        }],
        answer3: [{
            text: "toLocaleString()",
            is_correct: true,
        }],
        answer4: [{
            text: "toString()",
            is_correct: false,
        }]  
    },
    {
        qid: 5,  
        question: "Which of the following function of String object is used to find a match between a regular expression and a string, and to replace the matched substring with a new substring?",
        answer1: [{
            text: "concat()",
            is_correct: false,
        }],
        answer2: [{
            text: "match()",
            is_correct: false,
        }],
        answer3: [{
            text: "replace()",
            is_correct: true,
        }],
        answer4: [{
            text: "search()",
            is_correct: false,
        }]  
    },
    {
        qid: 6,  
        question: "Which of the following function of String object returns the calling string value converted to lower case while respecting the current locale?",
        answer1: [{
            text: "toLocaleLowerCase()",
            is_correct: true,
        }],
        answer2: [{
            text: "toLowerCase()",
            is_correct: false,
        }],
        answer3: [{
            text: "toString()",
            is_correct: false,
        }],
        answer4: [{
            text: "substring()",
            is_correct: false,
        }] 
    },
    {
        qid: 7,  
        question: "Which of the following function of String object causes a string to be displayed in the specified size as if it were in a <font size = 'size'> tag?",
        answer1: [{
            text: "fixed()",
            is_correct: false,
        }],
        answer2: [{
            text: "fontcolor()",
            is_correct: false,
        }],
        answer3: [{
            text: "fontsize()",
            is_correct: true,
        }],
        answer4: [{
            text: "bold()",
            is_correct: false,
        }] 
    },
    {
        qid: 8,  
        question: "Which of the following function of Array object creates a new array with the results of calling a provided function on every element in this array?",
        answer1: [{
            text: "push()",
            is_correct: false,
        }],
        answer2: [{
            text: "join()",
            is_correct: false,
        }],
        answer3: [{
            text: "pop()",
            is_correct: false,
        }],
        answer4: [{
            text: "map()",
            is_correct: true,
        }] 
    },
    {
        qid: 9,  
        question: "Which of the following function of Array object reverses the order of the elements of an array?",
        answer1: [{
            text: "reverse()",
            is_correct: true,
        }],
        answer2: [{
            text: "push()",
            is_correct: false,
        }],
        answer3: [{
            text: "reduce()",
            is_correct: false,
        }],
        answer4: [{
            text: "reduceRight()",
            is_correct: false,
        }] 
    }
]
};

