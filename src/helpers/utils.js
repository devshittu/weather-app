export const farenheitToCelcius = (farenheit) => Math.round((farenheit - 32) * 5/9) + "\xB0";
function cToF(celsius) 
{
  const cTemp = celsius;
  const cToFahr = cTemp * 9 / 5 + 32;
  const message = `${cTemp}\xB0C is ${cToFahr} \xB0F.`;
    console.log(message);
}

export const fToC = (fahrenheit) => 
{
  const fTemp = fahrenheit;
  return (fTemp - 32) * 5 / 9;
  const message = `${fTemp}\xB0F is ${fToCel}\xB0C.`;
    // console.log(message);
} 

export const capitalizeSentence = (sentence) => 
{
    if (!sentence) return null 
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}

export function getCardinalDirection(angle) {
  const directions = ['↑ N', '↗ NE', '→ E', '↘ SE', '↓ S', '↙ SW', '← W', '↖ NW'];
  return directions[Math.round(angle / 45) % 8];
}