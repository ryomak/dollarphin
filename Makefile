run:
	npm run dev
build:
	npm run build
deploy:
	npm run build
	git add .
	git commit -m "deploy"
	git push origin master
