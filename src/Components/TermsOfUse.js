import React, { Component } from 'react';
import Footer from './Elements/Footer';
class TermsOfUse extends Component {
    state = {  } 
    render() { 
        return (
            <div>
            <div id='terms'>
                <h2 className='purple-txt'>Last updated: 7/3/2023</h2>
                <h1>Terms of Use</h1>
                <p>Welcome to our website, which is built using the React.js framework. By using our website, you agree to these terms of use, our privacy policy, and any other guidelines or policies that we may post on our website from time to time.</p>

                <br></br><br></br>
                <h2><b>Use of our website</b></h2>
                <p>Our website is intended for your personal, non-commercial use only. You may not use our website for any commercial purpose without our express written permission. You may not use our website in any way that violates any applicable law or regulation, or that infringes on the rights of any third party.</p>
                
                <br></br>
                <h2><b>Intellectual property</b></h2>
                <p>Our website and all of its content, including but not limited to text, graphics, logos, images, and software, are the property of us or our licensors and are protected by United States and international copyright laws. You may not use our content without our express written permission.</p>

                <br></br>
                <h2><b>User content</b></h2>
                <p>You may be able to submit user-generated content on our website, such as comments or reviews. By submitting such content, you grant us a non-exclusive, worldwide, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content in any media.</p>
                <p>You represent and warrant that you have all rights necessary to submit such content and that your submission of such content does not violate any third party rights or any applicable laws or regulations. We reserve the right to remove any user-generated content at any time and for any reason.</p>

                <br></br>
                <h2><b>Disclaimer of warranties</b></h2>
                <p>Our website is provided on an "as is" and "as available" basis. We make no warranties, express or implied, regarding the operation of our website or the information, content, materials, or products included on our website. We do not warrant that our website will be uninterrupted or error-free, that defects will be corrected, or that our website or the servers that make it available are free of viruses or other harmful components.</p>
            

                <br></br>
                <h2><b>Limitation of liability</b></h2>
                <p>In no event shall we be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use of our website or the inability to use our website, even if we have been advised of the possibility of such damages. Some jurisdictions do not allow the exclusion or limitation of liability for consequential or incidental damages, so the above limitation may not apply to you.</p>


                <br></br>
                <h2><b>Indemnification</b></h2>
                <p>You agree to indemnify and hold us harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your use of our website, your violation of these terms of use, or your violation of any rights of another.</p>


                <br></br>
                <h2><b>Governing law</b></h2>
                <p>These terms of use shall be governed by and construed in accordance with the laws of the state of Oklahoma, without giving effect to any principles of conflicts of law. Any dispute arising out of or in connection with these terms of use shall be submitted to the exclusive jurisdiction of the state or federal courts located in Tulsa, Oklahoma.</p>

                <br></br>
                <h2><b>Changes to these terms of use</b></h2>
                <p>We reserve the right to modify or update these terms of use at any time, without prior notice. Your continued use of our website after such modifications or updates constitutes your acceptance of the revised terms of use.</p>
                <p>If you have any questions or concerns about these terms of use or our website, please contact us at <a href='mailto:contact@markitfy.com'>contact@markitfy.com</a></p>
            
                <br></br> <br></br>
                <h3><b><u>We would like to provide some information about the components used on our website and our right to use them</u></b></h3>

                <br></br><br></br>
              
                <h2><b>Canva Pro License</b></h2>
                <p>We use third-party resources like Canva to create imagery and other visual content for our website, in which we have access to use for commercial and personal use based on their terms and conditions. You can view Canva's License <a className='purple-txt' href='https://www.canva.com/licensing-explained/' target='_blank'>here.</a></p>

                <br></br>
                <h2><b>Noun Project License</b></h2>
                <p>We have subscribed to Noun Project's service to access and use icons on our website. We may display these icons on our website or other promotional materials. We are using these icons in accordance with Noun Project's terms of use and have paid for a yearly subscription to access them.</p>

                <br></br>
                <h2><b>3D Resources</b></h2>
                <p>We are using free 3D imagery components from SALY that we downloaded from Figma's community website. We may display these components on our website or other promotional materials. We are using these components in accordance with SALY's terms of use and with the permission of the original creator. We have not paid for these components and do not claim any ownership rights to them.</p>
                <p>We have also purchased the Human 3.0 package from Wannathis to use on our website. We may display these components on our website or other promotional materials. We are using these components in accordance with Wannathis's terms of use and have paid for a license to use them.</p>
            

                <br></br>
                <h2><b>Piggy 3D Component</b></h2>
                <p>The assets on our website, including but not limited to icons and background bubbles, were created using Canva Pro components and are the property of us, which we have the rights to use in accordance with <a className='purple-txt'  href='https://www.canva.com/licensing-explained/' target='_blank'>Canva's term of use.</a> The 3D rendered objects on our website, such as the flying pig, were created by us using tools like Nomad Sculpt and are the property. We may display these assets on our website or other promotional materials.</p>
                <p>By using our website, you agree to these terms and acknowledge that the assets on our website, including the Canva components and the 3D rendered objects, are the property of us and that we own the rights to them. You may not use these assets for any commercial or non-commercial purpose without our express written permission.</p>
            
                <br></br>
                <h2><b>Animated Fluent Emojis</b></h2>
                <p>
                    We are using Animated Fluent Emojis, which are open source icons available on the GitHub repository at <a className='purple-txt' href='https://github.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis' target='_blank'>https://github.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis</a>. We have incorporated these emojis into our website in accordance with the terms of the open source license.
                </p>
                <p>
                    The Animated Fluent Emojis are the property of their respective creators and are subject to the terms and conditions specified by the open source license. By using our website, you agree to comply with the terms of the license regarding the use of the Animated Fluent Emojis.
                </p>
            </div>
            <Footer
                 background = "footer-red"/>
            </div>
        );
    }
}
 
export default TermsOfUse;