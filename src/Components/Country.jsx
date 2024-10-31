import { Link } from "react-router-dom";
const Country = ({country}) => {
    return (
        <div className="m-4 border-2 rounded-lg">
           <img className="h-[50px]" src={country.flags.png} alt="" />
            <h1>Country name : {country.name.common}</h1>
            <p>Region : {country.region}</p>
           <li><Link to={`/country/${country.cca3}`}>Show Details</Link></li>
        </div>
    );
};

export default Country;