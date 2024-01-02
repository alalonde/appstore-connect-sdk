npx openapi-generator-cli generate \
  -i ./local/app_store_connect_api_3.1_openapi.json \
  -o src/openapi \
  -g typescript-fetch \
  --additional-properties=supportsES6=true \
  --skip-validate-spec
