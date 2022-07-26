import EmailContentHeader from "./EmailContentHeader";
import flaticonWelcomeImage from "../assets/images/flaticon-welcome-image.png";

function EmailContentArticle() {
    return (
        <article className="email-content">
        <div className="title">
            <h1>Welcome to Flaticon</h1>
        </div>

            <EmailContentHeader />

            <section className="email-body">
            <div className="content">
                <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
            </div>
        </section>
        <section className="email-actions">
            <button>Reply</button>
            <button>Forward</button>
        </section>

        </article>

    )
}

export default EmailContentArticle