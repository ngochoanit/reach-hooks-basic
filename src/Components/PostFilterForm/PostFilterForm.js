import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './PostFilterForm.scss'

PostFilterForm.propTypes = {
    onSubmit: PropTypes.func,

};
PostFilterForm.defaultProps = {
    onSubmit: null
}

function PostFilterForm(props) {
    const { onSubmit } = props
    const [searchTerm, setSearchTerm] = useState('')
    const typingTimeoutRef = useRef(null)
    const handleSearchTermChange = (e) => {

        setSearchTerm(e.target.value)
        if (!onSubmit) return
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current)
        }
        typingTimeoutRef.current = setTimeout(() => {
            const formData = {
                searchTerm: e.target.value,
            }
            onSubmit(formData)
        }, 300)

    }
    return (
        <form className="postFilterForm" onSubmit={(e) => { e.preventDefault() }}>
            <input
                className="postFilterForm-inputText"
                type='text'
                placeholder="search..."
                onChange={handleSearchTermChange}
                value={searchTerm}
            ></input>
        </form>
    );
}

export default PostFilterForm;