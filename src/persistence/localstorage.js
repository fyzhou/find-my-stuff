export const loadState = () => {
    console.log("Loading State...")
    try {
      const serializedState = localStorage.getItem('state')
      console.log("Found serialized state: " + serializedState)
      if (serializedState === null) {
        return undefined
      }
      return JSON.parse(serializedState)
    }
    catch (err) {
        console.log("ERROR: Failed to load state")
    }
  }
  
  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state)
      console.log("Saving State as: " + serializedState)
      localStorage.setItem('state', serializedState)
    }
    catch (err) {
        console.log("ERROR: Failed to save state")
    }
  }
  