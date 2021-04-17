var soap = require('soap');
var url = "https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl";
var args = {cep: '18071704'};

soap.createClient(url, function(err, client){
    client.consultaCEP(args, function(err, result) {
        console.log(result);
    });
});

