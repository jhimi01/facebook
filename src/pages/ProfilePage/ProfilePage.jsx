import React from 'react';
import useMyPost from '../../hooks/useMyPost';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SinglePost from '../../component/SinglePost/SinglePost';

const ProfilePage = () => {
    const { email, loading } = useParams();
    console.log(email)
    const{myposts, isLoading}=useMyPost()
    console.log(myposts)
    if (isLoading) {
        return <div>..loading</div>
    }
    if (loading) {
       
        return <div> </div>
      }
      
    return (
       <>
        <Helmet>
                <title>Profile | facebook</title>
            </Helmet>
         <div className='w-1/2 mx-auto '>
            {myposts.map(profile =>  <SinglePost
            key={profile._id}
            authorImage={profile?.authorImage}
            img={profile?.img}
            authorName={profile?.authorName}
            email={profile?.email}
            status={profile?.status}
            uploadedtime={profile?.uploadedtime}
            likes={profile?.likes}
            comments={profile?.comments}
            share={profile?.share}
          />)}
            </div>
       </>
    );
};

export default ProfilePage;