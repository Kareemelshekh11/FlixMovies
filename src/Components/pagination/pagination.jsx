import Pagination from '@mui/material/Pagination';
import './pagination.scss';



const Pagination_pages =({setPage , page=10})=>{

    const handleChange = (page)=>{
        setPage(page)
        window.scroll(0,0)
    }

    return(
        <div>
            <div className="pagination-pages">
                <Pagination onChange={(e)=>handleChange(e.target.textContent)} count={20} color="primary"/>
            </div>
        </div>
    )
}

export default Pagination_pages;