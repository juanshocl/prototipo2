# prototipo

# En caso de Advertencia Warning: Running "compass:server" (compass) task
   Instalar Compass con el siguiente comando. para Windows
   
   npm install grunt-contrib-compass --save-dev
   
   Para OSX se debe instalar Homebrew y luego ruby.
   (https://gorails.com/setup/osx/10.10-yosemite)
   # ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
   
   brew install rbenv ruby-build

# Add rbenv to bash so that it loads every time you open a terminal
echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bash_profile
source ~/.bash_profile

# Install Ruby
rbenv install 2.3.1
rbenv global 2.3.1
ruby -v

#finalmente instalamos Compass 
 gem install compass
   
   
    

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
