export default function Collage() {
    return (
      <div className="relative h-screen overflow-hidden bg-white">
        <div className="pb-80 h-90 justify-stretch items-stretch pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto self-center max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
     
     <div className="text-center">
       <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
         Monte Vista Primary School
       </h1>
       <h3 className="text-2xl font-bold tracking-tight text-yellow-500 sm:text-3xl">
         Be proud / Wees Trots
       </h3>
       <p className="mt-6 text-base leading-tight text-gray-300 text-center">
       Situated in the heart of Monte Vista, a bustling suburb in the Northern Suburbs of Cape Town, Monte Vista Primary School has stood as an educational cornerstone since its establishment in 1963. Serving students from Grade R to Grade 7, 
       we employ state-of-the-art technology in our classrooms, adhering to the CAPS grading system prescribed by the Western Cape Education Department.
       </p>
       <div className="mt-10 flex items-center justify-center gap-x-6">
         <a
           href="#"
           className="rounded-md bg-yellow-500 px-5 py-2.5 text-lg font-semibold text-slate-950 shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
         >
           Get started
         </a>
       
       </div>
     </div>
   </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-96 w-66 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            alt=""
                            src="/heroboy.png"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-96 w-66 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="/herogirl.png"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-96 w-66  overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="/heroboy2.png"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-96 w-66 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="/herogirl3.png"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-96 w-66 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="/heroboy3.png"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-96 w-66 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="/herogirl4.png"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-96 w-66 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="/heroboy4.png"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Shop Collection
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  