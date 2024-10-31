import { useLoaderData } from "react-router-dom";

const ShowDetails = () => {
    const country = useLoaderData();
    const {name} = country;
    return (
        <div>
          <h4>Country name: {name}</h4>
          <p>Region name: {country.name}</p>
        </div>
    );
};

export default ShowDetails;