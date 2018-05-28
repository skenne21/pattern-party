$('.tab-list').hide();
$('.tab-1').show();

$('.tabs-nav').on('click', function(e) {
  e.preventDefault();
  const target = '#' + $(this).attr('href');
  const siblings = $(this).closest('a').siblings().removeClass('active-tab')
  // $('.tabs-nav').removeClass('active-tab');
  const tabs = $('.tab-list');
  $(this).addClass('active-tab');
  $(tabs).hide();
  $(target).show()   
})

$('.tabs-nav2').on('click', function(e) {
  e.preventDefault();
  const target = '#' + $(this).attr('href');
  const siblings = $(this).closest('a').siblings().removeClass('active-tab')
  // $('.tabs-nav').removeClass('active-tab');
  const tabs = $('.tab-list');
  $(this).addClass('active-tab');
  $(tabs).hide();
  $(target).show()   
})


const showDropDown = () => {
  $("#dropdown").toggle("show");
}


 
