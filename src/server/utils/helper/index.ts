export const responseJson = (code: number,msg: string,data: object) =>{
    let resp = {
        code: code,
        message: msg,
        data: data
    }
    return resp
}

export const getLoginUid =  (event: any) => {
    console.log("kkkkkkk",event.context);
    return event.context.auth ? event.context.auth.uid : 0
}