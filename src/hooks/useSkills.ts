import  {useState, useEffect} from "react";
import Skill from "../models/skills";
import SkillServices from "../services/skil-services";


const useSkills=()=>{

    const [skills, setSkill]=useState<Skill[]>([]);

    useEffect(()=>{
        SkillServices.getSkills().then(
            skills=> setSkill(skills)
        )
    },[]);


    return skills;
}

export default useSkills;