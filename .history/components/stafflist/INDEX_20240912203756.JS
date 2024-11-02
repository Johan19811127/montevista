iimport React from 'react';

const StaffList2024 = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Laerskool Monte Vista Primary - Staff List 2024
      </h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Foundation Phase</h2>

        <div className="mt-4">
          <h3 className="text-xl font-semibold">Grade R Educators</h3>
          <ul className="list-disc ml-8">
            <li>R1: Botha D (WCED)</li>
            <li>R2: Cohens T (WCED)</li>
            <li>R3 Mentor: Van Tonder C (WCED)</li>
            <li>R4: Pretorius F (SGB)</li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold">Grade 1 Educators</h3>
          <ul className="list-disc ml-8">
            <li>1E1: Carter M (SGB)</li>
            <li>1E2: Koen R (WCED)</li>
            <li>1E3: Miller S (SGB)</li>
            <li>1E4 Mentor: Christiani M (WCED)</li>
          </ul>
        </div>

        {/* Add more grades and educators similarly */}
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Intermediate Phase</h2>

        <div className="mt-4">
          <h3 className="text-xl font-semibold">Grade 4 Educators</h3>
          <ul className="list-disc ml-8">
            <li>4E1: Nel F (SGB)</li>
            <li>4E2: Jacobs L (SGB)</li>
            <li>4E3 Mentor: Du Toit M (WCED)</li>
            <li>4E4: Williams A (SGB)</li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold">Grade 5 Educators</h3>
          <ul className="list-disc ml-8">
            <li>5E1: Faiers A (SGB)</li>
            <li>5E2: Verwey R (WCED)</li>
            <li>5E3: Swart T (Substitute WCED)</li>
            <li>5E4 Mentor: Wolmarans L (WCED Contract)</li>
          </ul>
        </div>

        {/* Add more grades and educators similarly */}
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Senior Primary - Grade 7</h2>

        <div className="mt-4">
          <h3 className="text-xl font-semibold">Grade 7 Educators</h3>
          <ul className="list-disc ml-8">
            <li>7A: Rabe R (SGB)</li>
            <li>7E1: Verwey V (WCED)</li>
            <li>7E2 Mentor: Ford J (WCED)</li>
            <li>7E3: Van Der Merwe (WCED)</li>
          </ul>
        </div>

        {/* Add more sections like Subject Teaching, Specialist Educators, and more */}
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Class Assistants</h2>

        <ul className="list-disc ml-8">
          <li>Grade R: Kennedy N (SGB)</li>
          <li>Grade R: Nombewu M (SGB)</li>
          <li>FP(1): Anderson J (SGB)</li>
          <li>FP(2): Toerien W (SGB)</li>
          {/* Add more class assistants */}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">General Assistants</h2>
        <ul className="list-disc ml-8">
          <li>Roux R (WCED)</li>
          <li>Rudolph T (SGB)</li>
          <li>Rooy G (WCED Contract)</li>
          <li>MacPherson B (SGB)</li>
          {/* Add more general assistants */}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Admin</h2>
        <ul className="list-disc ml-8">
          <li>Financial Officer: Cronje J (SGB)</li>
          <li>Admin Head: Abrahams N (WCED)</li>
          <li>Admin Clerk: Arendse R (WCED)</li>
          <li>Debtors Clerk: Scheepers K (SGB)</li>
          <li>Public Relations and System Control: Cronje J (SGB)</li>
          {/* Add more admin staff */}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Leadership</h2>
        <ul className="list-disc ml-8">
          <li>Acting Deputy & Curricular Head: Du Plessis L (WCED)</li>
          <li>Headmaster: Swart S (WCED)</li>
        </ul>
      </section>
    </div>
  );
};

export default StaffList2024;