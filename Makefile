SOURCES = app tests

.DEFAULT_GOAL := help

help: ## Display this help screen
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
.PHONY: help

install: ## Install project dependencies
	python -m poetry install --no-interaction --no-ansi
.PHONY: install

format: ## Format the source code
	python -m poetry run black $(SOURCES)
	python -m poetry run isort $(SOURCES)
.PHONY: format

lint: ## Lint the source code
	python -m poetry run black --check $(SOURCES)
	python -m poetry run isort --check $(SOURCES)

	python -m poetry run flake8 $(SOURCES)
	python -m poetry run mypy $(SOURCES)
	python -m poetry run bandit -c pyproject.toml -r app

.PHONY: lint

run: ## Run the development Django server
	python -m poetry run python -m app.cmd run-parsers
.PHONY: run

compose-up: ## Run the development Django server with docker-compose
	docker-compose up --build --remove-orphans --force-recreate
.PHONY: compose-up

compose-down: ## Stop the development Django server with docker-compose
	docker-compose down
.PHONY: compose-down

tests-units: ## Run unit tests
	python -m poetry run coverage run -m pytest -s ./tests/units
	python -m poetry run coverage report  --precision=2 -m
.PHONY: tests-units

tests-integrations: ## Run integration tests
	python -m poetry run pytest tests/integrations
.PHONY: tests-integrations

test: tests-units tests-integrations ## Run all available tests
.PHONY: test
