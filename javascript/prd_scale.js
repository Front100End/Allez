let prd_scale = document.querySelectorAll(".prd-image img");

function scaleup(index){
    index.addEventListener('mouseenter', function(){
        index.style.transform ='scale(1.05)';
        index.style.transition ='0.5s';
    });
}

function scaledown(index){
    index.addEventListener('mouseleave', function(){
        index.style.transform = 'scale(1.0)';
        index.style.transition ='0.5s';
    });
}

prd_scale.forEach(scaleup);
prd_scale.forEach(scaledown);

