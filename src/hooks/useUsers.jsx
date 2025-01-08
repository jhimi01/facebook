import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
  const {
    isLoading,
    data: users = [],
    refetch,
  } = useQuery({
    queryKey: ["users"],
    // queryKey: ['posts', user?.email],
    queryFn: async () => {
      const response = await fetch(
        "https://facebook-server-phi.vercel.app/users"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });
  return { isLoading, refetch, users };
};

export default useUsers;
