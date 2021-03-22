import axios from 'axios'

export interface TodosProps {
  userId: number
  id: number
  title: string
  completed: boolean
}

export class GetData {
  private readonly baseURL
  constructor() {
    this.baseURL = 'https://jsonplaceholder.typicode.com'
  }

  async extractingData(): Promise<TodosProps[]> {
    const url = this.baseURL + '/todos'
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const listData = await axios
      .get(url, {
        headers: options,
      })
      .then((response) => response.data)

    return listData
  }

  // async postingData() {
  //   const url = this.baseURL + '/todos'
  //   const options = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   }

  //   const posted = axios.post(url, {
  //     headers: options,
  //   })

  //   return posted
  // }
}
