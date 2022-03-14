import app from "./app";


interface User{
    name: string
    balance: number
}

export const verifyPucharse = (user: User, value: number) => {
    const userPay = user
    if( userPay.balance >= value){
        userPay.balance = userPay.balance - value
        return userPay
    }else{
        return undefined
    }
}