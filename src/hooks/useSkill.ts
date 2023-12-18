import  {useState, useEffect} from "react";
import Skill from "../models/skills";
import SkillServices from '../services/skil-services';


const useSkill=(id:string)=>{

    const [skill, setSkill]=useState<Skill|null>(null);

    useEffect(()=>{
        SkillServices.getSkill(+id).then(
            skill=> {if (skill) {
                setSkill(skill)
            }}
        )
    },[id]);


    return skill;
}

export default useSkill;