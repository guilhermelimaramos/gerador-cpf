import ValidaCpf from "./ValidaCpf";

export default class GeraCPF {
  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min))
  }

  formatted(cpf) {
    
    return (
      cpf.slice(0,3) + '.' +
      cpf.slice(3, 6) + '.' +
      cpf.slice(6, 9) + '-' +
      cpf.slice(9, 11)
    );
  }

  generatesNewCpf() {
    const cpfNoDigit = this.rand()
    const firstDigit = ValidaCpf.generateDigit(cpfNoDigit)
    const secondDigit = ValidaCpf.generateDigit(cpfNoDigit + firstDigit)
    const newCpf = cpfNoDigit + firstDigit + secondDigit
    return this.formatted(newCpf)
  }
}