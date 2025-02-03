import xyz, {a,b,d} from './module1.mjs'
console.log(xyz);
console.log(a);
console.log(b);
console.log(d);




// Run 'node .\module2.mjs' to see the output.
//We have to use curley braces for named export.
// `xyz` is the default export (originally `c` in module1.mjs).
// `a, b, d` are named exports and must be imported with their exact names.