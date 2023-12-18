import React, {FunctionComponent} from "react";
import { Link } from "react-router-dom";
import FormSkill from "../components/set/form-skill";

const CreateSkill:FunctionComponent=()=>{



    return(
        <div className='container'>
        <div className="row d-flex justify-content-center align-item-center">
          <div className="pokedex-container">
            <FormSkill/>
          </div>
        </div>
        <Link to='/'>retour</Link>
      </div>
    );
}

export default CreateSkill;