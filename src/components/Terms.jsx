import React from 'react'
import styles from "../style";

const Terms = () => {
  return (
    <section className={`${styles.flexCenter}  ${styles.padding}   sm:flex-row flex-col    `}>
      <div className="flex-1 flex flex-col">
        <h1 className={` flex-1 font-Poppins font-semibold ss:text-[22px] text-[26px] text-black ss:leading-[100.8px] leading-[75px]`}>Terms and Conditions!</h1>
        Terms and Conditions of morsystems

        Acceptance of Terms
        By accessing or using our services, you acknowledge that you have read, understood, and agreed to be bound by these terms and conditions.

        Definitions

        "Company": Refers to morsystems.
        "Customer": Refers to the entity or individual who has subscribed to or is using our services.
        "Services": Refers to the SaaS products and associated services provided by the Company.
        License and Usage
        The Company grants the Customer a non-exclusive, non-transferable license to access and use the Services, subject to compliance with these terms and conditions.

        Subscription and Payment

        Subscription: Customers must select and subscribe to the Services according to the pricing and plans offered by the Company.
        Payment: Customers agree to pay the fees as specified by the Company for the selected Services. Payment terms, methods, and invoicing details should be outlined.
        Intellectual Property
        The Company retains all intellectual property rights related to the Services. The Customer agrees not to modify, reproduce, distribute, or create derivative works based on the Services without prior written consent from the Company.

        Data Security and Privacy
        The Company will implement reasonable security measures to protect Customer data. However, the Customer acknowledges that no system is entirely secure, and the Company cannot guarantee the absolute security of data.

        Limitation of Liability
        The Company shall not be liable for any direct, indirect, incidental, consequential, or exemplary damages arising from the use or inability to use the Services.

        Termination
        Either party may terminate the agreement with a notice period specified in the contract. Upon termination, the Customer's access to the Services will be revoked, and any outstanding fees shall be paid.

        Governing Law and Jurisdiction
        These terms and conditions shall be governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].

        Modifications to Terms and Conditions
        The Company reserves the right to modify these terms and conditions at any time. Customers will be notified of any material changes, and continued use of the Services after such modifications shall constitute acceptance of the updated terms.

        Entire Agreement
        These terms and conditions constitute the entire agreement between the parties and supersede any prior understandings or agreements, whether oral or written, relating to the subject matter hereof.

      </div>
    </section>
  )
}

export default Terms