$(document).ready(function(){
  $("#hide").click(function(){
    $("p").hide(5000);
  });
  $("#show").click(function(){
    $("p").show(5000);
  });
});



$(document).ready(function(){
  let h3 = $('h3')
  console.log(h3.text())
})

$(document).ready(function(){
  let p = $('p')
  console.log(p.text())
})

