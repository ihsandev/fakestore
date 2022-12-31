export default function useLocalStorage() {
  
  const setStorage = (name, data) => {
    localStorage.setItem(name, JSON.stringify(data))
  }

  const getStorage = (name) => {
    const newData = localStorage.getItem(name)
    function isJsonString(str) {
      try {
          JSON.parse(str);
      } catch (e) {
          return str;
      }
      return JSON.parse(str);
    }
    return isJsonString(newData);
  }
  
  return {
    setStorage,
    getStorage
  }
}