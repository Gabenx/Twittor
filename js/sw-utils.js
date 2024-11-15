
//Guardar información en el cache dinamico
function actualizaCacheDinamico(dynamic_cache, request, response){

    if (response.ok){

        return caches.open(dynamic_cache).then( cache => {

            cache.put(request, response.clone());

            return response.clone();
        }); 

    } else {
        return response;
    }

}