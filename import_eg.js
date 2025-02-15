import {getposts} from './postcontroller.js'; // this is an import statement that imports the getposts function from postcontroller.

import getposts,{getPostsLength} from './postcontroller.js'; // this is an import statement that imports the default export from postcontroller.

console.log(getposts()); //result of the getposts function to the console.
console.log(getPostsLength()); //result of the getPostsLength function but its not a default export so we have to use the curly braces to import it.