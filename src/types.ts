export type Info = {
    id: number,
    name: string,
    email: string,
} 

//adminInfo extends Info type and add new property
export type AdminInfo = Info & {
    role: string,


}