function toggle_div(id) {
  var e = document.getElementById(id);
  e.style.display = e.style.display != 'none' ? 'none' : 'block';
}
function toggle_div_ctg(id) {
  var e = document.getElementById(id);
  e.style.display = e.style.display != 'none' ? 'none' : 'block';
}
function toggle_div_1(id) {
  var e = document.getElementById(id);
  e.style.display = e.style.display != 'none' ? 'none' : 'block';
}
function toggle_div1_1(id) {
  var e = document.getElementById(id);
  e.style.display = e.style.display != 'none' ? 'none' : 'block';
}
function toggle_div1_2(id) {
  var e = document.getElementById(id);
  e.style.display = e.style.display != 'none' ? 'none' : 'block';
}
function toggle_div1_3(id) {
  var e = document.getElementById(id);
  e.style.display = e.style.display != 'none' ? 'none' : 'block';
}
function toggle_div1_4(id) {
  var e = document.getElementById(id);
  e.style.display = e.style.display != 'none' ? 'none' : 'block';
}
function toggle_div1_5(id) {
  var e = document.getElementById(id);
  e.style.display = e.style.display != 'none' ? 'none' : 'block';
}
function toggle_div1_6(id) {
  var e = document.getElementById(id);
  e.style.display = e.style.display != 'none' ? 'none' : 'block';
}
function toggle_div1_7(id) {
  var e = document.getElementById(id);
  e.style.display = e.style.display != 'none' ? 'none' : 'block';
}
function toggle_div1_8(id) {
  var e = document.getElementById(id);
  e.style.display = e.style.display != 'none' ? 'none' : 'block';
}
function toggle_div1_9(id) {
  var e = document.getElementById(id);
  e.style.display = e.style.display != 'none' ? 'none' : 'block';
}
function toggle_div1_10(id) {
  var e = document.getElementById(id);
  e.style.display = e.style.display != 'none' ? 'none' : 'block';
}
function toggle_div1_11(id) {
  var e = document.getElementById(id);
  e.style.display = e.style.display != 'none' ? 'none' : 'block';
}
function toggle_div1_12(id) {
  var e = document.getElementById(id);
  e.style.display = e.style.display != 'none' ? 'none' : 'block';
}
function toggle_div1_13(id) {
  var e = document.getElementById(id);
  e.style.display = e.style.display != 'none' ? 'none' : 'block';
}
function toggle_div1_14(id) {
  var e = document.getElementById(id);
  e.style.display = e.style.display != 'none' ? 'none' : 'block';
}
function toggle_div1_15(id) {
  var e = document.getElementById(id);
  e.style.display = e.style.display != 'none' ? 'none' : 'block';
}
function toggle_div1_16(id) {
  var e = document.getElementById(id);
  e.style.display = e.style.display != 'none' ? 'none' : 'block';
}

function toggle_div2(id) {
  var e = document.getElementById(id);
  e.style.display = e.style.display != 'none' ? 'none' : 'block';
}
function toggle_div3(id) {
  var e = document.getElementById(id);
  e.style.display = e.style.display != 'none' ? 'none' : 'block';
}
function toggle_div3_1(id) {
  var e = document.getElementById(id);
  e.style.display = e.style.display != 'none' ? 'none' : 'block';
}
function toggle_div3_2(id) {
  var e = document.getElementById(id);
  e.style.display = e.style.display != 'none' ? 'none' : 'block';
}
function toggle_div3_3(id) {
  var e = document.getElementById(id);
  e.style.display = e.style.display != 'none' ? 'none' : 'block';
}
function toggle_div3_4(id) {
  var e = document.getElementById(id);
  e.style.display = e.style.display != 'none' ? 'none' : 'block';
}
function toggle_div3_5(id) {
  var e = document.getElementById(id);
  e.style.display = e.style.display != 'none' ? 'none' : 'block';
}

/* 이미지 불러오기 */
{
  function setThumbnail(event) {
    var reader = new FileReader();

    reader.onload = function(event) {
      var img = document.createElement("img");
      img.setAttribute("src", event.target.result);
      document.querySelector("div#image_container").appendChild(img);
    };

    reader.readAsDataURL(event.target.files[0]);
  }
}

