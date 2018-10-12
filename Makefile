run:
	npm run dev
build:
	npm run build
deploy:
	npm run build
	cp src/assets/favicon.png ./docs/
	git add .
	git commit -m "deploy"
	git push origin master
