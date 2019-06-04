import React, { Component} from 'react';
// import logo from './logo.svg';
import dummyData from './dummy-data'
import PostContainer from './components/PostContainer/PostContainer.js';
// import CommentSection from '/Users/Anna/Lambda School/Sprint 7 - Intermediate React/Day 1 - React Tooling/React-Insta-Clone/instagram-app/src/components/CommentSection/CommentSectionContainer.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      dummyData: dummyData,
    }
  }

  render(){
    return (
      <div>
        {dummyData.map(post => (
          <PostContainer
          // key={post.id}
          post={post}
          />
        ))}
      </div>
    )
  }

}
// function App() {
//   return (
//     <div>
//       {/* <SearchBar /> */}
//       <div>
//         {
//           dummyData.map(post => (
//           <PostContainer 
//           key={post.timestamp.trim()}
//           post={post}
//           />
//           ))
//         }

//       </div>
//     </div>
//   );
// }

export default App;
