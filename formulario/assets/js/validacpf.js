class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    isSequence() {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }
    // Quando eu não to usando nenhum this dentro do método, ent ele pode ser estático, pq não ta usando nada da instância.
    static geraDigito(cpfParcial) {
        let total = 0;
        let reverso = cpfParcial.length + 1;

        for(let stringNumerica of cpfParcial) {
            total += reverso * Number(stringNumerica);
            reverso --;
        }

        const digito = 11 - (total % 11);
        return digito < 9 ? String(digito) : '0';
    }

    geraNovoCpf() {
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfParcial);            // Já que o geraDigito é estático, e ele n ta usando a instância, pra funcionar ele
        const digito2 = ValidaCPF.geraDigito(cpfParcial + digito1);  // aqui, em vez de usar o this vc tem que usar o próprio nome da classe pra 
        this.novoCPF = cpfParcial + digito1 + digito2;               // chama-lo.
    }

    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequence()) return false;
        this.geraNovoCpf();

        return this.novoCPF === this.cpfLimpo;
    }
}

// const validacpf = new ValidaCPF('070.987.720-03');

// if (validacpf.valida()) {
//     console.log('CPF válido');
// } else {
//     console.log('CPF inválido');
// }