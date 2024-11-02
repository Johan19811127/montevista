import React from 'react';

const FinancialPolicy = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white fixed h-full">
        <div className="p-4">
          <h2 className="text-2xl font-semibold">Table of Contents</h2>
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
            {/* Add more links corresponding to the document sections */}
          </ul>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 ml-64 p-8">
        <h1 className="text-3xl font-bold mb-8">Monte Vista Primary School Financial Policy</h1>

        {/* Section: The Finance Committee */}
        <section id="finance-committee" className="mb-8">
          <h2 className="text-2xl font-semibold">The Finance Committee</h2>
          <p className="mt-4">
            The Governing Body annually appoints and approves the members of the Finance Committee...
          </p>
          {/* Add the rest of the section content here */}
        </section>

        {/* Section: Duties of Bursar/Finance Officer */}
        <section id="duties-of-bursar" className="mb-8">
          <h2 className="text-2xl font-semibold">Duties of Bursar/Finance Officer</h2>
          <p className="mt-4">
            The duties of the Bursar and Finance Officer are as follows...
          </p>
          {/* Add the rest of the section content here */}
        </section>

        {/* Section: The Current Bank Account */}
        <section id="current-bank-account" className="mb-8">
          <h2 className="text-2xl font-semibold">The Current Bank Account</h2>
          <p className="mt-4">
            A current bank account has been opened in the name of Monte Vista Primary School...
          </p>
          {/* Add the rest of the section content here */}
        </section>

        {/* Section: Investments */}
        <section id="investments" className="mb-8">
          <h2 className="text-2xl font-semibold">Investments</h2>
          <p className="mt-4">
            The Finance Committee can make a recommendation to the Governing Body regarding the investment of surplus funds...
          </p>
          {/* Add the rest of the section content here */}
        </section>

        {/* Section: Petty Cash */}
        <section id="petty-cash" className="mb-8">
          <h2 className="text-2xl font-semibold">Petty Cash</h2>
          <p className="mt-4">
            The bursar may keep an amount of R5 000.00 in Petty Cash...
          </p>
          {/* Add the rest of the section content here */}
        </section>

        {/* Add more sections corresponding to the document */}
      </div>
    </div>
  );
};

export default FinancialPolicy;