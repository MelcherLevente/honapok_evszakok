let months = [
    {month: "Január", season: "Tél", days: 31},
    {month: "Február", season: "Tél", days: 28},
    {month: "Március", season: "Tavasz", days: 31},
    {month: "Április", season: "Tavasz", days: 30},
    {month: "Május", season: "Tavasz", days: 31},
    {month: "Június", season: "Nyár", days: 30},
    {month: "Július", season: "Nyár", days: 31},
    {month: "Augusztus", season: "Nyár", days: 31},
    {month: "Szeptember", season: "Ősz", days: 30},
    {month: "Október", season: "Ősz", days: 31},
    {month: "November", season: "Ősz", days: 30},
    {month: "December", season: "Tél", days: 31}
];


function getMonthInfo(monthInput){
    return months[monthInput - 1];
}

function start(){
    try{
        let month = Number(document.getElementById("monthInput").value);

        if(isNaN(month)){
            throw new Error("Nem számot adtál meg!")
        }
        else if(month < 1 || month > 12){
            throw new Error("A hónapszámnak 1 és 12 közé kell esnie!");
        }
        
        let monthID = getMonthInfo(month);
        console.log(`Hónap: ${monthID.month}, Évszak: ${monthID.season}, Napok száma: ${monthID.days}`);
    }
    catch(error){
        console.log("Hiba: " + error.message);
    }
}
