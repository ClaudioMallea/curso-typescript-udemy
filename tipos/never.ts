const myNeverFunction = (msg: string): never =>{

    throw new Error(msg)
}