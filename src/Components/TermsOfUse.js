import React, { Component } from 'react';
import Footer from './Elements/Footer';
class TermsOfUse extends Component {
    state = {  } 
    render() { 
        return (
            <div>
            <div id='terms'>
                <h2 className='purple-txt'>Last updated: 5/14/2023</h2>
                <h1>Terms of Use</h1>
                <p>Welcome to our website, which is built using the React.js framework. By using our website, you agree to these terms of use, our privacy policy, and any other guidelines or policies that we may post on our website from time to time.</p>

                <br></br><br></br>
                <h2>Use of our website</h2>
                <p>Our website is intended for your personal, non-commercial use only. You may not use our website for any commercial purpose without our express written permission. You may not use our website in any way that violates any applicable law or regulation, or that infringes on the rights of any third party.</p>
                
                <br></br>
                <h2>Intellectual property</h2>
                <p>Our website and all of its content, including but not limited to text, graphics, logos, images, and software, are the property of us or our licensors and are protected by United States and international copyright laws. You may not use our content without our express written permission.</p>

                <br></br>
                <h2>User content</h2>
                <p>You may be able to submit user-generated content on our website, such as comments or reviews. By submitting such content, you grant us a non-exclusive, worldwide, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content in any media.</p>
                <p>You represent and warrant that you have all rights necessary to submit such content and that your submission of such content does not violate any third party rights or any applicable laws or regulations. We reserve the right to remove any user-generated content at any time and for any reason.</p>

                <br></br>
                <h2>Disclaimer of warranties</h2>
                <p>Our website is provided on an "as is" and "as available" basis. We make no warranties, express or implied, regarding the operation of our website or the information, content, materials, or products included on our website. We do not warrant that our website will be uninterrupted or error-free, that defects will be corrected, or that our website or the servers that make it available are free of viruses or other harmful components.</p>
            

                <br></br>
                <h2>Limitation of liability</h2>
                <p>In no event shall we be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use of our website or the inability to use our website, even if we have been advised of the possibility of such damages. Some jurisdictions do not allow the exclusion or limitation of liability for consequential or incidental damages, so the above limitation may not apply to you.</p>


                <br></br>
                <h2>Indemnification</h2>
                <p>You agree to indemnify and hold us harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your use of our website, your violation of these terms of use, or your violation of any rights of another.</p>


                <br></br>
                <h2>Governing law</h2>
                <p>These terms of use shall be governed by and construed in accordance with the laws of the state of Oklahoma, without giving effect to any principles of conflicts of law. Any dispute arising out of or in connection with these terms of use shall be submitted to the exclusive jurisdiction of the state or federal courts located in Tulsa, Oklahoma.</p>

                <br></br>
                <h2>Changes to these terms of use</h2>
                <p>We reserve the right to modify or update these terms of use at any time, without prior notice. Your continued use of our website after such modifications or updates constitutes your acceptance of the revised terms of use.</p>
                <p>If you have any questions or concerns about these terms of use or our website, please contact us at <a href='mailto:contact@markitfy.com'>contact@markitfy.com</a></p>
            
                <br></br> <br></br>
                <h3><b><u>We would like to provide some information about the components used on our website and our right to use them</u></b></h3>

                <br></br><br></br>
              
                <h2>Canva Pro License</h2>
                <p>We use third-party resources like Canva to create imagery and other visual content for our website. When using these resources, certain data may be collected and shared with the third-party provider, in accordance with their own privacy policies. We encourage you to review the privacy policies of these providers to understand how they collect and use your data.</p>

                <br></br>
                <h2>Noun Project License</h2>
                <p>We have subscribed to Noun Project's service to access and use icons on our website. We may display these icons on our website or other promotional materials. We are using these icons in accordance with Noun Project's terms of use and have paid for a yearly subscription to access them.</p>

                <br></br>
                <h2>3D Resources</h2>
                <p>We are using free 3D imagery components from SALY that we downloaded from Figma's community website. We may display these components on our website or other promotional materials. We are using these components in accordance with SALY's terms of use and with the permission of the original creator. We have not paid for these components and do not claim any ownership rights to them.</p>
                <p>We have also purchased the Human 3.0 package from Wannathis to use on our website. We may display these components on our website or other promotional materials. We are using these components in accordance with Wannathis's terms of use and have paid for a license to use them.</p>
            

                <br></br>
                <h2>Piggy 3D Component</h2>
                <p>The assets on our website, including but not limited to icons and background bubbles, were created using Canva Pro components and are the property of us, which we have the rights to use in accordance with Canva's terms of use. The 3D rendered objects on our website, such as the flying pig, were created by us using tools like Nomad Sculpt and are the property. We may display these assets on our website or other promotional materials.</p>
                <p>By using our website, you agree to these terms and acknowledge that the assets on our website, including the Canva components and the 3D rendered objects, are the property of us and that we own the rights to them. You may not use these assets for any commercial or non-commercial purpose without our express written permission.</p>
            
            </div>
            <Footer
                 background = "footer-red"/>
            </div>
        );
    }
}
 
export default TermsOfUse;