const posts = [ //this is an example of controlling posts 
    {id: 1, title: 'Post One' },
    {id: 2, title: 'Post Two' },  
];

const getposts = () => posts; // this is a function that returns the posts

// other way to export 
export {getposts}; // this is an export statement that exports the getposts function.

// other way is to use default export because it is the only export in the file.
export default getposts; //default export statement that exports the getposts function.

// we can default one and non-default export in the same file.
export const getPostsLength= ()=> posts.length;