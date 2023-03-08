import React from 'react'

function AppWelcomeMessage({cityName, countryCode}) {
  return (
    <div className="welcome-message absolute opacity-0 pointer-events-none z-20 top-28 md:ml-10 md:min-w-min">
          <div className="m-10">
            <h1 className="text-3xl md:text-6xl mb-4">Welcome to the Weather App!</h1>
            {/* <p className="text-lg md:text-2xl leading-loose text-white/80"> Looks like you're in {`${globalState?.currentCity?.cityName}, ${globalState?.currentCity?.countryCode}`}, but if you were hoping for sunny Hawaii, we'll need you to sign in below and work some of that magic! 😉</p> */}
            <p className="mb-4 text-lg md:text-2xl leading-loose "> Where we know it's raining cats and dogs in <strong>{`${cityName}, ${countryCode}`}</strong>. If we got it wrong and it's actually raining men or pizzas, sign in below to <a onClick={()=> alert('change location')}>change</a>  your location. 😜🌧️🐶🐱🍕💦</p>
            <p className="text-lg md:text-2xl leading-loose "> And yes, we built this using Vite + Reactjs + tailwind – we're nerdy like that. ☀️❄️🤓</p>
            {/* <p className="text-lg text-white/80"> {items[Math.floor(Math.random()*items.length)]||''}</p> */}
          </div>
        </div>
  )
}

export default AppWelcomeMessage