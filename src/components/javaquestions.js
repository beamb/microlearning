export const javaQuestions = [
  {
    qid: "j0",
    question: "What is a class in java?",
    description: "A class is a blue print from which individual objects are created. A class can contain fields and methods to describe the behavior of an object.",
    options: [
      {
        text:
          "A class is a blue print from which individual objects are created. A class can contain fields and methods to describe the behavior of an object.",
        is_correct: true,
      },
      {
        text: "A class is a special data type.",
        is_correct: false,
      },
      {
        text: "A class is used to allocate memory to a data type.",
        is_correct: false,
      },
      {
        text: "None of the above",
        is_correct: false,
      },
    ],
  },
  {
    qid: "j1",
    question: "What is Encapsulation?",
    description: "It is the technique of making the fields in a class private and providing access to the fields via public methods. If a field is declared private, it cannot be accessed by anyone outside the class, thereby hiding the fields within the class. Therefore encapsulation is also referred to as data hiding.",
    options: [
      {
        text:
          "Encapsulation is a technique to define different methods of same type.",
        is_correct: false,
      },
      {
        text:
          "Encapsulation is the ability of an object to take on many forms.",
        is_correct: false,
      },
      {
        text:
          "Encapsulation is the technique of making the fields in a class private and providing access to the fields via public methods.",
        is_correct: true,
      },
      {
        text: "None of the above",
        is_correct: false,
      },
    ],
  },
  {
    qid: "j2",
    question: "What is the size of boolean variable?",
    description: "The boolean data type can take either true or false, but its \"size\" isn't precisely defined.",
    options: [
      {
        text: "8 bit",
        is_correct: false,
      },
      {
        text: "16 bit",
        is_correct: true,
      },
      {
        text: "32 bit",
        is_correct: false,
      },
      {
        text: "None precisely defined",
        is_correct: false,
      },
    ],
  },
  {
    qid: "j3",
    question: "What is polymorphism?",
    description: "Polymorphism is the ability of an object to take on many forms. The most common use of polymorphism in OOP occurs when a parent class reference is used to refer to a child class object.",
    options: [
      {
        text:
          "Polymorphism is a technique to define different objects of same type.",
        is_correct: false,
      },
      {
        text: "Polymorphism is the ability of an object to take on many forms.",
        is_correct: true,
      },
      {
        text:
          "Polymorphism is a technique to define different methods of same type.",
        is_correct: false,
      },
      {
        text: "None of the above",
        is_correct: false,
      },
    ],
  },
  {
    qid: "j3",
    question: "What is the default value of float variable?",
    description: "float variable has default value of 0.0f if defined as an instance/static variable.",
    options: [
      {
        text: "0.0d",
        is_correct: false,
      },
      {
        text: "0",
        is_correct: false,
      },
      {
        text: "0.0f",
        is_correct: true,
      },
      {
        text: "Not defined",
        is_correct: false,
      },
    ],
  },
  {
    qid: "j4",
    question: "What is an applet?",
    description: "An applet is a Java program that runs in a Web browser.",
    options: [
      {
        text: "Applet is a run time environment.",
        is_correct: false,
      },
      {
        text: "Applet is a standalone java program.",
        is_correct: false,
      },
      {
        text: "Applet is a tool.",
        is_correct: false,
      },
      {
        text: "An applet is a Java program that runs in a Web browser.",
        is_correct: true,
      },
    ],
  },
  {
    qid: "j5",
    question: "Method Overriding is an example of",
    description: "Method Overriding is an example of dynamic binding.",
    options: [
      {
        text: "Static Binding.",
        is_correct: false,
      },
      {
        text: "Dynamic Binding.",
        is_correct: true,
      },
      {
        text: "Both of the above.",
        is_correct: false,
      },
      {
        text: "None of the above",
        is_correct: false,
      },
    ],
  },
  {
    qid: "j6",
    question: "What invokes a thread's run() method?",
    description: "After a thread is started, via its start() method of the Thread class, the JVM invokes the thread's run() method when the thread is initially executed.",
    options: [
      {
        text: "Main application running the thread.",
        is_correct: false,
      },
      {
        text: "start() method of the thread class.",
        is_correct: false,
      },
      {
        text:
          "JVM invokes the thread's run() method when the thread is initially executed.",
        is_correct: true,
      },
      {
        text: "None of the above",
        is_correct: false,
      },
    ],
  },
  {
    qid: "j7",
    question:
      "What will happen if static modifier is removed from the signature of the main method?",
    description: "Program throws \"NoSuchMethodError\" error at runtime.",
    options: [
      {
        text: "Compilation Error.",
        is_correct: false,
      },
      {
        text: "Program will compile and run without any output.",
        is_correct: false,
      },
      {
        text: "Program will compile and run to show the required output.",
        is_correct: false,
      },
      {
        text: "RunTime Error: NoSuchMethodError.",
        is_correct: true,
      },
    ],
  },
  {
    qid: "j8",
    question:
      "Which of the following is Faster, StringBuilder or StringBuffer?",
      description: "StringBuilder is faster than StringBuffer.",
    options: [
      {
        text: "StringBuilder",
        is_correct: true,
      },
      {
        text: "StringBuffer",
        is_correct: false,
      },
      {
        text: "Both of the above",
        is_correct: false,
      },
      {
        text: "None of the above",
        is_correct: false,
      },
    ],
  },
  {
    qid: "j9",
    question:
      "What is local variable?",
      description: "Variables defined inside methods, constructors or blocks are called local variables. The variable will be declared and initialized within the method and it will be destroyed when the method has completed.",
    options: [
      {
        text: "Variables defined outside methods, constructors or blocks are called local variables.",
        is_correct: false,
      },
      {
        text: "Static variables defined outside methods, constructors or blocks are called local variables.",
        is_correct: false,
      },
      {
        text: "Variables defined inside methods, constructors or blocks are called local variables.",
        is_correct: false,
      },
      {
        text: "None of the above.",
        is_correct: true,
      },
    ],
  },
];

export default {
  javaQuestions,
};
