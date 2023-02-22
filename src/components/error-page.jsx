import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    return(
        <div className="errorPage">
            <h1>Oops! Something went wrong</h1>
            <p>Sorry, an unexpected error has occured.</p>
            <p>
                <i>
                    {error?.statusText || error?.message}
                </i>
            </p>
            <Link className="btn" to={'/'}>Go back to home</Link>
        </div>
    )
}

export default ErrorPage