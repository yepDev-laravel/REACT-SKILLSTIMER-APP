import Skill from "../models/skills";

export default class SkillServices{

    static getSkills():Promise<Skill[]>{
            return fetch("http://localhost:3001/skill").then(
                resp=> resp.json()
            ).catch(
                e=> this.handleError(e)
            )
    }

    static getSkill(id: number):Promise<Skill|null>{
        return fetch(`http://localhost:3001/skill/${id}`).then(
            resp=> resp.json()
        ).then( 
            data=> this.isEmpty(data)? null: data
            ).catch(
            e=> this.handleError(e)
        )
    }

    static setNewSkill(data:Skill){
        
    }

    static isEmpty(data: object):boolean{
        return  Object.keys(data).length=== 0;
    }

    static handleError(error:Error):void{
        console.log('Ops... ocorreu um erro', error);
    }
}