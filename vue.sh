cd video
docker-compose down
cd ..

rm -rf video-backend
git clone https://github.com/mumeinosato/video.git

cd video
docker-compose up --build