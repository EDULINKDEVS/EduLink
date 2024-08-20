export const setWithExpiry = (key: string, value: any, expiryInDays: number): void => {
    const now = new Date();
    const expiryTime = now.getTime() + expiryInDays * 24 * 60 * 60 * 1000;
  
    const item = {
      value: value,
      expiry: expiryTime,
    };
  
    localStorage.setItem(key, JSON.stringify(item));
  }
  
  export const getWithExpiry = <T>(key: string): T | null => {
    const itemStr = localStorage.getItem(key);
  
    if (!itemStr) {
      return null;
    }
  
    const item = JSON.parse(itemStr) as { value: T; expiry: number };
    const now = new Date();
  
    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }
  
    return item.value;
  }
  