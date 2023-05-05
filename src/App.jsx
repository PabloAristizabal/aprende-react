import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App(){
    return(
        <section className="App" >
            <h1 className='text'>A quién seguir</h1>
            <TwitterFollowCard  userName={"midudev" } initialIsFollowing={true}>
                Migel Angel
            </TwitterFollowCard>
        
            <TwitterFollowCard userName={"Rau_l"} initialIsFollowing={true}>
                Juan Camilo
            </TwitterFollowCard>
            
            
        </section>)        
}
