export const GetAppData = function(resolve, reject){
    let settings = {
        url : '/appData.json',
        method : 'GET',
        headers: {
            "Content-Type": "application/json"
        },
        data : null,
        success : (data)=>{
            resolve(data);
        },
        error : (xhr, status, error)=>{
            console.log("error service xhr",xhr)
            console.log("error service status",status)
            console.log("error service error",error)
            if(xhr.status == 0){
            }
            else{
            }
            reject()
        }
    };
    window.exJquery.ajax(settings);
}