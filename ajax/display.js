function r(){
    // var named=localStorage.getItem('name');
    // console.log(JSON.parse(named));
    // let dat=localStorage.getItem('name');
    
    // console.log(dat);
    // let x=document.getElementById("name");
    // x.text(dat);
    document.getElementById("name").innerHTML = localStorage.getItem("name");
}