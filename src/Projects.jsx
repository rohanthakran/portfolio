import React from 'react';
import img1 from './laptop.jpg'
import Card from './Card'
import Sdata from './Sdata';
const Projects = () =>{
    return (
        <React.Fragment>
           <div className ="my-5">
                <h1 className="text-center">Projects</h1>
           </div>
           <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                    <div className="row gy-5">
                           {Sdata.map((val,inde) =>{
                               return(
                               <Card shot={val.imgsrc}
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
export default Projects;