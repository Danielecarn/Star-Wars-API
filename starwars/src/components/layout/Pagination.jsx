import React from 'react'
import {IconContext} from 'react-icons';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import './Pagination.css';

const Pagination = ({navigateNext, navigateBack, isLast, isFirst}) => {
  return (
    <div>
      <button onClick={() => navigateBack()} disabled={isFirst} className="pagination-button">
        <IconContext.Provider value={isFirst ? {color: 'grey', size: '1em'} : {size: '1em'}}>
          <FiChevronLeft/>
        </IconContext.Provider>
      </button>
      <button onClick={() => navigateNext()} disabled={isLast} className="pagination-button">
        <IconContext.Provider value={isLast ? {color: 'grey', size: '1em'} : {size: '1em'}}>
          <FiChevronRight/>
        </IconContext.Provider>
      </button>
    </div>
  )
}

export default Pagination