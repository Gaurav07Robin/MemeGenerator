import React from "react";


const Cards = (props) => {
    return(
        <>
            <div className="container" style={{width:'200px' ,height:'100%', borderRadius:'10px', textAlign:'center', background:'snow'}}>
            <div class="card" style={{textAlign:'left', borderRadius:'20px',backgroundColor:'white',width:'220px'}}>
  <img src={props.imgsrc} style={{width:'220px',borderRadius:"20px", height:'250px', textAlign:'center'}} class="card-img-top" alt="Stranger Things"/>
  <div class="card-body">
    <h5 class="card-title" style={{color:'tomato',fontFamily:'cursive',fontWeight:'bold',fontStyle:'italic',fontSize:'25px'}}>{props.cardtitle}</h5>
    <p class="card-text">{props.cardtext}</p>
    <a href="#" class="btn btn-primary" style={{color:'wheat',fontSize:'15px',fontFamily:'sans-serif',fontStyle:'italic'}}>Go somewhere</a>
  </div>
</div>
            </div>
        </>
    );
};

export default Cards;