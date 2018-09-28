/*
  Input: Url image String
  Output: style object
*/
export const setBackgroundImage = url => {
  return {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
}
