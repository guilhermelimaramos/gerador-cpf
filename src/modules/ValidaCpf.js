export default class ValidaCpf {
  constructor(cpf) {
    Object.defineProperty(this, 'cpfClean', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpf.replace(/\D+/g, '')
    }) 
  }

  isSequence () {
    return this.cpfClean[0].repeat(this.cpfClean.length) === this.cpfClean
  }

  generateNewCpf (cpf) {
    const cpfNoDigit = cpf.slice(0, -2)
    const digit1 = ValidCpf.generateDigit(cpfNoDigit)
    const digit2 = ValidCpf.generateDigit(cpfNoDigit + digit1)

    const newCpf = cpfNoDigit + digit1 + digit2
    return newCpf === this.cpfClean
  }
  

  static generateDigit(cpfNoDigit) {
    const cpfArray = Array.from(cpfNoDigit)
    let regressive = cpfArray.length + 1

    let digit = cpfArray.reduce((acc, value ) => {
      acc += Number(value) * regressive--
      return acc
    }, 0)
  
    digit = 11 - (digit % 11)
    return digit > 9 ? '0' : String(digit)
    
  }

  valid () {
    if (!this.cpfClean) return false;
    if (typeof this.cpfClean !== 'string' ) return false;
    if (this.cpfClean.length !== 11) return false;
    if (this.isSequence()) return 'The cpf is a sequence'
    const isEqual = this.generateNewCpf(this.cpfClean)
    if (isEqual) return true

    return false
  }
}

console.log('Cheguei Aqui!!!')
