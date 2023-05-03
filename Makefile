install: #установка зависимостей при клонировании проекта или при удалении node_modules
	npm ci
brain-games: #комманда для запуска программы с указанием её места расположения
	node bin/brain-games.js
brain-even: #комманда для запуска программы с указанием её места расположения
	node bin/brain-even.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
prettier:
	npx prettier --write .