
var chave;
var valor;


function Armazenar() {
    chave = document.getElementById('chave').value;
    valor = document.getElementById('valor').value;
    localStorage.setItem(chave, valor);
}
function ListarValor(){
    chave = document.getElementById('chave').value;
    document.getElementById('Local').textContent = localStorage.getItem(chave);
}
function RemoverValor(){
    chave = document.getElementById('chave').value;
    localStorage.removeItem(chave);

}
function LimparValores(){
    localStorage.clear();
}