from django.shortcuts import render,redirect
from .models import Query
from .forms import SubmitForm
from django.http import HttpResponse
from django.http import HttpResponseRedirect

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
                 return redirect('varun:index')

             else:
                 return redirect('varun:index')


        else:
            form=SubmitForm()
        return render(request,'varun/varun.html',{
            'form' : form
            })

    #return HttpResponse("<h3>hey</h3>")






















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
