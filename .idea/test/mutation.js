
function buildMutations() {
    const mutationdiv = document.querySelector(".mutation")
    const mutation = {
        id: 123,
        star rating: 1,
        heuristic score: 0.89,
    }
    for(let i = 0; i < 25; i++) {
        mutationdiv.innerHTML +=
        "<h2>Mutation#" + mutation.id + "</h2>"


    }
}