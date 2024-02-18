function select (el){

    document.querySelector(".navSearch").classList.remove("active")

    document.querySelector(".active").classList.remove("active")


    el.classList.add("active")

    document.body.style.setProperty(`--activeclr`,el.dataset.clr);

}
function selectSearch(){
    console.log("select")
    const el = document.querySelector(".navSearch")
    el.classList.toggle("active")
    if(el.classList.contains("active")){
        document.querySelector(".serachbox")
    }
}