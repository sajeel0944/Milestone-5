

let myname = localStorage.getItem("name");

window.addEventListener('load',()=>{

    let desig=localStorage.getItem("desig");
    let phone=localStorage.getItem("phone");
    let email=localStorage.getItem("email");
    let add=localStorage.getItem("add");
    let pass1=localStorage.getItem("pass1");
    let deg=localStorage.getItem("deg");
    let uni=localStorage.getItem("uni");
    let pass2=localStorage.getItem("pass2");
    let deg2=localStorage.getItem("deg2");
    let uni2=localStorage.getItem("uni2");
    let skill1=localStorage.getItem("skill1");
    let skill2=localStorage.getItem("skill2");
    let skill3=localStorage.getItem("skill3");
    let lang=localStorage.getItem("lang");
    let lang2=localStorage.getItem("lang2");
    let styear=localStorage.getItem("styear");
    let endyear=localStorage.getItem("endyear");
    let company=localStorage.getItem("company");
    let comlocation=localStorage.getItem("comlocation");
    let jobtitle=localStorage.getItem("jobtitle");
    let achv1=localStorage.getItem("achv1");
    let achv2=localStorage.getItem("achv2");
    let achv3=localStorage.getItem("achv3");
    let picture=localStorage.getItem("profile_pic");
    
    let resname:any=document.getElementById('resname')
    resname.textContent=myname

    let resdesign:any=document.getElementById('resdesign')
    resdesign.textContent=desig
    
    let resphone:any=document.getElementById('resphone')
    resphone.textContent=phone
    
    let resemail:any=document.getElementById('resemail')
    resemail.textContent=email
    
    let resadress:any=document.getElementById('resadress')
    resadress.textContent=add
    
    let respass:any=document.getElementById('respass')
    respass.textContent=pass1
    
    let resdeg:any=document.getElementById('resdeg')
    resdeg.textContent=deg
    
    let resins:any=document.getElementById('resins')
    resins.textContent=uni
    
    let respass2:any=document.getElementById('respass2')
    respass2.textContent=pass2
    
    let resdeg2:any=document.getElementById('resdeg2')
    resdeg2.textContent=deg2
    
    let resins2:any=document.getElementById('resins2')
    resins2.textContent=uni2
    
    let resskill1:any=document.getElementById('resskill1')
    resskill1.textContent=skill1
    
    let resskill2:any=document.getElementById('resskill2')
    resskill2.textContent=skill2
    
    let resskill3:any=document.getElementById('resskill3')
    resskill3.textContent=skill3
    
    let reslang1:any=document.getElementById('reslang1')
    reslang1.textContent=lang
    
    let reslang2:any=document.getElementById('reslang2')
    reslang2.textContent=lang2
    
    let resstartyear:any=document.getElementById('resstartyear')
    resstartyear.textContent=styear
    
    let resendyear:any=document.getElementById('resendyear')
    resendyear.textContent=endyear
    
    let rescompany:any=document.getElementById('rescompany')
    rescompany.textContent=company
    
    let rescompanylocation:any=document.getElementById('rescompanylocation')
    rescompanylocation.textContent=comlocation
    
    let resjobtitle:any=document.getElementById('resjobtitle')
    resjobtitle.textContent=jobtitle
    
    let resach1:any=document.getElementById('resach1')
    resach1.textContent=achv1

    let resach2:any=document.getElementById('resach2')
    resach2.textContent=achv2

    let resach3:any=document.getElementById('resach3')
    resach3.textContent=achv3

    let resimg:any=document.getElementById('resimg')
    resimg.src=picture
    
})



let print_btn=document.getElementById('print_btn')

print_btn?.addEventListener('click',()=>{
    window.print()
})


let edit_btn=document.getElementById('edit_btn')

edit_btn?.addEventListener("click",()=>{
    window.history.back()
})


let share_btn=document.getElementById('share_btn');
let anc=document.getElementById('anc')
let username;

if(myname){
    username=myname.toLowerCase().replace(/\s+/g,"-")
}else{
    username="user"
}

let baseurl="file:///C:/Users/pc/Desktop/html/Hackathon/resume/Milestone%2005/resume/index.html"
let uniqueurl=`${baseurl}?/${myname}`


share_btn?.addEventListener("click",()=>{
    anc?.setAttribute("href",uniqueurl)

})




let copy_btn=document.getElementById('copy_btn');

copy_btn?.addEventListener("click",()=>{
    navigator.clipboard.writeText(uniqueurl).then(()=>{
        alert("copy succfull")
    });
})

