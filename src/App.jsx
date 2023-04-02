import {MealsFinder} from './Components/MealsFinder.jsx'
import {HeroSection} from './Components/HeroSection.jsx'
import {TradingWatchlist} from './Components/TradingWatchlist.jsx'
import {TeamAllocation} from './Components/TeamAllocation.jsx'
import {FCCProjects} from './Components/FCCProjects.jsx'

export default function App() {
  return (
     <main>
        <HeroSection />
        <MealsFinder /> 
        <TradingWatchlist />
        <TeamAllocation />
        <FCCProjects />
     </main>
  )
}
