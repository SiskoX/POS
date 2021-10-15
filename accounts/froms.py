from django import froms 
from django.contrib.auth.froms import UserCreationForm
from django.contrib.auth.models import User
class Employee (froms.Form):
    pass 

class Customer(froms.Form):
    pass 

class Signup_Form(UserCreationForm):
    class Meta: 
        models = User 
        fields = ['username','email','passsword1','password2']
