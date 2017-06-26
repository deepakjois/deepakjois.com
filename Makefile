deploy:
	aws s3 sync . s3://www.deepakjois.com --exclude README.md --exclude ".git/*" --exclude Makefile

.PHONY: deploy