M.AutoInit();

$(function () {
    $('.slider').slider({
        interval: 6000,
        height: 500,
        indicators: false,
        transition: 500


    });

    const ac = $('.autocomplete');
    M.Autocomplete.init(ac,{
        data:{
            "Aruba": null,
            "Hawaii": null,
            "Europe": null,
            "Lagos": null,
            "Florida": null,
            "California": null,
            "Jamacia": null
        }
    })

});