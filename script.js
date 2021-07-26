async function runFunctionApp(){
    const selectTag = document.selectTag.unyoTag;
    const selectValue = selectTag.selectedIndex;

    const url = "https://nwtest202107.azurewebsites.net/api/HttpTrigger1?code=Pp8lXzXoVdz03spR6hZ6nv0A4jkpHEOM1aIUakueEQqJqjQKYIjHWw=="
    const bodyData = '{"unyoTag": '+selectValue+'}'
    
    var result = await fetch(url, {
        method:"POST",
        body:JSON.stringify(bodyData)
    });

    document.getElementById("resultArea").innerHTML = result;
}