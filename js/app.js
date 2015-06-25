$(document).ready(function(){
  page.init();
});


var page = {

  url: 'http://tiy-fee-rest.herokuapp.com/collections/htmlolarticles',

  init: function() {
    page.initStyling();
    page.initEvents();
  },


  initStyling: function() {
    page.loadSubmissions();
    $('#navbar').show();
  },


  initEvents: function(event) {

    // Sets header height to 100% of window height
    $('header').css('height', $(window).height());

    $('#header-chevron').on('click', function() {
      $('html, body').animate({
          scrollTop: $('main').offset().top
      }, 500);
    });

    // Clicking on HOME link takes you to the top of the page
    $('#navLinkHome').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $('header').offset().top
      }, 500);
    });

    // Clicking on articles list takes you to start of first article
    $('#navLinkArticles').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $('main').offset().top
      }, 500);
    });

    // Submitting the writeForm posts a submission to the server
    $('#writeForm').on('submit', function(e) {
      e.preventDefault();
      var newSubmission = {
        submissionTitle: $('#writeTitle').val(),
        submissionAuthor: $('#writeAuthor').val(),
        submissionAuthorImage: '<img src="../img/me.jpg">',
        submissionType: $('#writeType').val(),
        submissionTime: moment().format('MMMM Do YYYY, h:mm a'),
        submissionContent: $('#writeContent').val()
      }
      $('#writeTitle').val("");
      $('#writeAuthor').val("");
      $('#writeType').val("");
      $('#writeContent').text("");
      page.postSubmission(newSubmission);
    })

  },

  postSubmission: function(newSubmission) {
    $.ajax({
      url: page.url,
      method: 'POST',
      data: newSubmission,
      success: function (data) {
        page.loadSubmissions();
      },
      error: function (err) {
        console.log("error ", err);
      }
    });
  },

  loadSubmissions: function() {
    $.ajax ({
      url: page.url,
      method: 'GET',
      success: function(data) {
        $('#article-wrapper').html("");
        _.each(data, function(el,idx,arr) {
          page.loadTemplate('submission', data[idx], $('#article-wrapper'));
        });
      },
      error: function(err) {
        console.log("error");
      }
    });
  },

  deleteAllSubmissions: function() {
    $.ajax({
      url: page.url,
      method: 'DELETE',
      success: function (data) {
        page.loadSubmissions();
      }
    });
  },

  loadTemplate: function (tmplName, data, $target){
    var compiledTmpl = _.template(page.getTemplate(tmplName));

    $target.append(compiledTmpl(data));
  },

  getTemplate: function(name) {
    return templates[name];
  },

};
