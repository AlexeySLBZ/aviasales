const searchIdUrl = "https://front-test.beta.aviasales.ru/search"
const requestUrl = "https://front-test.beta.aviasales.ru/tickets"

async function sendRequestPattern(method, URL) {
  try {
    const response = await fetch(URL)
    if (response.ok){
      const data = await response.json()
      return data
    }
  }
  catch (e) {
    console.err(e)
  }
}
const getSearchId = sendRequestPattern("GET", searchIdUrl);
const getSearchToKey =(searchId) =>
  sendRequestPattern("GET", `${requestUrl}?searchId=${searchId}`)

export{getSearchId,getSearchToKey}