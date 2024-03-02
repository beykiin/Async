

let bilgiGetir=()=>{
    console.log("bilgi 1")
    setTimeout(()=>{
        console.log("bilgi 2")
    },1000)
    console.log("bilgi 3")
}
// bilgiGetir()
// Diğer yöntem async yazmak için
// async function bilgiGetir(){}
bilgiGetir2= async ()=>{
    console.log("bilgi 1")
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(console.log("bilgi 2"))
        },3000)
    })
    console.log("bilgi 3")
}

bilgiGetir2()