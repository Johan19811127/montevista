import React from 'react';

const FinancialPolicy = () => {
  return (
    <div className="flex flex-col md:flex-row">
    {/* Sidebar */}
    <div className="w-full md:w-1/4 md:h-screen md:sticky md:top-0 lg:w-1/5 md:bg-gray-200 md:border md:border-right-slate-500 p-4">
    <div className="flex flex-col md:flex-row">


<div className="container mx-auto  pb-3 mb-3 ">
<h1 className=" text-xl font-bold text-center ">Monte Vista Primary School </h1>
<h1 className=" text-4xl  font-bold text-center mb:4 ">Code Of Conduct</h1>
<a
href="/CodeOfConduct.pdf" // Path to the file in the public directory
download="CodeOfConduct.pdf" // The name of the file that will be downloaded
className="flex px-auto align-center justify-center py-3 text-slate-900  font-bold border border-b-slate-500 border-t-slate-100 border-l-slate-100 hover:border-none border-r-slate-500 border-t text-center bg-yellow-400 rounded-lg mx-auto my-3 shadow-md hover:bg-yellow-300 hover:shadow-none focus:outline-none focus:ring-1 focus:ring-yellow-500"
>
Download the Code of Conduct
</a>
</div>
</div>



<div className="container mx-auto px-5">
      <h2 className="text-xl font-bold text-center">Table of Contents</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#finance-committee" className="hover:text-gray-400">The Finance Committee</a>
            </li>
            <li>
              <a href="#duties-of-bursar" className="hover:text-gray-400">Duties of Bursar/Finance Officer</a>
            </li>
            <li>
              <a href="#current-bank-account" className="hover:text-gray-400">The Current Bank Account</a>
            </li>
            <li>
              <a href="#investments" className="hover:text-gray-400">Investments</a>
            </li>
            <li>
              <a href="#petty-cash" className="hover:text-gray-400">Petty Cash</a>
            </li>
            <li>
              <a href="#accounting-system" className="hover:text-gray-400">Accounting System</a>
            </li>
            <li>
              <a href="#receipts" className="hover:text-gray-400">Receipts</a>
            </li>
            <li>
              <a href="#depositing-money" className="hover:text-gray-400">Depositing of Money</a>
            </li>
            <li>
              <a href="#sponsors-donations" className="hover:text-gray-400">Sponsors/Donations</a>
            </li>
            <li>
              <a href="#payment-salaries" className="hover:text-gray-400">Payment of Salaries</a>
            </li>
            <li>
              <a href="#internet-payments" className="hover:text-gray-400">Internet Payments</a>
            </li>
            <li>
              <a href="#school-fees" className="hover:text-gray-400">School Fees</a>
            </li>
            <li>
              <a href="#collection-fees" className="hover:text-gray-400">Collection of Outstanding School Fees</a>
            </li>
            <li>
              <a href="#reimbursement" className="hover:text-gray-400">Re-imbursement of School Fees</a>
            </li>
            <li>
              <a href="#private-purchases" className="hover:text-gray-400">Private Purchases</a>
            </li>
            <li>
              <a href="#budget" className="hover:text-gray-400">Budget</a>
            </li>
            <li>
              <a href="#management-budget" className="hover:text-gray-400">Management of Budget</a>
            </li>
            <li>
              <a href="#procurement-procedures" className="hover:text-gray-400">Procurement Procedures</a>
            </li>
            <li>
              <a href="#inventories" className="hover:text-gray-400">Inventories</a>
            </li>
            <li>
              <a href="#disposal-board" className="hover:text-gray-400">Disposal Board</a>
            </li>
            <li>
              <a href="#letting-assets" className="hover:text-gray-400">Letting of Assets to Staff</a>
            </li>
            <li>
              <a href="#financial-statements" className="hover:text-gray-400">Submission of Financial Statements</a>
            </li>
            <li>
              <a href="#addendum-a" className="hover:text-gray-400">Addendum A: Payments for Camps/Tours/Outings</a>
            </li>
            <li>
              <a href="#addendum-b" className="hover:text-gray-400">Addendum B: Tender Procedure</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Content Area */}
      <div className="w-full md:w-3/4 p-4">
    <main className="flex">


<div className="max-w-5xl mx-auto p-6 bg-white  rounded-lg">
<div className="flex flex-col md:flex-row">
<div className="hidden md:flex">
<div className=" w-1/1 md:w-1/4"><Image src="/Badge.png" width="180" height="180" alt="Monte Vista Primary School Badge" className=" mx-auto max-w-[30vw] w-[80%]  "></Image></div>
<div className=" w-1//1 md:w-3/4  px-4">
<div className="md:container md:ml-8 md:mx-auto">
<h1 className=" text-2xl md:text-3xl font-bold text-left ">Monte Vista Primary School </h1>
<h1 className=" text-2xl md:text-4xl font-bold text-left mb:4 ">Code of Conduct</h1>

<address className="text-start">
<b className="font-bold mr-3">A:</b>
 Huising Avenue, Monte Vista 7460    </address>
  <a href="tel:+27215584637" className="text-center" ><b className="font-bold mr-3 text-center">T:</b>021 558 4637</a><br></br>
 
<a href="mailto:montevistaprimaryschool@gmail.com" className="text-center"><b className="font-bold mr-3 text-center">E:</b>montevistaprimaryschool@gmail.com</a><br></br>
<a
href="/CodeOfConduct.pdf" // Path to the file in the public directory
download="CodeOfConduct.pdf" // The name of the file that will be downloaded
className="flex px-auto align-center justify-center py-3 text-slate-900  font-bold border border-b-slate-500 border-t-slate-100 border-l-slate-100 hover:border-none border-r-slate-500 border-t text-center bg-yellow-400 rounded-lg mx-auto my-3 shadow-md hover:bg-yellow-300 hover:shadow-none focus:outline-none focus:ring-1 focus:ring-yellow-500"
>
Download the Code of Conduct
</a>
</div>
</div>

</div>
</div>


    <div className="w-full h-fit bg-gray-200">
        {/* Section: Introduction */}
        <section id="introduction" className="mb-8">
          <h2 className="text-2xl font-semibold">Introduction</h2>
          <p className="mt-4">
            The purpose of this policy is to describe the process for the management of funds at Monte Vista Primary School. The policy is applicable to the management of all funds of all stakeholders at Monte Vista Primary School.
          </p>
          <p className="mt-4">
            The Governing Body will adhere to all the stipulations of the South African Schools Act, Western Cape Provincial Government legislation, as well as all relevant regulations issued under it, in respect of the management of all finances at the school.
          </p>
          <p className="mt-4">
            This Financial Policy has as its purpose the practical implementation of the South African Schools’ Act – Act 84 of 1996 as amended, the Western Cape Provincial Government legislation, the Public Management Finance Act, and the Basic Financial Manual for Schools, 2nd edition, 2006 for the orderly handling of all finances and school property.
          </p>
        </section>

        {/* Section: The Finance Committee */}
        <section id="finance-committee" className="mb-8">
          <h2 className="text-2xl font-semibold">The Finance Committee</h2>
          <p className="mt-4">
            1. The Governing Body annually appoints and approves the members of the Finance Committee. The functions of the Finance Committee are:
          </p>
          <ul className="mt-2 list-disc list-inside">
            <li>To assist the school in managing the finances</li>
            <li>To ensure that the school finances are managed in line with the approved budget</li>
            <li>To act in an advisory capacity to the SGB</li>
            <li>To ensure that the financial records are kept up to date</li>
            <li>Assist with the process of drawing up the annual budget</li>
          </ul>
          <p className="mt-4">
            2. The Finance Committee consists of the following members:
          </p>
          <ul className="mt-2 list-disc list-inside">
            <li>The Treasurer of the SGB</li>
            <li>The Chairman of the SGB</li>
            <li>The Secretary of the SGB</li>
            <li>The Headmaster</li>
            <li>Co-opted member (if needed)</li>
          </ul>
          <p className="mt-4">
            3. Mandate of the Finance Committee:
          </p>
          <ul className="mt-2 list-disc list-inside">
            <li>To annually compile a draft budget before the end of October for the following year and to present this draft budget to the Governing Body for discussion and approval</li>
            <li>To apply sound financial control over income and expenditure in line with the budget</li>
            <li>To request the Governing Body for permission when certain adjustments within the budget need to be made</li>
            <li>To request the Governing Body for authorization to cover unexpected essential expenditure</li>
            <li>To recommend the maximum amount of Petty Cash to be kept by the Bursar/Finance Officer, as well as the maximum amount to be paid for any single item out of Petty Cash. These amounts must be approved by the Governing Body as required or recommended.</li>
            <li>To consider and recommend fundraising events to the Governing Body as presented by the PTA.</li>
            <li>To monitor the activities of the Tuck Shop and to ensure that the contract stipulations are carried out</li>
            <li>To meet on a regular basis to discuss the financial state of the school. Points of discussion are submitted to the Governing Body at its next meeting.</li>
            <li>To monitor the record keeping of all funds received and paid by the school</li>
            <li>To monitor the Asset Register of the school</li>
            <li>To ensure that all financial submissions as required by the WCED are submitted timeously</li>
            <li>To ensure that the annual financial statements have been compiled for audit purposes</li>
            <li>To ensure annually, before 31 March, that the school’s books have been submitted to an auditor for the annual audit and to present the audit report to the Governing Body for approval</li>
          </ul>
        </section>

        {/* Section: Duties of Bursar/Finance Officer */}
        <section id="duties-of-bursar" className="mb-8">
          <h2 className="text-2xl font-semibold">Duties of Bursar/Finance Officer</h2>
          <p className="mt-4">
            The duties of the Bursar and Finance Officer are as follows:
          </p>
          <ul className="mt-2 list-disc list-inside">
            <li>Receives all money from the financial clerk</li>
            <li>Issues receipts for all money paid in</li>
            <li>Issue and receive requisition forms and order forms for purchases (Turbine)</li>
            <li>Receives quotes and invoices for all purchases and attach these to the requisition forms (Turbine)</li>
            <li>Manage all budget items and inform the headmaster of any items exceeding the allocated amounts to any budget item</li>
            <li>Administer the receipt and payment processes of all projects or fundraising</li>
            <li>Answer queries from Chairperson of Governing Body on budget items</li>
            <li>Administer the petty cash float and all petty cash purchases or monitor the person to whom this task is delegated</li>
            <li>Reconcile all money according to the receipts that were issued</li>
            <li>Write up all deposits in the deposit book</li>
            <li>Internet payments of salaries of staff who are on the Governing Body pay sheet</li>
            <li>Calculate and deduct taxes and levies from salaries of staff who are on the Governing Body payroll and pay it over to the South African Revenue Services (SARS) or relevant authority, i.e. UIF, Workmen’s Compensation</li>
            <li>Compile a monthly income and expenditure report by month-end and present it to the Finance Committee / Governing Body for their meetings</li>
            <li>Prepare documentation for the Finance Committee / Governing Body meetings</li>
            <li>Reconcile the bank statements with the Cash Books and/or service provider</li>
            <li>Allocate all purchases under approved budget items</li>
            <li>Print monthly statements for outstanding school fees</li>
            <li>Administer all queries from parents on school fees</li>
            <li>Exercise credit control and collection of all outstanding school fees in conjunction with the debt collectors</li>
            <li>Compile and submit the list of all bad debts for the debt collectors (as applicable) and a copy to be sent to the Finance Committee</li>
            <li>File and ensure the safekeeping of all financial statements</li>
            <li>Prepare the financial records required by the auditor</li>
            <li>Implement the financial system ordered by the Governing Body</li>
            <li>Keep complete records of all income and expenditure</li>
            <li>Provide the Governing Body with composite monthly school fee statements</li>
            <li>Keep record of all subsidy applications and subsidies received</li>
            <li>Report any financial irregularities to the Governing Body</li>
          </ul>
        </section>

        {/* Section: The Current Bank Account */}
        <section id="current-bank-account" className="mb-8">
          <h2 className="text-2xl font-semibold">The Current Bank Account</h2>
          <p className="mt-4">
            A current bank account has been opened in the name of Monte Vista Primary School at Standard Bank, Parow – Account No. 071599169 Branch No 031-110.
          </p>
          <ul className="mt-2 list-disc list-inside">
            <li>The SGB has approved the following three signatories:</li>
            <ul className="ml-8 list-disc list-inside">
              <li>The Headmaster - Mrs S.J.E. Swart</li>
              <li>The Deputy Headmaster - Ms Z. Kuün</li>
              <li>The Departmental Head – Mrs L. du Plessis</li>
            </ul>
            <li>The bank account may never be overdrawn</li>
            <li>The school has no approval from the WCED for an overdraft facility</li>
            <li>A bank reconciliation statement must be drawn up and initialled by the Finance Officer at the end of each month</li>
            <li>Payment, by means of electronic bank transfers, shall be the preferred method</li>
            <li>The authorisation process consists of two steps, capturing and releasing. The person capturing may not release payments.</li>
          </ul>
        </section>

        {/* Section: Investments */}
        <section id="investments" className="mb-8">
          <h2 className="text-2xl font-semibold">Investments</h2>
          <p className="mt-4">
            The Finance Committee can make a recommendation to the Governing Body regarding the investment of surplus funds.
          </p>
          <ul className="mt-2 list-disc list-inside">
            <li>Quotations for long term investments must be submitted to the Governing Body for approval</li>
            <li>The term must not exceed 12 months or alternatively be reviewed annually</li>
            <li>The amount in the current/cheque account must not exceed R750 000. Approval shall be granted by the Finance Committee to exceed this amount in extra-ordinary circumstances.</li>
            <li>The amount exceeding R750 000 by R30 000 or more shall be deposited in the Money Market account.</li>
            <li>Approval for investments must be obtained from the WCED.</li>
          </ul>
        </section>

        {/* Section: Petty Cash */}
        <section id="petty-cash" className="mb-8">
          <h2 className="text-2xl font-semibold">Petty Cash</h2>
          <ul className="mt-2 list-disc list-inside">
            <li>The bursar may keep an amount of R5 000.00 in Petty Cash.</li>
            <li>Petty Cash register must be maintained on a weekly basis.</li>
            <li>Petty Cash voucher system will be used.</li>
          </ul>
        </section>

        {/* Section: Accounting System */}
        <section id="accounting-system" className="mb-8">
          <h2 className="text-2xl font-semibold">Accounting System</h2>
          <ul className="mt-2 list-disc list-inside">
            <li>The accounting records of the school will be done on SAGE ONE(PASTEL).</li>
            <li>The financial officer will be responsible for the capturing of all information on SAGE ONE(PASTEL).</li>
            <li>SAGE ONE(PASTEL) support and operating licence must be updated annually.</li>
            <li>Backup of accounting records takes place automatically on a daily basis via the SAGE ONE(PASTEL) cloud-based backup.</li>
          </ul>
        </section>

        {/* Section: Receipts */}
        <section id="receipts" className="mb-8">
          <h2 className="text-2xl font-semibold">Receipts</h2>
          <ul className="mt-2 list-disc list-inside">
            <li>All receipt books purchased must be entered in the Face-value Register.</li>
            <li>The Bursar/Financial Officer will be responsible for the Face-value Register.</li>
            <li>All receipts must be completed in ink (preferably black/blue).</li>
            <li>Carbon paper must be used when receipts are issued.</li>
            <li>In the event of an error, the word “cancelled” must be written on the receipt. The cancelled receipt must remain in the receipt book.</li>
            <li>Specify the source of the receipt.</li>
            <li>Specify the nature of the remittance e.g. cash, cheque, etc.</li>
            <li>When a receipt book is full, it must be returned to the bursar. All used receipt books will be kept in the safe for audit purposes.</li>
          </ul>
        </section>

        {/* Section: Depositing of Money */}
        <section id="depositing-money" className="mb-8">
          <h2 className="text-2xl font-semibold">Depositing of Money</h2>
          <ul className="mt-2 list-disc list-inside">
            <li>All money received must be banked once a week or immediately once an amount of R50 000 or more is in possession of the bursar.</li>
            <li>All money received must be receipted and kept in the safe prior to depositing.</li>
            <li>No money may be spent before being banked.</li>
            <li>Route and time of depositing money should vary.</li>
            <li>Receipt numbers making up the deposit must be indicated on the duplicate copy of the deposit slip.</li>
            <li>All staff paying in money to the bursar must insist on a receipt.</li>
            <li>If money collected by staff is not paid over to the bursar promptly and said money is lost, then such a staff member will be held responsible for the re-imbursement of the money and the necessary disciplinary steps taken against the staff member.</li>
          </ul>
        </section>

        {/* Section: Sponsors/Donations */}
        <section id="sponsors-donations" className="mb-8">
          <h2 className="text-2xl font-semibold">Sponsors/Donations</h2>
          <ul className="mt-2 list-disc list-inside">
            <li>Sponsors may be sought by either learners or educators.</li>
            <li>The letter requesting sponsorships must bear the signature of the Governing Body Chairperson or the headmaster.</li>
            <li>All donations are regarded as school money.</li>
            <li>All sponsorships must be used to the sponsors’ specifications.</li>
            <li>The Governing Body must be informed of all sponsorships received by the school and such sponsorships must be acknowledged in an appropriate fashion.</li>
          </ul>
        </section>

        {/* Section: Payment of Salaries */}
        <section id="payment-salaries" className="mb-8">
          <h2 className="text-2xl font-semibold">Payment of Salaries (Governing Body Posts)</h2>
          <ul className="mt-2 list-disc list-inside">
            <li>Salaries are paid by the end of each month.</li>
            <li>All the required deductions e.g. PAYE/UIF must be made by the financial officer.</li>
            <li>A salary advice slip must be prepared for all payments and an acknowledgment of receipt must be signed on receipt of payment.</li>
            <li>No loans may be taken against the salary.</li>
            <li>Bonuses will be paid according to the financial position of the school. The Finance Committee’s recommendation must be approved by the Governing Body.</li>
            <li>If necessary, additional cleaning staff may be employed as the need arises during the June and December holidays and will be paid a market-related fee minimum wage as determined by WCED.</li>
          </ul>
        </section>

        {/* Section: Internet Payments */}
        <section id="internet-payments" className="mb-8">
          <h2 className="text-2xl font-semibold">Internet Payments</h2>
          <ul className="mt-2 list-disc list-inside">
            <li>All internet payments are done either by the financial officer, deputy headmaster, or headmaster.</li>
            <li>Internet payments must be cross-checked, i.e. payments loaded by the bursar, financial officer, or deputy headmaster must be released by the headmaster or the deputy-headmaster.</li>
          </ul>
        </section>

        {/* Section: School Fees */}
        <section id="school-fees" className="mb-8">
          <h2 className="text-2xl font-semibold">School Fees</h2>
          <ul className="mt-2 list-disc list-inside">
            <li>School fees are determined annually in October/November once the Budget has been approved by the parents.</li>
            <li>The payment of school fees is compulsory for all learners according to legislation.</li>
            <li>School fees are payable in arrears with the full balance being debited to the parents' account at the start of each School year i.e. January – Opening statement balances will reflect total school fees payable with monthly allocation of payments reducing amount due.</li>
            <li>Parents whose children are admitted to the school during the year are responsible for the proportionate monthly payment for the remainder of the year.</li>
            <li>School fees can be paid in a lump sum before/on 1 March of each year – in which case parents will be given a discount, as determined by the Governing Body each year. Alternatively, parents can pay their school fees in 10 monthly equal payments within that year - starting February and ending November.</li>
            <li>Applications for school fee exemption will be dealt with strictly in terms of the provision of the SASA and any applicable guidelines.</li>
            <li>Monthly statements will be sent to parents.</li>
            <li>The preferred method of paying school fees is by electronic means. Should payment be made in cash, a cash handling levy of 2.5% will be applicable. As of 1 April 2023, no cash payments for school fees will be accepted on the school premises.</li>
            <li>Cash payments to be paid directly to the Bursar during the following times: From 07:45 until 15:30 each day.</li>
            <li>A receipt must be issued immediately on receipt of money.</li>
          </ul>
        </section>

        {/* Section: Collection of Outstanding School Fees */}
        <section id="collection-fees" className="mb-8">
          <h2 className="text-2xl font-semibold">Collection of Outstanding School Fees</h2>
          <ul className="mt-2 list-disc list-inside">
            <li>Parents who have not paid any school fees by the end of each month are handed over to the debtor clerk who follows up on non-payment.</li>
            <li>If school fees are outstanding for a period of 60 days, the account will be handed over to the attorneys for collection.</li>
            <li>Parents will be held accountable for any additional costs incurred in collecting outstanding school fees.</li>
          </ul>
        </section>

        {/* Section: Re-imbursement of School Fees */}
        <section id="reimbursement" className="mb-8">
          <h2 className="text-2xl font-semibold">Re-imbursement of School Fees</h2>
          <ul className="mt-2 list-disc list-inside">
            <li>Learners whose parents have paid the annual school fees in advance, but leave the school will be entitled to a pro rata re-imbursement.</li>
            <li>Learners who leave the school during the last term of the year are not entitled to a re-imbursement.</li>
            <li>Re-imbursements can only be arranged once all textbooks or other property belonging to the school have been returned to the school.</li>
            <li>Parents must apply for a re-imbursement in writing.</li>
            <li>Re-imbursements will be handled by the headmaster in consultation with the Finance Committee.</li>
          </ul>
        </section>

        {/* Section: Private Purchases */}
        <section id="private-purchases" className="mb-8">
          <h2 className="text-2xl font-semibold">Private Purchases</h2>
          <p className="mt-4">No private purchases may be made on any of the school’s accounts.</p>
        </section>

        {/* Section: Budget */}
        <section id="budget" className="mb-8">
          <h2 className="text-2xl font-semibold">Budget</h2>
          <ul className="mt-2 list-disc list-inside">
            <li>All stakeholders (area/activity manager) must give inputs with regards to their requirements to the Finance Committee.</li>
            <li>The Finance Committee will then prepare a draft budget.</li>
            <li>The school may not budget for a deficit.</li>
            <li>The Governing Body will set up a draft budget which will be submitted to parents for approval.</li>
            <li>Parents will be notified in writing 30 days before the budget meeting takes place.</li>
            <li>All income and expenditure will be discussed by the Chairperson/Treasurer of the Governing Body at the budget meeting.</li>
            <li>The budget will be approved by the parents present.</li>
            <li>The decisions taken at the budget meeting will be binding on all parents.</li>
            <li>All parents are notified in writing of the decisions/resolutions taken at the budget meeting.</li>
            <li>The budget must be submitted to the WCED by 1 December each year.</li>
          </ul>
        </section>

        {/* Section: Management of Budget */}
        <section id="management-budget" className="mb-8">
          <h2 className="text-2xl font-semibold">Management of Budget</h2>
          <ul className="mt-2 list-disc list-inside">
            <li>The Finance officer / Headmaster must monitor that the funds allocated for each section are not exceeded.</li>
            <li>Honouring the budget spending is determined by the amount of money received by the school.</li>
            <li>The headmaster must be informed and approve expenditure before it is incurred.</li>
            <li>The Finance Committee is responsible for submitting a report to the Governing Body at every meeting regarding the state of the financial situation at the school.</li>
            <li>Changes in the budget must be discussed and approved at a Governing Body meeting before any expenditure is made and minutes must be kept.</li>
          </ul>
        </section>

        {/* Section: Procurement Procedures */}
        <section id="procurement-procedures" className="mb-8">
          <h2 className="text-2xl font-semibold">Procurement Procedures</h2>
          <p className="mt-4">
            The person wanting to make a purchase must approach the area/activity manager to determine whether there are funds available for such a purchase.
          </p>
          <p className="mt-4">Ordering process:</p>
          <ul className="mt-2 list-disc list-inside">
            <li>For purchases below R10 000 – headmaster approves if budgeted.</li>
            <li>For purchases between R10 001 and R20 000 – headmaster approves if budgeted – Only one quotation is required.</li>
            <li>For purchases between R20 001 and R250 000 at least three quotations are required – headmaster approves if budgeted.</li>
            <li>Purchases above R250 000 must follow the tender procedures.</li>
            <li>For any amount that is not budgeted for, should be referred to the Governing body.</li>
            <li>The completed requisition form must be submitted to the financial officer via turbine.</li>
            <li>The requisition form must be presented to the headmaster for approval.</li>
            <li>Once approval has been granted, the Bursar will make an electronic transfer of the money and a proof of payment must be printed and attached to the invoice.</li>
            <li>The invoice/quote/proof of purchase must be attached to the cheque requisition.</li>
            <li>If paid by means of electronic transfer, there must be a first and second release of the payment.</li>
            <li>All accounts must be settled within 30 days.</li>
            <li>An asset item must be recorded in the Asset Register and entered into the necessary inventory within 3 working days after the asset is received.</li>
          </ul>
        </section>

        {/* Section: Inventories */}
        <section id="inventories" className="mb-8">
          <h2 className="text-2xl font-semibold">Inventories</h2>
          <ul className="mt-2 list-disc list-inside">
            <li>An inventory must be kept for all the assets of the school.</li>
            <li>The stock control officer (Deputy Headmaster) must control all inventories at least once a year.</li>
            <li>The stock control officer must check whether new purchases were recorded in the inventory.</li>
            <li>The stock control officer must compile a list of possible write-offs annually and present this list to the Disposal Board.</li>
            <li>Once the write-offs have been approved, the stock control officer must ensure that the inventories are adjusted accordingly.</li>
          </ul>
        </section>

        {/* Section: Disposal Board */}
        <section id="disposal-board" className="mb-8">
          <h2 className="text-2xl font-semibold">Disposal Board</h2>
          <ul className="mt-2 list-disc list-inside">
            <li>The disposal board will consist of the following members:</li>
            <ul className="ml-8 list-disc list-inside">
              <li>Chairperson of the Governing Body</li>
              <li>Member of the Governing Body</li>
              <li>Stock control officer (Deputy Headmaster)</li>
            </ul>
            <li>The disposal board must ensure that surplus assets are shared and move unused assets to a place where there is a need (i.e. other institutions).</li>
            <li>The disposal board is responsible for establishing the price and negotiating the disposal with other institutions.</li>
            <li>Once permission has been obtained from the Governing Body, the disposal board must ensure the removal of the asset from the institution and update the Asset Register.</li>
            <li>The name of the individual/institution receiving the asset must be recorded as well as the selling price.</li>
            <li>All funds received must be banked.</li>
            <li>If the assets are of such a nature that it is of no value to any other institution/individual, such assets must be destroyed.</li>
          </ul>
        </section>

        {/* Section: Letting of Assets to Staff */}
        <section id="letting-assets" className="mb-8">
          <h2 className="text-2xl font-semibold">Letting of Assets to Staff</h2>
          <ul className="mt-2 list-disc list-inside">
            <li>The Finance Committee submits the amounts payable to the Governing Body for approval.</li>
            <li>Amounts are payable in advance.</li>
            <li>A deposit for all possible damages will be requested.</li>
            <li>The person who hires the facilities must pay the caretaker.</li>
            <li>The person who hires the hall must vacate the premises at 01:00.</li>
            <li>The school must be indemnified from any claims.</li>
          </ul>
        </section>

        {/* Section: Submission of Financial Statements */}
        <section id="financial-statements" className="mb-8">
          <h2 className="text-2xl font-semibold">Submission of Financial Statements</h2>
          <ul className="mt-2 list-disc list-inside">
            <li>The Bursar and Finance Officer are responsible for submitting all the required information to the auditors by 31 March each year.</li>
            <li>The Governing Body must submit the signed, audited Financial Statements to the WCED by 30 June each year.</li>
          </ul>
        </section>

        {/* Section: Addendum A */}
        <section id="addendum-a" className="mb-8">
          <h2 className="text-2xl font-semibold">Addendum A: Payments Related to Camps, Tours, Outings, Etc.</h2>
          <ul className="mt-2 list-disc list-inside">
            <li>When the bursar provides the required money to the responsible educator, he/she needs to acknowledge receipt of the money in writing on a standard pro-forma.</li>
            <li>During the activity, the educator or responsible person needs to obtain cash slips for all purchases, as far as possible.</li>
            <li>At the end of the activity, the responsible educator will return all excess money to the bursar and supply the bursar with a complete statement of all purchases, together with all the available cash slips.</li>
            <li>A discretionary expense of 10 – 15% may not be exceeded.</li>
            <li>For all major expenses pertaining to the activity (e.g. camp fees, payments to a bus company, etc), the responsible educator must provide the bursar with a valid invoice and such accounts will be paid via electronic payment or by cheque.</li>
          </ul>
        </section>

        {/* Section: Addendum B */}
        <section id="addendum-b" className="mb-8">
          <h2 className="text-2xl font-semibold">Addendum B: Tender Procedure</h2>
          <ul className="mt-2 list-disc list-inside">
            <li>Compile a specification for the required product or service.</li>
            <li>The specification must be accepted and approved by the entire Governing Body. Acceptance and approval take place at an official meeting and must be in writing.</li>
            <li>Criteria to evaluate the tenders will also be developed at this meeting.</li>
            <li>At least 3 (three) quotes must be obtained.</li>
            <li>A definite cut-off date and time for submitting these quotes will be applicable.</li>
            <li>All tender documents will be opened in the presence of the tenderers and tender prices will be read out individually.</li>
            <li>The tenders will then be evaluated according to the criteria referred to in point 3.</li>
            <li>The contract will be awarded to the tenderer with the most favorable score.</li>
            <li>The Governing Body will immediately be informed about the appointment of the successful tenderer and the Financial Committee will be responsible for compiling the contract per tender agreement.</li>
          </ul>
        </section>
      </div>
    </div>
    </main>
    <
  );
};

export default FinancialPolicy;
