function calcularNotaFinal() {
    // Obtener los valores de las evaluaciones y el proyecto final
    const eval1 = parseFloat(document.getElementById('eval1').value);
    const eval2 = parseFloat(document.getElementById('eval2').value);
    const eval3 = parseFloat(document.getElementById('eval3').value);
    const finalProject = parseFloat(document.getElementById('finalProject').value);

    // Validar que los valores ingresados sean números
    if (isNaN(eval1) || isNaN(eval2) || isNaN(eval3) || isNaN(finalProject)) {
        alert('Por favor, ingresa números válidos para las notas.');
        return;
    }

    // Calcular la nota final según los porcentajes dados
    const notaFinal = (eval1 * 0.3) + (eval2 * 0.2) + (eval3 * 0.2) + (finalProject * 0.3);

    // Mostrar la nota final en la página
    document.getElementById('notaFinal').textContent = `Nota Final: ${notaFinal.toFixed(2)}`;
}

function validarValor(input) {
    var valor = parseInt(input.value);
    
    // Verificar si el valor es menor que 0 o mayor que 100
    if (valor < 0) {
        input.value = 0;
    } else if (valor > 100) {
        input.value = 100;
    }
}