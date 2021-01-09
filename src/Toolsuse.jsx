import React from 'react';
import CardToll from './CardToll'
import Tools from './Tools';
const Toolsuse = () =>{
    return (
        <React.Fragment>
           <div className ="my-5">
                <h1 className="text-center font">Tools</h1>
                <p className="text-center h4" >Tools that i have learned and applied into my project</p>
           </div>
          
           <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-7 mx-auto text-center">
                    <div className="row gy-4">
                           {Tools.map((val,inde) =>{
                               return(
                               <CardToll shot={val.imgsrc}
                                    title ={val.title}
                                    project = {val.projectname}/>
                               )
                           })}
                        </div>  

                    </div>
                    </div>
                </div>
              

        </React.Fragment>
    )
}
export default Toolsuse;