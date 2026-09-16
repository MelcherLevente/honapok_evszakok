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

function start(){
    try{
        let monthID = Number(document.getElementById("monthInput").value) - 1;

        console.log(`Hónap: ${months[monthID].month}, Évszak: ${months[monthID].season}, Napok száma: ${months[monthID].days}`);
    }
    catch{
        if(document.getElementById("monthInput").value <1 || document.getElementById("monthInput").value >12){
            console.log("Hiba: A hónapszámnak 1 és 12 közé kell esnie!");
        }
        else if(isNaN(document.getElementById("monthInput").value)){
            console.log("Hiba: Nem számot adtál meg!");
        }
        else{
            console.log("Hiba!");
        }
    }
}