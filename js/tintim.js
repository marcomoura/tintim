$(window).load(function () {
  $('#add').submit(function () {
    $('.hero-unit').hide();
    $('#inventory').show();
    addItem();
    this.reset();
    return false;
  });
});

function addItem() {
  var tr = '<tr><td>'+$('#item').val()+'</td><td><a href="#" rel="tooltip" title="Pre&ccedil;o em '+$('#date').val()+'">R$ '+$('#price').val()+',00</a></td>'+'</tr>';

  $('table').find("tbody").append(tr);
};
