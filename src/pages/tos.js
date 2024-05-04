import Header from "../components/Header";
import Footer from "../components/Footer";
import { parseCookies } from 'nookies';
import ReactMarkdown from 'react-markdown';

export async function getServerSideProps(context) {
  const cookies = parseCookies(context);
  const accessToken = cookies['access_token'];

  // Determine if the user is logged in based on the presence of an access token
  const isLoggedIn = Boolean(accessToken);

  return { props: { isLoggedIn } };
}

const terms = ({ isLoggedIn }) => {
  const pageContent = `*Last Updated: 01/02/2024*

**1. Introduction**

Welcome to Unimad! These Terms of Service ("Terms") govern your use of the Unimad Beta, an innovative job search solution designed for students. By accessing or using our services, you agree to these Terms. If you do not agree, please refrain from using Unimad.

**2. Description of Service**

Unimad offers a unique 8-week job search framework and access to Unibot, a personalised job-search mentor. The Beta version is provided for testing and obtaining user feedback on these services.

**3. Account Registration and Use**

To access the Beta, users must authenticate via LinkedIn and provide necessary personal information. Users are responsible for maintaining the confidentiality of their accounts and for all activities that occur under their accounts. Users agree to use Unimad in a manner consistent with all applicable laws and regulations.

**4. User-Generated Content**

While Unimad Beta currently does not allow users to post content or interact with each other, it may do so in the future. Users agree to be solely responsible for the content they post and to comply with all applicable laws.

**5. Privacy and Data Usage**

Unimad respects the privacy of its users. Personal data collected (such as email, phone number, and LinkedIn profile information) is used solely for service improvement. We employ cookies for managing user sessions and improving user experience. We commit to not sharing user data with third parties.

**6. Data Security**

We take data security seriously and use Google Cloud PostgreSQL Database for data storage, benefiting from its robust security features. As we evolve, we plan to implement additional security measures to further protect user data.

**7. User Rights**

Users have the right to access, edit, or delete their data at any time. Users can terminate their accounts and discontinue the use of Unimad Beta at their discretion.

**8. Compliance with Laws**

Unimad operates under the jurisdiction of Indian laws, complying with local data protection and privacy regulations. We are committed to maintaining the highest standards of legal compliance.

**9. Amendments to Terms**

Unimad reserves the right to modify these Terms. Any changes will be communicated to users via email and continued use of the service after such changes will constitute acceptance of the new Terms.

**10. Dispute Resolution**

Disputes arising from the use of Unimad Beta will be resolved under the laws of India, and parties agree to submit to the exclusive jurisdiction of Indian courts.`;
  return (
    <>
     <div className="bg-[#F5F5F5] overflow-hidden">
      <Header isLoggedIn={isLoggedIn} />

        <div className="mainCont relative mb-[150px] mt-[150px] md2:mt-[200px]">
         <div className="relative text-main-dark min-h-[calc(100vh-608px)] z-30">
             <div className="relative bg-[#FAFAFA] rounded-3xl px-5 py-10 z-30">             
             <div className="relative text-[38px] sm3:text-[42px] text-center mb-10 z-30">Terms of Service</div>
             <div className="relative lg:pl-10 lg:ml-10">
              <div className="lg:pl-20 lg:ml-20" >
                <ReactMarkdown className="prose">{pageContent}</ReactMarkdown>

              </div>
              </div> 
             </div>
             <img src="/images/circle5.svg" alt="circle bg" className="absolute -top-[150px] -left-[500px]" />
             <img src="/images/circle6.svg" alt="circle bg" className="absolute -bottom-[300px] -right-[200px]" />
         </div>
        </div>

       <Footer/>
     </div>
    </>
  )
}

export default terms