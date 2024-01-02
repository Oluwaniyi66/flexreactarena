import React, { useContext, useEffect } from 'react';
import SingleBlogAdvProd from './SingleBlogAdvProd';
import SingleBlogComment from './SingleBlogComment';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { StoreContext } from '../../screens/StoreContext';
import axios from "axios";


function SingleBlogLeft2() {

    const allBlogs = useContext(StoreContext);
    const myContext = useContext(StoreContext);
    const isLoading6 = myContext[26];
    const setIsLoading6 = myContext[27];
    const { blog_id } = useParams();
    const [blog, setBlog] = useState([]);
    const blogSubContent = myContext[30];
    const isLoading7 = myContext[32];

    // For blog comment
    const commentPayload = [];
    const [comment, setComment] = useState({
        name: "",
        email: "",
        comment: ""
    })
    const [commentResponse, setCommentResponse] = useState("");
    const [blogComments, setBlogComments] = useState([]);
    const [commentsLoading, setCommentsLoading] = useState(true);

    // We're creating this function so we can use it else where.
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

    // Getting the blog comments for a single blog
    const getSingleBlogComments = async (url) => {
        await axios
            .get(`${process.env.REACT_APP_API}/blog_comments/${url}`)
            .then(res => {
                setBlogComments(res.data)
                setCommentsLoading(false);
            })
            .catch(err => {
                console.log(err);
                return null;
            });
    }

    // The function is called immediate a single blog is clicked as it takes the id of the blog as argument.
    useEffect(() => {
        getSingleBlog(blog_id);
        getSingleBlogComments(blog_id);
    }, [blog_id])

    // Handle changes in the comment form inputs
    const handleCommentInputs = (e) => {
        setComment({
            ...comment, [e.target.name]: e.target.value
        })
    }

    // This is what will take care of the success/error message.
    const [commentMsg, setCommentMsg] = useState("");

    // Handling comment form submission
    const addComment = (e) => {
        e.preventDefault();

        if (comment.name == "") {
            setCommentMsg("Name can't be empty!")
        } else if (comment.email == "") {
            setCommentMsg("Email can't be empty!")
        } else if (comment.comment == "") {
            setCommentMsg("Comment can't be empty!")
        } else {
            commentPayload.push(comment);
            commentPayload.push({ blog_id: blog_id }); 

            fetch(`${process.env.REACT_APP_API}/add_comment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': "application/json"
                },
                body: JSON.stringify(commentPayload)
            })
                .then(res => res.json())
                .then(response => {
                    setCommentResponse(response.message)
                    setComment({
                        name: "",
                        email: "",
                        comment: ""
                    })

                    // fetch the new comments
                    getSingleBlogComments(blog_id);
                })
                .catch(err => (
                    console.log(err, 'Please check your network connection. Error From Server.')
                ));
        }


    }


    return (
        <div className='single-blog-middle'>
            {
                isLoading6 ? <div style={{ textAlign: "center", marginTop: "5%" }}><h4>Loading...</h4></div> :
                    <div className='main-box'>
                        <div className='blog-video-image'>
                            <div className='blog-video-left'>
                                <a href={blog.vid_url}>
                                    <i class="fa fa-play-circle-o" aria-hidden="true"></i>
                                </a>
                                <div className='blog-video-image'>
                                    <img src={`${process.env.REACT_APP_FILES_URL}/uploaded_blogs/${blog.img1_vid1}`} />
                                </div>
                            </div>
                            <div className='blog-image-right'>
                                <img src={`${process.env.REACT_APP_FILES_URL}/uploaded_blogs/${blog.img2_vid2}`} />
                            </div>
                        </div>
                        <div className='blog-video-below'>
                            <p>
                                {
                                    blog.content2
                                }
                            </p>
                        </div>
                        <div className='blog-adverts'>
                            <div className='blog-products-adverts'>
                                {
                                    isLoading7 ? <div style={{ textAlign: "center", marginTop: "5%" }}><h2>Loading...</h2></div> :
                                        blogSubContent.adProducts.data.map((prod, index) => (
                                            <SingleBlogAdvProd
                                                key={index}
                                                id={prod.id}
                                                image={prod.image}
                                                title={prod.title}
                                                price={prod.discount}
                                                discount={prod.price}
                                            />
                                        ))
                                }
                            </div>
                        </div>
                        <div className='blog-text-remainder'>
                            <p>
                                {
                                    blog.content3
                                }
                            </p>
                        </div>
                        <div className='blog-single-social-media'>
                            <div className='blog-social facebook'>
                                <i class="fa fa-facebook" aria-hidden="true"></i>
                            </div>
                            <div className='blog-social instagram'>
                                <i class="fa fa-instagram" aria-hidden="true"></i>
                            </div>
                            <div className='blog-social twitter'>
                                <i class="fa fa-twitter" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className='blog-single-navigators'>
                            <div className='blog-nav'>
                                <i class="fa fa-arrow-circle-left prev" aria-hidden="true"></i>
                                <div>
                                    <h4>Prev</h4>
                                </div>
                            </div>
                            <div className='blog-nav'>
                                <h4>Next</h4>
                                <i class="fa fa-arrow-circle-right next" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className='blog-comments-section'>
                            {
                                commentsLoading ? <div>Loading...</div> :
                                    blogComments.map((com, ind) => (
                                        <SingleBlogComment
                                            key={ind}
                                            id={com.id}
                                            image={com.image}
                                            author={com.name}
                                            date={com.created_at}
                                            comment={com.comment}
                                        />
                                    ))
                            }
                        </div>
                        <div className='blog-comment-box'>
                            {
                                localStorage.getItem('user') ?
                                    <form onSubmit={addComment}>
                                        {
                                            commentResponse && commentMsg == "" ? "" :
                                                <div style={{ backgroundColor: 'whitesmoke', color: "forestgreen", textAlign: 'center', borderRadius: "5px", padding: "5px 10px", marginBottom: "5px" }}>
                                                    {commentResponse || commentMsg}
                                                </div>
                                        }
                                        <div className='form-group'>
                                            <input
                                                type="text"
                                                name='name'
                                                placeholder='Your Name*'
                                                value={comment.name}
                                                onChange={handleCommentInputs}
                                            />
                                            <input
                                                type="email"
                                                name='email'
                                                placeholder='Write Your Email*'
                                                value={comment.email}
                                                onChange={handleCommentInputs}
                                            />
                                        </div>
                                        <div className='form-text-area'>
                                            <textarea
                                                name='comment'
                                                placeholder='Write your comment'
                                                value={comment.comment}
                                                onChange={handleCommentInputs}
                                            >
                                            </textarea>
                                        </div>
                                        <div className='checkbox-section'>
                                            <input type="checkbox" />
                                            <p>Save my name and email in this browser for the next time i comment.</p>
                                        </div>
                                        <div className='form-btn'>
                                            <button type='submit'>ADD COMMENT</button>
                                        </div>
                                    </form> :
                                    <div className='comment-condition'>
                                        Kindly <a href='/login'>Login</a> or <a href='/register'>Register</a> in other to add your comment.
                                    </div>
                            }
                        </div>
                    </div>
            }
        </div>
    )
}

export default SingleBlogLeft2;
