// import functions and grab DOM elements
import { fetchPosts, signInUser } from "./fetch-utils.js";
import { renderBulletinPost } from "./render-utils.js";
// let state


async function loadData() {
    const posts = await fetchPosts();
    console.log(posts);
    const bulletinBoard = document.getElementById('bulletin-board');
    for (let post of posts) {
        const postDiv = renderBulletinPost(post);
        bulletinBoard.append(postDiv);
    }
}



loadData();
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
