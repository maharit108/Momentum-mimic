# get request to  Open Weather API to get current weather of given city.

curl "api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiID}" \
  --include \
  --request GET \

echo
