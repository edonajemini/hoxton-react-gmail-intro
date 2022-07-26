import EmailContent from "./EmailContentMain";
import EmailToolbar from "./EmailToolbarMain";

function Main() {
    return (
        <main className="email-view">

            <EmailToolbar />

            <EmailContent />
        </main> 
    )
}

export default Main