import React, {FunctionComponent} from "react";
import { RouteComponentProps, Link } from "react-router-dom";

import FormSkill from "../components/set/form-skill";
import useSkill from "../hooks/useSkill";

type Params={
  id:string
}

const EditSkill:FunctionComponent<RouteComponentProps<Params>>=({match })=>{
  const skill=useSkill(match.params.id)


    return(
        <div className='container'>
        {
          skill? (
            <div className="row d-flex justify-content-center align-item-center">
              <div className="pokedex-container">
                <FormSkill EditSkill={skill} />
              </div>
            </div>
          ):(
            <h1>Competence introuvable</h1>
          )
        }
        <Link to='/'>retour</Link>
      </div>
    );
}

export default EditSkill;