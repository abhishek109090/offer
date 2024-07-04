import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import NavbarMain from './NavbarMain';

import './pdf.css';
import html2pdf from 'html2pdf.js';
const OfferLetter = React.forwardRef(({ formData, isEnabled, setIsEnabled, loading, sendFormData }, ref) => {
  const positionReferenceMap = {
    'CSR BPO voice': 'CSR/CSRA',
    'CSR BPO non voice': 'CSR/CSRA',
    'Jr. Software engineer': 'JRSWE/JRSWEA',
    'Jr. Software test engineer': 'JRSTE/JRSTEA',
    'Hr executive': 'HRE/HREA',
    'Hr Manager': 'HRM/HRMA',
    'General manager': 'GM/GMA',
    'Xml trainer': 'XMLT/XMLA',
    'Web designer': 'WD/WDA',
    'Xml programmer':'XML/XMLA'
  };

  const getPositionReference = () => {
    return positionReferenceMap[formData.position] || '';
  };
  const {
    position = '',
    date = '',
    ref: reference = '',
    name = '',
    addressLine1 = '',
    addressLine2 = '',
    city = '',
    state = '',
    country = '',
    zip = '',
    location = '',
    salary = '',
    joiningDate = ''
  } = formData;

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toISOString().split('T')[0].split('-').reverse().join('-');
  };
  const formatDate1 = (dateStr) => {
    if (!dateStr) return '';
    const joiningDate = new Date(dateStr);
    return joiningDate.toISOString().split('T')[0].split('-').reverse().join('-');
  };
  return (
  <div ref={ref} className="offer-letter-container">
    <div className="offer-letter">
      <div className="header">
        <div className="header-left">
          <h3 style={{ textTransform: 'uppercase', fontFamily: '' }}>MRV  IT  SOLUTIONS  PVT  LTD</h3>
        </div>
        <div className="header-right">
          <img src="https://mrvitsolutions.com/wp-content/uploads/2024/06/cropped-MRV_page-0001.jpg" alt="Page" />
        </div>
      </div>
      <div className="content">
        <h3 style={{textTransform:'capitalize',fontSize:'20px'}}>Offer: {formData.position}<span style={{ position:'absolute',left:"630px" }}>Date:{formData.date.split('-').reverse().join('-')}</span></h3>
        <b>  <p style={{ textTransform: 'capitalize' }}>Ref: MRV/{formData.ref}/{formData.location}/{getPositionReference()}</p></b>
        <p style={{ textTransform: 'capitalize' }}>{formData.name},<br />
          C/O {formData.addressLine1},<br />
          {formData.addressLine2},<br />
          {formData.city},<br />
          {formData.state},<br />
          {formData.country} - {formData.zip}.<br /></p>
        <h2><p>Dear <strong style={{ textTransform: 'capitalize' }}>{formData.name},</strong></p></h2>
        <h3>Sub: Letter of Offer and Terms of Employment</h3>
        <p>We thank you for exploring career opportunities with MRV Technology. You have successfully
          completed our initial selection process and we are pleased to make you an offer of employment.</p>
        <p>We are suitably impressed with your credentials and feel that your working with us will be mutually
          beneficial and rewarding. We are pleased to inform you that you have been selected for the
          position of <strong style={{ textTransform: 'capitalize' }}>{formData.position}</strong> in your present posting will be at <strong style={{ textTransform: 'capitalize' }}>{formData.location}</strong>. Your Gross Salary /
          Annual Compensation Package including all benefits will be <strong> Rs. {formData.salary}/-</strong> per annum. Annexure 1
          provides a break-up of the compensation package.</p>
        <p style={{fontWeight:'bold',fontSize:"20px"}}>You are required to join us from  <strong>{formData.joiningDate.split('-').reverse().join('-')}</strong></p>
        <p>Kindly confirm your acceptance of this offer by proposing your date of joining and signing Annexure 2.</p>
        <p>Your failure to accept the offer of the company within 2 days may lead to a presumption that you
          are not interested in working in the company and the offer will stand revoked automatically at the
          sole discretion of the company.</p>
        <p>On joining and successful completion of joining formalities, you will be issued a Letter of
          Appointment by the company. Joining formalities include a submission of a PAN Card and non-
          submission of the same will delay your joining duty. The offer of employment is also subject to the
          individual being eligible and legally permissible to work such as having a valid work permit or not
          being disqualified from being appointed by any law.</p>
        <p>If the requirements of the joining formalities including submission of PAN Card are not complied
          with by you within 30 days of your date of joining, this offer of employment would stand revoke at
          the sole discretion of the company. Your offer is subject to a positive background check.</p>
        <p>Please Note: MRV Technology does not charge any recruitment fees or charges from candidates</p>
      </div>
      <div className="footer" style={{ marginTop: '40px' }}>
        <p style={{ textAlign: 'left' }}>Private and Confidential MRV/<strong>{formData.ref}</strong></p>

        <h1 style={{ color: 'rgb(79, 178, 218)' }}>MRV  IT  SOLUTIONS  PVT  LTD</h1>
        <p>2nd Floor, West Wing, No.16, rajiv gandhi Salai, Karapakkam, Chennai - 600 097.<br />
          Web : www.mrvtechnology.com E-mail : info@mrvtechnology.com Ph : 93618 73224</p>
      </div>
    </div>
    <div className="offer-letter">
      <div className="page" >
        <div className="header">
          <div className="header-left">
            <h3 style={{ textTransform: 'uppercase', fontFamily: '' }}>MRV  IT  SOLUTIONS  PVT  LTD</h3>
          </div>
          <div className="header-right">
            <img src="https://mrvitsolutions.com/wp-content/uploads/2024/06/cropped-MRV_page-0001.jpg" alt="Page" />
          </div>
        </div>
        <div className="content">
          <h2>Compensation and Benefits</h2>
          <p>The details of your compensation and benefits are given below:</p>
          <h3>Fixed Compensation</h3>
          <p><strong>Basic Salary:</strong><br />
            Your Basic Basic will be <strong> Rs. {formData.basicMonthly}/- </strong>per month.<br />
            Your HRA will be <strong> Rs. {formData.hraMonthly}/-</strong> per month.</p>
          <p>While restructuring your BoB amount to various components, it is mandatory that at least of monthly basic pay be allocated towards HRA.</p>
          <h3>Leave Travel Allowance:</h3>
          <p>You will be eligible for annual Leave Travel Allowance which is equivalent to 8.33% of basic salary or a pro-rata amount in case you join during the financial year. This will be disbursed on a monthly basis along with the monthly salary.</p>
          <p>To avail income tax benefits, you need to apply for a minimum of 3 days of leave and submit supporting travel documents.</p>
          <h3>Rotational Shifts:</h3>
          <p>MRV Technology has agreed to provide its clients 24 X 7 production support environment. Shift working is therefore an incident and condition of service. Failure, refusal or inability to work in the night shift without reasonable cause may lead to severance of employment.</p>
          <p>Employee assigned to night shifts on client request in would be eligible for a Rotational Shifts. In order to avail this allowance the associate must work between 09.00AM and 06.00PM. IST excluding break. All approved claims will be paid post tax deduction along with monthly salary.</p>
          <h3>Other Benefits</h3>
          <h3>Health Insurance Scheme:</h3>
          <p>MRV Technology brings the benefit of health insurance cover to you and your dependents under the company’s Health Insurance Scheme (HIS). You are automatically covered under a default HIS Plan. You will be eligible for Domiciliary and Hospitalization covers as per the default plan applicable. These benefits are extended on payment of applicable premium as per the scheme.</p>
        </div>
        <div className="footer" style={{ marginTop: '70px' }}>
          <p style={{ textAlign: 'left' }}>Private and Confidential MRV/<strong>{formData.ref}</strong></p>

          <h1 style={{ color: 'rgb(79, 178, 218)' }}>MRV  IT  SOLUTIONS  PVT  LTD</h1>
          <p>2nd Floor, West Wing, No.16, rajiv gandhi Salai, Karapakkam, Chennai - 600 097.<br />
            Web : www.mrvtechnology.com E-mail : info@mrvtechnology.com Ph : 93618 73224</p>
        </div>
      </div>
    </div>
    <div className="offer-letter">
      <div className="page" style={{ marginTop: '5px' }}>
        <div className="header">
          <div className="header-left">
            <h3 style={{ textTransform: 'uppercase', fontFamily: '' }}>MRV  IT  SOLUTIONS  PVT  LTD</h3>
          </div>
          <div className="header-right">
            <img src="https://mrvitsolutions.com/wp-content/uploads/2024/06/cropped-MRV_page-0001.jpg" alt="Page" />
          </div>
        </div>
        <div className="content">
          <p>You have the flexibility to choose a plan which is higher than the existing default plan, by paying the applicable additional premium plus Service Tax.</p>
          <p>a) Domiciliary Cover: This is a provision to cover the cost incurred towards any domiciliary treatment up to a specified limit for each insured person per annum.</p>
          <p>b) Base Cover: This is a provision to cover the cost incurred on hospitalization treatments up to a specified limit for each insured person per annum.</p>
          <p>c) Floater Cover: This benefit covers the hospitalization expenses incurred over and above the basic hospitalization cover limit. This is a family floater cover for you and your enrolled dependents. The total premium is split between Base Cover and Floater Cover Premium as per the default plan applicable.</p>
          <p>i. Base Cover Premium: Towards Domiciliary and Base cover for self, spouse and up to three children is entirely borne by MRV Technology, provided these members are explicitly enrolled by you under the scheme. Additionally, if you wish to cover dependent parents/parents-in-law or remaining children, the applicable premium per insured person is to be borne by you.</p>
          <p>ii. Floater Cover Premium: Towards Floater Cover is to be borne by you.</p>
          <p>*Note: The above Health Insurance Scheme is subject to revision. The policy changes if any, in future, will prevail. For further details, please refer to the policy document.</p>

          <h3>2. *Compensation Benefits under ESI Act / Employees' Compensation Act*:</h3>
          <p>If you are covered under Employees State Insurance Act (ESI Act), 1948 you are entitled to claim the benefits in the event of accidental injury resulting into death or disablement arising out of and in the course of employment, from Employees' State Insurance Corporation.</p>
          <p>If you are out of the purview of ESI Act, you will be eligible for compensation benefit in the event of death / disablement arising out of and in the course of employment as per the benefits under the Company's Afterlife Benefit Policy / Personal accident insurance scheme, whichever is applicable. For more details on this, refer MRV Technology India policy - Afterlife Benefits and MRV Technology India policy - Health Insurance after joining the organization.</p>
          <p>Inclusion or exclusion of an employee under 'Employee State Insurance Corporation' is as defined as per the ESIC Act.</p>

        </div>
        <div className="footer" style={{ marginTop: '170px' }}>
          <p style={{ textAlign: 'left' }}>Private and Confidential MRV/<strong>{formData.ref}</strong></p>

          <h1 style={{ color: 'rgb(79, 178, 218)' }}>MRV  IT  SOLUTIONS  PVT  LTD</h1>
          <p>2nd Floor, West Wing, No.16, rajiv gandhi Salai, Karapakkam, Chennai - 600 097.<br />
            Web : www.mrvtechnology.com E-mail : info@mrvtechnology.com Ph : 93618 73224</p>
        </div>
      </div>
    </div>
    <div className="offer-letter">
      <div className="page" style={{ marginTop: '65px' }} >
        <div className="header">
          <div className="header-left">
            <h3 style={{ textTransform: 'uppercase', fontFamily: '' }}>MRV  IT  SOLUTIONS  PVT  LTD</h3>
          </div>
          <div className="header-right">
            <img src="https://mrvitsolutions.com/wp-content/uploads/2024/06/cropped-MRV_page-0001.jpg" alt="Page" />
          </div>
        </div>
        <div className="content">
          <h3>SOCIAL SECURITY / RETRIALS BENEFITS</h3>
          <h3>1. Provident Fund:</h3>
          <p>You will be a member of the Provident Fund as per the provisions of "The Employees Provident Fund"</p>

          <p>and Miscellaneous Provisions Act, 1952", and MRV Technology will contribute 12% of your basic salary every month towards Provident Fund, as per the provisions of the said Act.</p>
          <p>You are required to provide your Universal Account Number (UAN), if any, issued by your previous employer or your PF and/or Pension account number with previous employer on the Declaration Form (Form 9) at the time of joining MRV Technology so as to link your UAN with MRV Technology PF / Pension account or generate new UAN if not allotted to you earlier.</p>

          <h3>2. Employees' Pension Scheme:</h3>
          <p>Your enrolment under the Employees’ Pension Scheme will be based on the details you provide under the Declaration Form (Form 9) at the time of joining MRV Technology.</p>

          <h3>3. Gratuity:</h3>
          <p>You will be eligible to gratuity in accordance with the rules applicable. The company will consider the 5 years of service completed for the purpose of calculation of gratuity.</p>

          <h2>TERMS OF EMPLOYMENT</h2>

          <h3>1. Probation Period:</h3>
          <p>You will be on probation for 3 months. If your services are found to be satisfactory during the period of probation, your confirmation will be communicated to you in writing upon successful completion of your probation period.</p>

          <h3>2. Working hours and days:</h3>
          <p>You may be require to work 6 days in shifts and/or in extended working hours, as permitted by law.</p>

          <h3>3. Leave:</h3>
          <p>You will be eligible for leave as per the Company's Leave Policy.</p>




        </div>
        <div className="footer" style={{ marginTop: '65px' }} >
          <p style={{ textAlign: 'left' }}>Private and Confidential MRV/<strong>{formData.ref}</strong></p>

          <h1 style={{ color: 'rgb(79, 178, 218)' }}>MRV  IT  SOLUTIONS  PVT  LTD</h1>
          <p>2nd Floor, West Wing, No.16, rajiv gandhi Salai, Karapakkam, Chennai - 600 097.<br />
            Web : www.mrvtechnology.com E-mail : info@mrvtechnology.com Ph : 93618 73224</p>
        </div>
      </div>
    </div>
    <div className="offer-letter">
      <div className="page">
        <div className="header">
          <div className="header-left">
            <h3 style={{ textTransform: 'uppercase', fontFamily: '' }}>MRV  IT  SOLUTIONS  PVT  LTD</h3>
          </div>
          <div className="header-right">
            <img src="https://mrvitsolutions.com/wp-content/uploads/2024/06/cropped-MRV_page-0001.jpg" alt="Page" />
          </div>
        </div>
        <div className="content">
          <h3>4. Mobility:</h3>
          <p>The Company reserves the right to transfer/utilise your services at its sole discretion at any of its offices, work sites, or associate or affiliate companies, firms in India or outside India which are currently in existence or which may likely to come into existence anywhere in India or abroad, on the terms and conditions as applicable to you at the time of transfer. In case you refuse to join duty at the transferred location within stipulated period, your services are liable to be terminated. This is without prejudice to the company’s right to take disciplinary action under the Industrial Employment Standing Orders Act, 1946.</p>

          <h3>5. Increments and Promotions:</h3>
          <p>Your merit, performance and contribution to the company will be the primary considerations for</p>
          <p>annual salary increments and your potential to perform and availability of suitable positions will be considered for promotions. Salary increments and promotions will not be direct and will be based on the company’s Compensation and Promotion policy. Increments shall depend on several factors like company’s performance, your individual performance, track record and contribution to the company, attendance, behavior and conduct during the period under review as per the Company’s policy as may be applicable from time to time.</p>
          <p>SRTE associates will be eligible for promotion and career progression subject to successful completion of graduation as per SRTE Policy.</p>

          <h3>6. Alternate Employment:</h3>
          <p>As a whole-time associate of MRV Technology, you are not permitted to undertake any other employment, business, assume any public office or private office, honorary or remunerative, without the prior written permission of MRV Technology.</p>

          <h3>7. Confidentiality, Data and Intellectual Property Protection :</h3>
          <p>As part of the joining formalities, you are required to sign a Confidentiality, Data and IP Protection Terms, which aims to protect the intellectual property rights and business information of MRV Technology and its clients. The detailed Confidentiality, Data and IP Protection related terms and conditions are set out in Annexure 2.</p>

          <h3>8. Notice Period:</h3>
          <p>Upon your confirmation, this contract of employment is terminable by you by giving 60 days notice in writing to MRV Technology. It is clearly understood, agreed and made abundantly clear that you shall have to necessarily work during the period of notice of 60 days given by you under this clause. </p>


        </div>
        <div className="footer" style={{ marginTop: '65px' }} >
          <p style={{ textAlign: 'left' }}>Private and Confidential MRV/<strong>{formData.ref}</strong></p>

          <h1 style={{ color: 'rgb(79, 178, 218)' }}>MRV  IT  SOLUTIONS  PVT  LTD</h1>
          <p>2nd Floor, West Wing, No.16, rajiv gandhi Salai, Karapakkam, Chennai - 600 097.<br />
            Web : www.mrvtechnology.com E-mail : info@mrvtechnology.com Ph : 93618 73224</p>
        </div>
      </div>
    </div>
    <div className="offer-letter">
      <div className="page" style={{ marginTop: '75px' }}>
        <div className="header">
          <div className="header-left">
            <h3 style={{ textTransform: 'uppercase', fontFamily: '' }}>MRV  IT  SOLUTIONS  PVT  LTD</h3>
          </div>
          <div className="header-right">
            <img src="https://mrvitsolutions.com/wp-content/uploads/2024/06/cropped-MRV_page-0001.jpg" alt="Page" />
          </div>
        </div>
        <div className="content">
          However, upon your serving the notice under this clause, MRV Technology may relieve you any time during the period of notice at its sole discretion.
          <p>Upon your confirmation, this contract of employment may be terminated by MRV Technology by giving you 60 days notice or payment in lieu thereof.</p>
          <p>It is understood, agreed and made abundantly clear herein that you shall have to necessarily work during the notice period given by MRV Technology under this clause, unless you are otherwise relieved by MRV Technology by giving you payment in lieu of notice.</p>
          <p>Your failure to comply with this clause will entail monetary payment of damages to MRV Technology as may be determined by it at its own discretion having regard to the responsibilities shouldered by you while being in the employment of MRV Technology.</p>

          <h3>09. Background Check:</h3>
          <p>Your employment will be subject to a background check in line with the company's background check policy. A specially appointed agency will conduct internal and external background checks. Normally, such checks are completed within one month of joining.</p>
          <p>The offer of employment is subject to the condition that the person concerned has not been guilty or convicted for any criminal offence in the past.</p>
          <p>If the background check reveals unfavourable results, you will be liable to disciplinary action including termination of service without notice.</p>

          <h3>10. Submission of Documents:</h3>
          <p>A. Eight Passport Size Photographs.<br />
            B. Education Certificates (X/XII/Graduation/Post Graduation)<br />
            C. Photo ID and Address proof (Voter ID/Passport/Aadhar UID/ Driving License)<br />
            D. PAN Card (Permanent Account Number)<br />
            E. Bank Passbook</p>
          <p>An affidavit / notarised undertaking that there is no criminal offence registered/pending against you.</p>
          <p>Your original documents will be returned to you after verification.</p>


        </div>
        <div className="footer" style={{ marginTop: '135px' }}>
          <p style={{ textAlign: 'left' }}>Private and Confidential MRV/<strong>{formData.ref}</strong></p>

          <h1 style={{ color: 'rgb(79, 178, 218)' }}>MRV  IT  SOLUTIONS  PVT  LTD</h1>
          <p>2nd Floor, West Wing, No.16, rajiv gandhi Salai, Karapakkam, Chennai - 600 097.<br />
            Web : www.mrvtechnology.com E-mail : info@mrvtechnology.com Ph : 93618 73224</p>
        </div>
      </div>
    </div>
    <div className="offer-letter">
      <div className="page" style={{ marginTop: '105px' }}>
        <div className="header">
          <div className="header-left">
            <h3 style={{ textTransform: 'uppercase', fontFamily: '' }}>MRV  IT  SOLUTIONS  PVT  LTD</h3>
          </div>
          <div className="header-right">
            <img src="https://mrvitsolutions.com/wp-content/uploads/2024/06/cropped-MRV_page-0001.jpg" alt="Page" />
          </div>
        </div>
        <div className="content">
          <h3>11. Letter of Appointment:</h3>
          <p>You will be issued a letter of appointment at the time of your joining and completing joining formalities as per the company’s policy.</p>

          <h3>12. Processing of Personal Data:</h3>
          <p>Your personal data collected and developed during recruitment process will be processed in accordance with the MRV Technology Data Privacy Policy. The personal data referred therein are details related to contact, family, education, personal identifiers issued by government, social profile, background references, previous employment and experience, medical history, skill set, proficiency and certifications, job profile and your career aspirations.</p>
          <p>It will be processed for various organizational purposes such as recruitment, onboarding, background check, project assignment, performance management, job rotation, career development including at leadership level, diversity and inclusion initiatives, global mobility, wellness program, statutory and legal requirements and specific organizational initiatives in force during your tenure in MRV Technology.</p>
          <p>After you join MRV Technology, there would be more sets of Personal Information (PI) attributes processed for various legitimate purposes. All of it will be processed with compliance to applicable laws and the MRV Technology Data Privacy Policy. In some scenarios of your PI processing, you will be provided with appropriate notice and/or explicit consent might be obtained from time to time.</p>

          <p>For the purposes mentioned above, your required PI may be shared with specific vendor
            organizations who provide services to MRV Technology, e.g. background check, health insurance, counselling, travel, transport and visa, payroll services, associate engagement activities, and financial
            and taxation services. As MRV Technology is a global company, your PI may be shared with entities
            outside India, limited for the purposes mentioned above and/or in this offer letter.</p>
          <p>In case of oversees deputation, available privacy rights would be governed as per regulatory
            provisions and / or MRV Technology policies/notice provided applicable at your overseas location.</p>
          <h3>13. Terms and Conditions:</h3>
          <p>The above terms and conditions of employment are specific to your employment in India and there
            can be changes to the said terms and conditions in case of deputation on States assignments during
            the course of your employment.</p>
          <h3>14. Employment in India:</h3>
          <p>In case, you are not a citizen of India, this offer is subject to your obtaining a work permit and or any
            other permissions and / or documentation as prescribed by the Government of India for permanent
            employment with MRV Technology.</p>

        </div>
        <div className="footer" style={{ marginTop: '85px' }}>
          <p style={{ textAlign: 'left' }}>Private and Confidential MRV/<strong>{formData.ref}</strong></p>

          <h1 style={{ color: 'rgb(79, 178, 218)' }}>MRV  IT  SOLUTIONS  PVT  LTD</h1>
          <p>2nd Floor, West Wing, No.16, rajiv gandhi Salai, Karapakkam, Chennai - 600 097.<br />
            Web : www.mrvtechnology.com E-mail : info@mrvtechnology.com Ph : 93618 73224</p>
        </div>
      </div>
    </div>
    <div className="offer-letter">
      <div className="page" style={{ marginTop: '10px' }}>
        <div className="header">
          <div className="header-left">
            <h3 style={{ textTransform: 'uppercase', fontFamily: '' }}>MRV  IT  SOLUTIONS  PVT  LTD</h3>
          </div>
          <div className="header-right">
            <img src="https://mrvitsolutions.com/wp-content/uploads/2024/06/cropped-MRV_page-0001.jpg" alt="Page" />
          </div>
        </div>
        <div className="content">

          <h3>15. Rules and Regulations of the Company:</h3>
          <p>Your appointment will be governed by the policies, rules, regulations, practices, processes and
            procedures of the company as applicable to you and the changes therein from time to time.</p>
          <h3>16. Compliance to all clauses:</h3>
          <p>You will be required to fulfill all the terms and conditions mentioned in this letter of offer. Any
            failure to fulfill any term and /or condition would entitle MRV Technology in withdrawing this offer</p>

          <h3>Withdrawal of Offer</h3>
          <p>If you fail to accept the offer from MRV Technology within 2 days, it will be construed that you are
            not interested in the employment and this offer will be automatically withdrawn. Post acceptance of
            MRV Technology offer letter if you fail to join on the date provided in the MRV Technology joining
            letter, the offer will stand automatically terminated at the sole discretion of MRV Technology</p>
          <p>We look forward to having you in our global team.</p>
          <p>Yours Sincerely,</p>
          <p>For MRV Technology.</p>
          <img src="https://indianwelfarefoundation.s3.ap-south-1.amazonaws.com/sign.png"></img>
          <p>  Manager</p>
          <p>Encl: Annexure 1: Benefits Gross Salary Sheet<br />
            Annexure 2: Confidentiality, Data and Intellectual Property Protection Terms</p>
        </div>
        <div className="footer" style={{ marginTop: '205px' }}>
          <p style={{ textAlign: 'left' }}>Private and Confidential MRV/<strong>{formData.ref}</strong></p>

          <h1 style={{ color: 'rgb(79, 178, 218)' }}>MRV  IT  SOLUTIONS  PVT  LTD</h1>
          <p>2nd Floor, West Wing, No.16, rajiv gandhi Salai, Karapakkam, Chennai - 600 097.<br />
            Web : www.mrvtechnology.com E-mail : info@mrvtechnology.com Ph : 93618 73224</p>
        </div>
      </div>
    </div>
    <div className="offer-letter">
      <div className="page" style={{ marginTop: '85px' }}>
        <div className="header">
          <div className="header-left">
            <h3 style={{ textTransform: 'uppercase', fontFamily: '' }}>MRV  IT  SOLUTIONS  PVT  LTD</h3>
          </div>
          <div className="header-right">
            <img src="https://mrvitsolutions.com/wp-content/uploads/2024/06/cropped-MRV_page-0001.jpg" alt="Page" />
          </div>
        </div>
        <div className="content">
          <h2 className="annexure-title">Annexure 1<span className="very-confidential" style={{ marginLeft: '370px' }}>VERY CONFIDENTIAL</span></h2>

          <h3>SALARY OFFER</h3>
          <p><strong>NAME:</strong> {formData.name} <span style={{ marginLeft: '400px' }}>LOCATION:<strong> {formData.location}</strong></span></p>
          <p>DESIGNATION: <strong> {formData.position}</strong><span style={{ marginLeft: '340px' }}>DOJ: <strong> {formData.joiningDate.split('-').reverse().join('-')}</strong></span></p>
          <br></br>
          <table className="salary-table">
            <thead>
              <tr>
                <th>Particulars</th>
                <th style={{ textAlign: 'right' }}>Monthly (Rs.)</th>
                <th style={{ textAlign: 'right' }}>Annual (Rs.)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BASIC</td>
                <td style={{ textAlign: 'right' }}>₹{formData.basicMonthly}</td>
                <td style={{ textAlign: 'right' }}>₹{formData.basicAnnual}</td>
              </tr>
              <tr>
                <td>HRA</td>
                <td style={{ textAlign: 'right' }}>₹{formData.hraMonthly}</td>
                <td style={{ textAlign: 'right' }}>₹{formData.hraAnnual}</td>
              </tr>
              <tr>
                <td>PROFESSIONAL ALLOWANCE</td>
                <td style={{ textAlign: 'right' }}>₹{formData.paMonthly}</td>
                <td style={{ textAlign: 'right' }}>₹{formData.paAnnual}</td>
              </tr>
              <tr>
                <td>CONVEYANCE</td>
                <td style={{ textAlign: 'right' }}>₹{formData.convMonthly}</td>
                <td style={{ textAlign: 'right' }}>₹{formData.convAnnual}</td>
              </tr>
              <tr>
                <td>OTHER ALLOWANCE</td>
                <td style={{ textAlign: 'right' }}>₹{formData.medMonthly}</td>
                <td style={{ textAlign: 'right' }}>₹{formData.medAnnual}</td>
              </tr>
              <tr>
                <td><strong>GROSS SALARY (A)</strong></td>
                <td style={{ color: 'blue', textAlign: 'right' }}>₹{formData.grossMonthly}</td>
                <td style={{ color: 'blue', textAlign: 'right' }}>₹{formData.grossAnnual}</td>
              </tr>
              <tr>
                <td colSpan={3}></td>
              </tr>
              <tr>
                <td >Deductions (C)</td>
                <td style={{ color: 'red', textAlign: 'right' }}>₹0</td>
                <td style={{ color: 'red', textAlign: 'right' }}>₹0</td>

              </tr>
              <tr>
                <td>LESS: PROFESSIONAL TAX</td>
                <td style={{ textAlign: 'right', fontWeight: 'bold' }}>₹{formData.ptaxMonthly}</td>
                <td style={{ textAlign: 'right' }}>₹{formData.ptaxAnnual}</td>
              </tr>
              <tr>
                <td>LESS: PF</td>
                <td style={{ textAlign: 'right' }}>₹{formData.pfMonthly}</td>
                <td style={{ textAlign: 'right' }}>₹{formData.pfAnnual}</td>
              </tr>
              <tr>
                <td><strong>NET PAY (A-C)</strong></td>
                <td style={{ color: 'blue', textAlign: 'right' }}>₹{formData.netPayMonthly}</td>
                <td style={{ color: 'blue', textAlign: 'right' }}>₹{formData.netPayAnnual}</td>
              </tr>
            </tbody>
          </table>
          <p>*Not shown in payslip</p>
          <div className="notes">
            <h4>NOTE:</h4>
            <ol>
              <li>Any Personal Tax liability arising out of compensation will be borne solely by the employee.</li>
              <li>Reimbursements will be released with payroll and Reimbursements are tax free to extent of bills provided.</li>
              <li>Any unpaid or unauthorized leaves will be deducted</li>
            </ol>
          </div>
        </div>
        <div className="footer">
          <p style={{ textAlign: 'left' }}>Private and Confidential MRV/<strong>{formData.ref}</strong></p>

          <h1 style={{ color: 'rgb(79, 178, 218)' }}>MRV  IT  SOLUTIONS  PVT  LTD</h1>
          <p>2nd Floor, West Wing, No.16, rajiv gandhi Salai, Karapakkam, Chennai - 600 097.<br />
            Web : www.mrvtechnology.com E-mail : info@mrvtechnology.com Ph : 93618 73224</p>
        </div>
      </div>
    </div>
    <div className="offer-letter">
      <div className="page">
        <div className="header">
          <div className="header-left">
            <h3 style={{ textTransform: 'uppercase', fontFamily: '' }}>MRV  IT  SOLUTIONS  PVT  LTD</h3>
          </div>
          <div className="header-right">
            <img src="https://mrvitsolutions.com/wp-content/uploads/2024/06/cropped-MRV_page-0001.jpg" alt="Page" />
          </div>
        </div>
        <div className="content">
          <h2 className="annexure-title">Annexure 2</h2>
          <h3>1. Confidential Information:</h3>
          <p>“Confidential Information” shall mean all Inventions and Know-how, information and material of
            MRV Technology and its subsidiaries as applicable (Collectively termed as ‘MRV Technology’)
            (including for avoidance of doubt any Confidential Information of its Clients) that comes into the
            possession or know of the Associate and shall include the following:</p>
          <ul>
            <li>(a) Any and all information processing programs, software, properties, items, information, data,
              material or any nature whatsoever or any parts thereof, additions thereto and materials related
              thereto, produced or created at any time by MRV Technology or the Associate in the course of or in
              connection with or arising out of the Associate’s association with MRV Technology.
              <strong>Program/Software</strong> shall mean source code and/or machine instructions wherever
              resident and on whatever media and all related documentation.</li>
            <li>(b) All other information and material of MRV Technology relating to design, method of construction,
              manufacture, operation, specifications, use and services of the MRV Technology equipment and
              components, including, but not limited to, engineering and laboratory notebooks, reports, process
              data, test data, performance data, inventions, trade secrets, systems, software, object codes,
              source codes, copyrighted matters, methods, drawings, computations, calculations, computer
              programs, narrations, flow charts and all documentation therefore and all copies thereof (including
              for avoidance of doubt any such material belonging to the Clients of MRV Technology).</li>
            <li>(c) Corporate strategies and other confidential and proprietary material and information, which
              could cause competitive harm to MRV Technology if disclosed.</li>
            <li>(d) Customer and prospective customer lists.</li>
            <li>(e) All other information and material, which may be created, developed, conceived, gathered
              or collected or obtained by the Associate in the course of or arising out of the association with
              MRV Technology or while in or in connection with or for the purposes of his/her association with
              MRV Technology or any of the operations and entrusted by MRV Technology to the Associate.</li>
          </ul>
          <h3>2. Associate’s Obligations:</h3>
          <p>Associate agrees to treat the Confidential Information as strictly confidential and a trade secret of
            MRV Technology. Associate agrees not to use, or cause to be used, or disclose or divulge or part with
            directly or indirectly any Confidential Information for the benefit of or to any third parties except for
            or on behalf of or as directed or authorized by MRV Technology or to a person having a valid
            contract with MRV Technology. Upon termination of employment, the Associate agrees to surrender
            to MRV Technology all Confidential Information that he or she may then possess or have under his
            or her control.</p>
        </div>
        <div className="footer" style={{ marginTop: '135px' }}>
          <p style={{ textAlign: 'left' }}>Private and Confidential MRV/<strong>{formData.ref}</strong></p>

          <h1 style={{ color: 'rgb(79, 178, 218)' }}>MRV  IT  SOLUTIONS  PVT  LTD</h1>
          <p>2nd Floor, West Wing, No.16, rajiv gandhi Salai, Karapakkam, Chennai - 600 097.<br />
            Web : www.mrvtechnology.com E-mail : info@mrvtechnology.com Ph : 93618 73224</p>
        </div>
      </div>
    </div>

    <div className="offer-letter">
      <div className="page" style={{ marginTop: '105px' }}>
        <div className="header">
          <div className="header-left">
            <h3 style={{ textTransform: 'uppercase', fontFamily: '' }}>MRV  IT  SOLUTIONS  PVT  LTD</h3>
          </div>
          <div className="header-right">
            <img src="https://mrvitsolutions.com/wp-content/uploads/2024/06/cropped-MRV_page-0001.jpg" alt="Page" />
          </div>
        </div>
        <div className="content">
          <h3>3. Intellectual Property Rights:</h3>
          <p>
            Associate agrees and confirms that all intellectual property rights in the Confidential Information shall
            at all times vest in and remain with or belong to MRV Technology
          </p>
          <p>
            and Associate shall have no right,
            title, or claim of any nature whatsoever in the Confidential Information. Associate shall promptly disclose
            to an authorized officer of MRV Technology all inventions, ideas, innovations, discoveries, improvements,
            suggestions, or reports and enhancements made, created, developed, conceived or devised by him or her
            arising out of his or her engagement with MRV Technology,
            including in the course of provision of services
            to the Clients of MRV Technology and Associate hereby agrees and confirms that all such intellectual
            property rights shall at all times vest in and remain vested in MRV Technology and agrees to transfer and
            assign to MRV Technology any interests Associate may have in such intellectual property rights including
            any interest in and to any domestic or foreign patent rights, trademarks, trade names copyrights and
            trade secret rights therein and any renewals thereof. On request of MRV Technology, Associate shall
            execute from time to time, during or after the termination of his or her employment, such further
            instruments, including without limitations, applications for letters of patent, trademarks, trade names
            and copyrights or assignments thereof, as may be deemed necessary or desirable by MRV Technology to
            perfect the title of MRV Technology in the intellectual property rights and to effectuate the provisions
            hereof. All expenses of filling or prosecuting any application for patents, trademarks, trade names, or
            copyrights shall be borne solely by MRV Technology, but Associate shall co-ordinate in filing and/or
            prosecuting any such applications. Associate hereby expressly waives any “artist’s rights” or “moral rights”,
            which Associate might otherwise have in such intellectual property rights.
          </p>

          <h3>4. Prior Knowledge:</h3>
          <p>
            Associate acknowledges that prior to his or her appointment by MRV Technology, he or she had no
            knowledge of the Confidential Information of MRV Technology and that such Confidential Information
            is of a confidential and secret character and is vital to the continued success of MRV Technology’s business.
            Associate further acknowledges that he or she is associated with MRV Technology in a capacity in which he
            or she will become acquainted with all or part of such Confidential Information. In order to safeguard the
            legitimate interests of MRV Technology in such Confidential Information, it is necessary for MRV Technology
            to protect such Confidential Information by holding it secret and confidential.
          </p>

          <h3>5. Use of Third Party Material:</h3>
          <p>
            Associate expressly agrees that Associate shall not in the course of his or her association with MRV Technology
            and while working on the premises or facilities of MRV Technology or its Clients or in connection with the
            development of any intellectual property rights or work for or on behalf of MRV Technology;
          </p>
          <ul>
            <li>
              (a) Use any third party material or intellectual property rights except those intellectual property
              rights provided by MRV Technology or expressly authorized by MRV Technology or without having
              proper authorization or license or approval of the respective owner of such intellectual property rights.
            </li>
          </ul>



        </div>
        <div className="footer" style={{ marginTop: '45px' }}>
          <p style={{ textAlign: 'left' }}>Private and Confidential MRV/<strong>{formData.ref}</strong></p>

          <h1 style={{ color: 'rgb(79, 178, 218)' }}>MRV  IT  SOLUTIONS  PVT  LTD</h1>
          <p>2nd Floor, West Wing, No.16, rajiv gandhi Salai, Karapakkam, Chennai - 600 097.<br />
            Web : www.mrvtechnology.com E-mail : info@mrvtechnology.com Ph : 93618 73224</p>
        </div>
      </div>
    </div>
    <div className="offer-letter">
      <div className="page">
        <div className="header">
          <div className="header-left">
            <h3 style={{ textTransform: 'uppercase', fontFamily: '' }}>MRV  IT  SOLUTIONS  PVT  LTD</h3>
          </div>
          <div className="header-right">
            <img src="https://mrvitsolutions.com/wp-content/uploads/2024/06/cropped-MRV_page-0001.jpg" alt="Page" />
          </div>
        </div>
        <div className="content">
          <ul>
            <li>
              (b) Participate in any activity for creation (including conception, design, development, testing,
              implementation, support or marketing) of any Intellectual Property for or on behalf of MRV Technology
              or its affiliates if Associate has been exposed, directly or indirectly, to any Third Party IP.
            </li>
          </ul>
          <p>
            , which is in the same subject area (such as research area, technology or application area) as, or which is
            same or similar to, the Intellectual Property or any portion thereof, to be so created, unless:
          </p>
          <ol>
            <li>
              i) Associate has expressly declared to MRV Technology in a prescribed form whether such exposure was
              owing to publicly available information or under and subject to any agreement; AND
            </li>
            <li>
              ii) MRV Technology has expressly confirmed to the Associate that MRV Technology has proper
              authorization or license or approval of the respective owner of such Third Party IP to use the same in
              Intellectual Property or portion thereof to be created and authorized in writing Associate’s participation in
              such activity.
            </li>
          </ol>
          <p>
            (c) Knowingly access, make reference to or use any Third Party IP (except as permitted under Section 5(a)),
            directly or indirectly, during the period of association with the creation (conception, design, development,
            testing, implementation, support or marketing) of MRV Technology Intellectual Property or portion thereof,
            which is in the same subject area of MRV Technology Intellectual Property or which is same or similar to
            such MRV Technology Intellectual Property or portion thereof being created. In case, Associate access or is
            exposed to any such Third Party IP during such association, Associate shall promptly bring it to the notice
            of MRV Technology IP asset owner or MRV Technology Manager in writing and immediately cease to
            participate in any such activity.
          </p>

          <h3>6. Security Policies and Guidelines:</h3>
          <p>
            6.1 Associate agrees to abide by and be bound by any and all policies, documents, guidelines and processes
            including IP, Information Security and Confidentiality of MRV Technology in force from time to time whether
            expressly endorsed or not.
          </p>
          <p>
            6.2 Associate acknowledges and agrees that in the course of, and as a result of his/her engagement with MRV
            Technology, Associate will have access to, obtain or come across personal data or information of other MRV
            Technology Associates or Clients, including without limitation, sensitive personal data or information
            (collectively “Personal Data and Information”) within the meaning of the applicable Indian Law and Rules or
            any other applicable Law, directive or regulation anywhere in the world. In respect of any such Personal Data
            and Information accessed, obtained, acquired or processed by Associate for and on behalf of MRV
            Technology, its affiliates or Clients, Associate undertake that he/she will:
          </p>
          <ul>
            <li>
              (a) Process the Personal Data and Information only on behalf of MRV Technology, its Affiliates or Clients, as
              the case may be, and only on and in accordance with instructions received from the data controller from
              time to time;
            </li>

          </ul>
        </div>
        <div className="footer" style={{ marginTop: '140px' }}>
          <p style={{ textAlign: 'left' }}>Private and Confidential MRV/<strong>{formData.ref}</strong></p>

          <h1 style={{ color: 'rgb(79, 178, 218)' }}>MRV  IT  SOLUTIONS  PVT  LTD</h1>
          <p>2nd Floor, West Wing, No.16, rajiv gandhi Salai, Karapakkam, Chennai - 600 097.<br />
            Web : www.mrvtechnology.com E-mail : info@mrvtechnology.com Ph : 93618 73224</p>
        </div>
      </div>
    </div>
    <div className="offer-letter">
      <div className="page" style={{ marginTop: '0px' }}>
        <div className="header">
          <div className="header-left">
            <h3 style={{ textTransform: 'uppercase', fontFamily: '' }}>MRV  IT  SOLUTIONS  PVT  LTD</h3>
          </div>
          <div className="header-right">
            <img src="https://mrvitsolutions.com/wp-content/uploads/2024/06/cropped-MRV_page-0001.jpg" alt="Page" />
          </div>
        </div>
        <div className="content">
          <ul>
            <li>
              (b) Abide by such technical and organizational measures necessary to prevent the accidental or unlawful
              destruction or accidental loss, alteration, unauthorized disclosure or access to the Personal Data and
              Information;
            </li>
            <li>
              (c) Promptly (and in any event within 24 hours of awareness) bring to notice of MRV Technology or its
              Affiliates, as the case may be, of any actual or suspected incident of unauthorized or accidental disclosure
              of, or access to, the Personal Data and Information or other breach of this section.
            </li>
          </ul>
          <ul>
            <li>
              (d) Promptly provide MRV Technology with all information in Associate’s notice, possession or control
              concerning any Security Breach and not make any public announcement regarding a Security Breach
              without MRV Technology prior written consent;
            </li>
            <li>
              (e) Not do, or omit to do, anything, which would cause MRV Technology or any of its employees, officers or
              agents to be in breach of its obligations under any privacy or data protection policy, regulation or
              legislation;
            </li>
            <li>
              (f) Upon expiry or termination of Associate’s engagement with MRV Technology, return all copies of the
              Personal Data and Information to MRV Technology in Associate’s possession or control; and
            </li>
            <li>
              (g) Promptly bring to MRV Technology notice of any request received from a data subject to have access to
              his/her Personal Data and Information or of any other communication relating to the access, use or
              processing of any Personal Data and Information (including any notice from the regulatory body) and fully
              co-operate and assist MRV Technology in relation to any such request or communication.
            </li>
          </ul>
          <p>
            6.3 Associate expressly consent that MRV Technology and/or its affiliates may collect, use, transfer, retain or
            otherwise process Associate’s Personal Data and Information in connection with his/her engagement with MRV
            Technology, in accordance with the then / current MRV Technology policies and procedures and applicable
            privacy and data protection legislation.
          </p>

          MRV Technology may use third party services or sub-contractors to
          collect or otherwise process Associate’s Personal Data and Information for which MRV Technology shall remain
          responsible for such third party services provider or sub-contractor’s compliance with MRV Technology
          obligations hereunder.
          <h3>7. Working in SBWS™ Framework:</h3>
          <p>
            Associate may be required to work in MRV Technology offices or its Client’s premises or from home (remote
            working) as per the directions of supervisor and / or the provisions of the applicable policy. Associate
            understands that working in this hybrid environment may have higher confidentiality and information security
            risks. Associate acknowledges that when working remotely the Associate:
          </p>
          <ul>
            <li>
              (a) will work only in a private, secured work area in compliance with the guidelines issued and amended from
              time to time.
            </li>
            <li>
              (b) will comply with and work in a manner consistent with MRV Technology Data Privacy and Security
              Policies/Protocols.
            </li>
            <li>
              (c) will bring to the notice of HR of the Unit to any circumstances that prevent Associate from working in a
              manner consistent with MRV Technology data privacy and security policies/ protocols.
            </li>
          </ul>
        </div>
        <div className="footer" style={{ marginTop: '70px' }}>
          <p style={{ textAlign: 'left' }}>Private and Confidential MRV/<strong>{formData.ref}</strong></p>

          <h1 style={{ color: 'rgb(79, 178, 218)' }}>MRV  IT  SOLUTIONS  PVT  LTD</h1>
          <p>2nd Floor, West Wing, No.16, rajiv gandhi Salai, Karapakkam, Chennai - 600 097.<br />
            Web : www.mrvtechnology.com E-mail : info@mrvtechnology.com Ph : 93618 73224</p>
        </div>
      </div>
    </div>
    <div className="offer-letter">
      <div className="page" style={{ marginTop: '105px' }}>
        <div className="header">
          <div className="header-left">
            <h3 style={{ textTransform: 'uppercase', fontFamily: '' }}>MRV  IT  SOLUTIONS  PVT  LTD</h3>
          </div>
          <div className="header-right">
            <img src="https://mrvitsolutions.com/wp-content/uploads/2024/06/cropped-MRV_page-0001.jpg" alt="Page" />
          </div>
        </div>
        <div className="content" >
          <ul>
            <li>
              (d) will inform the HR of the Unit if the Associate shares a home with any family member or an individual who
              is employed by a competitor of MRV Technology or MRV Technology client the Associate is assigned to, or if
              any other circumstances at home exist which implicates the MRV Technology Code of Conduct Conflict of
              Interest provision.
            </li>
          </ul>
          <ul>

            <li>
              (e) will ensure utmost care and adhere to Confidentiality, IP Protection / Non-Disclosure obligations.
            </li>
            <li>
              (f) will be using the Company allotted laptop or similar authorized computing device (together called
              “official asset”) only to connect to MRV Technology network/customer network through authorized means (or
              the Customer provided laptop to access the customer network if so, mandated by the Customer).
            </li>
            <li>
              (g) will not allow anybody to share the official asset being used.
            </li>
          </ul>
          <h3>8. Restriction on Associate’s Rights</h3>
          <p>
            Associate agrees that he or she shall not make, have made, replicate, reproduce, use, sell, incorporate or
            otherwise exploit, for his or her own use or for any other purpose, any of the Confidential Information
            including intellectual properties of MRV Technology that is or may be revealed to him or her by MRV
            Technology or which may in the course of his or her employment with MRV Technology come into his or her
            possession or knowledge unless specifically authorized to do so in writing by MRV Technology.
          </p>
          <h3>9. No License</h3>
          <p>
            MRV Technology and Associate agree that no license under any patent or copyright now existing or hereafter
            obtained by MRV Technology is granted, agreed to be granted, or implied by the terms of this Agreement, or by
            the disclosure to Associate of the Confidential Information.
          </p>

          <h3>10. Equitable Rights</h3>
          <p>
            Associate acknowledges that any Confidential Information that comes into the possession and/or knowledge of
            Associate is of a unique, highly confidential and proprietary nature. It is further acknowledged by Associate
            that the disclosure, distribution, dissemination and/or release by Associate of the Confidential Information
            without the prior written consent of MRV Technology or any breach of the Confidentiality, Data and IP
            Protection Terms by Associate will cause MRV Technology to suffer severe, immediate and irreparable damage
            and that upon any such breach or any threat thereof, MRV Technology shall without prejudice to any other
            remedies available to it, be entitled to appropriate equitable relief including the relief of specific performance
            and injunctive relief, in addition to whatever remedies it might have at law.
          </p>
          <h3>11. General</h3>
          <ul>
            <li>
              <h4>(a) Governing Law</h4>
              <p>The provisions hereof shall be interpreted, determined and enforced in accordance with the laws of India.</p>
            </li>
          </ul>

        </div>
        <div className="footer" style={{ marginTop: '30px' }}>
          <p style={{ textAlign: 'left' }}>Private and Confidential MRV/<strong>{formData.ref}</strong></p>

          <h1 style={{ color: 'rgb(79, 178, 218)' }}>MRV  IT  SOLUTIONS  PVT  LTD</h1>
          <p>2nd Floor, West Wing, No.16, rajiv gandhi Salai, Karapakkam, Chennai - 600 097.<br />
            Web : www.mrvtechnology.com E-mail : info@mrvtechnology.com Ph : 93618 73224</p>
        </div>
      </div>
    </div>
    <div className="offer-letter">
      <div className="page" style={{ marginTop: '10px' }}>
        <div className="header">
          <div className="header-left">
            <h3 style={{ textTransform: 'uppercase', fontFamily: '' }}>MRV  IT  SOLUTIONS  PVT  LTD</h3>
          </div>
          <div className="header-right">
            <img src="https://mrvitsolutions.com/wp-content/uploads/2024/06/cropped-MRV_page-0001.jpg" alt="Page" />
          </div>
        </div>
        <div className="content" >
          <ul>
            <li>
              <h4>(b) Dispute Resolution</h4>
              <p>
                In the event of any dispute or disagreement over the interpretation of any of the terms hereincontained or any claim or liability of any party, the same shall be referred to a person to be nominated by MRV Technology, whose decision shall be final and binding upon the parties hereto.
              </p>

            </li>
          </ul>
          <p>
            <p>
              Subject to the above, the arbitration shall be governed by the Arbitration and Conciliation Act, 1996 or any modifications or reenactment thereof. Associate confirms that the fact that the arbitrator shall be a nominee of MRV Technology shall not be a ground for objecting to such arbitration or challenging the decision of the arbitrator.
            </p>
            <p>The venue of arbitration shall be Mumbai.</p>
            <p>
              Subject to the above arbitration clause, the Parties agreed to the binding jurisdiction of the Courts at Mumbai under the laws of India.
            </p>
            (c) If any provision hereof shall be found by a judicial tribunal to be contrary to governing law, it shall be
            deemed null and void without annulling or rendering invalid the remainder of the Agreement and if the invalid
            portion is such that the remainder cannot be sustained without it, the Parties herein shall find a suitable
            replacement to the invalid portion that shall be legally valid.
          </p>

          <p>
            (d) This Confidentiality, Data and IP Protection Terms along with other documents executed by Associate or
            referenced in any such documents constitutes the entire understanding between the parties and supersedes all
            prior agreements and understandings pertaining to the subject matter thereof. No delay of omission of either
            Party in exercising or enforcing any of their rights or remedies hereunder shall constitute a waiver thereof.
          </p>
          <p>
            (e) This Confidentiality, Data and IP Protection Terms may not be amended except in writing signed by
            authorized representatives of both parties.
          </p>
          <p>
            (f) The obligations of Associate in terms of this Confidentiality, Data and IP Protection Terms shall continue
            during the term of or in the course of the employment of the Associate with MRV Technology and shall continue
            thereafter in perpetuity.
          </p>
          <p>
            Please complete and return these documents to the MRV Technology HR executive, within 7 days of receiving this
            offer.<br></br> <br></br>This is to confirm that I have received the Letter of Offer on ________________ .<br></br> <br></br>I hereby accept this
            Offer and intend to join service on __________________. <br /> <p style={{ textTransform: 'capitalize' }}>Name: <span style={{fontWeight:'bold'}}> {formData.name}</span></p> 
            Address: <br /><br /> Signature: <br /><br /> Date:
          </p>

        </div>
        <div className="footer" style={{ marginTop: '15px' }}>
          <p style={{ textAlign: 'left' }}>Private and Confidential MRV/<strong>{formData.ref}</strong></p>

          <h1 style={{ color: 'rgb(79, 178, 218)' }}>MRV  IT  SOLUTIONS  PVT  LTD</h1>
          <p>2nd Floor, West Wing, No.16, rajiv gandhi Salai, Karapakkam, Chennai - 600 097.<br />
            Web : www.mrvtechnology.com E-mail : info@mrvtechnology.com Ph : 93618 73224</p>
        </div>
      </div>
    </div>
    <input
      type="checkbox"
      id="enableButton"
      checked={isEnabled}
      onChange={(e) => setIsEnabled(e.target.checked)}

    /><sup>*</sup>
    <span style={{
      color: 'red'
    }}>Must verify all the details before printing the offer letter</span><br></br>
    <button onClick={sendFormData} disabled={!isEnabled} style={{ marginTop: '20px', height: 'fit-content', padding: '5px', fontWeight: 'bold' }}> {loading ? (
      <center>  <div className="loading-spinner"></div></center>
    ) : (
      <p>Genereate Offer Letter</p>
    )}</button>
  </div>


  )
    });

const Pdf = () => {
  const [load, setLoad] = useState(false)

  const [isEnabled, setIsEnabled] = useState(false);
  const [formData, setFormData] = useState({
    date: ' ',
    position: '',
    ref: '',
    name: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    country: '',
    zip: '',
    location: '',
    salary: '0',
    joiningDate: '',
    basicMonthly: '',
    hraMonthly: '',
    paMonthly: '',
    convMonthly: '',
    medMonthly: '',
    ptaxMonthly: '',
    pfMonthly: '',
    grossMonthly: '',
    grossAnnual: '',
    ptaxAnnual: '',
    pfAnnual: '',
    netPayMonthly: '',
    netPayAnnual: '',
    basicAnnual: '',
    hraAnnual: '',
    paAnnual: '',
    convAnnual: '',
    medAnnual: '',
    email:''
  });
  const [show,setShow]= useState(false)
  const numberFormatter = new Intl.NumberFormat('en-IN', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
  const calculateAnnualValues = (monthlyValue) => monthlyValue * 12;


  const navigate = useNavigate('')
  const calculateAllValues = (updatedData) => {
    const { salary } = updatedData;
    const annualSalary = parseFloat(updatedData.salary.replace(/,/g, ''));
    const monthlySalary = annualSalary / 12;

    const basicPercentage = 0.45;
    const hraPercentage = 0.20;
    const paPercentage = 0.125;
    const convPercentage = 0.165;
    const medPercentage = 0.06;
    const ptaxPercentage = 0.01;
    const pfPercentage = 0.128;

    const basicMonthly = (annualSalary * basicPercentage) / 12;
    const hraMonthly = (annualSalary * hraPercentage) / 12;
    const paMonthly = (annualSalary * paPercentage) / 12;
    const convMonthly = (annualSalary * convPercentage) / 12;
    const medMonthly = (annualSalary * medPercentage) / 12;
    const ptaxMonthly = annualSalary < 500000 ? 200 : (annualSalary * ptaxPercentage) / 12;
    const pfMonthly = (basicMonthly * 12 * pfPercentage) / 12;

    const grossMonthly = basicMonthly + hraMonthly + paMonthly + convMonthly + medMonthly;
    const netMonthly = grossMonthly - ptaxMonthly - pfMonthly;

    return {
      ...updatedData,
      basicMonthly: numberFormatter.format(basicMonthly),
      hraMonthly: numberFormatter.format(hraMonthly),
      paMonthly: numberFormatter.format(paMonthly),
      convMonthly: numberFormatter.format(convMonthly),
      medMonthly: numberFormatter.format(medMonthly),
      ptaxMonthly: numberFormatter.format(ptaxMonthly),
      pfMonthly: numberFormatter.format(pfMonthly),
      basicAnnual: numberFormatter.format(calculateAnnualValues(basicMonthly)),
      hraAnnual: numberFormatter.format(calculateAnnualValues(hraMonthly)),
      paAnnual: numberFormatter.format(calculateAnnualValues(paMonthly)),
      convAnnual: numberFormatter.format(calculateAnnualValues(convMonthly)),
      medAnnual: numberFormatter.format(calculateAnnualValues(medMonthly)),
      ptaxAnnual: numberFormatter.format(calculateAnnualValues(ptaxMonthly)),
      pfAnnual: numberFormatter.format(calculateAnnualValues(pfMonthly)),
      grossMonthly: numberFormatter.format(grossMonthly),
      grossAnnual: numberFormatter.format(calculateAnnualValues(grossMonthly)),
      netPayMonthly: numberFormatter.format(netMonthly),
      netPayAnnual: numberFormatter.format(calculateAnnualValues(netMonthly)),
    };
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Handle date formatting
    if (name === 'date' || name === 'joiningDate') {
      // Format for display in the input field
      formattedValue = value;
    } else if (name === 'salary') {
      // Format for salary
      formattedValue = numberFormatter.format(parseInt(value.replace(/,/g, ''), 10) || '');
    }
    const storedToken = localStorage.getItem('token');

    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: formattedValue };
      return name === 'salary' ? calculateAllValues(updatedData) : updatedData;
    });
  };

  // Function to format the date for submission to the backend
  const formatForBackend = (date) => {
    if (!date) return '';
    const [year, month, day] = date.split('-');
    return `${day}-${month}-${year}`;
  };

  const handleTableChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: parseFloat(value) };
      return calculateAllValues(updatedData);
    });
  };

  useEffect(() => {
    setFormData((prevData) => calculateAllValues(prevData));
  }, []);

  const componentRef = useRef();

  const isFormValid = () => {
    return Object.values(formData).every(value => {
      if (typeof value === 'string') {
        return value.trim() !== '';
      }
      return value !== null && value !== undefined && value !== '';
    });
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onBeforeGetContent: () => {
      if (!isFormValid()) {
        alert('Please fill all the form details');
        return Promise.reject();
      }
      return Promise.resolve();
    },
    onAfterPrint: async () => {
      setLoad(true)
      await sendFormData();
    }
  });
  const storedToken = localStorage.getItem('token');
  const headers = {
    Authorization: `Bearer ${storedToken}`,
  };
  
  const [error,setError]=useState('')
  const sendFormData = async () => {
    const formElement = componentRef.current;
    setLoad(true);
  
    // Use html2pdf.js to create the PDF from the HTML content
    const opt = {
      margin: 0.5,
      filename: 'offer_letter.pdf',
      image: { type: 'jpeg', quality: 0.80 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
  
    try {
      // Fetch the latest reference number before proceeding
      await generateReferenceNumber(formData.position);
  
      html2pdf().from(formElement).set(opt).outputPdf('blob').then(async (pdfBlob) => {
        // Construct formDataToSend with updated reference number
        const formDataToSend = new FormData();
        Object.keys(formData).forEach(key => {
          formDataToSend.append(key, formData[key]);
        });
  
        const storedToken = localStorage.getItem('token');
        const headers = {
          Authorization: `Bearer ${storedToken}`,
        };
        for (let [key, value] of formDataToSend.entries()) {
          console.log(key, value);
        }
        // Submit form data to the server
        try {
          const response = await fetch('https://mrv1.indianwelfarefoundation.org.in/submit', {
            headers: headers,
            method: 'POST',
            body: formDataToSend,
          });
          const result = await response.text(); // Parse response as text
  
     
  
          // Check if the response contains the success message
          if (result.includes('added with ID')) {
            // Clear form data after successful submission
            setTimeout(() => {
              setShow(true);
              setError('Joining letter updated Successfully');
    
              setTimeout(() => {
                setShow(false);
                setLoad(false);
                navigate('/offer');
              }, 4000);
            }, 10);
          } else {
         
            setTimeout(() => {
              setLoad(false);
              setShow(true);
              setError('Unknown error in updating the joining letter');
    
              setTimeout(() => {
                setShow(false);
              }, 4000);
            }, 10);
            // Handle the print logic here
          }
        } catch (error) {
       
          alert('An error occurred. Please try again.');
        }
      });
    } catch (error) {
     
      alert('An error occurred. Please try again.');
    }
  };
  
  useEffect(() => {
    generateReferenceNumber(formData.position);
  }, [formData.position]);
  
  const fetchRecordCountByPosition = async (position) => {
    const storedToken = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${storedToken}`,
    };
  
    const response = await fetch('https://mrv1.indianwelfarefoundation.org.in/fetchoffer', {
      headers: headers,
    });
    const data = await response.json();
    const recordCount = data.filter(record => record.position === position).length;
  
    return recordCount;
  };
  
  const generateReferenceNumber = async (position) => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = String(today.getFullYear());
  
    try {
      let recordCount;
      let referenceNumber;
  
      switch (position) {
        case 'Jr. Software engineer':
          recordCount = await fetchRecordCountByPosition('Jr. Software engineer');
          referenceNumber = `${day}${month}${year}${String(recordCount + 46).padStart(2, '0')}`;
          break;
        case 'Xml trainer':
          recordCount = await fetchRecordCountByPosition('Xml trainer');
          referenceNumber = `${day}${month}${year}${String(recordCount + 2).padStart(2, '0')}`;
          break;
        case 'Web designer':
          recordCount = await fetchRecordCountByPosition('Web designer');
          referenceNumber = `${day}${month}${year}${String(recordCount + 1).padStart(2, '0')}`;
          break;
        case 'General manager':
          recordCount = await fetchRecordCountByPosition('General manager');
          referenceNumber = `${day}${month}${year}${String(recordCount + 2).padStart(2, '0')}`;
          break;
        case 'Hr executive':
          recordCount = await fetchRecordCountByPosition('Hr executive');
          referenceNumber = `${day}${month}${year}${String(recordCount + 2).padStart(2, '0')}`;
          break;
        case 'Hr Manager':
          recordCount = await fetchRecordCountByPosition('Hr Manager');
          referenceNumber = `${day}${month}${year}${String(recordCount + 2).padStart(2, '0')}`;
          break;
        case 'CSR BPO voice':
          recordCount = await fetchRecordCountByPosition('CSR BPO voice');
          referenceNumber = `${day}${month}${year}${String(recordCount + 7).padStart(2, '0')}`;
          break;
        case 'CSR BPO non voice':
          recordCount = await fetchRecordCountByPosition('CSR BPO non voice');
          referenceNumber = `${day}${month}${year}${String(recordCount + 1).padStart(2, '0')}`;
          break;
        case 'Xml programmer':
          recordCount = await fetchRecordCountByPosition('Xml programmer');
          referenceNumber = `${day}${month}${year}${String(recordCount + 39).padStart(2, '0')}`;
          break;
        case 'Jr. Software test engineer':
          recordCount = await fetchRecordCountByPosition('Jr. Software test engineer');
          referenceNumber = `${day}${month}${year}${String(recordCount + 46).padStart(2, '0')}`;
          break;
        default:
          recordCount = await fetchRecordCountByPosition(position);
          referenceNumber = `${day}${month}${year}${String(recordCount + 46).padStart(2, '0')}`;
          break;
      }
  
      setFormData((prevData) => ({ ...prevData, ref: referenceNumber }));
    } catch (error) {
    
      setShow(true);
      setTimeout(() => {
        setShow(false);
        setError('Error in fetching reference number');
      }, 4000);
    }
  };
  

   
  const nav = () => {
    navigate('/offer')
  }

  useEffect(() => {
    const checkToken = async () => {


      if (!storedToken) {
        navigate('/LoginPage');
        return;
      }

      try {
        const response = await fetch('https://mrv1.indianwelfarefoundation.org.in/validate-token', {
          method: 'POST',
          headers: {

            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token: storedToken }),
        });

        const data = await response.json();

        if (data.isValid) {
          
        } else {
          localStorage.removeItem('token')
          
          navigate('/LoginPage');
        }
      } catch (error) {
        localStorage.removeItem('token')

       
        navigate('/LoginPage');
      }
    };

    checkToken();
  }, [navigate]);
  useEffect(() => {
    if (!storedToken) {
      navigate('/LoginPage');
    }
  })
  
  return (
    <div>
      <NavbarMain />
      <span>
       {show && (
                <div className="thought">
                    {error}
                    <div className="progress-line"></div>
                </div>
            )}
        </span>
      <button onClick={nav} style={{ marginLeft: '20px', alignItems: 'start', marginTop: '20px', padding: '15px', textTransform: 'capitalize' }}>go to offer letter released</button>

      <div className="App">
        <center><h2 style={{ color: 'red yellow ' }}>OFFER LETTER GENERATOR</h2></center>
        <div style={{ backgroundColor: 'orange', borderRadius: '10px' }}>
          <p style={{ textAlign: 'left', padding: '10px', borderRadius: '10px', fontWeight: 'bold' }}>Basic Details</p>
        </div>
        <form>
          <label>Date: <input type="date" name="date" value={formData.date} onChange={handleFormChange} required /></label>
          <label>Position:  <select 
            name="position" 
            value={formData.position} 
            onChange={handleFormChange} 
            required
          >
            <option value="">Select Position</option>
            <option value="CSR BPO voice">CSR BPO voice</option>
            <option value="CSR BPO non voice">CSR BPO non voice</option>
            <option value="Jr. Software engineer">Jr. Software engineer</option>
            <option value="Jr. Software test engineer">Jr. Software test engineer</option>
            <option value="Hr executive">Hr executive</option>
            <option value="Hr Manager">Hr Manager</option>
            <option value="General manager">General manager</option>
            <option value="Xml trainer">Xml trainer</option>
            <option value="Xml programmer">Xml programmer</option>

            <option value="Web designer">Web designer</option>
          </select></label>
          <label>Joining Date: <input type="date" name="joiningDate" value={formData.joiningDate} onChange={handleFormChange} required /></label>
          <label>Reference: <input type="text" name="ref" value={formData.ref} onChange={handleFormChange} required disabled /></label>
          <label>Name: <input type="text" name="name" value={formData.name} onChange={handleFormChange} required /></label>
          <label>Fathers Name: <input type="text" name="addressLine1" value={formData.addressLine1} onChange={handleFormChange} required /></label>
          <label>Email Id: <input type="text" name="email" value={formData.email} onChange={handleFormChange} required /></label>

          <label>Address Line 1: <input type="text" name="addressLine2" value={formData.addressLine2} onChange={handleFormChange} required /></label>
          <label>City: <input type="text" name="city" value={formData.city} onChange={handleFormChange} required /></label>
          <label>State: <input type="text" name="state" value={formData.state} onChange={handleFormChange} required /></label>
          <label>Country: <input type="text" name="country" value={formData.country} onChange={handleFormChange} required /></label>
          <label>ZIP: <input type="text" name="zip" value={formData.zip} onChange={handleFormChange} required /></label>
          <label>Job Location: <input type="text" name="location" value={formData.location} onChange={handleFormChange} required /></label>
        </form>
        <br />
        <div style={{ backgroundColor: 'orange', borderRadius: '10px' }}>
          <p style={{ textAlign: 'left', padding: '10px', borderRadius: '10px', fontWeight: 'bold' }}>Salary Details</p>
        </div>
        <form>
          <label>Total Salary: <input type="text" name="salary" value={formData.salary} onChange={handleFormChange} required /></label>
          <label>Basic Monthly: <input type="text" name="basicMonthly" value={formData.basicMonthly} onChange={handleTableChange} required /></label>
          <label>HRA Monthly: <input type="text" name="hraMonthly" value={formData.hraMonthly} onChange={handleTableChange} required /></label>
          <label>Professional Allowance Monthly: <input type="text" name="paMonthly" value={formData.paMonthly} onChange={handleTableChange} required /></label>
          <label>Conveyance Monthly: <input type="text" name="convMonthly" value={formData.convMonthly} onChange={handleTableChange} required /></label>
          <label>Other Allowance Monthly: <input type="text" name="medMonthly" value={formData.medMonthly} onChange={handleTableChange} required /></label>
          <label>Professional Tax Monthly: <input type="text" name="ptaxMonthly" value={formData.ptaxMonthly} onChange={handleTableChange} required /></label>
          <label>PF Monthly: <input type="text" name="pfMonthly" value={formData.pfMonthly} onChange={handleTableChange} required /></label>
        </form>
        <br></br>

        <div className='fixedcontainer' style={{ marginBottom: '300px' }}>
          <OfferLetter ref={componentRef} formData={formData} className="offer" sendFormData={sendFormData} isEnabled={isEnabled}
            loading={load} setIsEnabled={setIsEnabled} />

        </div>
      </div>
    </div>
  );
};

export default Pdf;
