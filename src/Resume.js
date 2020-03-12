import React from 'react';
import data from './details.json';
import icon from './boy.svg';

let Resume=(props)=>{
    let info=Object.values(props.location.index.value);
    let person=data.profiles[info]
    console.log(person);
    return(
        <div className="parent">
            <div className="child">
            <img src={icon} alt="profile"/>
                <h2> {person.basics.name} </h2>
                <a href={"mailto"+person.basics.email} className="link"> {person.basics.email} </a>
                    <br></br>
                    <a href={"tel:"+person.basics.mobile} className="link"> {person.basics.mobile} </a>
            </div>
            <div className="child1">
                <h3> educational qualifications: </h3>
                <hr></hr>
                 {person.education.map((i,j)=>(
                    <div key={j}>
                       <h4> {i.degree}</h4>
                       <ul>
                            <li> {i.percentage} </li>
                            <li> {i.institute} </li>
                       </ul>
                    </div>))}
                <h3> skills: </h3>
                <hr></hr>
                {person.skills.map((i,j)=>(
                    <div key={j}>
                       <h4> {i.type}</h4>
                       {i.values.map((k,l)=>(
                           <div key={l} style={{display:"inline"}}>
                               <span className="skill"> {k} </span>
                            </div>
                        ))}
                    </div>))}
            </div>
        </div>
    )
}

export default Resume;