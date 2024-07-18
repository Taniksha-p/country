// let url = "http://universities.hipolabs.com/search?name=";
// let btn = document.querySelector("button");

// btn.addEventListener("click" , async () => {
//     let country = document.querySelector("input").value;
//     console.log(country);
//     let colleges = await getcolleges(country);
//     console.log(colleges);
//     show(colleges);
// });

// function show(colleges) {
//     let list = document.querySelector("#list");
//     list.innerText = "";
//     for (col of colleges) {
//         console.log(col.name);
//         let li = document.createElement("li");
//         li.innerText = col.name;
//         list.appendChild(li);
//     }
// }

// let country  = "nepal";
// async function getcolleges(country) {
//     try{
//         let res = await axios.get(url + country);
//         return res.data;
//     } catch (e) {
//         console.log("error : " , e);
//         return [] ;
//     }
// }
document.addEventListener("DOMContentLoaded", () => {
    const url = "http://universities.hipolabs.com/search?country=";
    const btn = document.querySelector("#searchBtn");
    const countryInput = document.querySelector("#countryInput");
    const countryName = document.querySelector("#countryName");
    const list = document.querySelector("#list");

    btn.addEventListener("click", async () => {
        const country = countryInput.value.trim();
        if (country === "") {
            alert("Please enter a country name.");
            return;
        }

        const colleges = await getColleges(country);
        displayColleges(country, colleges);
    });

    async function getColleges(country) {
        try {
            const res = await axios.get(url + country);
            return res.data;
        } catch (e) {
            console.error("Error fetching colleges:", e);
            return [];
        }
    }

    function displayColleges(country, colleges) {
        countryName.innerText = `Colleges in ${country.charAt(0).toUpperCase() + country.slice(1)}`;
        list.innerHTML = "";
        if (colleges.length === 0) {
            list.innerHTML = "<li>No colleges found.</li>";
        } else {
            colleges.forEach(col => {
                const li = document.createElement("li");
                li.innerText = col.name;
                list.appendChild(li);
            });
        }
    }
});
