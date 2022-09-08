M.AutoInit();//Initiliazie all materialize behaviours

const slider = document.querySelector('.slider');
M.Slider.init(slider,{
    indicators:false,
    height:500,
    transition:500,
    interval:600
})

// autocomplete
 const ac = document.querySelector('.autocomplete');
 M.Autocomplete.init(ac,{
     data:{
         "Aruba":null, 
         "Cancun Mexico":null,
         "Hawaii":null,
         "Florida":null,
         "California":null,
         "Jamacia":null,
         "Europe":null,
     }
 })

// //  materialbox

// const mb = document.querySelectorAll('.materialboxed');
// M.Materialbox.init(mb,{});