export function sleep(ms : number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function ariaLabelDinheiro(valor : string | undefined) : string | undefined {
    if(!valor) return undefined;
    valor = valor.replace('k', ' mil');
    valor = valor.replace('M', ' milhões');
    valor = valor.replace('B', ' bilhões');
    valor = valor.replace('T', ' trilhões');
    valor = valor.replace('Q', ' quadrilhões');

    return valor;

  }
