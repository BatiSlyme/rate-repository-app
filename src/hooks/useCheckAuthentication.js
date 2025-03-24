import { useQuery } from "@apollo/client"
import { ME } from "../graphql/mutations"

const useCheckAuthentication = () => {
    const { data } = useQuery(ME);
    return data;
}

export default useCheckAuthentication;  