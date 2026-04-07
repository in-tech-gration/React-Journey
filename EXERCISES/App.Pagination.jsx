/*

NEXT STEPS?

- Create a Pagination Component
- Change the way the available Pages are being displayed:
    - Instead of: PREV 1/4 NEXT
    - Display this: 1 2 3 4
        - Don't forget to highlight the currently selected page
- Implement Tests and test with different `list` lengths and values for `postsPerPage`
- Load the posts from an external Server using Ajax
- Apply styling using Bootstrap 4

*/
import React, { useState } from 'react';
// We import React to work with JSX and the useState Hook to add state to our Components            

// Create a basic list of programming languages
const list = ["JavaScript", "TypeScript", "CoffeeScript", "PHP", "Python", "Go", "Ruby", "Java", "C#", "C++"];

// Create a Component to display each programming language
function Post({ title }) {
  return <div>{title}</div>;  // Display the title Prop value
}

const postsPerPage = 3; // Adding variable which holds the "number of Posts to be displayed per Page" setting
const totalPages = Math.ceil(list.length / postsPerPage); // Calculating the total number of Pages. Play around with the postsPerPage variable at this stage

// Our main Application Container Component
export default function App() {

  // We create a state variable and assign an initial value: list
  const [posts] = useState(list); 
  const [currentPage, setCurrentPage] = useState(1);

  const prev = () => {
    if (currentPage > 1) { setCurrentPage(currentPage - 1); } // Decrementing current page index ensuring we don't get past 0
  }
  const next = () => {
    if (currentPage < totalPages) { setCurrentPage(currentPage + 1); } // Incrementing current page index ensuring we don't get past the upper limit: totalPages
  }

  let from = (currentPage - 1) * postsPerPage; // Start slicing from here
  let upTo = from + postsPerPage;                // Stop slicing here

  return (
    <div>
      {/* Creating Next & Previous buttons along with a current page indicator */}
      <button onClick={prev}>Prev</button> <span>{currentPage}/{totalPages}</span> <button onClick={next}>Next</button>
      <hr />
      {
        /* Slicing the posts array using the 'from'/'upTo' lower/upper limits: */
        posts.slice(from, upTo).map((post, index) => <Post key={index} title={post} />)
      }
    </div>
  )
}
