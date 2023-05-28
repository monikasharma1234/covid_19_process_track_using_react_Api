import { useContext } from "react";
import { FirstNameContext, LastNameContext } from './App';
function ComB()
{
    const fname = useContext(FirstNameContext);
    const lname = useContext(LastNameContext);
    return (<><h1>thapa {fname} {lname}</h1></>);
}
export {ComB};