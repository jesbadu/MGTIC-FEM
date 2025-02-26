// Validación de formulario de alumno
document.getElementById('registroAlumno').addEventListener('submit', function(event) {
    let matricula = document.getElementById('matricula').value;
    let nombre = document.getElementById('nombre').value;
    let grupo = document.getElementById('grupo').value;
  
    if (!matricula || !nombre || !grupo) {
      alert('Por favor, complete todos los campos.');
      event.preventDefault(); // Evita el envío del formulario
    }
  });
  
  // Validación de formulario de docente
  document.getElementById('registroDocente').addEventListener('submit', function(event) {
    let empleado = document.getElementById('empleado').value;
    let nombre = document.getElementById('nombre').value;
    let materia = document.getElementById('materia').value;
    let correo = document.getElementById('correo').value;
  
    if (!empleado || !nombre || !materia || !correo) {
      alert('Por favor, complete todos los campos.');
      event.preventDefault(); // Evita el envío del formulario
    }
  
    // Validación de formato de correo electrónico
    let correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(correo)) {
      alert('Por favor, ingrese un correo electrónico válido.');
      event.preventDefault(); // Evita el envío del formulario
    }
  });
  
  // Manejo del formulario de asignación de prácticas
  document.getElementById('asignarPractica').addEventListener('submit', function(event) {
    let matriculaAlumno = document.getElementById('matriculaAlumno').value;
    let practica = document.getElementById('practica').value;
  
    if (!matriculaAlumno || !practica) {
      alert('Por favor, complete todos los campos.');
      event.preventDefault(); // Evita el envío del formulario
    }
  
    // Aquí puedes agregar la lógica para enviar los datos al servidor
    console.log('Matrícula del alumno:', matriculaAlumno);
    console.log('Práctica asignada:', practica);
  
    // En un futuro, puedes enviar estos datos a tu servidor (backend) para guardarlos en una base de datos.
  });
  
  // Manejo del formulario de calificación de prácticas
  document.getElementById('calificarPractica').addEventListener('submit', function(event) {
    let matriculaAlumno = document.getElementById('matriculaAlumnoCalificar').value;
    let practica = document.getElementById('practicaCalificar').value;
    let calificacion = document.getElementById('calificacion').value;
  
    if (!matriculaAlumno || !practica || !calificacion) {
      alert('Por favor, complete todos los campos.');
      event.preventDefault();
      return;
    }
  
    // Aquí puedes agregar la lógica para enviar los datos al servidor
    console.log('Matrícula del alumno:', matriculaAlumno);
    console.log('Práctica calificada:', practica);
    console.log('Calificación:', calificacion);
  
    // Envía los datos al servidor para guardar la calificación
  });
  
  // Lógica para obtener la lista de prácticas (esto dependerá de tu backend)
  // Ejemplo con fetch API:
  fetch('/obtener_practicas')
    .then(response => response.json())
    .then(practicas => {
      let selectPractica = document.getElementById('practicaCalificar');
      practicas.forEach(practica => {
        let option = document.createElement('option');
        option.value = practica.id; // Ajusta según la estructura de tus datos
        option.text = practica.nombre; // Ajusta según la estructura de tus datos
        selectPractica.add(option);
      });
    });