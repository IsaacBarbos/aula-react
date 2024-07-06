import Botao from "./Botao"
import Header from "./Header"
import Texto from "./Texto"

const App = () => {
  const nome = 'isaac'
  const diaSemana = 'sábado'
  const n1 = 12
  const n2 = 6
  return (
    <> {/* Fragment */}

    <div>
      
        <Header />
      
      <Texto />
      <Botao />
      
      <h2>Olá {nome}, bem vindo a aula de {diaSemana}!</h2>
      <p>o primeiro número é {n1}</p>
      <p>o primeiro número é {n2}</p> 
       
      <p>a soma entre o primeiro e o segundo número é {n1 + n2}</p>
    </div>
    </>
    

  )
}

export default App
