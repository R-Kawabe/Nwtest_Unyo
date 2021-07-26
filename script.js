async function runFunctionApp(){
    const selectTag = document.selectTag.unyoTag;
    const selectIndex = selectTag.selectedIndex;
    const selectValue = selectTag.options[selectIndex].value

    const code = "Pp8lXzXoVdz03spR6hZ6nv0A4jkpHEOM1aIUakueEQqJqjQKYIjHWw==";
    const url = `https://nwtest202107.azurewebsites.net/api/HttpTrigger1?code=${code}`
    const bodyData = {
        unyoTag: `${selectValue}`
    };
    
    await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyData)
    })
    .then(response => {
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        return response.blob();
    })
    //.then(data => document.getElementById("resultArea").innerHTML = data)
    .catch(error => console.log(error));
}