import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import './PostList.scss'
import { getPostList } from '../../Apis/Apis';
import Pagination from '../Pagination/Pagination';
import PostFilterForm from '../PostFilterForm/PostFilterForm';

PostList.propTypes = {

};

function PostList(props) {
    const [postList, setPostList] = useState([])
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 5,
        _totalRows: 1
    })
    const [filter, setFilter] = useState({
        _limit: 5,
        _page: 1,
        title_like: ''
    })
    useEffect(() => {
        try {
            const response = getPostList(queryString.stringify(filter))
            response.then((data) => {
                setPostList(data.data)
                setPagination(data.pagination)
            })

        }
        catch (error) {
            console.log(error)
        }
    }, [filter])
    const onPageChange = (newpage) => {
        setFilter({ ...filter, _page: newpage })
    }
    const handleFilterChange = (newFilter) => {
        setFilter({
            ...filter,
            _page: 1,
            title_like: newFilter.searchTerm
        })
    }
    return (
        <div className="postList">
            <h3 className="postList-header">Post List</h3>
            <PostFilterForm onSubmit={handleFilterChange}></PostFilterForm>
            <ul className="postList-wrap">{

                postList.map((post) =>
                    <li className="postList-item" key={post.id}>{post.title}</li>

                )
            }
            </ul>
            <Pagination
                pagination={pagination}
                onPageChange={onPageChange}
            ></Pagination>
        </div>
    );
}

export default PostList;