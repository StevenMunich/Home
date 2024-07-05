
    function getTheme () {
        function changeTheme(themeUrl) { 
          var elm = document.getElementById("style");
          elm && elm.remove();
    
          var newCss = document.createElement("link");
          newCss.id = "style";
          newCss.rel = "stylesheet";
          newCss.type = "text/css";
          newCss.href = themeUrl;
          document.head.appendChild(newCss);
		  
        }
		
        var index = document.getElementById("select").selectedIndex;
        switch (index) {
            case 0: 
              changeTheme('css/lava.css?' + Math.random());
			  localStorage.setItem("b0", "0");
              break;
            case 1: 
              changeTheme('css/space.css?' + Math.random());
			  localStorage.setItem("b0", "1");
              break;
            case 2: 
              changeTheme('css/winter.css?' + Math.random());
			  localStorage.setItem("b0", "2");
              break;
            case 3: 
              changeTheme('css/ocean.css?' + Math.random());
			  localStorage.setItem("b0", "3");
              break;
            case 4: 
              changeTheme('css/garden.css?' + Math.random());
			  localStorage.setItem("b0", "4");
              break;
            case 5: 
              changeTheme('css/moon.css?' + Math.random());
			  localStorage.setItem("b0", "5");
              break;
              case 6: 
              changeTheme('css/space.css?' + Math.random());
			  localStorage.setItem("b0", "7");
              break;
            default:
              changeTheme('css/space.css?' + Math.random());
              break;
        }
        setTimeout(function() {
            document.getElementById('game-area').focus();
        }, 10);
    }