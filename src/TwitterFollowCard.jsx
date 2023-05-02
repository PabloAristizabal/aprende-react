export function TwitterFollowCard({formatUserName, userName, name, isFollowing}){
    
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img alt="El avatar de midudev" className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`}/>
            </header>
            <div className='tw-followCard-info'>
                <strong>{name}</strong>
                <p className='tw-followCard-infoUserName'>{formatUserName(userName)}</p>
            </div>
            <aside>
                <button className='tw-followCard-button'>
                    seguir
                </button>
            </aside>
        </article>
    )
}