var searchFieldEnabled = false;
var searchFieldOnNavbarEnabled = false;


$(document).ready(function(){
    $(".search-btn").click(toggleSearchField);
    $(".search-btn-on-navbar").click(toggleSearchFieldOnNavbar);

    $(".popular-categories a").click(function (e){
        e.preventDefault();
    })

    $(".footer_cat").click(function (e){
        e.preventDefault();
    });

    $(".link-disabled").click(function(e){
        e.preventDefault();
    });
})

function toggleSearchField(){
    let search = $("#search-input");

    // search.toggle();
    if(searchFieldEnabled)
        search.fadeOut();
    else
        search.fadeIn();

    searchFieldEnabled = !searchFieldEnabled;
}

function toggleSearchFieldOnNavbar() {
    let search = $("#search-input-on-navbar");

    // search.toggle();
    if(searchFieldOnNavbarEnabled)
        search.fadeOut();
    else
        search.fadeIn();

    searchFieldOnNavbarEnabled = !searchFieldOnNavbarEnabled;

}
