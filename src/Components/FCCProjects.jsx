import RandomQuotesPic from './randomQuotes.jpg'
import MarkdownPreviewPic from './markdownPreview.jpg'
import DrumPadPic from './DrumPad.jpg'
import CalculatorPic from './Calculator.jpg'
import PomodoraTimerPic from './PomodoraTimer.jpg'

export const FCCProjects = () => {
    return (
        <div className="mx-auto lg:flex-row bg-white w-[90%] md:w-[85%] lg:w-[75%]  my-12 rounded-lg ring-1 ring-neutral-300 shadow-md shadow-neutral-200">
            <div>
                <h3 className="text-3xl text-center align-center text-neutral-700 pt-6 font-Roboto font-light content-center self-center">
                    FreeCodeCamp Projects 
                </h3>
                <p className="text-base text-center align-center text-neutral-700 font-Roboto font-light self-center p-2 p-2 pb-6">built using react, jquery and bootstrap.</p> 
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 px-6 pb-6 place-content-between gap-4">
                
                <div className="col-span-2 h-[250px] hover:cursor-pointer hover:scale-[1.02] transition duration-1000 hover:opacity-100"
                    onClick={() => window.open("https://anupsindagi.github.io/RandomQuotes/","_blank").open}>
                    <div className="bg-center bg-cover w-full h-full rounded-lg ring-1 ring-neutral-300 opacity-90 shadow-md shadow-neutral-200" style={{backgroundImage:`url(${RandomQuotesPic})`}}>
                        <h3 className="text-xl text-center align-center text-neutral-700 font-Roboto font-light self-center bg-slate-100 rounded-t-lg py-2">Random Quotes</h3>
                    </div>
                </div>
                
                <div className="col-span-2 h-[250px] hover:cursor-pointer hover:scale-[1.02] transition duration-1000 hover:opacity-100"
                    onClick={() => window.open("https://anupsindagi.github.io/MarkdownPreview/","_blank").open}>
                    <div className="bg-center bg-cover w-full h-full rounded-lg ring-1 ring-neutral-300 opacity-90 shadow-md shadow-neutral-200" style={{backgroundImage:`url(${MarkdownPreviewPic})`}}>
                        <h3 className="text-xl text-center align-center text-neutral-700 font-Roboto font-light self-center bg-slate-100 rounded-t-lg py-2">Markdown Preview</h3>
                    </div>
                </div>
                
                <div className="col-span-2 h-[250px] hover:cursor-pointer hover:scale-[1.02] transition duration-1000 hover:opacity-100"
                    onClick={() => window.open("https://anupsindagi.github.io/DrumPad/","_blank").open}>
                    <div className="bg-top bg-cover w-full h-full rounded-lg ring-1 ring-neutral-300 opacity-90 shadow-md shadow-neutral-200" style={{backgroundImage:`url(${DrumPadPic})`}}>
                        <h3 className="text-xl text-center align-center text-neutral-700 font-Roboto font-light self-center bg-slate-100 rounded-t-lg py-2">Drumpad</h3>
                    </div>
                </div>
                
                <div className="lg:col-start-2 col-span-2 h-[250px] hover:cursor-pointer hover:scale-[1.02] transition duration-1000 hover:opacity-100"
                    onClick={() => window.open("https://anupsindagi.github.io/ReactCalculator/","_blank").open}>
                    <div className="bg-top bg-cover w-full h-full rounded-lg ring-1 ring-neutral-300 opacity-90 shadow-md shadow-neutral-200" style={{backgroundImage:`url(${CalculatorPic})`}}>
                        <h3 className="text-xl text-center align-center text-neutral-700 font-Roboto font-light self-center bg-slate-100 rounded-t-lg py-2">Calculator</h3>
                    </div>
                </div>
                
                <div className="col-span-2 md:col-start-2  lg:col-start-auto h-[250px] hover:cursor-pointer hover:scale-[1.02] transition duration-1000 hover:opacity-100"
                    onClick={() => window.open("https://anupsindagi.github.io/PomodoraTimer/","_blank").open}>
                    <div className="bg-top bg-cover w-full h-full rounded-lg ring-1 ring-neutral-300 opacity-90 shadow-md shadow-neutral-200" style={{backgroundImage:`url(${PomodoraTimerPic})`}}>
                        <h3 className="text-xl text-center align-center text-neutral-700 font-Roboto font-light self-center bg-slate-100 rounded-t-lg py-2">Pomodora Timer</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}