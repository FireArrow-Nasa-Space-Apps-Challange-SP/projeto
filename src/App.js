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
        <section id="sectionMain" className='VideoSection'>
          <div className="VideoOverlay"></div>
          <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop" loading="lazy" className='MainVideo'>
            <source
              src={process.env.PUBLIC_URL + 'videoTerra.mp4'}
              type="video/mp4"
            />
          </video>
          <div className="VideoContent">
            <div>
              <h1>Descubra mais sobre as missões de observação da Terra!</h1>
              <p>Tera View é um projeto que busca facilitar e organizar as informações das principais missões de visualização da terra feitas pela NASA.</p>
            </div>
            <a href="#sectionGuru" className="BotaoExplore">
              Explore <i className="bi bi-arrow-down-short"></i>
            </a>
          </div>
        </section>

        <section id="sectionGuru" className='sectionGuru'>
          <div>
            <div className='Guru'>
              <div className='BalaoDialogo'>
                <h2>Bem Vindo</h2>
                <p>Olá caro Viajante, me chamo Buss e irei acompanhar você nesta jornada de conhecimento. Acho que você deve conhecer um pouco sobre missões de observação da terra, não? Bom, aqui nós iremos contar quais foram estas missões e seus objetivos.</p>
                <p>AAAAH e logo abaixo já teremos nossa primeira missão de observação, venha ver!</p>
              </div>
              <img alt="" src={process.env.PUBLIC_URL + 'guru5.png'} className="GuruImage" />
            </div>
            <a href="#sectionLandSat7" className="BotaoExplore">
              Explore <i className="bi bi-arrow-down-short"></i>
            </a>
          </div>



        </section>

        <section id="sectionLandSat7" className='Mission'>
          <h2>LandSat7</h2>
          <div>
            <div>
              <p className='TextAndImage'>Ele você certamente conhece...</p>
              <p className='TextAndImage'>Ou não! Mas,</p>
              <div className='TextAndImage'>
                <img alt="" src={process.env.PUBLIC_URL + 'imagem1.png'} className="ImagemSatelite" />
                <p className='padding-left'>O sétimo lançamento da série de satélites LandSat veio com o objetivo de apresentar inovações tecnológicas na calibração suas Wmedições são extremamente precisas quando comparadas com as mesmas medições feitas no solo. O sensor do Landsat 7 foi chamado de “o instrumento de observação da Terra mais estável e melhor caracterizado já colocado em órbita”. Os rigorosos padrões de calibração do Landsat 7 o tornaram a escolha de validação para muitos sensores de resolução grosseira.</p>
              </div>
              <div className='TextAndImage'>
                <p>
                  <p>A missão tinha como objetivo maior garantir uma cobertura sazonal global iluminada pelo sol, ou seja, buscar ao máximo fugir de nuvens para captar novas imagens do Planeta.</p>
                  <p>Sua tecnologia ainda foi útil em diversas outras áreas, acelerando o desenvolvimento da Aviação, Gestão de Carbono e até Gerência de água</p>
                </p>
                <img alt="" src={process.env.PUBLIC_URL + 'imagem2.jpg'} className="ImagemSatelite padding-left" />
              </div>
              <div className='divExplore'>
                <a href="#sectionGuru2" className="BotaoExploreMission">
                  Explore <i className="bi bi-arrow-down-short"></i>
                </a>
              </div>
            </div>


          </div>



        </section>

        <section id="sectionGuru2" className='sectionGuru'>
          <div className='Guru'>
            <div className='BalaoDialogo'>
              <h3>Você sabia?</h3>
              <p>Você sabia que a NASA criou o Office of Planetary Protection (Escritório de Proteção Planetária) para caso encontrarmos vida inteligente fora da Terra. E esse escritório serve para proteger tanto as descobertas quanto o nosso próprio planeta.</p>
            </div>
            <img alt="" src={process.env.PUBLIC_URL + 'guru4.png'} className="GuruImage" />
          </div>
          <a href="#sectionTerra" className="BotaoExplore">
            Explore <i className="bi bi-arrow-down-short"></i>
          </a>
        </section>

        <section id="sectionTerra" className='Mission'>
          <h2>Terra</h2>
          <div>
            <div className='Images'>
              <img alt="" src={process.env.PUBLIC_URL + 'MOPITT.jpg'} />
              <img alt="" src={process.env.PUBLIC_URL + 'MODIS.jpg'} />
            </div>
            <div>
              <p> O satélite foi lançado na Base Aérea de Vandenberg, em 18 de dezembro de 1999, a bordo de um Atlas II, e começou a coletar dados em 24 de fevereiro de 2000 (EOS), como  dados críticos usados ​​em aplicações de segurança alimentar, monitoramento vulcânico, segurança contra incêndios florestais, saúde pública e modelagem climática.</p>
              <p> O Terra leva uma carga de cinco sensores remotos designados para monitorar o meio-ambiente da Terra e suas mudanças climáticas:</p>
              <ul>
                <li>ASTER (Advanced Spaceborne Thermal Emission and Reflection Radiometer)</li>
                <li>CERES (Clouds and the Earth's Radiant Energy System)</li>
                <li>MISR (Multi-angle Imaging SpectroRadiometer)</li>
                <li>MODIS (Moderate-resolution Imaging Spectroradiometer)</li>
                <li>MOPITT (Measurements of Pollution in the Troposphere)</li>
              </ul>
            </div>
          </div>
          <div>
            <div className='divExplore'>
              <a href="#sectionGuru3" className="BotaoExploreMission">
                Explore <i className="bi bi-arrow-down-short"></i>
              </a>
            </div>
          </div>
        </section>

        <section id="sectionGuru3" className='sectionGuru'>
          <h2>Curiosidades</h2>
          <div className='Guru'>
            <div className='BalaoDialogo BalaoEsquerda'>
              <h3>Você sabia?</h3>
              <p>A NASA já registrou mais de 3 milhões de fotos feitas pelo satélite Terra, em órbita desde 1999. Todas essas fotos são de domínio público.</p>
            </div>
            <img alt="" src={process.env.PUBLIC_URL + 'guru3.png'} className="GuruImage" />

          </div>
          <a href="#sectionAqua" className="BotaoExplore">
            Explore <i className="bi bi-arrow-down-short"></i>
          </a>
        </section>

        <section id="sectionAqua" className='Mission'>
          <h2>Aqua</h2>
          <div className='NewTextAndImage'>
            <img alt="" src={process.env.PUBLIC_URL + 'imagem3.jpg'}/>
            <img alt="" src={process.env.PUBLIC_URL + 'imagem4.jpg'} />
          </div>
          <div className='NewTextAndImage'>
            <p>
            <p>Saudações Viajante, é muito bom contar com a sua presença aqui. Bom, talvez você não saiba, mas a Terra é chamada de “planeta água” por um motivo. Mais de 70% do planeta é composto por água.
              E para entender o nosso clima e entender como funciona a vida na Terra, precisamos compreender como o sistema de água funciona. É ai que o Satélite Aqua entra.</p>
              <p>
                O Satélite Aqua foi lançado as 2h55 do dia 4 de maio de 2002, e sua principal função foi coletar aspectos do planeta Terra, oceanos, gelo, biosfera e terra. Com foco na água em todas as suas formas.
                Dentre as principais medições feitas pelo Aqua estão vapor da água, nuvens na atmosfera, água líquida, gelo marinho nos oceanos, geleiras, cobertura de neve, e umidade do solo.
                Para fazer essas medições, o Aqua carrega seis instrumentos de observação da Terra, sendo um deles do Brasil. Esses instrumentos medem radiação de diferentes tipos, como a radiação visível e a invisível.</p>

              <p>Todos os dias, os dados chegam do satélite Aqua e são processados por uma gama de cientistas. E diversas áreas, como a meteorologia, agricultura e órgãos de prevenção contra desastres naturais se beneficiam destes dados para melhorar seus processos.</p>
            </p>

          </div>
          <div>
            <div className='divExplore'>
              <a href="#sectionGuru4" className="BotaoExploreMission">
                Explore <i className="bi bi-arrow-down-short"></i>
              </a>
            </div>
          </div>
        </section>

        <section id="sectionGuru4" className='sectionGuru'>
          <h2>Curiosidades</h2>
          <div className='Guru'>
            <div className='BalaoDialogo'>
              <h3>Você sabia?</h3>
              <p>Para ser considerado oficialmente um astronauta da NASA, você precisa viajar pelo menos 80 km acima da superfíce da Terra.</p>
              <p>Opa!!! Acabei de receber uma mensagem e terei que ir para uma missão espacial, mas antes de ir, lhe contarei sobre mais um satélite, e quando eu voltar prometo que irei trazer mais informações.</p>
            </div>
            <img alt="" src={process.env.PUBLIC_URL + 'guru2.png'} className="GuruImage" />
          </div>
          <a href="#sectionAura" className="BotaoExplore">
            Explore <i className="bi bi-arrow-down-short"></i>
          </a>
        </section>

        <section id="sectionAura" className='Mission'>
          <h2>Aura</h2>
          <div>
          <div className='NewTextAndImage'>
            <img alt="" src={process.env.PUBLIC_URL + 'imagem5.gif'}/>
          </div>
            <p>Olá viajante, bem vindo, aqui você entenderá um pouco sobre o satélite Aura. Primeiramente, irei lhe explicar um pouco sobre a camada de ozônio, você com certeza já ouviu falar dela.</p>
            <p>A camada de ozônio é uma camada gasosa que filtra a radiação ultravioleta vinda do sol, protegendo os seres humanos. Se a camada de ozônio diminuir você queima mais rápido, além disso, a radiação UV também pode causar câncer de pele.</p>
            <p>Viu como a camada de Ozônio é importante pra gente? Contudo, desde 1970, um gás começou a preocupar muito a integridade desta camada, destruindo esse gás é conhecido como Cloroflourcarboneto, ou CFC. E para tentar diminuir o impacto desse gás na camada de Ozônio, foi assinado em 1987 o Protocolo de Montreal onde todas as nações da Terra se comprometeram a
              proibir substâncias que agridem a camada de Ozônio.</p>
            <p>Mas para medir se houve mesmo uma diminuição de agressão da Camada de Ozônio após este protocolo, precisávamos de um satélite que pudesse monitorar a camada de Ozônio e ver como os produtos químicos produzidos pelo homem estavam afetando o ozônio. E esse satélite foi o Aura.</p>
            <p>O Aura é um satélite lançado em 15 de julho de 2004, que tem como principal função monitorar a camada de ozônio e medir gases poluentes. O Aura tem quatro instrumentos de medição, cada um com uma função, e que juntos, mandam dados para que diversos cientistas analisem e desenvolvam estudos sobre como a camada de Ozônio está sendo impactada nos últimos anos.</p>
            <p>E a boa notícia é que graças ao Protocolo de Montreal, a camada de ozônio está se restaurando, sendo preenchidos os buracos que foram feitos nela por conta do gás CFC.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
