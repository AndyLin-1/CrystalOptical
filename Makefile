# dev
dev:
	docker compose -f docker-compose.dev.yml up -d --build --remove-orphans
dev-down:
	docker compose -f docker-compose.dev.yml down
