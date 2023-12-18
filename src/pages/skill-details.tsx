import React, {FunctionComponent} from "react";
import { RouteComponentProps, Link, useHistory } from 'react-router-dom';
import formatDate from "../helpers/formatDate";
import useSkill from "../hooks/useSkill";

type Params={
    id:string
}

const SkillDetail:FunctionComponent<RouteComponentProps<Params>>=({match})=>{

    const skill=useSkill(match.params.id);
    const history=useHistory()

    const gotoEdit=(id: number)=>{
        history.push(`/skill/edit/${id}`)
    }
    return(
        <div>
            {skill ?(
                <div className="card mb-3 bg-white" >
                    <div className="row g-0">
                        <div className="card-header d-flex justify-content-between ">
                            <h5 className="card-title">{skill.name}</h5>
                            <span onClick={()=>gotoEdit(skill.id)}><i className="fa-solid fa-pen"></i></span>
                        </div>
                        <div className="card-body ">
                            <div className="d-flex justify-content-between">
                            <p className="card-text ">timer: {skill.timer}</p>
                            <button className="btn btn-success"><i className="fa-solid fa-play"></i></button>
                            </div>
                            <p className="card-text ">description:{skill.desc}</p>
                            <p className="card-text ">category:{skill.category}</p>
                            <p className="card-text ">niveau: {skill.proficiency}</p>
                            <p className="card-text"><span className="text-muted">{skill.created}</span></p>
                        </div>
                    </div>
                </div>
            ):(
                <h1>Vous n'avez rien appris jusqu'ici</h1>
                )
            }
            <Link to='/'>retour</Link>
        </div>
        
    );
}

export default SkillDetail;



