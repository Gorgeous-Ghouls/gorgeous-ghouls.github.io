window.addEventListener('load', function () {
  const ids = [
      '338947895665360898',
      '799984147908657203',
      '772033037788905482',
      '745938887700119623',
      '869658852432441355'
  ];

  ids.forEach(async function(elem, index){
      const loc = new URL(window.document.location)
      let hostname = loc.hostname,
      guild_id = "998810232224493568";

      if (loc.hostname === "0.0.0.0"){
          guild_id = "829265067073339403";
      }
      await fetch(`http://${hostname}:5000/user/?id=${elem}&guild_id=${guild_id}`).then(
          resp => resp.json().then(json => {
              if(json['status']) {
                  const item = document.getElementById(elem);
                  if (item) {
                      let status = json['message'];
                      let img_tag = document.createElement('img')
                      img_tag.width = 15
                      if (status === "online" ) {
                          img_tag.src = `static/images/${status}.webp`;
                          img_tag.alt = "Online"
                      } else {
                          if (status !== "idle"){
                              img_tag.src = 'static/images/dnd.webp';
                              img_tag.alt = 'offline'
                          } else {
                              img_tag.src = 'static/images/idle.webp';
                              img_tag.alt = 'idle'
                          }
                      }
                      item.appendChild(img_tag)
                  }
              }
          })
      )
  })
})