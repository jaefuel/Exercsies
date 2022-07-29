const deleteButtons = document.querySelectorAll("#delete-button");

const updateButtons = document.querySelectorAll("#update-button");


deleteButtons.forEach(b => b.addEventListener("click", async () =>
{

    let params = b.value.split("  ");
    
    let name = params[0];
    let rating = params[1];
    
    try
    {
        const response = await fetch("/deletePlayer",
        {
            method: "delete",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "name": name,
                "rating": rating
            })
        })

        const data = await response.json();
        console.log(data);
        location.reload();
    }
    catch(err){
        console.log(err)
    }
}))

updateButtons.forEach(b => b.addEventListener("click", async () =>
{
    const newRating = b.previousElementSibling.value;
    
    let params = b.value.split("  ");
    
    let name = params[0];
    let rating = params[1];
    
    try
    {
        const response = await fetch("/updatePlayer",
        {
            method: "put",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "name": name,
                "rating": rating,
                "newRating": newRating
            })
        })

        const data = await response.json();
        console.log(data);
        location.reload();
    }
    catch(err){
        console.log(err)
    }
}))

