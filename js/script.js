function VWToPX(value) {
    var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight|| e.clientHeight|| g.clientHeight;
  
    var result = (x*value)/100;
    document.getElementById("convertingResult").innerHTML = result; 
    return result;
  }
