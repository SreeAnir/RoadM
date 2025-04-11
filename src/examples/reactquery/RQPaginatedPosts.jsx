import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPostsByPage = async (page) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
  );
  return response.data;
};

const RQPaginatedPosts = () => {
  const [page, setPage] = useState(1);

  const {
    data: posts,
    isLoading,
    isError,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["posts", page],
    queryFn: () => fetchPostsByPage(page),
    keepPreviousData: true, // 👈 Keeps old data during new fetch
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h4>Paginated Posts (Page {page})</h4>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.id}. </strong>
            {post.title}
          </li>
        ))}
      </ul>

      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        <button onClick={() => setPage((p) => Math.max(p - 1, 1))} disabled={page === 1}>
          ⬅️ Previous
        </button>
        <button onClick={() => setPage((p) => p + 1)} disabled={posts.length < 10}>
          Next ➡️
        </button>
        {isFetching && <span style={{ fontSize: "12px" }}>⏳ Fetching...</span>}
      </div>
    </div>
  );
};

export default RQPaginatedPosts;
