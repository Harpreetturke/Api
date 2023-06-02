import React, { useEffect, useState } from "react";

const Api=()=>{

    const[data,setData]=useState([]);

    useEffect(()=>{
     const getdata=fetch("https://api.jnrs.in/hotel").then((result)=>{
            result.json().then((res)=>{
                setData(res.All_Hotels)
            })
        })
    },[])
    console.log(data)
    return(
        <>
       <div className="container-fluid mt-5 ">
        <div className="row text-center">
        {data.map((item)=>(
           <div className="col-10 col-md-4 mt-5 ">
            <div className="d-flex">
        <div class="card " style={{display:"flex",width: "18rem"}}>
        <img src={'https://api.jnrs.in' + item.Hotal_images1} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{item.Hotal_Name}</h5>
          <p class="card-text">{item.hotal_discreption}</p>
          </div>
          </div>
        </div>
      </div>
        ))
        }
       </div>
       </div>
  
  
     {/* <tr>
      <th scope="row">1</th>
      <td>1</td>
      <td>accusamus beatae ad facilis cum similique qui sunt</td>
      <td><img src="https://via.placeholder.com/600/92c952"/></td>
      <td><img src="https://via.placeholder.com/150/92c952"/></td>
    </tr>      { */}{
//         data.map((item,index)=>{
          
//            <div class="card" style={{width: "18rem"}}>
//   <img src={item.Hotal_images1} class="card-img-top" alt="..."/>
//   <div class="card-body" key={item.Hotal_id}>
//     <h5 class="card-title">{item.Hotel_Type}</h5>
//     <p class="card-text">{item.hotal_discreption}</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//         })
//     }
  
    }
        </>
    );
}
export default Api;