{/*
function main(){
  return(
 <main className="email-view">
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
       </main>
    );
  }
*/
}
import flaticonWelcomeImage from "../assets/images/flaticon-welcome-image.png";
function EmailBody() {
  return (
    <section className="email-body">
      <div className="content">
        <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
      </div>
    </section>
  );
}
export default EmailBody;