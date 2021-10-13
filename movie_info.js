
let data=["https://images.pexels.com/photos/7991186/pexels-photo-7991186.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
"https://images.pexels.com/photos/269140/pexels-photo-269140.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
"https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
"https://images.pexels.com/photos/2095594/pexels-photo-2095594.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
];

let interval=setInterval(function(){
slide_show(data);
},3000)

let slide=document.getElementById('slide');  
slide.innerHTML=null;
let image=document.createElement('img');
image.src=data[0];
slide.append(image);

let c=1;
function slide_show(data){

let slide=document.getElementById('slide');  
slide.innerHTML=null;
let image=document.createElement('img');
if(c==4){
c=0;
}
image.src=data[c++];
slide.append(image);

}



function show_movie(){
let parent=document.getElementById('inpt').value;
if(parent.length>2){
movie(parent);
}
}


function movie(movie_data){
fetch(` http://www.omdbapi.com/?s=${movie_data}&apikey=fb047dca`)
.then((res)=>{
return res.json();
})
.then((res)=>{
//console.log(res);
append_movie(res);
})
.catch((e)=>{
error();
})
}
function error(){
let err=document.getElementById('err');
err.innerHTML=null
let h3=document.createElement('h3')
h3.innerText="movie not found";
//   h3.style.color="red";
err.append(h3);


}

function append_movie(res){
let data=res.Search;
console.log(data);
let main=document.getElementById('container');
main.innerHTML=null
data.forEach(function(el){
let err=document.getElementById('err');
err.innerHTML=null

let slide=document.getElementById('slide');  
slide.innerHTML=null;
clearInterval(interval);


let div=document.createElement('div');
let name=document.createElement('h3');
name.innerText=el.Title;
let year=document.createElement('h3');
year.innerText=el.Year;
let imdb=document.createElement('h3');
let type=document.createElement('h3');
type.innerText=el.Type;
let poster=document.createElement('img');
poster.src=el.Poster;
div.append(poster,name,year);
main.append(div);

})
}