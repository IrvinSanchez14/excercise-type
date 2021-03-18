import axios from 'axios'

export class GetData {
  private readonly baseURL
  constructor() {
    this.baseURL = 'https://jsonplaceholder.typicode.com'
  }

  async ExtractingData() {
    const url = this.baseURL + '/posts'
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const b = await axios.get(url, {
      headers: options,
    })

    return b
  }
}
