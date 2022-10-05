from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
from django.contrib import messages
from .models import contact_info


# Create your views here.
def index(request):
    return render(request,'index.html')

def about(request):
    return render(request,'about.html')    

def contact(request):
    if request.method=='POST':
        name=request.POST.get('name')
        email=request.POST.get('email')
        subject=request.POST.get('subject')
        message=request.POST.get('message')
        info=contact_info.objects.create(name=name,email=email,subject=subject,message=message)
        info.save()
    return render(request,'contact.html') 

def pricing(request):
    return render(request,'pricing.html')        

def templates(request):
    return render(request,'templates.html')  

def templatesedit(request):
    return render(request,'template-edit.html') 

def templatesedit2(request):
    return render(request,'template-edit-2.html')   

def templatesedit3(request):
    return render(request,'template-edit-3.html') 

def faq(request):
    return render(request,'faq.html')                  

def signup(request):
    if request.method =="POST":
        uname=request.POST.get("user")
        email=request.POST.get("email")
        password=request.POST.get("password")
        confirmpassword=request.POST.get("confirmpassword")

        if password!=confirmpassword:
           messages.warning(request,"Password is Incorrect")
           return redirect('signup')

        try:
            if User.objects.get(username=uname):
             messages.info(request,"Username is Taken")  
             return redirect('signup')
        except:
            pass

        try:
            if User.objects.get(email=email):
             messages.info(request,"Email is Taken")  
             return redirect('signup')  
        except:
            pass

        myuser=User.objects.create_user(username=uname,email=email,password=password)
        myuser.save()
        messages.info(request,"SignUp Successful Please Login ")  
        return redirect('signin')

    return render(request,'signup.html')   

def signin(request):
      if request.method =="POST":
        email=request.POST.get("loginemail") 
        password=request.POST.get("loginpassword")
        try:
            user=User.objects.get(email=email)
            uname=user.get_username()
        except:
            return redirect('signin')


        myuser=authenticate(username = uname ,password = password) 
        if myuser is not None:
            login(request,myuser)
            messages.success(request,"Login Successful ")
            return redirect('/')
        else:
            messages.error(request,"Invalid Credentials")
            return redirect('signin')
               
        
      return render(request,'signin.html') 

def logoutuser(request):
    logout(request)
    messages.info(request,"Logged out Successfully !")
    return redirect('index')