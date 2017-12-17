from django.shortcuts import render,redirect
from .models import Query
from .forms import SubmitForm
from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.contrib import messages
# Create your views here.
def index(request):
    form=SubmitForm()
    return render(request,'varun/varun.html',{'form' : form})


def SubmitView(request):
        form=SubmitForm()
        if request.method == 'POST':
             form=SubmitForm(request.POST)
             if form.is_valid():
                 name=request.POST.get('name')
                 email=request.POST.get('email')
                 question=request.POST.get('question')
                 city=request.POST.get('city')
                 query_obj=Query(name=name,email=email,question=question,city=city)
                 query_obj.save()
                 messages.success(request , 'Thanks. Your response has been submitted')
                 return redirect('varun:thank_you')

             else:
                 messages.error(request, 'Oops! There has been a problem Kindly check data')
                 return redirect('varun:error')


        else:
            form=SubmitForm()
        return render(request,'varun/varun.html',{
            'form' : form
            })

    #return HttpResponse("<h3>hey</h3>")

def ThankView(request):
    return render(request,'varun/thank_you.html')

def ErrorView(request):
    return render(request,'varun/error.html')


















'''

def SubmitView(request):
    if request.method=="POST":
        qr=Query()
        qr.name=request.POST.get('name')
        qr.email=request.POST.get('email')
        qr.question=request.POST.get('question')
        qr.city=request.POST.get('city')
        qr.save()
    return HttpResponseRedirect(reverse('varun:index'))

    #        form=SubmitForm(request.POST)
    #    if form.isvalid():
    """
            name=request.POST.get('name')
            email=request.POST.get('email')
            question=request.POST.get('question')
            city=request.POST.get('city')
            query_obj=Query(name=name,email=email,question=question,city=city)
            query_obj.save()
    """

#    else:
#        form=SubmitForm()

#    return render(request,'varun/form.html',{
#    'form' : form
#    })
'''

'''
def SubmitView(request):
    if request.method == 'POST':
        form=SubmitForm(request.POST)
        if form.is_valid():

            return HttpResponseRedirect('varun:index')

    else:
        form=SubmitForm()
        return render(request, 'varun/varun.html', {'form': form})
'''
'''
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            question = form.cleaned_data['question']
            city = form.cleaned_data['city']
            query_obj=Query(name=name,email=email,question=question,city=city)   '''
