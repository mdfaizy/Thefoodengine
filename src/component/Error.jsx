import { useRouteError } from "react-router-dom";

const Error = () => {
    const err=useRouteError();
    console.log(err);
  return (
    <div>Error
        <h1>Opps</h1>
        <h2>Somting with wrong..</h2>
        <h3>{err.status}:{err.statusText}</h3>
    </div>
  )
}

export default Error