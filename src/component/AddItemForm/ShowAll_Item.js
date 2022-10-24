import React from "react";
import {AiFillEdit,AiFillDelete} from 'react-icons/ai'
import "bootstrap/dist/css/bootstrap.css";
import Switch from "@material-ui/core/Switch";
const ShowAll_Item = ({item}) => {
  return (
    <>
     
     <div
        className="items-info container-fluid"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "4px",
          borderRadius: "4px",
          marginBottom: "5px",
          color:"black",
          fontWeight:"bolder",
          
        }}
      >
        <div >
          Image
        </div>

        <div>
          <span>Name</span>
          <br></br>
        </div>
        <div style={{boxSizig:"border-box",paddingRight:"80px"}}>
          <span>Category</span>
          <br></br>
        </div>
        <div>
          <span>Type</span>
          <br></br>
        </div>
        <div>
            <span>Price</span>
        </div>

        <div
          className="button-item"
          style={{
            width: "100px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
         
          Controll
        </div>
      </div>

     <div className="item-showing-container" style={{maxHeight:"55vh",overflow:"scroll",width:"100%"}}>
{item.map((item)=>{
  console.log(item);
  return(
    
    <div
    className="items-info container-fluid"
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "darkgray",
      padding: "4px",
      borderRadius: "4px",
      marginBottom: "5px",
      backgroundColor:"rgb(176, 116, 232)",
      color:"white",
      fontWeight:"bolder"
    }}
  >
    <div className="product-img">
      <img
        src="https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        height="50px"
        alt="product"
      />
    </div>

    <div>
      <span>Name</span>
      <br></br>
    </div>
    <div>
      <span>Category :-</span>
      <br></br>
    </div>
    <div>
      <span>West bengal Famous food</span>
      <br></br>
    </div>
    <div>
        <span>Price:-</span>
    </div>

    <div
      className="button-item"
      style={{
        width: "100px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h5 style={{ cursor: "pointer", color: "rgb(255, 230, 0)" }}>
        {" "}
        <AiFillEdit />
      </h5>
      <h5 style={{ cursor: "pointer", color: "red", marginLeft: "10px" }}>
        {" "}
        <AiFillDelete />
      </h5>
      <h5>
        <Switch />{" "}
      </h5>
    </div>
  </div>
  
  )
})}

</div>
     
    </>
  );
};

export default ShowAll_Item;
