Para correr Docker con todas la solucion
-------------------------
docker-compose up --build

Para crear pruebas  del API en Postman:
----------------------------
pm.test("Estado 200 OK Al listar", function(){
    pm.response.to.have.status(200);
});
pm.test("Retorna una lista de empresas", function(){
    pm.expect(pm.response.json()).to.be.an('array');
});
pm.test("La longitud de la respuesta debe ser mayor que cero", function () {
    const responseData = pm.response.json();
    pm.expect(responseData.length).to.be.greaterThan(0, "La lista de empresas no debe estar vacía");
});