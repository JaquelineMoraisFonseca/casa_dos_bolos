import NavBar from "../../components/NavBar/NavBar"
import Avaliacao from "./sections/Avaliacao";
import Cardapio from "./sections/Cardapio"
import Inicio from "./sections/Inicio"
import { Element } from 'react-scroll';

const Home = () =>{
    return(
        <>
            <NavBar/>
            <Element name="inicio">
                <Inicio/>
            </Element>
            <Element name="cardapio">
                <Cardapio/>
            </Element>
            <Element name="avaliacoes">
                <Avaliacao/>
            </Element>
        </>
    )
 
 }
 
 export default Home