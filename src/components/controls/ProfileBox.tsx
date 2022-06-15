type ProfileBoxProps = {
    login?: string,
    avatar_url?: string,
    name?: string,
    bio?: string,
    public_repos?: number,
    location?: string,
    followers?: number
}

import './ProfileBox.css'

function ProfileBox(props: ProfileBoxProps) {
    function handleClick() {
        window.open(`https://github.com/${props.login}`, '_blank')
    }

    return (
        <div onClick={handleClick} className="profile-box">
            <img src={props.avatar_url} className='user-profile' alt="User profile picture" />
            <div className='content'>
                <h3>{props.login}</h3>
                <h1>{props.name}</h1>            
                <p className='bio'>{props.bio}</p>
                <p /* className='mt' */>{props.location}</p>
                {(props.followers || props.public_repos) ? (
                    <div className='right-align'>
                        {props.followers ? (
                            <p><span>{props.followers}</span> {props.followers > 1 ? 'seguidores' : 'seguidor'}</p>
                        ) : null}
                        {props.public_repos ? (
                            <p><span>{props.public_repos}</span> {props.public_repos > 1 ? 'repositórios públicos' : 'repositório público'}</p>
                        ) : null}
                    </div>
                ): null}
            </div>
        </div>
    )
}

export default ProfileBox