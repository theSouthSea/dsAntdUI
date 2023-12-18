// 生成一个参数为指定长度的随机id的函数
// 更好的问题:使用JavaScript生成指定长度的随机ID的函数
export function generateRandomId(length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
 
  for (let i = 0; i < length; i++) {
    result += characters[Math.floor(Math.random() * characters.length)];
  }
 
  return result;
 }

 export const sleep = (time: number = 1000) => {
  return new Promise(resolve => setTimeout(resolve, time));
 }

 export const getRandomInt = (min: number, max: number):number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
 }
 /** 浅对比对象 */
export function Shallow<T>(obj1: T, obj2: T) {
  if (obj1 === obj2) return true;
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}