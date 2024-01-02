import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../../screens/StoreContext';
import LatestBlogsLeft from './LatestBlogsLeft';
import LatestBlogsMiddle from './LatestBlogsMiddle';
import LatestBlogsRight from './LatestBlogsRight';
import AOS from 'aos';
import 'aos/dist/aos.css';

function LatestBlogs() {

    const myContext= useContext(StoreContext);
    const isLoading2 = myContext[8];
    const latestBlogs = myContext[6];

    useEffect(() => {
        AOS.init({ duration: 1000})
    }, [])
 
    return (
        <div id='latest-blog'>
            <div className='container'> 
                <div className='blog-header' data-aos="fade-down">
                    <h2>Latest Blogs</h2>
                </div> 
                <div className='blog-bottom' data-aos="fade-up">
                    {
                        isLoading2 ? <div style={{ textAlign: "center", marginTop: "5%" }}><h2>Loading...</h2></div> :
                        <>
                        <LatestBlogsLeft 
                            id={latestBlogs.top_blogs.data[0].id}
                            image={`${process.env.REACT_APP_FILES_URL}/uploaded_blogs/${latestBlogs.top_blogs.data[0].image}`}
                            author={latestBlogs.top_blogs.data[0].author}
                            date={latestBlogs.top_blogs.data[0].created_at}
                            title={latestBlogs.top_blogs.data[0].title}
                            description={latestBlogs.top_blogs.data[0].content1}
                        />
                        <LatestBlogsMiddle 
                            id={latestBlogs.top_blogs.data[1].id}
                            image={`${process.env.REACT_APP_FILES_URL}/uploaded_blogs/${latestBlogs.top_blogs.data[1].image}`}
                            author={latestBlogs.top_blogs.data[1].author}
                            date={latestBlogs.top_blogs.data[1].created_at}
                            title={latestBlogs.top_blogs.data[1].title}
                            description={latestBlogs.top_blogs.data[1].content1}
                        />  
                        <LatestBlogsRight 
                            id={latestBlogs.top_blogs.data[2].id}
                            image={`${process.env.REACT_APP_FILES_URL}/uploaded_blogs/${latestBlogs.top_blogs.data[2].image}`}
                            author={latestBlogs.top_blogs.data[2].author}
                            date={latestBlogs.top_blogs.data[2].created_at}
                            title={latestBlogs.top_blogs.data[2].title}
                            description={latestBlogs.top_blogs.data[2].content1}
                        />
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default LatestBlogs;
