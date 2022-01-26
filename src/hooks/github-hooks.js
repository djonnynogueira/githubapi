import { useContext } from "react";
import { GithubContext } from "../providers/github-provider";



const useGitHub = () => {

        const { gitHubState, getUser} = useContext( GithubContext );
        return  { gitHubState, getUser}
}

export default useGitHub