import React from 'react'
import IndivisualAddOnItem from './IndivisualAddOnItem'
import "bootstrap/dist/css/bootstrap.css";

const ShowAddOnItem = ({item}) => {
  console.log(item);
  return (
    <div style={{ position: "absolute",top:"260px",left:"65%",width:"350px",maxHeight:"250px",border:"1px solid black",transform:"TranslateX(-50%)",boxShadow:" 2px 8px 14px 0px rgb(0 0 0 / 75%)",boxSizing:"border-box",padding:"5px",zIndex:1,backgroundColor:"white",overflowY:'scroll'}}>

      {item.map((item)=>{
        return(
        <IndivisualAddOnItem item={item}/>
        )
      })}
      
          
    </div>
  )
}

export default ShowAddOnItem
