import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

const usePsots = () => {
  const {
    isLoading,
    data: posts = [],
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    // queryKey: ['posts', user?.email],
    queryFn: async () => {
      const response = await fetch(
        "https://facebook-server-phi.vercel.app/posts"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  const sortedPosts = useMemo(() => {
    return posts.slice().sort((a, b) => {
      const dateA = new Date(a.uploadedtime);
      const dateB = new Date(b.uploadedtime);
      return dateB - dateA; // Sort in descending order
    });
  }, [posts]);

  return { isLoading, refetch, posts: sortedPosts };
};

export default usePsots;
