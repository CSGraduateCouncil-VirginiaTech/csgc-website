default:: build

install:
	@echo Installing the necessary packages
	@yes|sudo apt-get install ruby-full
	@yes|sudo apt install ruby-bundler
	@yes|sudo gem install bundler
	@bundle install

build:
	@echo Building the website locally
	@bundle exec jekyll serve

anchor:
	@echo Run as: make anchor NAME="variable"
	@echo Then copy and execute the python code
	#python -c 'name="${NAME}";strip=name.replace(" ","");print("<a name=\""+strip+"\"></a>"+name+"<a href=\"#"+strip+"\"><i class=\"fa fa-link\" aria-hidden=\"true\"></i></a>")'