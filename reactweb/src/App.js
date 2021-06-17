import react from "react"
import Header from "./components/Header";
import FormArea from "./components/FormArea";
import Note from "./components/Note";
import Footer from "./components/Footer";



function App (){
    return(
    <div>
        <Header />
        <FormArea/>
        <Note/>
        <Note/>
        <Note/>
       <Footer/>
        
    </div>
    );
}

export default App;