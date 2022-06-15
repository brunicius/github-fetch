import ProfileBox from "./ProfileBox"
import './ProfileList.css'

type Profile = {
    login?: string,
    avatar_url?: string,
    name?: string,
    bio?: string,
    public_repos?: number,
    location?: string,
    followers?: number
}

type ProfileListProps = {
    profiles?: Profile[],
    loading: boolean
}

function ProfileList(props: ProfileListProps) {    

    return (
        <div className="profile-list">
            {props?.profiles?.map((profile, key)=>{
                return (
                    <ProfileBox key={key} login={profile.login} avatar_url={profile.avatar_url} name={profile.name} bio={profile.bio} public_repos={profile.public_repos} location={profile.location} followers={profile.followers} />
                )
            })}
            {props.loading ? (
                <div className="load">
                </div>
            ) : null}
        </div>
    )
}

export default ProfileList