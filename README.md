# Proyecto de Gestion de ingresos
Este proyecto esta realizado para la gestion de los ingresos o gastos que puede tener 
una persona o familia, organizando en diferentes secciones, como que tipo de banco almacena los ingresos, registro de gastos mensuales.

## Inteligencias utilizadas
## Angular 18
## Node.js v22
## TypeScript moderno
## Jwt
## Potgres
## IA

# Que propuesta tiene el proyecto?
Es una applicacion centralizada en el control de los recursos financieros diseñada para ayudar a una persona o familia a registrar, categorizar y visualizar sus ingresos y gastos diarios/mensuales en tiempo real, permitiendole tomar mejores decisiones de su dinero, tambien trae un apartado de ahorro y reportes claro de los gastos.

## Puntos clave de mi aplicacion
- control del dinero en tiempo real
- visibilidad y habitos en que se gasta
- Toma de decisiones sobre el dinero
- Mas facilidad para poder manejarlo 

# Como pinsa trabajar el proyecto 
El primer paso es decidir que tipo de BD quiero relacional o no relacional, En mi caso elegi la opcion de relacional porque se me facilita, tambien se me pidio que le implmentara JWT y GitHub, EL login es la primera parte solicitada para que se vea el avance del proyecto.

la estructura del proyecto es dividirla en dos carpetas el fornted y el backend para facilitar su uso, el backend llevara el codigo para que funcione el codigo y el fronted llevara las vistas para que se funcional.

# Como ejecutar el proyecto
1. bajar le proyecto de gitHub. en la terminal escribe "git clone https://github.com/epalencia-2025050/Gestion_de_gastos.git" despues "cd Gestion_de_gastos".

2. Una ves dentro verifica que estas en la rama main. escribe "git branch"

3. Ve a visual estudio code y abre la carpeta del proyecto, se abriran dos carpetas "fornted y backend".

4. En el codigo del backend hay una carpeta que dice "database" abre el archivo de schemas.sql y seed.sql ve a potgres y pega el codigo de los dos archivos y ejecutalos precionando "F5" se crearia la base de datos local.

5. Abre en visual la primera terminal y en la terminal, Escribe "cd backend" despues "pnpm install" esperas a que termine y escribes "pnpm run dev" y dejas que termine.

6. Abre en visual la segunda termina y en la terminal, Escirbe "cd fornted" despues "pnpm install" esperas a que se instale y escribes "pnpm start"

7. En la segunda terminal te dara un puerto que es http://localhost:4200/ este copialo y pegalo en el navegador web de tu seleccion, a este punto ya estas dentro de la aplicacion.

8. pequeño detalle el .env no me deja subirlo porque tiene todas las configuraciones de la BD debido a restrinciones del .gitignore. En este caso se puede pasar por privado, abre la carpeta del Backend y mete el archivo, no en sub carpetas solo sultalo nomas abres el backend. ya funcionaria al 100%

# Hecho por Eduardo Emilio Palencia Mejia - 2025050