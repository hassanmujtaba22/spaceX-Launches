export default function serviceWorkerDev() {
    let swdev = `${process.env.PUBLIC_URL}/swDev.js`;
    navigator.serviceWorker.register(swdev).then((result)=> {
        console.log("Result", result);
    })
    .catch((error) => {
        console.log("Error", error);  
    })
}