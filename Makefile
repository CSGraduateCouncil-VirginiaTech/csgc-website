default:: build

install:
	@echo Installing the necessary packages
	@yes|sudo apt-get install ruby-full
	@yes|sudo apt install ruby-bundler
	@yes|sudo gem install bundler
	@bundle install

build:
	@echo Building the wbesite locally
	@bundle exec jekyll serve
