export const javaQuestions = [
  {
    qid: "j0",
    question: "What is a class in java?",
    description:
      "A class is a blue print from which individual objects are created. A class can contain fields and methods to describe the behavior of an object.",
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
    description:
      "It is the technique of making the fields in a class private and providing access to the fields via public methods. If a field is declared private, it cannot be accessed by anyone outside the class, thereby hiding the fields within the class. Therefore encapsulation is also referred to as data hiding.",
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
    description:
      'The boolean data type can take either true or false, but its "size" isn\'t precisely defined.',
    options: [
      {
        text: "8 bit",
        is_correct: false,
      },
      {
        text: "16 bit",
        is_correct: false,
      },
      {
        text: "32 bit",
        is_correct: false,
      },
      {
        text: "None precisely defined",
        is_correct: true,
      },
    ],
  },
  {
    qid: "j3",
    question: "What is polymorphism?",
    description:
      "Polymorphism is the ability of an object to take on many forms. The most common use of polymorphism in OOP occurs when a parent class reference is used to refer to a child class object.",
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
    qid: "j4",
    question: "What is the default value of float variable?",
    description:
      "float variable has default value of 0.0f if defined as an instance/static variable.",
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
    qid: "j5",
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
    qid: "j6",
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
    qid: "j7",
    question: "What invokes a thread's run() method?",
    description:
      "After a thread is started, via its start() method of the Thread class, the JVM invokes the thread's run() method when the thread is initially executed.",
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
    qid: "j8",
    question:
      "What will happen if static modifier is removed from the signature of the main method?",
    description: 'Program throws "NoSuchMethodError" error at runtime.',
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
    qid: "j9",
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
    qid: "j10",
    question: "What is local variable?",
    description:
      "Variables defined inside methods, constructors or blocks are called local variables. The variable will be declared and initialized within the method and it will be destroyed when the method has completed.",
    options: [
      {
        text:
          "Variables defined outside methods, constructors or blocks are called local variables.",
        is_correct: false,
      },
      {
        text:
          "Static variables defined outside methods, constructors or blocks are called local variables.",
        is_correct: false,
      },
      {
        text:
          "Variables defined inside methods, constructors or blocks are called local variables.",
        is_correct: true,
      },
      {
        text: "None of the above.",
        is_correct: false,
      },
    ],
  },
  {
    qid: "j11",
    question: "Which of the following is not a keyword in java?",
    description: "Boolean is a class and is not a keyword.",
    options: [
      {
        text: "Boolean",
        is_correct: true,
      },
      {
        text: "static",
        is_correct: false,
      },
      {
        text: "void",
        is_correct: false,
      },
      {
        text: "private",
        is_correct: false,
      },
    ],
  },
  {
    qid: "j12",
    question: "What is the size of short variable?",
    description:
      "The short data type is represented by 16-bit signed two's complement integer. Minimum value: -32,768. Maximum value: 32,767.",
    options: [
      {
        text: "8 bit",
        is_correct: false,
      },
      {
        text: "64 bit",
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
    ],
  },
  {
    qid: "j13",
    question: "What is the default value of Boolean variable?",
    description:
      "boolean variable has default value of false if defined as an instance/static variable.",
    options: [
      {
        text: "true",
        is_correct: false,
      },
      {
        text: "false",
        is_correct: true,
      },
      {
        text: "null",
        is_correct: false,
      },
      {
        text: "not defined",
        is_correct: false,
      },
    ],
  },
  {
    qid: "j14",
    question: "What is an Interface?",
    description:
      "An interface is a collection of abstract methods. A class implements an interface, thereby inheriting the abstract methods of the interface.",
    options: [
      {
        text: "An interface is a collection of abstract methods.",
        is_correct: true,
      },
      {
        text: "Interface is an abstract class.",
        is_correct: false,
      },
      {
        text: "Interface is a concrete class.",
        is_correct: false,
      },
      {
        text: "None of the above.",
        is_correct: false,
      },
    ],
  },
  {
    qid: "j15",
    question: "When finally block gets executed?",
    description:
      "Always when a try block gets executed, no matter if an exception occured or not.",
    options: [
      {
        text:
          "Always when a method gets executed, no matter if an exception occured or not.",
        is_correct: false,
      },
      {
        text:
          "Always when a try block gets executed, if an exception does not occur.",
        is_correct: false,
      },
      {
        text:
          "Always when a try block gets executed, no matter if an exception occured or not.",
        is_correct: true,
      },
      {
        text: "Only when an exception occurs in try block code.",
        is_correct: false,
      },
    ],
  },
  {
    qid: "j16",
    question: "Which will legally declare, construct, and initialize an array?",
    description:
      "The only legal array declaration and assignment statement is Option D. Option A is wrong because it initializes an int array with String literals. Option B is wrong because it use something other than curly braces for the initialization. Option C is wrong because it provides initial values for only one dimension, although the declared array is a two-dimensional array.",
    options: [
      {
        text: "A.	int [] myList = {'1', '2', '3'};",
        is_correct: false,
      },
      {
        text: "B.	int [] myList = (5, 8, 2);",
        is_correct: false,
      },
      {
        text: "C.	int myList [] [] = {4,9,7,0};",
        is_correct: false,
      },
      {
        text: "D.	int myList [] = {4, 3, 7};",
        is_correct: true,
      },
    ],
  },
  {
    qid: "j17",
    question: "Which is a reserved word in the Java programming language?",
    description:
      "The word 'native' is a valid keyword, used to modify a method declaration. 'method' and 'array' are not keywords. 'subclasses' is wrong because the keyword for subclassing in Java is 'extends', not 'subclasses'.",
    options: [
      {
        text: "method",
        is_correct: false,
      },
      {
        text: "native",
        is_correct: true,
      },
      {
        text: "subclasses",
        is_correct: false,
      },
      {
        text: "array",
        is_correct: false,
      },
    ],
  },
  {
    qid: "j18",
    question: "Which one is a valid declaration of a boolean?",
    description: "A boolean can only be assigned the literal true or false.",
    options: [
      {
        text: "boolean b = 'false';",
        is_correct: false,
      },
      {
        text: "boolean b = Boolean.false();",
        is_correct: false,
      },
      {
        text: "boolean b = false;",
        is_correct: true,
      },
      {
        text: "boolean b = no;",
        is_correct: false,
      },
    ],
  },
  {
    qid: "j19",
    question: "Which is a valid declarations of a String?",
    description:
      "Option A sets the String reference to null. Option B is wrong because null cannot be in single quotes. Option C is wrong because there are multiple characters between the single quotes ('abc'). Option D is wrong because you can't cast a char (primitive) to a String (object).",
    options: [
      {
        text: "A.	String s1 = null;",
        is_correct: true,
      },
      {
        text: "B.	String s2 = 'null';",
        is_correct: false,
      },
      {
        text: "C.	String s3 = (String) 'abc';",
        is_correct: false,
      },
      {
        text: "D.	String s4 = (String) '\ufeed';",
        is_correct: false,
      },
    ],
  },
];

export default {
  javaQuestions,
};
