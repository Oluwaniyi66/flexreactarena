import React, { useState, useContext, useEffect } from 'react';
import './singleblogstyles.css';
import '../blog-components/blogstyles.css';
import BlogRightCard from '../blog-components/BlogRightCard';
import SingleBlogLeft from './SingleBlogLeft';
import SingleBlogLeft2 from './SingleBlogLeft2';
import { useParams } from 'react-router-dom';
import { StoreContext } from '../../screens/StoreContext';
import axios from "axios";

function SingleBlogPage() {
    const myContext = useContext(StoreContext);
    const isLoading6 = myContext[26];
    const setIsLoading6 = myContext[27];

    const { blog_id } = useParams();
    const [blog, setBlog] = useState([]);

    const getSingleBlog = async (url) => {
        await axios
            .get(`${process.env.REACT_APP_API}/all_blogs/${url}`)
            .then(res => {
                setBlog(res.data);
                setIsLoading6(false)
            })
            .catch(err => {
                console.log(err);
                return null;
            });
    }

    useEffect(() => {
        getSingleBlog(blog_id)
    }, [blog_id])

    return (
        <div id='blog-page'>
            <div className='container'>
                <div className='single-blog-left blog-left'>
                    {
                        isLoading6 ? <div style={{ textAlign: "center", marginTop: "5%" }}><h6>Loading...</h6></div> :
                            <SingleBlogLeft
                                key={blog.id}
                                image={blog.image}
                                author={blog.author}
                                date={blog.created_at}
                                title={blog.title}
                                content1={blog.content1}
                            />
                    }


                    {
                        isLoading6 ? <div style={{ textAlign: "center", marginTop: "5%" }}><h6>Loading...</h6></div> :

                            <SingleBlogLeft2 />
                    }
                </div>
                <div className='single-blog-right blog-right'>
                    <BlogRightCard />
                </div>
            </div>
        </div>
    )
}

export default SingleBlogPage;;
