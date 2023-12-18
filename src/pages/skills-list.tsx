import React, {FunctionComponent, useEffect, useState} from "react";
import SkillCard from "../components/get/skill-card";
import useSkills from "../hooks/useSkills";

const SkillsList:FunctionComponent=()=>{

    const skills=useSkills()

    return(
        <div className='container'>
        <div className="row d-flex justify-content-center align-item-center">
          <div className="pokedex-container">
            {skills ? (
                
                skills.map((skill) => (
                    <SkillCard key={skill.id} skill={skill}/>
                ))
                  
            ):(
                <h1>Vous n'avez rien appris jusqu'ici</h1>
            )}
          </div>
        </div>
      </div>
    );
}

export default SkillsList;