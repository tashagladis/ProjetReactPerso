
import React, { useEffect, useState } from 'react'


const pageCreator = (pagesNumber, setCurrentPage) => {
    let pagesElement = []
    for(let i = 0 ; i<= pagesNumber; i++){
        pagesElement.push(<p onClick = { () => setCurrentPage(i) }>{i}</p>)
    }
    return pagesElement;
}

const Pagination = ({total, setCurrentPage, valueOffset}) => {
    const [pages, setPages] = useState(0)

    useEffect(() => {
        const numbersPages = total / valueOffset;
        console.log('Pagination -> numbersPages', numbersPages);
        setPages(Math.ceil(numbersPages))
        
    }, [total]);
    if(total === 0) return null
    return (
        <div>
            {pageCreator(pages, setCurrentPage)}
        </div>
    );
};

export default Pagination;