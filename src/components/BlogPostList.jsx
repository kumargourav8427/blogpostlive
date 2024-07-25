import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagignation from "./Pagignation";
import BlogPostItem from "./BlogPostItem";

function BlogPostList() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] =useState(10);

  
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=apple&from=2024-07-19&to=2024-07-19&sortBy=popularity&apiKey=8b376eefac894496ae0a144474105dc5
`
      )
      .then((response) => {
        setBlogs(response.data.articles);
        console.log(response.data);
      });
  }, []);


//current post

const indexOfLastPost =  currentPage * postPerPage;
const indexOfFirstPost =  indexOfLastPost - postPerPage;
const currentPosts =  blogs.slice(indexOfFirstPost,indexOfLastPost);


  //change page
  const paginate = (pageNumber)=>setCurrentPage(pageNumber)

  return (
    <>
      <h1 className=" text-center p-2 text-3xl font-bold">Blog Post Data</h1>

      <BlogPostItem blogs={currentPosts} />

      <Pagignation
        postPerPage={postPerPage}
        totalPosts = {blogs.length}
        paginate ={paginate}
      />
    </>
  );
}

export default BlogPostList;
