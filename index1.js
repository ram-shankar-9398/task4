function myfunction()
{
  var table=document.getElementById("mytable")
  var row=table.insertRow();
  var cell=row.insertCell();
  var cell1=row.insertCell();
  var cell2=row.insertCell();
  
  var cell3=row.insertCell();
  
  var cell4=row.insertCell();
  
  var cell5=row.insertCell();

    var cell6=row.insertCell();

    var cell7=row.insertCell();

  cell.innerHTML=document.getElementById("one").value;
  cell1.innerHTML=document.getElementById("two").value;
  cell2.innerHTML=document.getElementById("three").value;
  
  cell3.innerHTML=document.getElementById("four").value;
if(document.getElementById('five').checked == true)   
    {
  cell4.innerHTML=document.getElementById("five").value;
    }
  else{
  cell4.innerHTML=document.getElementById("six").value;
  }
  var ele=[]
              var biriyani = document.getElementById("checkbox1")
              if(biriyani.checked){
                    ele.push(biriyani.value);
             }
             var idly = document.getElementById("checkbox2")
              if(idly.checked){
                    ele.push(idly.value);
             }
             var poori = document.getElementById("checkbox3")
              if(poori.checked){
                    ele.push(poori.value);
             }
  var parotta = document.getElementById("checkbox4")
              if(parotta.checked){
                    ele.push(parotta.value);
             }
  var dosa = document.getElementById("checkbox5")
              if(dosa.checked){
                    ele.push(dosa.value);
             }
               if(ele.length>=2){
                cell5.innerHTML = ele;
               }
               else{
                  alert("Please select atleast two out of five");
               }
   var e = document.getElementById("country");
                var strUser = e.options[e.selectedIndex].value;

                var strUser1 = e.options[e.selectedIndex].text;
                if(strUser==0)
                {
                    alert("Please select a user");
                }
              else
                {
                  console.log(strUser1);
                                              cell6.innerHTML=strUser1;

                  
                }
   var e1 = document.getElementById("state");
                var str = e1.options[e1.selectedIndex].value;

                var str1 = e1.options[e1.selectedIndex].text;
                if(str==0)
                {
                    alert("Please select a user");
                }
              else
                {
                  console.log(str1);
                                              cell7.innerHTML=str1;

                  
                }
            
  
}
