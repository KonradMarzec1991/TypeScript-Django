from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path
from article.views import ArticleListView, ArticleDetailView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('articles/', ArticleListView.as_view()),
    path('articles/<str:pk>/', ArticleDetailView.as_view()),

]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
