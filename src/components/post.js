
import React, { useEffect, useState } from "react";
import axios from "axios";
import Posts from './posts.js';
import Pagination from './pagination.js';

function Post() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(30);

  const url= 'https://api.mercadolibre.com/sites/MLA/search?q=zapatilla';
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(`${url}`);
      setPosts(res.data);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  //get current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //Change page
  const paginate = (pageNumber)=> setCurrentPage(pageNumber);
 
 return (
<div className="container mt-5">
    <h1 className="text-primary mb-3">Products</h1>
    <Posts posts={currentPosts} loading={loading}/>
    <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate ={paginate} />
</div>
  )
}

export default Post;