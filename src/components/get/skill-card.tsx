import React, {FunctionComponent} from "react";
import Skill from "../../models/skills";
import "./skill-card.css"
import formatDate from "../../helpers/formatDate";
import { useHistory } from "react-router-dom";

type Props={
    skill:Skill
};

const SkillCard:FunctionComponent<Props>=({skill})=>{

    const history=useHistory()
    const goToDetail=(id:number)=>{
        history.push(`/skill/${id}`)
    }

    return(
        <div className="card mb-3 p-cart" onClick={()=>{goToDetail(skill.id)}}>
              <div className="row g-0">
              <div className="card-body">
                    <h5 className="card-title">{skill.name}</h5>
                    <p className="card-text ">description:{skill.desc}</p>
                    <p className="card-text ">category:{skill.category}</p>
                    <p className="card-text ">niveau: {skill.proficiency}</p>
                    <p className="card-text ">temps passé: {skill.timer}</p>
                    <p className="card-text"><span className="text-muted">{skill.created}</span></p>
                </div>
              </div>
        </div>
    );
}

export default SkillCard;