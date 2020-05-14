const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change',()=>
{
    document.body.classList.toggle("dark");
    document.querySelector('.container').classList.toggle("dark");
    document.querySelector('.text').classList.toggle("dark");
    document.querySelector('.title').classList.toggle("dark");
    
});