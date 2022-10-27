# Must have `sentry-cli` installed globally
# Following variables must be passed in

SENTRY_AUTH_TOKEN=a6a252ab57074b0e8f604c63bdab34b855b506af16f64c65b8129c4dabee0852
SENTRY_ORG=bridge-tech-labs
SENTRY_PROJECT=nest-js-example-with-sentry

APP_RELEASE_VERSION=`sentry-cli releases propose-version`

setup_release: create_release upload_sourcemaps associate_commits

create_release:
    sentry-cli releases -o $(SENTRY_ORG) new -p $(SENTRY_PROJECT) $(APP_RELEASE_VERSION)

upload_sourcemaps:
    sentry-cli releases -o $(SENTRY_ORG) -p $(SENTRY_PROJECT) files $(APP_RELEASE_VERSION) \
        upload-sourcemaps --url-prefix "~/static/js" --validate build/static/js

associate_commits:
    sentry-cli releases -o $(SENTRY_ORG) -p $(SENTRY_PROJECT) set-commits --auto $(APP_RELEASE_VERSION)

