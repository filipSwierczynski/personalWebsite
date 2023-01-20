$('.link').click(function(e){
    e.preventDefault();
  
    if($(this).hasClass('home_link')){
        $('.home_link').addClass('active');
        $('.projects_link').removeClass('active');
        $('.contact_link').removeClass('active');

        $('.home_container').addClass('visible').removeClass('hidden');
        $('.projects_container').addClass('hidden').removeClass('visible');
        $('.contact_container').addClass('hidden').removeClass('visible');
    } else if($(this).hasClass('projects_link')){
        $('.home_link').removeClass('active');
        $('.projects_link').addClass('active');
        $('.contact_link').removeClass('active');

        $('.projects_container').addClass('visible').removeClass('hidden');
        $('.home_container').addClass('hidden').removeClass('visible');
        $('.contact_container').addClass('hidden').removeClass('visible');
    } else if($(this).hasClass('contact_link')){
        $('.home_link').removeClass('active');
        $('.projects_link').removeClass('active');
        $('.contact_link').addClass('active');

        $('.contact_container').addClass('visible').removeClass('hidden');
        $('.home_container').addClass('hidden').removeClass('visible');
        $('.projects_container').addClass('hidden').removeClass('visible');

    }
})
