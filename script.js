const start = document.querySelector('#start'),
      stop = document.querySelector('#stop'),
      timers = document.querySelector('#timers'),
      ti = document.querySelector('#ti');
///////////////////////////
      let x = ()=>{
         let d = new Date();
         let h = d.getHours();
         let m = d.getMinutes();
         let s = d.getSeconds();
         s = s<10 ? '0'+s : s;
         m = m<10 ? '0'+m : m;
         timers.textContent = h+':'+m+':'+s;
      }
      setInterval(x,1000)
//////////////////////////

    