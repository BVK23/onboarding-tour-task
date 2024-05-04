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

const privacy = ({ isLoggedIn }) => {
  const pageContent = `*Last Updated: 01/02/2024*

  **1. Information Collection and Use**
  
  Unimad collects personal information to provide and improve our services. This data is handled with the utmost respect for user privacy.
  
  **2. Cookies and Tracking Technologies**
  
  Cookies are used to enhance user experience, manage sessions, and authenticate users. Users can manage cookie settings in their browsers, but this may affect the functionality of Unimad Beta.
  
  **3. Data Security**
  
  Protecting user data is a top priority for Unimad. We use industry-standard security measures and continuously evaluate our practices to ensure data safety.
  
  **4. User Data Rights**
  
  Users have full control over their data, including the right to access, modify, or delete their information. Requests for data access or deletion can be made through user account settings or by contacting Unimad support.
  
  **5. Changes to the Privacy Policy**
  
  We may update this Privacy Policy to reflect changes in our practices. Users will be notified of any significant changes and are encouraged to review the Privacy Policy periodically.
  
  **6. Contact Us**
  
  For any questions or concerns about these Terms or the Privacy Policy, please contact us at grow@unimad.ai`;
  return (
    <>
     <div className="bg-[#F5F5F5] overflow-hidden">
      <Header isLoggedIn={isLoggedIn} />

        <div className="mainCont relative mb-[150px] mt-[150px] md2:mt-[200px]">
         <div className="relative text-main-dark min-h-[calc(100vh-608px)] z-30">
             <div className="relative bg-[#FAFAFA] rounded-3xl px-5 py-10 z-30">             
             <div className="relative text-[38px] sm3:text-[42px] text-center mb-10 z-30">Privacy Policy</div>
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

export default privacy