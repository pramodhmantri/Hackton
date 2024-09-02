const wrapper = document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select-btn"),
searchInp = wrapper.querySelector("input"),
options = wrapper.querySelector(".options");

let countries = ["GITAM University", "Gayatri Vidya Parishad", "Andhra University", "Raghu Engineering College", "Avanthi Engineering college ", "Vignan's Engineering college,", "Anil Neerukonda Engineering college", "Vignan Engineering college","Dr Lankapalli Bullayya College", "Indian Maritime University", "Visakha Engineering college", "Vignan's Engineering for Women","Sanketika Engineering college", "Simhadri Engineering college,", "ASK Engineering college", "Visakha Technical Campus,", "Simhadhri Engineering college", "Kaushik Engineering college,", "Indo American Engineering college",
                 "Gayati College for Degree and PG", "Centurion university", "Vizag Institute of Technology,", "GITAM School of Technology", "Pydah Engineering college", "Sri Chaitanya Engineering College", "Sanketika Engineering College",
                 "BABA Engineering college", "Sai Ganapathi Engineering College", "NS Raju Institute of Technology", "Gonna Engineering college", "WISTM Engineering college", "Dadi Engineering college,", "VITS Engineering college","Al-Ameer Engineering college","Viswanadha Engineering college","Indo American School of Engineering"]

function addCountry(selectedCountry) {
    options.innerHTML = "";
    countries.forEach(country => {
        let isSelected = country == selectedCountry ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addCountry();

function updateName(selectedLi) {
    searchInp.value = "";
    addCountry(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = countries.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Country not found</p>`;
});

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));