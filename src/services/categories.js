// Dependencies
import axios from 'axios'

export const fetchCategories = () => {
  return axios.get('https://api.chucknorris.io/jokes/categories')
}

export const fetchCategory = (category) => {
  const url = `https://api.chucknorris.io/jokes/random?category=${category}`
  return axios.get(url)
}

export const fetchImage = (word1, word2, word3) => {
  const key = 'cpuD23c9SvL1rTFUz7st0tQJNplbZ7Cl'
  const query = `${word1}+${word2}+${word3}`
  const url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${key}&limit=1`
  return axios.get(url)
}
