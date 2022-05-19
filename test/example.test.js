// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderBulletinPost } from '../render-utils.js';

const test = QUnit.test;

test('renderBulletinPost renders a div with post details', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="bulletin-post"><h2>hello</h2><p>looking for a void to hang out in for the next 50 years</p><h3>plot twist it me</h3></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const hello = {
        id: 3,
        title: 'hello',
        description: 'looking for a void to hang out in for the next 50 years',
        author: 'plot twist it me',
    };
    const actual = renderBulletinPost(hello);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
