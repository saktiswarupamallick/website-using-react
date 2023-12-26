import React from 'react'
import styles from "../style";

const privacy = () => {
  return (
    <section className={`${styles.flexCenter}  ${styles.padding}   sm:flex-row flex-col `}>
      <div className="flex-1 flex flex-col">
        <h1 className={` flex-1 font-Poppins font-semibold ss:text-[22px] text-[26px] text-black ss:leading-[100.8px] leading-[75px]`}>Privacy Policy!</h1>
        Privacy Policy for B2B SaaS Company

        Effective Date: [25.05.2022]

        At morsystems, we value the privacy and security of our customers' information. This Privacy Policy outlines how we collect, use, and protect the personal and non-personal information that is provided to us through the use of our software-as-a-service (SaaS) platform and related services. By using our services, you agree to the terms and practices described in this policy.

        Information We Collect
        1.1 Personal Information: When you sign up for our services, we may collect certain personal information, such as your name, email address, phone number, job title, and company details. We only collect personal information that is necessary to provide our services to you.
        1.2 Usage Data: We may also collect non-personal information related to your use of our services, such as IP addresses, device information, browser type, pages visited, and referring/exit pages. This information helps us analyze trends, administer the service, track user movements, and gather demographic information for internal purposes.




        <div className='m-5'></div>
        How We Use Information
        2.1 Service Provision: We use the collected information to provide and improve our services, respond to customer inquiries and support requests, process payments, and communicate important service-related information.
        2.2 Analytics and Personalization: We may analyze non-personal information to monitor and analyze trends, improve the functionality and usability of our services, and personalize your experience by providing relevant content and features.

        2.3 Marketing and Communication: With your consent where required by applicable laws, we may use your contact information to send promotional emails, newsletters, product updates, or other marketing communications. You have the right to opt-out of receiving such communications at any time.

        Information Sharing
        3.1 Service Providers: We may share your information with third-party service providers who assist us in delivering our services, such as payment processors, hosting providers, and customer support platforms. These service providers are obligated to handle your information securely and use it solely for the purpose of providing the requested services.
        3.2 Compliance with Laws: We may disclose your information to comply with applicable laws, regulations, legal processes, or enforceable governmental requests.

        3.3 Business Transfers: In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred to the acquiring entity, subject to the terms of this Privacy Policy.

        Data Security
        We implement industry-standard security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
        <div className='m-5'></div>
        Data Retention
        We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law. We will delete or anonymize your information when it is no longer needed or upon your request.

        Your Rights
        You have the right to access, update, correct, or delete your personal information. If you wish to exercise any of these rights or have any questions about the processing of your information, please contact us using the contact details provided at the end of this policy.

        Third-Party Links and Services
        Our services may contain links to third-party websites, applications, or services that are not operated or controlled by us. This Privacy Policy does not apply to those third-party platforms, and we are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party platforms you visit.


      </div>
    </section>
  )
}

export default privacy