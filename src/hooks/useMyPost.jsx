import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const useMyPost = () => {
    const { user } = useContext(AuthContext)
    const {isLoading, data:myposts = [], refetch} = useQuery({
        queryKey: ['myposts', user?.email],
        queryFn: async () => {
          const response = await fetch(`http://localhost:5000/myposts?email=${user?.email}`)
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        },
    })
    return { isLoading, refetch, myposts  }
};

export default useMyPost;