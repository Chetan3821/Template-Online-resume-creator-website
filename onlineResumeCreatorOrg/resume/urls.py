from django.conf import settings
from django.urls import path 
from resume import views
from django.contrib.auth.views import LogoutView

urlpatterns = [
    path('signup/',views.signup,name='signup'),
    path('signin/',views.signin,name='signin'),
    path('logout/', LogoutView.as_view(next_page=settings.LOGOUT_REDIRECT_URL), name='logout'),
    # path('logout/',views.logout,name='logout'),
    path('',views.index,name='index'),
    path('about/',views.about,name='about'),
    path('contact/',views.contact,name='contact'),
    path('pricing/',views.pricing,name='pricing'),
    path('templates/',views.templates,name='templates'),
    path('templatesedit/',views.templatesedit,name='templatesedit'),
    path('templatesedit2/',views.templatesedit2,name='templatesedit2'),
    path('templatesedit3/',views.templatesedit3,name='templatesedit3'),
    path('faq/',views.faq,name='faq')
]