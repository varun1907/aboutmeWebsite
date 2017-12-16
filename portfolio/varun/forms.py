from django import forms


class SubmitForm(forms.Form):
    name      = forms.CharField(label='name',max_length=50,widget=forms.TextInput(
                 attrs={
                     'class' : 'form-control',
                     'placeholder':'Name'
                 }
    ))
    email     = forms.EmailField(label='email',max_length=50,widget=forms.EmailInput(
                 attrs={
                     'class' : 'form-control',
                     'placeholder':'Email'
                 }
    ))
    question  = forms.CharField(label='question',max_length=50,widget=forms.TextInput(
                 attrs={
                     'class' : 'form-control',
                     'placeholder':'Question'
                 }
    ))
    city      = forms.CharField(label='city',max_length=50,widget=forms.TextInput(
                 attrs={
                     'class' : 'form-control',
                     'placeholder':'City'
                 }
    ))
