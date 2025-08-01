import './home.css'
import Container from "../../components/container/container"
import Header from "../../components/header/header"
import Title from "../../components/title/title"
import algoritmoWhite from '../../img/algoritmoWhite.png'
import pc from '../../img/pc.png'
import Button from '../../components/button/button'


function Home() {
    return (
        <Container>
        <Header/>
        <main style={{display: 'flex', marginTop: "5rem", justifyContent: 'space-between', height: 'fit-content'}}>
            <div style={
                {display: 'flex', flexDirection: 'column',
                width: '60%', minWidth: '14rem'}}>

                <img src={algoritmoWhite} alt="" style={{maxWidth: '100%', height: 'auto'}} />
                <Title 
                    title="Mude a forma como as pessoas vêem sua empresa e seus serviços!"
                    subtitle='Do design ao código: tudo no ponto mais alto.'
                    color="#23d2ff"
                />
                <div className='buttons'>
                    <Button
                        buttonTitle='Criar projeto'
                        buttonEmphasis = {true}
                    />
                    <Button
                        buttonTitle='Sistemas'
                        
                    />
                </div>
            </div>
            <div style={{width: 'fit-content'}}>
                <img className="pc_img" src={pc} alt="" style={{maxWidth: '100%', minWidth: '15rem', height: 'auto'}} />
            </div>
        </main>
        </Container>
    )
}

export default Home