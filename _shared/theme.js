(function(){
  const qs=new URLSearchParams(location.search);
  const theme=qs.get("theme");
  if(theme==="light"){ document.documentElement.classList.add("light"); }
})();
