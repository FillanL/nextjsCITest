export const addNum = (num:number, num2:number): number|null=>{
    if( typeof num === 'string' || typeof num2 === 'string') return null
    return num+num2
}