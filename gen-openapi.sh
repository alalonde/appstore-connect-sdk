npx openapi-generator-cli generate \
  -i ./app_store_connect_api_2.3_openapi.json \
  -o src/openapi2 \
  -g typescript-fetch \
  --additional-properties=supportsES6=true \
  --skip-validate-spec
