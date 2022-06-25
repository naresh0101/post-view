import './index.css'

const Pagination = ({page,setPage,total})=>{
    
    const handlePre = ()=>{
        if(page === 1){
            return
        }else{
            setPage(page-1)
        } 
    }

    const handleNext = ()=>{
        if(page === total){
            return
        }else{
            setPage(page+1)
        } 
    }

    return(
        <div className="pagination">
            <button onClick={handlePre} className="pre-btn">
                Pre
            </button>
            <div className='p-10px'>{page}-{total}</div>
            <button onClick={handleNext} className="next-btn">
                Next
            </button>
        </div>
    )
}
export default Pagination;