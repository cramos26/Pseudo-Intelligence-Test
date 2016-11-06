var totaltries = 0;
var totalpoints = 0;


function checkfirst()
{
  var userfirstanswer;
  userfirstanswer = document.getElementById("firstproblem").value;
  if (isNaN(userfirstanswer) == true)
  { alert("Only numerical answers are accepted!")}
  else if (userfirstanswer == 10)
  { totalpoints++;
  setCookie("totalpoints",totalpoints, 1)
  alert("Correct fam!")}
  else
  { totaltries ++;
  setCookie("totaltries", totaltries, 1)
  alert("What a scrub!")}
}

    function checksecond()
    {
      var totaltries = getCookie("totaltries");
      var totalpoints = getCookie("totalpoints")
      var usersecondanswer;
      usersecondanswer = document.getElementById("secondproblem").value;
      if (isNaN(usersecondanswer) == true)
      { alert("Only numerical answers are accepted!")}
      else if (usersecondanswer == 10)
      { totalpoints++;
      setCookie("totalpoints",totalpoints, 1)
      alert("Correct fam!")}
      else
      { totaltries ++;
      setCookie("totaltries", totaltries, 1)
      alert("What a scrub!")}

    }

        function checkthird()
        {
          var totaltries = getCookie("totaltries");
          var totalpoints = getCookie("totalpoints")
          var userthirdanswer;
          userthirdanswer = document.getElementById("thirdproblem").value;
          if (isNaN(userthirdanswer) == true)
          { alert("Only numerical answers are accepted!")}
          else if (userthirdanswer == 10)
          { totalpoints++;
          setCookie("totalpoints",totalpoints, 1)
          alert("Correct fam!")}
          else
          { totaltries ++;
          setCookie("totaltries", totaltries, 1)
          alert("What a scrub!")}
        }

            function calculatepercentage()
            {
              var totaltries = getCookie("totaltries");
              var totalpoints = getCookie("totalpoints")
              var totalpercentage = (totalpoints / totaltries) * 100;
              document.getElementById("finalcount").innerHTML = totalpercentage + "%";
            }

            function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            var expires = "expires="+d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
            }

            function getCookie(cname)
            {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
            c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
            }
            }
            return "";
            }
