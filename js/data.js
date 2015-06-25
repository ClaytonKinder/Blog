

var templates = {};

templates.submission = [
  '<article>',
    '<div class="article-title">',
      '<h2><%= submissionTitle %></h2>',
    '</div>',
    '<div class="article-content">',
    '<%= submissionContent %>',
    '</div>',
    '<div class="article-author-block">',
      '<div class="article-author-image">',
        '<img src="img/me.jpg">',
      '</div>',
      '<div class="article-author-info">',
        '<span class="article-author-name"><%= submissionAuthor %></span>',
        ' | ',
        '<span class="article-author-category"><%= submissionType %></span>',
        ' | ',
        '<span class="article-author-date"><%= submissionTime %></span>',
      '</div>',
    '</div>',
  '</article>'
].join("");
