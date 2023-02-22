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
    return sentence.chatAt(0).toUpperCase() + sentence.slice(1);
}