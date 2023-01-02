export default function useLocalStorage() {
  
  const setStorage = (name:string, data:any) => {
    localStorage.setItem(name, JSON.stringify(data))
  }

  const getStorage = (name:string) => {
    const newData:any = localStorage.getItem(name)
    function isJsonString(str:string) {
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