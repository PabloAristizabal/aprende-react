import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App(){
    const formatUserName = (userName) => `@${userName}`
    return(
        <section className="App">
        <TwitterFollowCard formatUserName={formatUserName}  userName={"pablo_1u"} name={"Pablo"}/>

        <TwitterFollowCard formatUserName={formatUserName}  userName={"julian"} name={"Julian Estrada"}/>
        
        <TwitterFollowCard formatUserName={formatUserName} userName={"Estebam"} name={"Esteban Estrada"}/>
        
        <TwitterFollowCard formatUserName={formatUserName}  userName={"Rau_l"} name={"Raul"}/>
        </section>)        
}
