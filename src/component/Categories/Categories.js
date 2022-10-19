import './Categories.css'
import Card from './component/card'

const Categories= ()=>{
    return (
      
       
      <section class="categories">
            <h4>Included in all plans</h4>
            <div class="text-xl">All the TV You Love</div>
            <div class="sub-text">
                Stream full seasons of exclusive series, current-season episodes, hit
                movies, Hulu Originals, kids shows, and more.
            </div>
            <div class="covers">
                <Card class="cover-1"/>
                <Card class="cover-2"/>
                <Card class="cover-3"/>
                <Card class="cover-4"/>
            </div>
    </section>
  
    )
}
export default Categories