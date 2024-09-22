let btn = document.getElementById('btnCount');

btn.addEventListener( 'click', () =>{
    let heading = document.getElementsByTagName('h2');
    alert(`The number of H2 tags : ${heading.length}`);
});