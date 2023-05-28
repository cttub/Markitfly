import React, { Component } from 'react';
import Footer from './Elements/Footer';
class Privacy extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <div id='privacy'>
                    <h2 className='purple-txt'>Last updated: 5/14/2023</h2>
                    <h1>Privacy Policy</h1>
                    <p>Markitfly Media (“us”, “we”, or “our”) operates markitfly.com (the “Site”). This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Site.</p>
                    <p>We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy.</p>
                    <br></br><br></br>


                    <h2>Information Collection and Use</h2>
                    <p>While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name and email address (“Personal Information”).</p>
                    
                    <br></br>
                    <h2>Log Data</h2>
                    <p>Like many site operators, we collect information that your browser sends whenever you visit our Site (“Log Data”). This Log Data may include information such as your computer’s Internet Protocol (“IP”) address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics.</p>
            
                    <br></br>
                    <h2>Cookies</h2>
                    <p>Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer’s hard drive.</p>
                    <p>Like many sites, we use “cookies” to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.</p>


                    <br></br>
                    <h2>Security</h2>
                    <p>The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>


                    <br></br>
                    <h2>Changes to This Privacy Policy</h2>
                    <p>This Privacy Policy is effective as of 5/14/2023 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.</p>
                    <p>We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.</p>


                    <br></br>
                    <h2>Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, please contact us at <a href='mailto:contact@markitfly.com'>contact@markitfly.com</a></p>
                </div>
            <Footer
            background = "footer-red"/>
            </div>
        );
    }
}
 
export default Privacy;