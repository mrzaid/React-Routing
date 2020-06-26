import React from "react";
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,useLocation,
    useHistory
} from "react-router-dom";

export default function Topics() {
    let match = useRouteMatch();
const location = useLocation();
const history = useHistory();
    return (
        <div>
            <h2>Topics</h2>
            <h1>my current location is {location.pathname}</h1>
            <h1>my current history.location.pathname but dont use it its mutable is {history.location.pathname}</h1>
            {location.pathname===`/Topics/react` ? 
        (<button onClick={()=>{alert("parhlo antolan")}}> he1llo react jabo</button>):null}
            {location.pathname===`/Topics/redux` ? 
        (<button onClick={()=>history.goBack()} > hello redux jabo</button>):null}
            {location.pathname===`/Topics/redux` ? 
        (<button onClick={()=>history.push("/")} > this button wil kick you to home</button>):null}
           
            {location.pathname===`/Topics/redux` ? 
        (<button onClick={()=>history.replace("/")} > this button wil kick you to home</button>):null}
{console.log(history)}
            <ul>
                <li>
                    <Link to={`${match.url}/react`}>React</Link>
                </li>
                <li>
                    <Link to={`${match.url}/redux`}>Redux </Link>
                </li>
            </ul>

            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Topic />
                </Route>
                <Route path={match.path}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
    );
}


function Topic() {
    let { topicId } = useParams();
    return <div style={{background: 'yellow'}}>
        <h3>Topic Component</h3>
        <h4>Requested topic ID: {topicId}</h4>

    </div>;
}