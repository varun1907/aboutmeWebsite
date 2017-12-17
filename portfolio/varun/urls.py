from django.conf.urls import url
from . import views

app_name='varun'


urlpatterns = [
    url(r'^$',views.index,name='index'),
    url(r'^submit_form/add/$',views.SubmitView,name='submit_form'),
    url(r'^thank_you/$',views.ThankView,name='thank_you'),
    url(r'^error/$',views.ErrorView,name='error'),

]
