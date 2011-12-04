from django.conf.urls.defaults import patterns, include, url

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

from upload.views import home, done, logout, error

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'my_music_in_cloud.views.home', name='home'),
    #url(r'^my_music_in_cloud/', include('my_music_in_cloud.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', home, name='home'),
    url(r'^done/$', done, name='done'),
    url(r'^error/$', error, name='error'),
    url(r'^logout/$', logout, name='logout'),
    url(r'', include('social_auth.urls')),
)
