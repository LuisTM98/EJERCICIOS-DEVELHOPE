import { useHookGitHubUser } from "./useHookGithubUser";

export function HookGithubUser({username}){
    
    const data = useHookGitHubUser(username)
    
    return (
        <div style={{display:"flex", gap:'5px', alignItems: 'center'}}>
            {data && <h1>{data.name}</h1>}
            {data && <h2>{data.login}</h2>}
            {data && <div><img src={data.avatar} style={{maxHeight: '30px'}}/></div>}
        </div>
      );
}