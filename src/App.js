import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Posts from './components/Post';
import Pagination from './components/Pagination';


const App = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const[currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  //console.log(posts);

  //Get Current Posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //Change Page
  const paginate = pageNumber =>setCurrentPage(pageNumber);


  return (
    <div className="App">
      <h1> Hello World</h1>
      <Posts posts={currentPosts} loading={loading}/>
      <Pagination 
        postsPerPage={postsPerPage} 
        totalPosts={posts.length} 
        paginate={paginate}/>    
    </div>
  );
}

export default App;
