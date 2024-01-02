import React, { useState, useContext } from 'react';
import BlogLeftCard from './BlogLeftCard';
import BlogRightCard from './BlogRightCard';
import './blogstyles.css';
import { StoreContext } from '../../screens/StoreContext';

function BlogPage() {

    // These codes are for the search functionality of the left side blog
    const myContext = useContext(StoreContext);
    const allBlogs = myContext[5]; 
    const blogSearchTerm = myContext[34];
    const isLoading4 = myContext[23];

    // Pagination Logic 
    const [currentPage, setCurrentPage] = useState(1); 
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [pageNumLimit, setPageNumLimit] = useState(3);
    const [maxPageNumLimit, setMaxPageNumLimit] = useState(3); 
    const [minPageNumLimit, setMinPageNumLimit] = useState(0);
    const pages = [];

    for (var x = 0; x <= Math.ceil(allBlogs.length / itemsPerPage); x++) {
        pages.push(x);
    }

    // Getting the index of last item of each page
    const indexOfLastItem = currentPage * itemsPerPage;

    // Getting the index of first item of each page
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // Getting the data to display in each page
    const currenItems = allBlogs.slice(indexOfFirstItem, indexOfLastItem);

    // A function to take care of the pagination box/numbers
    const handlePagBoxClick = (e) => {
        setCurrentPage(Number(e.target.id))
    }

    // Functions to take care of the Next and Prev Buttons
    const handlePagPrevPage = () => {
        setCurrentPage(currentPage - 1);

        if ((currentPage - 1) % pageNumLimit == 0) {
            setMaxPageNumLimit(maxPageNumLimit - pageNumLimit);
            setMinPageNumLimit(minPageNumLimit - pageNumLimit);
        }
    }

    const handlePagNextPage = () => {
        setCurrentPage(currentPage + 1);

        if (currentPage + 1 > maxPageNumLimit) {
            setMaxPageNumLimit(maxPageNumLimit + pageNumLimit);
            setMinPageNumLimit(minPageNumLimit + pageNumLimit);
        }
    }

    const renderPageNumbers = pages.map((num, ind) => {

        if (num < maxPageNumLimit + 1 && num >= minPageNumLimit) {
            return (
                <ul>
                    <li key={ind} id={ind} onClick={handlePagBoxClick} className={currentPage == num ? "active" : ""}>{num}</li>
                </ul>
            )
        } else {
            return null;
        }
    })


    return (
        <div id='blog-page'>
            <div className='container'>
                <div className='blog-left'>
                    {
                        isLoading4 ? <div style={{ textAlign: "center", marginTop: "5%" }}><h2>Loading...</h2></div> :
                            currenItems.filter(item => {
                                if (blogSearchTerm == "") {
                                    return item;
                                } else if (item.title.toLowerCase().includes(blogSearchTerm.toLowerCase())) {
                                    return item;
                                } else if (item.content1.toLowerCase().includes(blogSearchTerm.toLowerCase())) {
                                    return item;
                                }
                            }).map(blog => (
                                <BlogLeftCard
                                    key={blog.id}
                                    id={blog.id}
                                    image={blog.image}
                                    author={blog.author}
                                    date={blog.created_at}
                                    title={blog.title}
                                    description={blog.content1}
                                />
                            ))
                    }
                    <div className='blog-paginator'>
                        <div className='blog-nav'>
                            <i class="fa fa-arrow-circle-left prev" aria-hidden="true"></i>
                            <div>
                                <button onClick={handlePagPrevPage} disabled={currentPage == pages[1] ? true : false}>Prev</button>
                            </div>
                        </div>
                        <div className='blog-numbers'>
                            {
                                renderPageNumbers
                            }
                        </div>
                        <div className='blog-nav'>
                            <button onClick={handlePagNextPage} className='next-btn' disabled={currentPage == pages[pages.length - 1] ? true : false}>Next</button>
                            <div className='mb-3'>
                                <i class="fa fa-arrow-circle-right next" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='blog-right'>
                    <BlogRightCard />
                </div>
            </div>
        </div>
    )
}

export default BlogPage;
