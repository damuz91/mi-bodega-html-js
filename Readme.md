# Ejemplo de pequeño sistema de registro de productos en HTML y Javascript
Este sistema es un pequeño ejemplo de cómo hacer un sistema de registro de productos básicos. Permite grabar en una base de datos local y traer los datos de la misma cuando se recargue la página.

# Requerimientos
- Debe ser un sistema web
- Que guarde los registros ingresados en una base de datos local
- Que muestre los registros en una tabla
- Que permite eliminar los registros existentes

# Instalar
1. Clonar el proyecto

# Ejecutar
1. (Opcionalmente) Iniciar un servidor web
2. Abrir [la ruta del servidor web] ó [la ruta del archivo index.html] en un navegador web que soporte HTML5 (Chrome, Edge, Firefox, Safari)

# Dependencias
- Para darle algo de estilos a los botones, a la fuente de text y a la tabla se carga de un CDN (Sitio que aloja scripts y archivos en la nube) se carga Bootstrap 5, por lo que require conexión a internet. Si no está disponible la conexión a internet el sistema igual funciona pero no va a mostrar los estilos gráficos.

- El navegador web debe permitir la escritura del LocalStorage, normalmente todos los navegadores tienen esto habilitado por defecto, si aparece un mensaje indicando que no tiene acceso a la base de datos entonces debe actualizar el navegador y permitir la escritura del LocalStorage en la configuración avanzada del nevagedor

# Continuadad 
Se anima a los participantes de este proyecto de hacerle un FORK de github a este proyecto para darle continuidad a las funcionalidades, por ejemplo:
- Validar que el ID no se pueda repetir a la hora de crear un producto
- Validar que el precio sea de tipo numérico
- Validar que los campos no sean vacíos
- Agregar funcionaliidad para que haya varias bodegas y los productos estén separados por bodegas
- Consumir una API gratis en la nube (Puede ser de Google Firebase) para guardar los registros en internet y no en local
- Agregar un sistema de autenticación para permitir el ingreso solo con usuario y contraseña