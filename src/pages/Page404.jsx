import { useNavigate } from "react-router";
import girlImg from "../assets/error-1.png";
import { Helmet } from "react-helmet";
const Page404 = () => {

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/");

    }


    return (
        <div className="flex w-full lg:w-10/12 justify-center items-center mx-auto my-10 md:my-20 lg:mt-32">
            <Helmet>
                <title> 404 Page </title>
            </Helmet>
            <div className="hidden lg:block">
                <div>
                    <img src={girlImg} alt="" />
                </div>

            </div>

            <div className="bg-black w-full lg:w-6/12 bg-opacity-30 text-center p-16 rounded-xl">
                <h2 className="text-6xl font-bold font-Parkinsans text-white">404</h2>
                <h4 className="text-white font-Parkinsans font-bold text-3xl my-2">Page not found</h4>
                <p className="text-white font-Parkinsans text-lg">Sorry, we couldn’t find the page you are looking for.
                </p>
                <button onClick={handleNavigate} className="bg-[#553739] hover:bg-[#955E42] border-none text-white btn rounded-full mt-4">Back to Home</button>
            </div>
        </div>
    );
};

export default Page404;