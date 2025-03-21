
class apiResponse<returnType> {
    message:string
    statusCode:number
    data:returnType
    constructor(
        statusCode:number,
        data:returnType,
        message:string){
        this.message=message
        this.statusCode=statusCode
        this.data=data

    }
}
export default apiResponse