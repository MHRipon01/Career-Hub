import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-full ">
            <h2>Oooopppss!!!!!</h2> 
           <div className="flex justify-center">
            
           <Link className="p-3 bg-gray-600 text-red-300 w-96 flex justify-center items-center rounded-lg " to='/'> Go Home.</Link>
           </div>
        </div>
    );
};

export default ErrorPage;