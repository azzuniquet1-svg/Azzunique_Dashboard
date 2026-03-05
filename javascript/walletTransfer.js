document.getElementById("transferForm").addEventListener("submit", function(e){
    e.preventDefault();

    alert("Wallet Transfer Successful!");

    this.reset();
});
