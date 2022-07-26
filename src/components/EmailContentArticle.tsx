import EmailActions from "./EmailActions";
import EmailBody from "./EmailBody";
import EmailContentHeader from "./EmailContentHeader";

function EmailContentArticle() {
    return (
        <article className="email-content">
        <div className="title">
            <h1>Welcome to Flaticon</h1>
        </div>
            <EmailContentHeader />

            <EmailBody />

            <EmailActions />

        </article>

    )
}

export default EmailContentArticle