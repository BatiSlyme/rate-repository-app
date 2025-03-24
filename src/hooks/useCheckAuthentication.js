import { useQuery } from "@apollo/client"
import { ME } from "../graphql/mutations"
import { useState } from "react";

const useCheckAuthentication = () => {
    const { data } = useQuery(ME);
    console.log('data ', data);

    return data?.me;
}

export default useCheckAuthentication;  