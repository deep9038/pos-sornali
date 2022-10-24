import React from 'react'
import {AiFillEdit,AiFillDelete} from 'react-icons/ai'
import "bootstrap/dist/css/bootstrap.css";
import Switch from "@material-ui/core/Switch";
const IndivisualCatogaryItem = ({item}) => {
  return (
   <>
   <div className='items-info' style={{display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:'darkgray',padding:'4px',borderRadius:'4px',marginBottom:'5px'}}>
                <div className='product-img'>
                    <img src={`http://192.168.29.146:2000${item.categoryImage[0].path.slice(6)}`} height="50px" alt='product' />
                </div>
                <div className='title' height="50px" style={{fontSize:"16px"}}>
                <span>Category :-</span><br></br>

                    <span>{item.categoryName}</span><br></br>
                    
                </div>

                
                <div className='button-item' style={{width:"100px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                   <h5 style={{cursor: 'pointer',color:"rgb(255, 230, 0)"}}> <AiFillEdit /></h5>
                   <h5 style={{cursor: 'pointer',color:"red",marginLeft:"10px"}}> <AiFillDelete /></h5>
                   <h5><Switch/>  </h5>
                    
                </div>   

            </div>
   </>
  )
}

export default IndivisualCatogaryItem
