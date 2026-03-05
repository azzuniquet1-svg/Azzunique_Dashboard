document.getElementById("fundForm").addEventListener("submit", function(e){
    e.preventDefault();

    alert("Fund Request Submitted Successfully!");

    this.reset();
});
