import './App.css'
import Header from './component/Header/Header'
import SubHeader from './component/SubHeader/SubHeader'
import Categories from './component/Categories/Categories'
import Live from './component/live/Live'
import Livesports from './component/live-sports/Live-sports'
import Footer from './component/Footer/Footer'

const App = ()=>{
    return(
        <>
            <Header />
            <SubHeader />
            <Categories />
            <Live />
            <Livesports />
            <Footer />
         
        </>
    )
}
export default App