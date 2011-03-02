cd ../../../;
make test-cov | tee ./docs/resources/build/coverage.log
cd ./docs/resources/build;
node coverage.js;
