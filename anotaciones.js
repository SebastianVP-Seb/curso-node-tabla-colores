/*
    "num13":"node app --num=13"
    al poner esto en el package.json se agrega un comando para la app. Ahora para ejecutarlo
    en la Terminal Integrada se pone: npm run num13

    Para instalar nodemon, sólo se usa en desarrollo, agregarle --save-dev.
    En el package.json se crea el apartado devDependencies, estas sólo se usan
    cuando se edita la app

    Usando Yargs:
    al mandar en consola: node app --num=36
    yargs guarda el número dentro de sí
    - se usa para indicar que es una abreviatura
    node app --hep    Mostrará los comandos que puede ejecutar la aplicación, esto viene
    por default en yargs, no se necesita configurar. La versión se puede cambiar en el 
    package.json.
    Luego de haber configurado yargs, se establece el alias y ahora yargs sabe que n y num
    es lo mismo
    node app -n 80
    demandOption:true//Hace obligatorio introducir el num para hacer la tabla, si no se
    introduce, en la consola lo solicita. Sin embargo, si se le introduce un String lo 
    tomará como válido, por lo tanto hay que hacer un check al type
    node app -n=hola se lanza el error
    node app -n 7 -l : Regresa a l y listar como true
    node app -n 7 : Regresa a l y listar como false

    Agregando descripción a los comando de la app (-n y -l) con describe en c/comando
    node app --help

    Para cambiar la ubicación donde se crean los archivos de texto: ./carpeta en el 
    fylesync

    Para subirlo a Git
    crear un archivo en la raiz llamado .gitignore este contendrá los archivos que se 
    ignorarán. En este caso se ignirarán los archivos que están dentro de la carpeta
    "tablas", ya que se van a ignorar todos esos archivos, es recomendable crear al menos
    un archivo (info.md)
    Ignorar también los módulos de node. Para volver a instalarlos cuando se vuelva a
    descargar la app en la terminal integrada poner: npm install
    Esto buscará los paquetes que requiere la app y los instalará

    En la terminal integrada poner:
    1) Se ponen en color gris los archivos que no serán tomados en cuenta
        git init 
    2) Preparando el 1er Commit. Esto tomará los últimos cambios desde el último commit
        git add .



    */