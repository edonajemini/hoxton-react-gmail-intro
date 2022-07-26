import EmailContentMain from "./EmailContentMain"
import EmailToolbarMain from "./EmailToolbarMain"

function Main() {
    return (
        <main className="email-view">

            <EmailToolbarMain />

            <EmailContentMain />
        </main> 
    )
}

export default Main