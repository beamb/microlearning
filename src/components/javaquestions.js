export const javaQuestions = [ {
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

    export default {
        javaQuestions,
    }
