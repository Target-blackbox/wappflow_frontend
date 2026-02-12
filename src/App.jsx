import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import PlatformSections from './components/PlatformSections'
import FeaturesTimeline from './components/FeaturesTimeline'
import Footer from './components/Footer'

function App() {
    const [isLoaded, setIsLoaded] = useState(false)

    return (
        <div className="min-h-screen bg-white">
            <Header isLoaded={isLoaded} />
            <main>
                <Hero isLoaded={isLoaded} setIsLoaded={setIsLoaded} />
                <PlatformSections isLoaded={isLoaded} />
                <FeaturesTimeline isLoaded={isLoaded} />
            </main>
            <Footer isLoaded={isLoaded} />
        </div>
    )
}

export default App
