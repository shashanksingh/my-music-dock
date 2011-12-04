echo "###################################"
echo "running stream encoding engine"
python streamEncoder/main.py &
echo "###################################"
echo "running Web UI"
cd myMusicInCloud
python manage.py runserver 8080
echo "###################################"
