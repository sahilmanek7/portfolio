const themeBtn = document.getElementById("theme-toggle");
const topBtn = document.getElementById("topBtn");

/* Dark Mode */

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

    }else{

        themeBtn.innerHTML =
        '<i class="fa-solid fa-moon"></i>';

    }

});

/* Back To Top Button */

if(topBtn){

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

/* Show / Hide Top Button */

window.addEventListener("scroll", () => {

    if(topBtn){

        if(window.scrollY > 300){
            topBtn.style.display = "flex";
        }else{
            topBtn.style.display = "none";
        }

    }

});

document.querySelectorAll('.counter').forEach(counter => {

    const target = Number(counter.innerText);
    let count = 0;

    const update = () => {

        if(count < target){

            count++;

            if(target === 100){
                counter.innerText = count + "%";
            }else{
                counter.innerText = count + "+";
            }

            setTimeout(update, 30); /* speed */

        }

    };

    counter.innerText = "0";
    update();

});