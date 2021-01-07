import React from'react';
import'./search-box.styles.css'

export const SearchBox = ({placeholder,handleChange}) => (
     <input
        className='search' 
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
        />
)

/*
Functional Components don't have access to state
because youre not always going to USE any of these. 

Sometimes you just want to render HTML. Thats why,
we have functional components.
*/ 