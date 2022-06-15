import SearchBox from "./SearchBox"
import ProfileList from "./ProfileList"
import { useState } from "react"
import { unstable_batchedUpdates } from "react-dom"

type Profile = {
    login?: string,
    avatar_url?: string,
    name?: string,
    bio?: string,
    public_repos?: number,
    location?: string,
    followers?: number
}

function Control() {
    const [profiles, setProfiles] = useState<Profile[]>([
        /* {
            login: 'brunicius',
            avatar_url: 'https://avatars.githubusercontent.com/u/57375055?v=4',
            name: 'Bruno Vinicius',
            bio: 'Fullstack Junior Developer <3',
            public_repos: 3,
            location: 'Pernambuco, Brazil',
            followers: 1
        } */
    ])    
    const [loading, setLoading] = useState<boolean>(false);

    async function addProfile(profileLogin: string) {          
        if (!profileLogin || profileLogin.trim() == '')
            return
            
        setLoading(true)  

        fetch(`https://api.github.com/users/${profileLogin}`)
        .then(response => {
            if (!response.ok) {
                setLoading(false)
                return
            }
                
            response.json()
            .then(returnedProfile => {
                unstable_batchedUpdates(()=>{
                    setLoading(false);
                    setProfiles([...profiles, {
                        login: returnedProfile.login,
                        avatar_url: returnedProfile.avatar_url,
                        name: returnedProfile.name,
                        bio: returnedProfile.bio,
                        public_repos: returnedProfile.public_repos,
                        location: returnedProfile.location,
                        followers: returnedProfile.followers
                    }])
                })
            })
        })                
        
    }

    return (
        <div className="Control">
            <SearchBox onSubmit={addProfile}/>
            <ProfileList profiles={profiles} loading={loading} />
        </div>
    )
}

export default Control