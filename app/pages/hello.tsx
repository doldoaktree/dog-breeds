// pages/posts/[slug].js
import React from 'react';
import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { slug: hello } = router.query;

  return (
    <div>
      <h1>Post: {hello}</h1>
    </div>
  );
};

export default Post;
