import React, {FunctionComponent} from "react";
import SkillsList from "./pages/skills-list";
import SkillDetail from "./pages/skill-details";
import CreateSkill from "./pages/create-new-Skill";
import EditSkill from "./pages/edit-Skill";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

const App: FunctionComponent=()=>{


    return(
        <Router>
            <Switch>
                <Route exact path="/" component={SkillsList}/>
                <Route exact path="/skill/create" component={CreateSkill}/>
                <Route exact path="/skill/:id" component={SkillDetail}/>
                <Route exact path="/skill/detail/:id" component={SkillDetail}/>
                <Route exact path="/skill/edit/:id" component={EditSkill}/>
                
            </Switch>
        </Router>
    )
}

export default App;