# get request to Unsplash API to get random images for background images

curl "https://api.unsplash.com/photos/random?client_id=${imgID}" \
  --include \
  --request GET \

echo
