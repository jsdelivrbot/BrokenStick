
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('../src/index.html', { title: 'Cookbook' });
};
