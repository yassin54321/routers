import React from 'react'

const Home = () => {
  return (
    <div>
      <div id='nav'>
    <nav>
<p>hello to netflix</p>
<h1>Films, séries et bien plus en illimité.</h1>
    </nav>
    <div style={{marginTop:'50px',textAlign:'left'}}>
    <main>
      <div className='regarder'>
        <div style={{width:'400px',height:'100px'}}>
      <h1>Regardez Netflix sur votre TV.</h1>
      <p>Regardez Netflix sur votre Smart TV, PlayStation, Xbox, Chromecast, Apple TV,<br /> lecteur Blu-ray et bien plus.</p>
      </div>
      <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="regardez" />
      </div>
      <div className='telecharger'>
      <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="telecharger" />
      <div style={{width:'400px',height:'100px'}}>
        <h1>Téléchargez vos séries préférées pour les regarder hors connexion.</h1>
        <p>Enregistrez vos programmes préférés et ayez <br /> toujours quelque chose à regarder</p>
        </div>
      </div>
      <div className='ou'>
        <div style={{width:'400px',height:'100px'}}>
        <h1>Où que vous soyez.</h1>
        <p>Regardez des films et séries en illimité sur <br /> votre TV, smartphone, tablette et ordinateur,<br /> sans payer de supplément.</p>
        </div>
        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" alt="ou" />
      </div>
    </main>
    </div>
    <footer>
      <h6>Netflix men jumia</h6>
    </footer>
    </div>
    </div>
  )
}

export default Home