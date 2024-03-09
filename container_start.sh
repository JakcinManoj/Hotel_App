#!/bin/bash
docker run -d -p 9003:9003 --name style_guide shubhamchau/styleguide_front:v1
docker run -d -p 9001:9001 --name auth_helper_front shubhamchau/auth_helper_front:v1
docker run -d -p 9000:9000 --name root_config shubhamchau/root_config_front:v1
docker run -d -p 9005:9005 --name food_front shubhamchau/food_front:v1
docker run -d -p 9002:9002 --name auth shubhamchau/auth_front:v1
docker run -d -p 9004:9004 --name api_front shubhamchau/api_front:v1
docker run -d -p 4002:4002 --name food_backend shubhamchau/foods_service:v1
docker run -d -p 4001:4001 --name user_sers shubhamchau/users_ser:v1
docker run -d -p 4000:4000 --name gateway_sers shubhamchau/gateway_ser:v1
