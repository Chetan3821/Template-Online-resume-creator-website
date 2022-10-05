// for dynamically adding Work Experience Field
function addNewEField(){
    let newnode = document.createElement('textarea');
    newnode.classList.add('form-control');
    newnode.classList.add('weField');
    newnode.classList.add('mt-2');
    newnode.setAttribute("rows",3);
    newnode.setAttribute('placeholder','Enter Your Work Experience Here')
    
     let weOb = document.getElementById("we");
     let weAddbuttonOb=document.getElementById("weAddbutton");
 
     weOb.insertBefore(newnode,weAddbuttonOb);
 }
 
 // for dynamically adding Academic Qualification Field
 function addNewAqField(){
     let newnode = document.createElement('textarea');
     newnode.classList.add('form-control');
     newnode.classList.add('eqField');
     newnode.classList.add('mt-2');
     newnode.setAttribute("rows",3);
     newnode.setAttribute('placeholder','Enter Your Academic Qualification Here')
     
      let aqOb = document.getElementById("aq");
      let aqAddbuttonOb=document.getElementById("aqAddbutton");
  
      aqOb.insertBefore(newnode,aqAddbuttonOb);   
 }
 
 // for dynamically adding Hobbies Field
 function addNewhoField(){
     let newnode = document.createElement('input');
     newnode.classList.add('form-control');
     newnode.classList.add('hoField');
     newnode.classList.add('mt-2');
     newnode.setAttribute("rows",1);
     newnode.setAttribute('placeholder','Enter Your Hobbies Here')
     
      let hoOb = document.getElementById("ho");
      let hoAddbuttonOb=document.getElementById("hoAddbutton");
  
      hoOb.insertBefore(newnode,hoAddbuttonOb);
  }

 // for dynamically adding Skills Field
  function addNewSkillField(){
    let newnode = document.createElement('input');
    newnode.classList.add('form-control');
    newnode.classList.add('skillField');
    newnode.classList.add('mt-2');
    newnode.setAttribute("rows",1);
    newnode.setAttribute('placeholder','Enter Your Skill Here')
    
     let skillOb = document.getElementById("skills");
     let skillAddbuttonOb=document.getElementById("skillAddbutton");
 
     skillOb.insertBefore(newnode,skillAddbuttonOb);
 }

 
 // generating Resume
 function generateResume(){
 
     // for changing name
 
    let nameField = document.getElementById("nameField").value;
     // accesing the element and dynamically changing it
    document.getElementById("nameT1").innerHTML = nameField;
    document.getElementById("nameT2").innerHTML = nameField;
 
     // for changing Contact
     document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;   
 
     // for changing address 
     document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;   
 
     // for changing links
     
     document.getElementById("ldT").innerHTML = document.getElementById("ldField").value;
     document.getElementById("igT").innerHTML = document.getElementById("soclinkField").value;
     document.getElementById("ghT").innerHTML = document.getElementById("gitField").value;
 
     // for changing objective
     document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;
 
     // for changing Work Experience
     let wes = document.getElementsByClassName('weField');
     let str="";
     for(let e of wes){
         str = str + `<li> ${e.value}</li>`;
     }
     document.getElementById("weT").innerHTML = str;
 
     // for changing Academic Qualification
     let aqs = document.getElementsByClassName('eqField');
     let str1="";
     for(let e of aqs){
         str1 = str1 + `<li> ${e.value}</li>`;
     }
     document.getElementById("aqT").innerHTML = str1;
 
       // for changing Hobbies
       let hob = document.getElementsByClassName('hoField');
       let str2="";
       for(let e of hob){
           str2 = str2 + `<li> ${e.value}</li>`;
       }
       document.getElementById("hoT").innerHTML = str2;

        // for changing Skills
        let skillOb = document.getElementsByClassName('skillField');
        let str3="";
        for(let e of skillOb){
            str3 = str3 + `<li> ${e.value}</li>`;
        }
        document.getElementById("skillT").innerHTML = str3;
 
     //   code for setting image
 
       let file = document.getElementById("imgField").files[0];
       let reader = new FileReader()
       reader.readAsDataURL(file);
 
     // set the image to template
     
     reader.onloadend = function(){ 
     document.getElementById('imgT').src = reader.result;
 }   
       document.getElementById("resume-form").style.display='none';
       document.getElementById("resume-template").style.display='block';
 } 
 
 function DownloadResume(){
    let dB = document.getElementById('downloadButton')
    dB.style.display = 'none';
    window.print();
 }
 
 
 