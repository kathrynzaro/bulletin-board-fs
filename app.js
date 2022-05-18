// import functions and grab DOM elements
import { fetchPosts, logout, getUser } from './fetch-utils.js';
import { renderBulletinPost } from './render-utils.js';
// let state

const authButton = document.getElementById('auth-button');
const createButton = document.getElementById('create');


async function handleLogout() {
    await logout();
}

async function handleAuth() {
    window.location.href = '/auth';
}

async function loadData() {
    const posts = await fetchPosts();
    console.log(posts);
    const bulletinBoard = document.getElementById('bulletin-board');
    for (let post of posts) {
        const postDiv = renderBulletinPost(post);
        bulletinBoard.append(postDiv);
    }
    const user = getUser();
    if (user) {
        authButton.textContent = 'logout';
        authButton.addEventListener('click', handleLogout);
    } else {
        authButton.textContent = 'login';
        authButton.addEventListener('click', handleAuth);
    }
    createButton.addEventListener('click', () => {
        location.replace('/create');
    });
    
}



loadData();
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
