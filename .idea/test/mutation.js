
function buildMutations() {
    const mutationdiv = document.querySelector(".mutation")
    const mutation = {
        id: 123,
        star_rating: 1,
        heuristic_score: 0.89,
    }
    for(let i = 0; i < 25; i++) {
        mutationdiv.innerHTML +=
        "<h2>Mutation#" + Math.random() + "</h2>"
        +"<div class='rating-stars-wrapper'>" + "<input type='radio' name='rating-stars' value='5' id='id-5'>"
        + "<label for='id-5'></label>"
        + "<input type='radio' name='rating-stars' value='4' id='id-4'>"
        + "<label for='id-4'></label>"
        + "<input type='radio' name='rating-stars' value='3' id='id-3'>"
        + "<label for='id-3'></label>"
        + "<input type='radio' name='rating-stars' value='2' id='id-2'>"+ "<label for='id-2'></label>"
        + "<input type='radio' name='rating-stars' value='1' id='id-1'>"+ "<label for='id-1'></label>"

            "</div>"



    }
}