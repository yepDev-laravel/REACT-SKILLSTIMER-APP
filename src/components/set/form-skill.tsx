import Skill from "../../models/skills";
import React, {FunctionComponent, useState} from "react";


type Field={
    value?:any,
    error?:string,
    isValid?: boolean
}

type Form={
    id:number;
    desc: Field;
    name: Field;
    category: Field;
    proficiency: Field;
    timer: Field;
}

type Props={
    EditSkill?:Skill
}

const FormSkill:FunctionComponent<Props>=({EditSkill={id:
    Date.now(),name:"",desc:"",category:"",proficiency:"beginner",timer:0, created: new Date()}})=>{

    const [newSkill, setNewSkill]=useState<Form>({
        id:EditSkill.id,
        desc:{value:EditSkill.desc ,isValid:true},
        name:{value:EditSkill.name ,error:"Field must not be empty.",isValid:false},
        category:{value:EditSkill.category ,error:"Field must not be empty.",isValid:false},
        proficiency:{value:EditSkill.proficiency ,isValid: true},
        timer:{value:EditSkill.timer ,isValid: true}
    });



    const handleInputChange=(e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>)=>{
        const name= e.target.name
        const value= e.target.value
        const newField:Field= {[name]:{value:value, isValid:true}}

        setNewSkill({...newSkill, ...newField})

        

    }

    const handleFormSubmit=(e: React.FormEvent)=>{

        e.preventDefault();
        console.log(newSkill)
    }


    return(
        <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
                <label htmlFor="formSkillName" className="form-label">
                Skill Name
                </label>
                <input
                type="text"
                className="form-control"
                id="formSkillName"
                placeholder="Enter skill name"
                name="name"
                value={newSkill.name.value}
                onChange={handleInputChange}
                required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="formSkillDesc" className="form-label">
                Skill Description
                </label>
                <textarea
                className="form-control"
                id="formSkillDesc"
                placeholder="Enter skill description"
                name="desc"
                value={newSkill.desc.value}
                onChange={handleInputChange}
                required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="formSkillCategory" className="form-label">
                Skill Category
                </label>
                <input
                type="text"
                className="form-control"
                id="formSkillCategory"
                placeholder="Enter skill category"
                name="category"
                value={newSkill.category.value}
                onChange={handleInputChange}
                required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="formSkillProficiency" className="form-label">
                Skill Proficiency
                </label>
                <select
                className="form-select"
                id="formSkillProficiency"
                name="proficiency"
                value={newSkill.proficiency.value}
                onChange={handleInputChange}
                required
                >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="formSkillTimer" className="form-label">
                Skill Timer (in minutes)
                </label>
                <input
                type="number"
                className="form-control"
                id="formSkillTimer"
                placeholder="Enter skill timer"
                name="timer"
                value={newSkill.timer.value}
                onChange={handleInputChange}
                required
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    )
}

export default FormSkill;