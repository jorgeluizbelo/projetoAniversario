AOS.init();const e=new Date("Jun 4, 2025 08:00:00").getTime(),t=setInterval(function(){let n=e-new Date().getTime(),o=Math.floor(n/864e5),a=Math.floor(n%864e5/36e5),r=Math.floor(n%36e5/6e4),l=Math.floor(n%6e4/1e3);document.getElementById("contador").innerHTML=`${o}d ${a}h ${r}m ${l}s`,n<0&&(clearInterval(t),document.getElementById("contador").innerHTML="A Festa já começou!!!!")},1e3);
//# sourceMappingURL=index.c942d690.js.map