import Navbar from './components/Navbar/Navbar'
import Timeline from './components/Timeline/Timeline';

function App() {
  return (
    <div className="App">
      <Navbar />
      <aside>
        <Timeline />
      </aside>
      <main>

        <div class="wrapper">
          <main>
            <section class="module parallax parallax-1">
              <h1 id="title">NASA SPACE APPS</h1>
            </section>
          </main>
        </div>
        <section id="section1">
          <div class="divSection">
            <h2>LandSat7:</h2>
            <p>Ele você certamente conhece...</p>
            <p>Ou não! Mas,</p>
            <p>O sétimo lançamento da série de satélites LandSat veio com o objetivo de apresentar inovações tecnológicas na calibração suas medições são extremamente precisas quando comparadas com as mesmas medições feitas no solo. O sensor do Landsat 7 foi chamado de “o instrumento de observação da Terra mais estável e melhor caracterizado já colocado em órbita”. Os rigorosos padrões de calibração do Landsat 7 o tornaram a escolha de validação para muitos sensores de resolução grosseira.</p>
            <p>A missão tinha como objetivo maior garantir uma cobertura sazonal global iluminada pelo sol, ou seja, buscar ao máximo fugir de nuvens para captar novas imagens do Planeta.</p>
            <p>Sua tecnologia ainda foi útil em diversas outras áreas, acelerando o desenvolvimento da Aviação, Gestão de Carbono e até Gerência de água</p>
          </div>

        </section>
        <section id="section2">
          <div class="divSection">
            <h2>Terra</h2>
            <p>PERGUNTA SURPRESA: TESTE SEU CONHECIMENTO EM CIÊNCIAS ESPACIAIS</p>
            <p>Dado que o Satélite Terra foi projetado com a meta de explorar as conexões entre a atmosfera do Planeta Terra, terra, neve e gelo, oceano e balanço de energia, quais seriam motivações para a missão ocorrer?</p>
            <p>a)  Entender o clima da Terra e as mudanças climáticas e mapear o impacto da atividade humana e desastres naturais nas comunidades e ecossistemas</p>
            <p>b) Testar alguns recursos aí...</p>
            <p>c) Desenvolver e validar fórmulas físicas recém-descobertas</p>
            <p>d) Obter fotos ainda mais precisas de bebês e gatinhos</p>
            <p>Meus parabéns para você que
              pensou na alternativa a). Pois é exatamente o que motivou o lançamento do Satélite.</p>
            <p>Ainda hoje, a missão contribui com diversas informações sobre as mudanças do planeta e fornece dados críticos usados ​​em aplicações de segurança alimentar, monitoramento vulcânico, segurança contra incêndios florestais, saúde pública e modelagem climática . Incrível, sim ou claro?</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
