import { useQuery } from '@tanstack/react-query'


import React from 'react';

const usePsots = () => {
    const {isLoading, data:posts = [], refetch} = useQuery({
        queryKey: ['posts'],
        // queryKey: ['posts', user?.email],
        queryFn: async () => {
          const response = await fetch('post.json')
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        },
    })
    return { isLoading, refetch, posts  }
};

export default usePsots;