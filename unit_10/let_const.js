// ES5 Global Constants
var PI = 3.14;
PI = 42; // stop me from doing this!

// ES2015 Global Constants
const PI = 3.14;

/** QUIZ
 * 
 * 1. What is the difference between var and let?
 * - var allows re-declaration of variables, let doesn't.
 * - variables declared with var are hoisted, let variables aren't.
 * - let is block scoped which means parent scope can't access variables declared 
 *    within child scope, var is globally scoped except for functions.
 * 
 * 2. What is the difference between var and const?
 * Same as the difference between var and let.
 * 
 * 3. What is the difference between let and const?
 * let allows reassignment to variables, const doesn't.
 * Note: const allows the mutation of object types.
 * 
 * 4. What is hoisting?
 * Hoisting is the concept of having variables declared using var and function
 * declaration be available before its declaration.
 * variables are undefined when accessing them before assignment.
 * 
 */
