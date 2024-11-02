import ExtraMural from '@/components/ExtraMural'
import Athletics from '@/components/sport/Athletics'
import Cricket from '@/components/sport/Cricket'
import Tennis from '@/components/sport/Tennis'
import React from 'react'

export default function ourteam() {
  return (
    <main>
         <div className="container max-w-8xl mx-auto p-5">
        <h1 className="text-4xl font-bold text-blue-800 my-10 text-center">Extra Mural program at Monte Vista Primary School</h1>

        <p className="text-blue-800 mx-6 leading tight my-4 text-jusitify>
Monte Vista Primary School offers an exciting and comprehensive extra-mural program that caters to the diverse interests of its learners. Activities such as rugby, netball, tennis, cricket, choir, chess, library sessions, and athletics provide students with the opportunity to explore their talents outside the classroom. These programs not only focus on physical development but also promote teamwork, discipline, and leadership skills, all in a fun and engaging environment.
</p>

<p className="text-blue-800 mx-6 my-4">
What makes Monte Vista Primary Schools extra-mural activities stand out is that there is no additional cost for parents. All expenses, including transport to and from games and events, are fully covered by the school. This approach ensures that every child has the opportunity to participate, regardless of their financial background. By providing these activities at no extra charge, the school ensures inclusivity and equal access to all learners, fostering a strong sense of community and school spirit.</p>

<p className="text-blue-800 mx-6 my-4">The quality of coaching at Monte Vista Primary is exceptional. Not only do the dedicated educators go above and beyond in coaching, but there are also more than enough coaches to ensure that all teams receive proper guidance and leadership. To further enhance the level of expertise, the school brings in professional coaches from outside the school for certain activities. These professionals, who are highly skilled in their respective sports and fields, ensure that learners are equipped with the latest techniques and training methods, enabling them to reach their full potential. This combination of passionate educators and expert coaches guarantees that learners receive the best possible experience in their extra-mural pursuits.
</p>

<p className="text-blue-800 mx-6 my-4 text-2xl font-bold text-center">Our summer program consist of the following:</p>
<Tennis></Tennis>
<Cricket></Cricket>
<Athletics></Athletics>
<ExtraMural></ExtraMural>
</div>
    </main>
       
   
  )
}
