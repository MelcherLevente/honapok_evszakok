let months = [
    {month: "Január", season: "Tél", days: 31, holiday: "Újév"},
    {month: "Február", season: "Tél", days: 28, holiday: "Farsang"},
    {month: "Március", season: "Tavasz", days: 31, holiday: "Március 15."},
    {month: "Április", season: "Tavasz", days: 30, holiday: "Húsvét"},
    {month: "Május", season: "Tavasz", days: 31, holiday: "A munka ünnepe"},
    {month: "Június", season: "Nyár", days: 30, holiday: "Pünkösd"},
    {month: "Július", season: "Nyár", days: 31, holiday: "Nincs ünnep"},
    {month: "Augusztus", season: "Nyár", days: 31, holiday: "Államalapítás ünnepe"},
    {month: "Szeptember", season: "Ősz", days: 30, holiday: "Nincs ünnep"},
    {month: "Október", season: "Ősz", days: 31, holiday: "Október 23."},
    {month: "November", season: "Ősz", days: 30, holiday: "Mindenszentek"},
    {month: "December", season: "Tél", days: 31, holiday: "Karácsony"}
];


function getMonthInfo(monthInput){
    return months[monthInput - 1];
}

function start(){
    
    try{
        let month = Number(document.getElementById("monthInput").value);
        
        let output = document.getElementById("output")

        if(isNaN(month)){
            throw new Error("Nem számot adtál meg!")
        }
        else if(month < 1 || month > 12){
            
            throw new Error("A hónapszámnak 1 és 12 közé kell esnie!");
        }
        
        let monthID = getMonthInfo(month);
        output.textContent = `Hónap: ${monthID.month}, Évszak: ${monthID.season}, Napok száma: ${monthID.days}, Ünnep: ${monthID.holiday}`;
        
    }
    catch(error){
        output.textContent = "Hiba: " + error.message;
    }
    document.getElementById("monthInput").value = "";
}
