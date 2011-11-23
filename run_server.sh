echo "###################################"
echo "running stream encoding engine"
python streamEncoder/main.py &
echo "###################################"
echo "running Web UI"
python myMusicInCloud/manage.py runserver 8080
echo "###################################"
