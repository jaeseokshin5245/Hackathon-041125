import '../assets/css/main_page_style.css';
import Footer from '../components/footer';
import Header from '../components/Header';

const Main = () => {
    return(
        <div>
            <Header/>
            <div class = "main_content">
                <h1>The Hungry Guide</h1>
                <p>From hunger to happiness, one recipe at a time</p>
                <a href="ingredient.html" class = "guide-button">Open the Guide"</a>
            </div>
            <Footer/>
        </div>
    )
}

export default Main;