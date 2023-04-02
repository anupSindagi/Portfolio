import TeamAllocationPic from './teamAllocation.jpg'

export const TeamAllocation = () => {
    return (
        <div className="flex flex-col lg:flex-row bg-white w-[90%] md:w-[85%] lg:w-[75%] h-[450px] lg:h-[300px] mx-auto rounded-lg ring-1 ring-neutral-300 opacity-90 shadow-md shadow-neutral-200 hover:cursor-pointer hover:scale-[1.02] transition duration-1000"
            onClick={() => window.open("https://anupsindagi.github.io/TeamMemberAllocationApp/","_blank").open}>
            <div className="bg-center bg-cover h-2/3 lg:h-full lg:w-full rounded-lg border-8 border-white [box-shadow:inset_0px_-100px_74px_-26px_rgba(255,255,255,1)] lg:[box-shadow:inset_-198px_0px_74px_-26px_rgba(255,255,255,1)]" 
                    style={{backgroundImage:`url(${TeamAllocationPic})`}}>
            </div>
            <div className="h-1/3 lg:h-full lg:w-1/3  md:mt-8 lg:p-1 xl:p-8 self-center content-center">
                <h2 className="text-3xl text-center align-center text-neutral-700 font-Roboto font-light content-center self-center">
                  Team Allocation
                </h2>
                <p className="text-base text-left align-center text-neutral-700 font-Roboto font-light self-center p-2 lg:p-2 lg:mt-4">
                 Assign team members to different teams and view respective allocations. Built using: react and bootstrap5.
                </p>
            </div>
        </div>
    )
}