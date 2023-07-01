import axios from 'axios'

const Api = {
  baseUrl: 'https://aviasales-test-api.kata.academy',
  searchId: '',
  async getId() {
    try {
      const { data } = await axios.get(`${this.baseUrl}/search`)
      const { searchId } = data
      this.searchId = searchId
      return searchId
    } catch (e) {
      console.log(e)
      return null
    }
  },

  async getTickets() {
    try {
      const { data } = await axios.get(`${this.baseUrl}/tickets?searchId=${this.searchId}`)
      if (!data.stop) {
        return { tickets:data.tickets, dataStop: false } 
      }
      return { tickets: data.tickets, dataStop: true }
    } catch (e) {
      if (e.response.status == 500) return e.response.status
      return null
    }
  }
}
export default Api