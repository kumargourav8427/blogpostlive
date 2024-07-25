import React from "react";
import { Container } from "react-bootstrap";

function BlogPostItem({blogs}) {
  
 
  return (
    <>
      {blogs.map((post, index) => (
        <Container className="py-5 border" key={index}>
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p>{post.description}</p>
          <p className="font-bold">{post.publishedAt}</p>
        </Container>
      ))}
    </>
  );
}

export default BlogPostItem;
