import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const POSTS_PER_PAGE = 10;

const fetchPostsByPage = async (page) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_limit=${POSTS_PER_PAGE}&_page=${page}`
  );

  return {
    posts: response.data,
    totalCount: parseInt(response.headers["x-total-count"], 10),
  };
};

const RQPaginatedPostsWithButtons = () => {
  const [page, setPage] = useState(1);

  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["posts", page],
    queryFn: () => fetchPostsByPage(page),
    keepPreviousData: true,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  const totalPages = data ? Math.ceil(data.totalCount / POSTS_PER_PAGE) : 0;

  return (
    <div>
      <h3>Paginated Posts (Page {page} of {totalPages})</h3>

      <ul>
        {data?.posts?.map((post) => (
          <li key={post.id}>
            <strong>{post.id}. </strong>{post.title}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "20px", display: "flex", flexWrap: "wrap", gap: "10px" }}>
        <button onClick={() => setPage((p) => Math.max(p - 1, 1))} disabled={page === 1}>
          ⬅️ Previous
        </button>

        {[...Array(totalPages)].map((_, index) => {
          const pageNum = index + 1;
          return (
            <button
              key={pageNum}
              onClick={() => setPage(pageNum)}
              style={{
                fontWeight: page === pageNum ? "bold" : "normal",
                backgroundColor: page === pageNum ? "grey" : "#000",
              }}
            >
              {pageNum}
            </button>
          );
        })}

        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
        >
          Next ➡️
        </button>

        {isFetching && <span style={{ fontSize: "12px" }}>⏳ Fetching...</span>}
      </div>
    </div>
  );
};

export default RQPaginatedPostsWithButtons;
