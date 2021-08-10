import axios from 'axios'

// get shows
export const getShows = () => {
  return new Promise<any>(async (resolve, reject) => {
    console.log(process.env.REACT_APP_API_URL, 'url')
    try {
      const response = await axios.get(
        'https://api.tvmaze.com/search/shows?q=girls',
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

// get images by show id
export const getImages = (id: number) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `https://api.tvmaze.com/shows/${id}/images`,
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}
