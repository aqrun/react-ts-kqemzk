export interface IPager{
    current: number,
    pageSize:number,
}

export interface IRoute{
    id: string | number,
    icon: string,
    url: string,
    name: string
}

export interface IResource {
    id: number|string,
    name: string
}

export interface IAgent{
    id: string|number, 
    name:string, status:string, ip: string,
    folder: string, deny: number, icon:string,
    resources:IResource[]
}

export const routes = [
    {id:1, name: 'DASHBOARD', url: '#', icon:'dashboard'},
    {id:2, name: 'AGENT', url: '#', icon: 'relation'},
    {id:3, name: 'MY CRUISE', url: '#', icon: 'boat'},
    {id:4, name: 'HTLP', url: '#', icon: 'help'},
]